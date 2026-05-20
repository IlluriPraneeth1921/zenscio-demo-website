import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

const trustPoints = [
  "Clear scope before design starts",
  "Transparent pricing from the first conversation",
  "SEO-ready structure and mobile-first layouts",
  "Vercel-ready deployment on a modern Next.js base",
  "Automation-ready workflows for future growth",
  "Post-launch support and maintenance paths",
];

const heroMetrics = [
  ["Fast launch", "2-4 week delivery windows for focused business sites."],
  ["Clear pricing", "Rupee-based ranges without filler package naming."],
  ["Future-ready", "Built for expansion into automation and operations later."],
];

const exampleDirections = [
  {
    name: "Restaurant / cafe direction",
    tone: "Illustrative concept focused on atmosphere, menu highlights, and a clear reservation path.",
    accent: "from-[#ff8f70]/45 via-[#2a1642]/25 to-transparent",
    preview: ["Chef's tasting menu", "Reservations", "Weekend events"],
  },
  {
    name: "Local service business direction",
    tone: "Illustrative concept for electricians, clinics, and repair teams that need stronger trust signals.",
    accent: "from-[#59d5ff]/40 via-[#123443]/30 to-transparent",
    preview: ["Emergency callout", "Areas served", "Verified reviews"],
  },
  {
    name: "Coaching / consulting direction",
    tone: "Illustrative concept built around authority, social proof, and a clearer program structure.",
    accent: "from-[#7f5cff]/42 via-[#1b173d]/30 to-transparent",
    preview: ["Signature framework", "Client wins", "Book strategy call"],
  },
  {
    name: "eCommerce starter direction",
    tone: "Illustrative concept for a fast-launch storefront with premium product storytelling.",
    accent: "from-[#3ee6c4]/40 via-[#122e31]/28 to-transparent",
    preview: ["Featured drop", "Bundles", "Secure checkout"],
  },
];

const services = [
  {
    icon: "pen",
    title: "Website Design",
    benefit: "Premium visual direction that makes the brand feel established from the first screen.",
    accent: "from-[#6bd2ff] to-[#5068ff]",
  },
  {
    icon: "code",
    title: "Website Development",
    benefit: "Modern Next.js builds that stay fast, responsive, and easy to extend.",
    accent: "from-[#8d7dff] to-[#cc6aef]",
  },
  {
    icon: "bag",
    title: "eCommerce Starter",
    benefit: "Starter stores that feel polished enough to sell without a large enterprise build.",
    accent: "from-[#32dfb0] to-[#1db8db]",
  },
  {
    icon: "spark",
    title: "AI Automation",
    benefit: "Workflow-ready systems for inquiry handling, qualification, and internal handoff.",
    accent: "from-[#7ef0e0] to-[#42a7ff]",
  },
  {
    icon: "cloud",
    title: "Cloud/Vercel Deployment",
    benefit: "Clean deployment, launch confidence, and a modern hosting posture from day one.",
    accent: "from-[#63d7ff] to-[#7f8cff]",
  },
];

const pricingCards = [
  {
    name: "Landing Page",
    price: "Rs 7,999 - Rs 14,999",
    description: "Best for focused campaigns, launches, and single-offer conversion pages.",
  },
  {
    name: "Business Website",
    price: "Rs 19,999 - Rs 39,999",
    description: "Multi-section company websites with a premium look, cleaner scope, and trust-led structure.",
    featured: true,
  },
  {
    name: "eCommerce",
    price: "Rs 49,999 - Rs 89,999",
    description: "Starter product stores with premium storytelling and scalable launch foundations.",
  },
  {
    name: "AI Automation Add-on",
    price: "Rs 14,999 - Rs 49,999",
    description: "Workflow logic, handoff automation, and internal operational uplift around the website.",
  },
  {
    name: "Website Maintenance",
    price: "Rs 2,999/month onwards",
    description: "Post-launch support, content updates, and iterative improvements without rebuild risk.",
  },
];

const caseStudies = [
  {
    title: "Healthcare homepage clarity",
    summary: "A common improvement pattern: clearer service hierarchy, better doctor credibility cues, and a simpler conversion path.",
    highlights: ["Clearer service hierarchy", "Trust markers above the fold", "Faster mobile contact path"],
  },
  {
    title: "Home services quote quality",
    summary: "A common improvement pattern: stronger service-area proof, better CTA placement, and clearer qualification cues.",
    highlights: ["Service-area proof layout", "Visible urgency CTA", "Quote quality improved"],
  },
  {
    title: "Consulting offer framing",
    summary: "A common improvement pattern: simplifying an information-heavy page into a sharper premium narrative.",
    highlights: ["Program structure simplified", "Proof integrated into page flow", "Stronger close section"],
  },
];

const aboutPrinciples = [
  {
    title: "Design should remove doubt",
    body: "We use hierarchy, spacing, and proof placement to reduce hesitation before a buyer compares details.",
  },
  {
    title: "Builds should stay practical",
    body: "A premium site still needs clean code, reusable sections, and sensible launch constraints.",
  },
  {
    title: "Operations matter after launch",
    body: "Every page is shaped so the business can extend into automation, maintenance, and iterative growth.",
  },
];

