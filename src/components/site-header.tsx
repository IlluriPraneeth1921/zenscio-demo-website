import Link from "next/link";
import { navItems } from "@/lib/site-content";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[color:rgba(5,10,19,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Zenscio Web Studio home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-coral)] font-[family:var(--font-space-grotesk)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(204,106,77,0.28)]">
            Z
          </div>
          <div>
            <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.2em] text-white">
              Zenscio
            </p>
            <p className="text-sm text-white/60">Web Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/64 md:flex">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)] hover:text-white"
        >
          Book a project review
        </Link>
      </div>
    </header>
  );
}
