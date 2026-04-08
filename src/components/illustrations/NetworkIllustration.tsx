export default function NetworkIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Connection lines */}
      <line x1="160" y1="110" x2="90" y2="68" stroke="#338B74" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <line x1="160" y1="110" x2="230" y2="68" stroke="#338B74" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <line x1="160" y1="110" x2="80" y2="158" stroke="#338B74" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <line x1="160" y1="110" x2="240" y2="158" stroke="#338B74" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <line x1="160" y1="110" x2="160" y2="42" stroke="#FFB804" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      {/* Cross connections */}
      <line x1="90" y1="68" x2="230" y2="68" stroke="#338B74" strokeWidth="1" strokeDasharray="3 4" opacity="0.2" />
      <line x1="80" y1="158" x2="240" y2="158" stroke="#338B74" strokeWidth="1" strokeDasharray="3 4" opacity="0.2" />

      {/* Center node */}
      <circle cx="160" cy="110" r="30" fill="#338B74" opacity="0.08" />
      <circle cx="160" cy="110" r="22" fill="#338B74" opacity="0.12" />
      <circle cx="160" cy="110" r="15" fill="#338B74" />
      {/* Center person icon */}
      <circle cx="160" cy="105" r="5" fill="white" opacity="0.9" />
      <path d="M150 122c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

      {/* Top node — amber */}
      <circle cx="160" cy="42" r="18" fill="#FFB804" opacity="0.12" />
      <circle cx="160" cy="42" r="13" fill="#FFB804" />
      <circle cx="160" cy="38" r="4" fill="white" opacity="0.9" />
      <path d="M153 50c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />

      {/* Top-left node */}
      <circle cx="90" cy="68" r="16" fill="#338B74" opacity="0.1" />
      <circle cx="90" cy="68" r="11" fill="#338B74" opacity="0.7" />
      <circle cx="90" cy="64" r="3.5" fill="white" opacity="0.85" />
      <path d="M84 74c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

      {/* Top-right node */}
      <circle cx="230" cy="68" r="16" fill="#338B74" opacity="0.1" />
      <circle cx="230" cy="68" r="11" fill="#338B74" opacity="0.7" />
      <circle cx="230" cy="64" r="3.5" fill="white" opacity="0.85" />
      <path d="M224 74c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

      {/* Bottom-left node */}
      <circle cx="80" cy="158" r="16" fill="#FFB804" opacity="0.1" />
      <circle cx="80" cy="158" r="11" fill="#FFB804" opacity="0.8" />
      <circle cx="80" cy="154" r="3.5" fill="white" opacity="0.85" />
      <path d="M74 164c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

      {/* Bottom-right node */}
      <circle cx="240" cy="158" r="16" fill="#338B74" opacity="0.1" />
      <circle cx="240" cy="158" r="11" fill="#338B74" opacity="0.7" />
      <circle cx="240" cy="154" r="3.5" fill="white" opacity="0.85" />
      <path d="M234 164c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

      {/* Animated pulse ring on center */}
      <circle cx="160" cy="110" r="38" stroke="#338B74" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 4" />

      {/* Small floating labels */}
      <rect x="95" y="148" width="48" height="18" rx="6" fill="white" filter="url(#shadow2)" />
      <rect x="99" y="152" width="20" height="3" rx="1.5" fill="#338B74" opacity="0.5" />
      <rect x="99" y="158" width="36" height="3" rx="1.5" fill="#1a1a2e" opacity="0.4" />

      <rect x="175" y="56" width="48" height="18" rx="6" fill="white" filter="url(#shadow2)" />
      <rect x="179" y="60" width="15" height="3" rx="1.5" fill="#FFB804" opacity="0.6" />
      <rect x="179" y="66" width="36" height="3" rx="1.5" fill="#1a1a2e" opacity="0.4" />

      {/* Sparkles */}
      <circle cx="48" cy="90" r="2" fill="#338B74" opacity="0.3" />
      <circle cx="275" cy="130" r="2.5" fill="#FFB804" opacity="0.4" />
      <circle cx="290" cy="60" r="1.5" fill="#338B74" opacity="0.3" />
      <circle cx="36" cy="145" r="1.5" fill="#FFB804" opacity="0.3" />

      <defs>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.07" />
        </filter>
      </defs>
    </svg>
  );
}
