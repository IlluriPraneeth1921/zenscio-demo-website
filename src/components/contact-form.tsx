"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  destinationEmail: string;
};

export function ContactForm({ destinationEmail }: ContactFormProps) {
  const [status, setStatus] = useState(
    "Messages open a draft email locally. Replace this with an approved submission flow when production handling is cleared."
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    const subject = encodeURIComponent(`Website inquiry from ${name || "New lead"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Project type: ${projectType}`,
        "",
        details,
      ].join("\n")
    );

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
    setStatus("Draft email opened. In production, wire this form to a validated submission endpoint.");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-panel space-y-5"
    >
      <div className="contact-form-intro">
        Share the offer, timeline, and decision constraints. We use this to shape the first call around scope,
        proof requirements, and launch risk.
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Name
          <input
            required
            name="name"
            className="contact-input"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Email
          <input
            required
            type="email"
            name="email"
            className="contact-input"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--color-ink)]">
          Company / brand
          <input
            name="company"
            className="contact-input"
          />
        </label>
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
          rows={6}
          className="contact-input contact-textarea"
          placeholder="Tell us about the offer, audience, current site problem, decision deadline, and what this website needs to prove."
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="contact-submit">
          Request project review
        </button>
        <p className="max-w-sm text-sm leading-6 text-[var(--color-slate)]">{status}</p>
      </div>
    </form>
  );
}
