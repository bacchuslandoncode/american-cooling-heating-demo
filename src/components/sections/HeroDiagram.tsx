// A simple technical schematic, not a photo. It represents the hero's
// "desert heat in, conditioned air out" concept as a labeled line diagram,
// consistent with the equipment-inspired motif used across the site.
export function HeroDiagram() {
  return (
    <svg viewBox="0 0 480 420" className="w-full max-w-[420px] text-steel-500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="479" height="419" rx="3" stroke="currentColor" strokeOpacity="0.3" />
      {/* grid ticks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="420" stroke="currentColor" strokeOpacity="0.08" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 60} x2="480" y2={i * 60} stroke="currentColor" strokeOpacity="0.08" />
      ))}

      {/* unit cabinet */}
      <rect x="120" y="130" width="240" height="160" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* fan */}
      <circle cx="240" cy="210" r="46" stroke="#5cb8c7" strokeWidth="1.5" />
      <circle cx="240" cy="210" r="3" fill="#5cb8c7" />
      <path d="M240 168v-14M240 252v14M198 210h-14M282 210h14" stroke="#5cb8c7" strokeWidth="1.5" />

      {/* airflow arrows out (cool) */}
      <path d="M120 300 L120 330" stroke="#5cb8c7" strokeWidth="1.5" markerEnd="url(#iceHead)" />
      <path d="M360 300 L360 330" stroke="#5cb8c7" strokeWidth="1.5" markerEnd="url(#iceHead)" />

      {/* heat arrows in (copper) */}
      <path d="M60 130 L100 160" stroke="#c1662f" strokeWidth="1.5" markerEnd="url(#copperHead)" />
      <path d="M420 130 L380 160" stroke="#c1662f" strokeWidth="1.5" markerEnd="url(#copperHead)" />

      <defs>
        <marker id="iceHead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#5cb8c7" />
        </marker>
        <marker id="copperHead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c1662f" />
        </marker>
      </defs>

      {/* labels */}
      <text x="24" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#c1662f">112&#176;F AMBIENT</text>
      <text x="120" y="352" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#5cb8c7">72&#176;F SUPPLY</text>
      <text x="150" y="105" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="currentColor" opacity="0.6">
        PACKAGE UNIT / ROOFTOP
      </text>
    </svg>
  );
}
