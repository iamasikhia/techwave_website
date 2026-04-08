export default function TrainingIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Laptop base */}
      <rect x="60" y="130" width="200" height="10" rx="5" fill="#338B74" opacity="0.15" />
      <rect x="70" y="60" width="180" height="115" rx="10" fill="#1a1a2e" />
      <rect x="78" y="68" width="164" height="99" rx="6" fill="#0d1117" />

      {/* Screen glow */}
      <rect x="78" y="68" width="164" height="99" rx="6" fill="url(#screenGrad)" />

      {/* Code lines */}
      <rect x="90" y="82" width="60" height="5" rx="2.5" fill="#338B74" opacity="0.9" />
      <rect x="90" y="93" width="100" height="4" rx="2" fill="#6ee7b7" opacity="0.6" />
      <rect x="98" y="103" width="75" height="4" rx="2" fill="#FFB804" opacity="0.7" />
      <rect x="98" y="113" width="55" height="4" rx="2" fill="#6ee7b7" opacity="0.5" />
      <rect x="90" y="123" width="85" height="4" rx="2" fill="#338B74" opacity="0.7" />
      <rect x="98" y="133" width="65" height="4" rx="2" fill="#FFB804" opacity="0.5" />
      <rect x="98" y="143" width="45" height="4" rx="2" fill="#6ee7b7" opacity="0.4" />

      {/* Cursor blinking line */}
      <rect x="155" y="143" width="2" height="10" rx="1" fill="#6ee7b7" opacity="0.9" />

      {/* Progress bar on right side */}
      <rect x="200" y="82" width="32" height="65" rx="6" fill="#338B74" opacity="0.08" />
      <rect x="204" y="95" width="24" height="4" rx="2" fill="#338B74" opacity="0.4" />
      <rect x="204" y="103" width="18" height="4" rx="2" fill="#338B74" opacity="0.3" />
      <rect x="204" y="111" width="20" height="4" rx="2" fill="#338B74" opacity="0.3" />
      {/* Progress pill */}
      <rect x="204" y="122" width="24" height="14" rx="4" fill="#338B74" opacity="0.15" />
      <rect x="204" y="122" width="14" height="14" rx="4" fill="#338B74" opacity="0.7" />
      <text x="207" y="132" fontSize="7" fill="white" fontWeight="700" opacity="0.9">58%</text>

      {/* Floating badge - top right */}
      <rect x="210" y="36" width="70" height="28" rx="8" fill="white" filter="url(#shadow1)" />
      <circle cx="224" cy="50" r="7" fill="#338B74" opacity="0.15" />
      <path d="M221 50l2 2 4-4" stroke="#338B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="235" y="44" width="36" height="4" rx="2" fill="#1a1a2e" opacity="0.5" />
      <rect x="235" y="52" width="24" height="3" rx="1.5" fill="#338B74" opacity="0.5" />

      {/* Floating badge - bottom left */}
      <rect x="40" y="105" width="60" height="36" rx="8" fill="white" filter="url(#shadow1)" />
      <rect x="48" y="112" width="20" height="3" rx="1.5" fill="#9ca3af" opacity="0.6" />
      <rect x="48" y="119" width="44" height="5" rx="2.5" fill="#1a1a2e" opacity="0.7" />
      <rect x="48" y="128" width="30" height="3" rx="1.5" fill="#338B74" opacity="0.6" />

      {/* Stars / sparkles */}
      <circle cx="52" cy="72" r="3" fill="#FFB804" opacity="0.7" />
      <circle cx="268" cy="108" r="2" fill="#338B74" opacity="0.5" />
      <circle cx="44" cy="88" r="1.5" fill="#338B74" opacity="0.4" />
      <circle cx="274" cy="80" r="2.5" fill="#FFB804" opacity="0.4" />

      <defs>
        <linearGradient id="screenGrad" x1="78" y1="68" x2="242" y2="167" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
        </filter>
      </defs>
    </svg>
  );
}