const processSteps = [
  ["01", "Discover", "Clarify the offer, audience, and trust gaps."],
  ["02", "Design", "Shape the visual system and page composition."],
  ["03", "Build", "Develop the site on a clean modern stack."],
  ["04", "Review", "Refine details against buyer perception and scope."],
  ["05", "Launch", "Deploy with confidence and a future-ready base."],
];

const contactSignals = [
  ["Manual", "Every submission is reviewed by a person, not routed into an instant auto-qualification flow."],
  ["Scope-first", "The first reply focuses on the offer, site gaps, and whether the project is a fit."],
  ["Direct", "If there is a fit, the next step is a practical conversation about scope and priorities."],
];

const contactStudioNotes = [
  "A link to the current site, landing page, or draft",
  "The primary offer that needs clearer trust or conversion support",
  "Any timing, budget, or approval constraints that affect launch",
];

const projectReviewHref = "#project-review";

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

export default function Home() {
  return (
    <div id="top" className="page-shell">
      <SiteHeader />
      <main className="section-grid">
        <section className="hero-grid hero-first-screen mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-8 lg:pb-14 lg:pt-8 xl:pb-20 xl:pt-10">
          <div className="hero-copy-column space-y-6 xl:space-y-8 fade-rise">
            <div className="eyebrow-chip">Premium dark launch systems for ambitious Indian businesses</div>
            <div className="space-y-5 xl:space-y-6">
              <p className="hero-kicker">Modern websites, automation-ready workflows, and premium first impressions.</p>
              <h1 className="hero-title">Premium websites and AI automation for growing businesses</h1>
              <p className="hero-copy">
                Zenscio helps Indian businesses launch modern, conversion-focused websites with clear scope, fast
                delivery, and automation-ready workflows.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={projectReviewHref} className="primary-cta">
                Book a project review
              </a>
              <a href="#demo-websites" className="secondary-cta">
                See example website directions
              </a>
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
            <div id="project-review" className="hero-form-shell">
              <div className="hero-form-copy">
                <p className="offer-tag">Start the project review</p>
                <h2 className="hero-form-title">Start with the offer, current site, and launch context</h2>
                <p className="hero-form-description">
                  Share the current site, the main offer, and the launch context. The first reply is a manual review of
                  fit, trust gaps, and the most practical next step.
                </p>
              </div>
              <ContactForm variant="compact" />
            </div>

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

        <section id="demo-websites" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section id="case-studies" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section id="proof" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="The right website makes credibility clear before the sales conversation starts"
            description="Strong launch surfaces reduce hesitation with clearer positioning, visible proof, and calls to action that stay easy to find."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {[
              "Clear first-screen positioning that explains what the business does and why it matters.",
              "Proof, pricing, and service detail placed where buyers naturally look for confidence.",
              "A visual system that feels polished without getting in the way of conversion.",
            ].map((item) => (
              <div key={item} className="capability-card">
                <p className="capability-copy mt-0">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
                <a href={projectReviewHref} className="primary-cta">
                  Book a project review
                </a>
                <a href="#pricing" className="secondary-cta secondary-cta-dark">
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="contact-shell">
            <div className="contact-story">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Contact"
                  title="Bring the commercial problem, not a finished brief"
                  description="If the current homepage undersells the business, confuses the offer, or no longer matches the level you want to sell at, that is enough to start. Use this form for real website work, redesigns, and launch planning."
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
            <div className="contact-followup-card">
              <div className="space-y-4">
                <p className="offer-tag">Review flow</p>
                <h3 className="contact-studio-title">A short intake makes the first conversation more useful</h3>
                <p className="capability-copy mt-0">
                  Once the request is received, the follow-up focuses on offer clarity, page hierarchy, credibility
                  gaps, and whether the project should move into scoped planning.
                </p>
              </div>
              <div className="contact-studio-list">
                {[
                  "The current site or landing page is reviewed before a recommendation is made.",
                  "The first response frames likely trust, positioning, and conversion issues.",
                  "If the fit is right, the next step is a scoped review with clear priorities.",
                ].map((item) => (
                  <div key={item} className="contact-studio-item">
                    {item}
                  </div>
                ))}
              </div>
              <a href="#top" className="secondary-cta">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-4">
            <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.24em] text-white/68">
              Zenscio
            </p>
            <p className="max-w-xl text-base leading-8 text-white/72">
              Premium websites, conversion-focused structure, and automation-ready launch systems for Indian
              businesses that need a stronger digital first impression.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="footer-label">Explore</p>
              <div className="footer-links">
                <a href="#services">Services</a>
                <a href="#case-studies">Case studies</a>
                <a href="#pricing">Pricing</a>
              </div>
            </div>
            <div>
              <p className="footer-label">Contact</p>
              <div className="footer-links">
                <a href={projectReviewHref}>Book a project review</a>
                <a href={projectReviewHref}>Submit the project brief</a>
                <a href="#top">Back to top</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
