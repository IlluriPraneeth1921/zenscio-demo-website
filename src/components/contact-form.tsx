"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  variant?: "default" | "compact";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isCompact = variant === "compact";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusTone, setStatusTone] = useState<"neutral" | "success" | "error">("neutral");
  const [status, setStatus] = useState(
    isCompact ? "" : "Project inquiries are sent through the site intake endpoint and reviewed before a reply is sent."
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = isCompact ? "" : String(formData.get("company") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();
    const companySite = String(formData.get("companySite") ?? "").trim();

    setIsSubmitting(true);
    setStatusTone("neutral");
    setStatus(isCompact ? "Sending inquiry..." : "Sending the project inquiry...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType,
          details,
          companySite,
        }),
      });

      const responseBody = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(responseBody?.error || "Submission failed. Try again shortly.");
      }

      setStatusTone("success");
      setStatus(
        isCompact
          ? "Inquiry sent."
          : "Project inquiry sent. The brief is now available for manual review through the configured intake setup."
      );
      form.reset();
    } catch (error) {
      setStatusTone("error");
      setStatus(error instanceof Error ? error.message : "Submission failed. Try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`contact-form-panel ${isCompact ? "contact-form-panel-compact" : ""} space-y-5`}
    >
      {!isCompact ? (
        <div className="contact-form-intro">
          <>
            Share the offer, timeline, and decision constraints. This form is for active website projects, redesigns,
            and launch planning. It gives Zenscio the context needed to decide fit and shape the first conversation
            around scope, proof requirements, and launch priorities.
          </>
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          name="companySite"
          className="sr-only"
        />
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Name
          <input
            required
            name="name"
            className="contact-input"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Email
          <input
            required
            type="email"
            name="email"
            className="contact-input"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className={`grid gap-5 ${isCompact ? "" : "sm:grid-cols-2"}`}>
        {!isCompact ? (
          <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
            Company / brand
            <input
              name="company"
              className="contact-input"
              placeholder="Company or brand"
            />
          </label>
        ) : null}
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Project type
          <select
            name="projectType"
            defaultValue="Premium marketing website"
            className="contact-input"
          >
            <option>Premium marketing website</option>
            <option>Conversion-focused landing page</option>
            <option>Case study and credibility refresh</option>
            <option>Automation and AI workflow</option>
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
        Project details
        <textarea
          required
          name="details"
          rows={isCompact ? 4 : 6}
          className="contact-input contact-textarea"
          placeholder="Tell us about the offer, audience, current site problem, timeline, and the results this website needs to drive."
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="contact-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send project inquiry"}
        </button>
        {status ? (
          <p
            aria-live="polite"
            className={`contact-status text-sm leading-6 ${statusTone === "error" ? "text-[#b42318]" : ""} ${isCompact ? "max-w-[10rem] text-right" : "max-w-sm"}`}
          >
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
