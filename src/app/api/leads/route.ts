export async function POST() {
  return Response.json(
    {
      ok: false,
      error: "Demo-safe mode is enabled. Contact delivery is intentionally disabled until an approved workflow is selected.",
    },
    { status: 503 }
  );
}
