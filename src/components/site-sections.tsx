import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { PremiumAgencyHero } from "@/components/visuals/premium-agency-hero";
import {
  aboutPrinciples,
  caseStudies,
  contactSignals,
  contactStudioNotes,
  exampleDirections,
  heroMetrics,
  pricingCards,
  processSteps,
  services,
  trustPoints,
} from "@/lib/site-content";

function ServiceIcon({ icon }: { icon: string }) {
  const common = "h-5 w-5 stroke-[1.8]";

  switch (icon) {
    case "pen":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 20l4.5-1 9-9a2.2 2.2 0 10-3.1-3.1l-9 9L4 20z" stroke="currentColor" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" stroke="currentColor" />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M6 8h12l-1 12H7L6 8zm3 0a3 3 0 016 0" stroke="currentColor" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" stroke="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 16.5l7-9 7 9M12 7v10" stroke="currentColor" />
        </svg>
      );
  }
}

export function PageIntro({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 lg:px-8 ${
        compact ? "pb-6 pt-8 lg:pb-8 lg:pt-10" : "pb-8 pt-10 lg:pb-10 lg:pt-14"
      }`}
    >
      <div className="page-intro-shell">
        <p className="hero-kicker">{eyebrow}</p>
        <h1 className="page-intro-title">{title}</h1>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <section className="hero-grid hero-first-screen mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-8 lg:pb-14 lg:pt-8 xl:pb-20 xl:pt-10">
      <div className="hero-copy-column space-y-6 xl:space-y-8 fade-rise">
        <div className="eyebrow-chip">Premium dark launch systems for ambitious Indian businesses</div>
        <div className="space-y-5 xl:space-y-6">
          <p className="hero-kicker">Modern websites, automation-ready workflows, and premium first impressions.</p>
          <h1 className="hero-title">Premium websites and AI automation for growing businesses</h1>
          <p className="hero-copy">
            Zenscio Web Studio helps Indian businesses launch modern, conversion-focused websites with clear scope,
            fast delivery, and automation-ready workflows.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="primary-cta">
            Book a project review
          </Link>
          <Link href="/services" className="secondary-cta">
            Explore services
          </Link>
        </div>
        <dl className="grid gap-4 pt-2 xl:pt-4 sm:grid-cols-3">
          {heroMetrics.map(([label, value]) => (
            <div key={label} className="metric-card">
              <dt className="metric-label">{label}</dt>
              <dd className="metric-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-contact-stack fade-rise-delay">
        <PremiumAgencyHero variant="compact" />
        <div className="hero-contact-proof-grid">
          {contactSignals.map(([label, value]) => (
            <div key={label} className="hero-contact-proof-card">
              <p className="contact-proof-label">{label}</p>
              <p className="contact-proof-copy">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoWebsiteSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Illustrative directions"
        title="Four illustrative website directions for common business models"
        description="These are concept directions, not live client demos. They show how Zenscio would shape tone, conversion paths, and trust signals for different categories."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-4">
        {exampleDirections.map((item) => (
          <article key={item.name} className="demo-card">
            <div className={`demo-preview bg-gradient-to-br ${item.accent}`}>
              <div className="demo-window">
                <div className="demo-window-top" />
                <div className="demo-window-hero">
                  <div className="demo-line demo-line-wide" />
                  <div className="demo-line" />
                </div>
                <div className="demo-window-grid">
                  {item.preview.map((preview) => (
                    <div key={preview} className="demo-window-chip">
                      {preview}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="capability-title text-[1.3rem]">{item.name}</h3>
              <p className="capability-copy">{item.tone}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Five service layers for launch, growth, and follow-through"
        description="From design to deployment, each service is structured to improve first impressions and keep the website easy to extend."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className={`service-icon-wrap bg-gradient-to-br ${service.accent}`}>
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="capability-copy">{service.benefit}</p>
            <div className={`service-accent bg-gradient-to-r ${service.accent}`} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Common upgrade patterns"
        title="Typical improvement patterns for brands that need stronger trust signals"
        description="These examples describe common before-and-after themes, not named client case studies."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="case-study-card">
            <div className="case-study-top">
              <p className="offer-tag">Common engagement pattern</p>
              <h3 className="case-study-title">{item.title}</h3>
              <p className="case-study-summary">{item.summary}</p>
            </div>
            <div className="case-study-body">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="case-study-point">
                  {highlight}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="pricing-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear pricing for focused launches and larger website builds"
          description="The ranges below give early budget clarity while leaving room to scope around the offer, integrations, and launch complexity."
        />
        <div className="mt-10 pricing-grid">
          {pricingCards.map((item) => (
            <article key={item.name} className={`pricing-spec-card ${item.featured ? "pricing-spec-card-featured" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="pricing-name">{item.name}</p>
                  <p className="pricing-range">{item.price}</p>
                </div>
                {item.featured ? <div className="pricing-badge">Most Popular</div> : null}
              </div>
              <p className="mt-5 text-sm leading-7 text-inherit/80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="proof-intro">
          <SectionHeading
            eyebrow="Trust"
            title="What clients can expect before the project starts"
            description="The process is designed to keep scope clear, delivery practical, and launch decisions grounded in what the business needs next."
            invert
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {trustPoints.map((item) => (
            <div key={item} className="trust-card">
              <div className="trust-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="about-shell">
        <div className="about-copy">
          <SectionHeading
            eyebrow="About"
            title="Zenscio runs as a lean studio with direct technical delivery"
            description="The focus stays on clearer offers, cleaner launch systems, and websites that make the business feel more established from the first screen."
          />
        </div>
        <div className="grid gap-5">
          {aboutPrinciples.map((item) => (
            <article key={item.title} className="about-card">
              <h3 className="capability-title text-[1.35rem]">{item.title}</h3>
              <p className="capability-copy">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="A visual launch timeline from discovery to deployment"
        description="Every project moves through discovery, design, build, review, and launch with a clear handoff between each step."
      />
      <div className="process-timeline mt-10">
        {processSteps.map(([step, title, body], index) => (
          <div key={step} className="process-node">
            <div className="process-node-badge">{step}</div>
            <div className="process-node-body">
              <h3 className="capability-title">{title}</h3>
              <p className="capability-copy">{body}</p>
            </div>
            {index < processSteps.length - 1 ? <div className="process-node-line" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="final-cta-shell">
        <div className="space-y-6">
          <p className="offer-tag text-white/70">Final CTA</p>
          <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to build a website your customers can trust?
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Bring the current site, the offer, and the business goal. Zenscio turns that into a clearer, sharper
            launch system with room for automation later.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="primary-cta">
              Book a project review
            </Link>
            <Link href="/services" className="secondary-cta secondary-cta-dark">
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 lg:px-8 ${compact ? "py-10 lg:py-12" : "py-16 lg:py-24"}`}>
      <div className={`contact-shell ${compact ? "contact-shell-page" : ""}`}>
        <div className={`contact-story ${compact ? "contact-story-page" : ""}`}>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Bring the commercial problem, not a finished brief"
              description="If the current homepage undersells the business, confuses the offer, or no longer matches the level you want to sell at, that is enough to start. Use this form for real website work, redesigns, and launch planning."
              invert
            />
            <div className="contact-checklist contact-checklist-dark">
              <p className="offer-tag">Useful inputs for the first call</p>
              <ul className="mt-5 space-y-3">
                {[
                  "What the current homepage fails to communicate",
                  "Which service or offer matters most this quarter",
                  "Whether the goal is trust, lead quality, speed to launch, or all three",
                ].map((item) => (
                  <li key={item} className="offer-point offer-point-dark">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-proof-grid">
            {contactSignals.map(([label, value]) => (
              <div key={label} className="contact-proof-card">
                <p className="contact-proof-label">{label}</p>
                <p className="contact-proof-copy">{value}</p>
              </div>
            ))}
          </div>
          <div className="contact-studio-card">
            <div>
              <p className="offer-tag">What happens next</p>
              <h3 className="contact-studio-title">A manual first response with clear next-step guidance</h3>
            </div>
            <div className="contact-studio-list">
              {contactStudioNotes.map((item) => (
                <div key={item} className="contact-studio-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`contact-followup-card ${compact ? "contact-followup-card-page" : ""}`}>
          <div className="space-y-4">
            <p className="offer-tag">Review flow</p>
            <h3 className="contact-studio-title">A short intake makes the first conversation more useful</h3>
            <p className="capability-copy mt-0">
              Once the request is received, the follow-up focuses on offer clarity, page hierarchy, credibility gaps,
              and whether the project should move into scoped planning.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
