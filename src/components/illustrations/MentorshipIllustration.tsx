export default function MentorshipIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Path / road */}
      <path d="M60 185 Q160 120 260 60" stroke="#338B74" strokeWidth="2" strokeDasharray="6 5" opacity="0.25" />

      {/* Mentor figure (left, larger) */}
      {/* Body */}
      <circle cx="105" cy="95" r="22" fill="#338B74" opacity="0.08" />
      <circle cx="105" cy="83" r="14" fill="#338B74" opacity="0.15" />
      <circle cx="105" cy="79" r="10" fill="#338B74" />
      <circle cx="105" cy="75" r="6" fill="white" opacity="0.9" />
      <path d="M93 95c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      {/* Mentor label */}
      <rect x="78" y="102" width="54" height="16" rx="6" fill="#338B74" opacity="0.12" />
      <rect x="84" y="107" width="42" height="4" rx="2" fill="#338B74" opacity="0.6" />

      {/* Mentee figure (right, slightly smaller, slightly higher — growing) */}
      <circle cx="215" cy="80" r="18" fill="#FFB804" opacity="0.08" />
      <circle cx="215" cy="69" r="12" fill="#FFB804" opacity="0.15" />
      <circle cx="215" cy="65" r="8" fill="#FFB804" />
      <circle cx="215" cy="62" r="5" fill="white" opacity="0.9" />
      <path d="M205 78c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      {/* Mentee label */}
      <rect x="192" y="87" width="46" height="16" rx="6" fill="#FFB804" opacity="0.12" />
      <rect x="198" y="92" width="34" height="4" rx="2" fill="#FFB804" opacity="0.6" />

      {/* Arrow from mentor to mentee */}
      <path d="M122 86 Q165 72 198 72" stroke="#338B74" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arrow)" opacity="0.5" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#338B74" opacity="0.5" />
        </marker>
      </defs>

      {/* Growth chart below */}
      <rect x="62" y="135" width="196" height="56" rx="10" fill="white" filter="url(#shadow3)" />
      {/* Chart grid */}
      <line x1="76" y1="175" x2="246" y2="175" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="76" y1="165" x2="246" y2="165" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="76" y1="155" x2="246" y2="155" stroke="#e5e7eb" strokeWidth="1" />
      {/* Chart bars */}
      <rect x="84" y="167" width="18" height="8" rx="3" fill="#338B74" opacity="0.3" />
      <rect x="110" y="160" width="18" height="15" rx="3" fill="#338B74" opacity="0.45" />
      <rect x="136" y="153" width="18" height="22" rx="3" fill="#338B74" opacity="0.6" />
      <rect x="162" y="147" width="18" height="28" rx="3" fill="#338B74" opacity="0.75" />
      <rect x="188" y="141" width="18" height="34" rx="3" fill="#338B74" />
      <rect x="214" y="137" width="18" height="38" rx="3" fill="#FFB804" />
      {/* Trend line */}
      <polyline points="93,167 119,158 145,151 171,145 197,139 223,135" stroke="#338B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      {/* Chart label */}
      <text x="76" y="148" fontSize="6" fill="#9ca3af" fontWeight="600">GROWTH</text>

      {/* Floating insight cards */}
      <rect x="240" y="88" width="60" height="32" rx="8" fill="white" filter="url(#shadow3)" />
      <circle cx="252" cy="100" r="6" fill="#338B74" opacity="0.12" />
      <path d="M249 100l2 2 3.5-3.5" stroke="#338B74" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="262" y="95" width="30" height="3.5" rx="1.5" fill="#1a1a2e" opacity="0.5" />
      <rect x="262" y="102" width="22" height="3" rx="1.5" fill="#338B74" opacity="0.4" />
      <rect x="262" y="108" width="26" height="3" rx="1.5" fill="#9ca3af" opacity="0.4" />

      {/* Sparkles */}
      <circle cx="46" cy="70" r="2" fill="#FFB804" opacity="0.4" />
      <circle cx="280" cy="50" r="2.5" fill="#338B74" opacity="0.3" />
      <circle cx="42" cy="150" r="1.5" fill="#338B74" opacity="0.3" />
      <circle cx="288" cy="135" r="1.5" fill="#FFB804" opacity="0.3" />

      <defs>
        <filter id="shadow3" x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.07" />
        </filter>
      </defs>
    </svg>
  );
}
