const allowedProjectTypes = new Set([
  "Premium marketing website",
  "Conversion-focused landing page",
  "Case study and credibility refresh",
  "Automation and AI workflow",
]);

type LeadCapturePayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  details: string;
  companySite: string;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLeadPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return { ok: false as const, status: 400, error: "Invalid submission payload." };
  }

  const candidate = payload as Record<string, unknown>;
  const normalized: LeadCapturePayload = {
    name: readString(candidate.name),
    email: readString(candidate.email).toLowerCase(),
    company: readString(candidate.company),
    projectType: readString(candidate.projectType),
    details: readString(candidate.details),
    companySite: readString(candidate.companySite),
  };

  if (normalized.companySite) {
    return { ok: true as const, honeypotTriggered: true as const, payload: normalized };
  }

  if (normalized.name.length < 2 || normalized.name.length > 80) {
    return { ok: false as const, status: 400, error: "Enter a valid name." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email) || normalized.email.length > 160) {
    return { ok: false as const, status: 400, error: "Enter a valid email address." };
  }

  if (normalized.company.length > 120) {
    return { ok: false as const, status: 400, error: "Company name is too long." };
  }

  if (!allowedProjectTypes.has(normalized.projectType)) {
    return { ok: false as const, status: 400, error: "Choose a valid project type." };
  }

  if (normalized.details.length < 30 || normalized.details.length > 2000) {
    return { ok: false as const, status: 400, error: "Project details should be between 30 and 2000 characters." };
  }

  return { ok: true as const, honeypotTriggered: false as const, payload: normalized };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validated = validateLeadPayload(payload);

  if (!validated.ok) {
    return Response.json({ error: validated.error }, { status: validated.status });
  }

  if (validated.honeypotTriggered) {
    return Response.json({ ok: true });
  }

  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { error: "Lead capture is not configured yet. Set LEAD_CAPTURE_WEBHOOK_URL before launch." },
      { status: 503 }
    );
  }

  const forwardHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (process.env.LEAD_CAPTURE_WEBHOOK_TOKEN) {
    forwardHeaders.Authorization = `Bearer ${process.env.LEAD_CAPTURE_WEBHOOK_TOKEN}`;
  }

  const submission = {
    name: validated.payload.name,
    email: validated.payload.email,
    company: validated.payload.company,
    projectType: validated.payload.projectType,
    details: validated.payload.details,
    source: "zenscio-web-studio",
    submittedAt: new Date().toISOString(),
  };

  let upstreamResponse: Response;

  try {
    upstreamResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: forwardHeaders,
      body: JSON.stringify(submission),
      cache: "no-store",
    });
  } catch {
    return Response.json({ error: "Lead capture forwarding failed. Try again shortly." }, { status: 502 });
  }

  if (!upstreamResponse.ok) {
    return Response.json({ error: "Lead capture provider rejected the submission." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
