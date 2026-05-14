const navItems = [
  { label: "Why Zenscio", href: "#proof" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[color:rgba(10,15,24,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-coral)] font-[family:var(--font-space-grotesk)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(204,106,77,0.28)]">
            Z
          </div>
          <div>
            <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.2em] text-white">
              Zenscio
            </p>
            <p className="text-sm text-white/56">Premium Homepage Systems</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/64 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)] hover:text-white"
        >
          Book intro call
        </a>
      </div>
    </header>
  );
}
