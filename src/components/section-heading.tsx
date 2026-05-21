type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p
        className={`font-[family:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] ${
          invert ? "text-white/82" : "text-[var(--color-coral)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-[family:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-8 sm:text-lg ${
          invert ? "text-white/88" : "text-[var(--color-slate-strong)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
