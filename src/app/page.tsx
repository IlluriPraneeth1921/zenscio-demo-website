import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { PremiumAgencyHero } from "@/components/visuals/premium-agency-hero";

const trustPoints = [
  "Clear scope before design starts",
  "Transparent pricing without vague package names",
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

const demoWebsites = [
  {
    name: "Restaurant / Cafe Website",
    tone: "Warm visuals, menu highlights, booking CTA.",
    accent: "from-[#ff8f70]/45 via-[#2a1642]/25 to-transparent",
    preview: ["Chef's tasting menu", "Reservations", "Weekend events"],
  },
  {
    name: "Local Service Business Website",
    tone: "Trust-led layout for electricians, clinics, and repair businesses.",
    accent: "from-[#59d5ff]/40 via-[#123443]/30 to-transparent",
    preview: ["Emergency callout", "Areas served", "Verified reviews"],
  },
  {
    name: "Coaching / Consulting Website",
    tone: "Authority, testimonials, and clear program structure.",
    accent: "from-[#7f5cff]/42 via-[#1b173d]/30 to-transparent",
    preview: ["Signature framework", "Client wins", "Book strategy call"],
  },
  {
    name: "eCommerce Starter Website",
    tone: "Fast launch storefront with premium product storytelling.",
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
    title: "Clinic trust rebuild",
    summary: "Reframed a local healthcare brand around clarity, doctor credibility, and cleaner conversion flow.",
    highlights: ["Clearer service hierarchy", "Trust markers above the fold", "Faster mobile contact path"],
  },
  {
    title: "Home services lead filter",
    summary: "Turned a generic contractor landing page into a stronger quoting funnel with better page rhythm.",
    highlights: ["Service-area proof layout", "Visible urgency CTA", "Quote quality improved"],
  },
  {
    title: "Coaching authority refresh",
    summary: "Elevated an information-heavy consulting page into a premium narrative with sharper offer framing.",
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
  ["24h", "Typical first response window for qualified project inquiries."],
  ["3-part", "Call structure covering offer, page gaps, and launch constraints."],
  ["0 fluff", "Clear scope, direct recommendations, and practical next steps."],
];

const contactStudioNotes = [
  "Current site or landing page link",
  "Primary offer that needs better trust or conversion",
  "Decision timeline, launch pressure, or internal constraints",
];

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
          <div className="space-y-6 xl:space-y-8 fade-rise">
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
              <a href="#contact" className="primary-cta">
                Book a strategy call
              </a>
              <a href="#demo-websites" className="secondary-cta">
                Explore demo websites
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

          <div className="fade-rise-delay">
            <PremiumAgencyHero />
          </div>
        </section>

        <section id="demo-websites" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Demo websites we can build"
            title="Four preview directions that show range without looking template-made"
            description="Each concept is presented like a mini website surface, not a plain text card, so buyers can immediately picture the caliber of launch Zenscio can deliver."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {demoWebsites.map((item) => (
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
            title="Five service layers designed to make launch quality obvious"
            description="Each card carries a concrete benefit, a visual accent, and a more premium interaction surface than the previous generic service grids."
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
            eyebrow="Case studies"
            title="Representative outcomes framed like real project stories"
            description="These examples are positioned to show the kinds of before-and-after improvements Zenscio can deliver for service businesses that need stronger first impressions."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-study-card">
                <div className="case-study-top">
                  <p className="offer-tag">Representative project</p>
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
              title="Clean pricing with one clearly highlighted business website offer"
              description="The layout is split into a three-card first row and a two-card second row so pricing reads quickly on desktop without awkward wrapping."
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
                title="A genuine trust section built around what buyers actually look for"
                description="This section is here to make the company feel organized, transparent, and technically capable before a conversation even starts."
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
                title="Zenscio is structured as a lean premium studio, not a vague agency layer"
                description="The positioning is intentionally straightforward: clearer offers, cleaner launch systems, and a website surface that makes the business feel more serious from the first screen."
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
            eyebrow="What it feels like"
            title="A premium launch surface should feel trustworthy before the user starts comparing details"
            description="The right blend of dark UI, spacing, typography, proof placement, and motion makes the business feel more established without becoming decorative for its own sake."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {[
              "Premium dark glass header with a branded Z mark and strong CTA.",
              "Hero with a real website-and-automation visual, not placeholder chips.",
              "Section composition designed to look like a serious AI/web company, not a generic freelancer template.",
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
            description="Discover -> Design -> Build -> Review -> Launch, shown as a connected premium timeline instead of a plain numbered list."
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
                Bring the current site, the offer, and the business goal. Zenscio can turn that into a cleaner,
                sharper, more premium launch system with room for automation later.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="primary-cta">
                  Start your website project
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
                  description="If the current homepage undersells the business, confuses the offer, or simply looks too generic for the level you want to sell at, that is enough to start."
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
                  <p className="offer-tag">What to send</p>
                  <h3 className="contact-studio-title">Enough detail to diagnose the trust and conversion problem fast</h3>
                </div>
                <div className="contact-studio-list">
                  {contactStudioNotes.map((item) => (
                    <div key={item} className="contact-studio-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <AnalyticsPlaceholder />
            </div>
            <ContactForm destinationEmail="hello@zenscio.example" />
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
                <a href="#contact">Book a project review</a>
                <a href="mailto:hello@zenscio.example">hello@zenscio.example</a>
                <a href="#top">Back to top</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
