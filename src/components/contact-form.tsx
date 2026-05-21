"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  variant?: "default" | "compact";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const isCompact = variant === "compact";
  const [statusTone, setStatusTone] = useState<"neutral" | "success" | "error">("neutral");
  const [status, setStatus] = useState(
    isCompact ? "" : "Demo-safe intake only. This form does not deliver submissions until an approved workflow is selected."
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setStatusTone("success");
    setStatus(
      isCompact
        ? "Demo only. No inquiry was sent."
        : "Demo only. No inquiry was sent, stored, or forwarded. This safely previews the intake experience."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`contact-form-panel ${isCompact ? "contact-form-panel-compact" : ""} space-y-5`}
    >
      {!isCompact ? (
        <div className="contact-form-intro">
          <>
            Share the offer, timeline, and decision constraints. This version is intentionally demo-safe: it previews
            the intake experience without delivering, storing, or forwarding any submission.
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
        <button type="submit" className="contact-submit">
          Preview project inquiry
        </button>
        {status ? (
          <p
            aria-live="polite"
            className={`contact-status text-sm leading-6 ${
              statusTone === "success" ? "contact-status-success" : statusTone === "error" ? "contact-status-error" : ""
            } ${isCompact ? "max-w-[12rem] text-right" : "max-w-sm"}`}
          >
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
