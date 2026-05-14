export function AnalyticsPlaceholder() {
  return (
    <div className="rounded-[2rem] border border-dashed border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 p-6">
      <p className="font-[family:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">
        Analytics placeholder
      </p>
      <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
        Attach the approved analytics vendor inside `src/app/layout.tsx` after consent, privacy, and board rules are confirmed.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-2xl bg-[var(--color-ink)] px-4 py-3 text-xs text-white">
        <code>{`{process.env.NEXT_PUBLIC_ANALYTICS_ID ? "<Analytics />" : null}`}</code>
      </pre>
    </div>
  );
}
