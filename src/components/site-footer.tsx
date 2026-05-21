import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.24em] text-white/68">
              Zenscio Web Studio
            </p>
            <h2 className="max-w-2xl font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sharper websites, clearer offers, and launch systems that feel premium from the first click.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/72">
              Built for Indian businesses that need stronger trust signals, cleaner structure, and a website that
              feels ready for serious commercial conversations.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
              <p className="footer-label">Delivery posture</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Design, build, and launch kept in one technical workflow.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
              <p className="footer-label">Review flow</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Every inquiry is reviewed manually before any scope promise is made.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
              <p className="footer-label">Launch stack</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Next.js foundation with a clean path to Vercel-ready deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/about">About the studio</Link>
              <Link href="/">Homepage</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Start</p>
            <div className="footer-links">
              <Link href="/contact">Book a project review</Link>
              <Link href="/contact">Share your website brief</Link>
              <Link href="/services">See pricing directions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
