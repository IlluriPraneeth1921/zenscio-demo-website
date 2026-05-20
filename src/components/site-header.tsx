const navItems = [
  { label: "Why Zenscio", href: "#proof" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const projectReviewHref = "#project-review";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[color:rgba(10,15,24,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Zenscio home">
          <img
            src="/zenscio-header-logo.svg"
            alt="Zenscio"
            className="h-9 w-auto sm:h-10"
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/64 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={projectReviewHref}
          className="hidden items-center justify-center rounded-full border border-white/12 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)] hover:text-white sm:inline-flex"
        >
          Book a project review
        </a>
      </div>
      <nav className="header-mobile-nav lg:hidden" aria-label="Section navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="header-mobile-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
