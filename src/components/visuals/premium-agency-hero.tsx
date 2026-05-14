const workflowNodes = [
  { label: "Lead captured", className: "left-4 top-7" },
  { label: "Scope mapped", className: "left-24 top-28" },
  { label: "Build queued", className: "right-26 top-20" },
  { label: "Launch live", className: "right-8 bottom-16" },
];

export function PremiumAgencyHero() {
  return (
    <div className="premium-hero-visual">
      <div className="premium-hero-glow" />

      <div className="premium-hero-browser">
        <div className="premium-browser-top">
          <div className="flex gap-2">
            <span className="premium-dot bg-[#ff6c6c]" />
            <span className="premium-dot bg-[#ffd36c]" />
            <span className="premium-dot bg-[#6ce39a]" />
          </div>
          <div className="premium-browser-url">zenscio.in / launch-system</div>
        </div>
        <div className="premium-browser-body">
          <div className="premium-browser-sidebar">
            <div className="premium-sidebar-chip" />
            <div className="premium-sidebar-chip short" />
            <div className="premium-sidebar-chip" />
          </div>
          <div className="premium-browser-canvas">
            <div className="premium-browser-hero">
              <div>
                <p className="premium-mini-label">Homepage concept</p>
                <h3 className="premium-browser-title">Modern websites and automation for growing Indian businesses</h3>
              </div>
              <div className="premium-browser-chart" />
            </div>
            <div className="premium-browser-grid">
              <div className="premium-browser-card tall" />
              <div className="premium-browser-card" />
              <div className="premium-browser-card" />
            </div>
          </div>
        </div>
      </div>

      <div className="premium-hero-code">
        <p className="premium-mini-label">Automation node</p>
        <pre>{`workflow {\n  lead -> qualify\n  qualify -> proposal\n  proposal -> launch\n}`}</pre>
      </div>

      <div className="premium-hero-analytics">
        <p className="premium-mini-label">Conversion signal</p>
        <div className="premium-analytics-meter">
          <span style={{ width: "74%" }} />
        </div>
        <div className="premium-analytics-stats">
          <div>
            <strong>+38%</strong>
            <span>Qualified leads</span>
          </div>
          <div>
            <strong>2.4x</strong>
            <span>Faster first impression</span>
          </div>
        </div>
      </div>

      <div className="premium-hero-note premium-hero-note-left">
        <p className="premium-mini-label">Design pulse</p>
        <p>Premium dark UI, glass layers, service clarity, launch-safe handoff.</p>
      </div>

      <div className="premium-hero-note premium-hero-note-right">
        <p className="premium-mini-label">Delivery mode</p>
        <p>Website mockup, workflow mapping, code posture, and proof architecture in one surface.</p>
      </div>

      <div className="premium-workflow">
        {workflowNodes.map((node) => (
          <div key={node.label} className={`premium-workflow-node ${node.className}`}>
            {node.label}
          </div>
        ))}
        <div className="premium-workflow-line premium-workflow-line-a" />
        <div className="premium-workflow-line premium-workflow-line-b" />
        <div className="premium-workflow-line premium-workflow-line-c" />
      </div>
    </div>
  );
}
