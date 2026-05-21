import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/site-content";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[color:rgba(5,10,19,0.82)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label="Zenscio Web Studio home">
            <Image
              src="/zenscio-header-logo.svg"
              alt="Zenscio Web Studio"
              width={180}
              height={48}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/82 md:flex">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition hover:text-white ${isActive ? "text-white" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white px-4 py-2 text-center text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)] hover:text-white sm:px-5 sm:py-2.5"
          >
            <span className="sm:hidden">Book review</span>
            <span className="hidden sm:inline">Book a project review</span>
          </Link>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-white/82 md:hidden"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-[var(--color-coral)] bg-[var(--color-coral)] text-white"
                    : "border-white/12 bg-white/8 text-white/82 hover:border-white/28 hover:bg-white/12 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
