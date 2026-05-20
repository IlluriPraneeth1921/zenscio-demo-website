import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.24em] text-white/68">
            Zenscio Web Studio
          </p>
          <p className="max-w-xl text-base leading-8 text-white/72">
            Premium websites, conversion-focused structure, and automation-ready launch systems for Indian businesses
            that need a stronger digital first impression.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <div className="footer-links">
              <Link href="/contact">Book a project review</Link>
              <Link href="/contact">Start the intake</Link>
              <Link href="/">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
