import MapSvg from "@/assets/images/map.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Inline illustrated avatars — Black/darker skin tones
function AvatarAfricaWest() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#e8f5f1" />
      {/* Body */}
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#338B74" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#6B3A2A" />
      {/* Face */}
      <circle cx="50" cy="46" r="20" fill="#6B3A2A" />
      {/* Natural hair */}
      <ellipse cx="50" cy="30" rx="21" ry="16" fill="#1A0800" />
      <circle cx="31" cy="37" r="9" fill="#1A0800" />
      <circle cx="69" cy="37" r="9" fill="#1A0800" />
      <circle cx="50" cy="24" r="10" fill="#1A0800" />
      {/* Eyes */}
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#5A2E1A" />
      {/* Smile */}
      <path d="M44 56 Q50 61 56 56" stroke="#5A2E1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function AvatarAfricaEast() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#fef3c7" />
      {/* Body */}
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#1A0800" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#7C4A1E" />
      {/* Face */}
      <circle cx="50" cy="46" r="20" fill="#7C4A1E" />
      {/* Short hair */}
      <ellipse cx="50" cy="30" rx="20" ry="13" fill="#1A0800" />
      <rect x="30" y="30" width="40" height="10" rx="2" fill="#1A0800" />
      {/* Ears */}
      <ellipse cx="30" cy="47" rx="4" ry="5" fill="#7C4A1E" />
      <ellipse cx="70" cy="47" rx="4" ry="5" fill="#7C4A1E" />
      {/* Eyes */}
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#5A3010" />
      {/* Smile */}
      <path d="M44 56 Q50 62 56 56" stroke="#5A3010" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function AvatarAfricaSouth() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#f0fdf4" />
      {/* Body */}
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#338B74" />
      {/* Neck */}
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#8B4513" />
      {/* Face */}
      <circle cx="50" cy="46" r="20" fill="#8B4513" />
      {/* Braids / locs */}
      <ellipse cx="50" cy="28" rx="20" ry="14" fill="#1A0800" />
      <rect x="29" y="32" width="6" height="28" rx="3" fill="#1A0800" />
      <rect x="37" y="30" width="5" height="32" rx="2.5" fill="#1A0800" />
      <rect x="58" y="30" width="5" height="32" rx="2.5" fill="#1A0800" />
      <rect x="65" y="32" width="6" height="28" rx="3" fill="#1A0800" />
      {/* Ears */}
      <ellipse cx="30" cy="47" rx="4" ry="5" fill="#8B4513" />
      <ellipse cx="70" cy="47" rx="4" ry="5" fill="#8B4513" />
      {/* Eyes */}
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#6B3010" />
      {/* Smile */}
      <path d="M44 56 Q50 62 56 56" stroke="#6B3010" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Americas — New York
function AvatarAmericas() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#fff7ed" />
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#FFB804" />
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#C68642" />
      <circle cx="50" cy="46" r="20" fill="#C68642" />
      <ellipse cx="50" cy="30" rx="20" ry="14" fill="#7B3F00" />
      <rect x="30" y="33" width="40" height="9" rx="2" fill="#7B3F00" />
      <ellipse cx="30" cy="47" rx="4" ry="5" fill="#C68642" />
      <ellipse cx="70" cy="47" rx="4" ry="5" fill="#C68642" />
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#3B1F00" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#3B1F00" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#A0522D" />
      <path d="M44 56 Q50 62 56 56" stroke="#A0522D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Europe — London
function AvatarEurope() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#eff6ff" />
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#3B82F6" />
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#FDDCB5" />
      <circle cx="50" cy="46" r="20" fill="#FDDCB5" />
      {/* Wavy hair */}
      <ellipse cx="50" cy="29" rx="21" ry="13" fill="#8B5E3C" />
      <circle cx="30" cy="38" r="8" fill="#8B5E3C" />
      <circle cx="70" cy="38" r="8" fill="#8B5E3C" />
      <ellipse cx="30" cy="47" rx="4" ry="5" fill="#FDDCB5" />
      <ellipse cx="70" cy="47" rx="4" ry="5" fill="#FDDCB5" />
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#2D4A7A" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#2D4A7A" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#D4956A" />
      <path d="M44 56 Q50 62 56 56" stroke="#D4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// South Asia — India
function AvatarSouthAsia() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full">
      <circle cx="50" cy="50" r="50" fill="#fdf4ff" />
      <ellipse cx="50" cy="90" rx="30" ry="22" fill="#9333EA" />
      <rect x="44" y="62" width="12" height="12" rx="4" fill="#D4956A" />
      <circle cx="50" cy="46" r="20" fill="#D4956A" />
      {/* Long dark hair */}
      <ellipse cx="50" cy="29" rx="21" ry="13" fill="#1A0800" />
      <rect x="29" y="35" width="7" height="36" rx="3.5" fill="#1A0800" />
      <rect x="64" y="35" width="7" height="36" rx="3.5" fill="#1A0800" />
      <ellipse cx="30" cy="47" rx="4" ry="5" fill="#D4956A" />
      <ellipse cx="70" cy="47" rx="4" ry="5" fill="#D4956A" />
      <ellipse cx="43" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <ellipse cx="57" cy="44" rx="3" ry="3.5" fill="#1A0800" />
      <circle cx="44" cy="43" r="1" fill="white" />
      <circle cx="58" cy="43" r="1" fill="white" />
      {/* Bindi */}
      <circle cx="50" cy="36" r="2" fill="#E11D48" />
      <ellipse cx="50" cy="51" rx="2.5" ry="1.5" fill="#B8734A" />
      <path d="M44 56 Q50 62 56 56" stroke="#B8734A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

type Pin = {
  src?: string;
  Component?: React.FC;
  x: string;
  y: string;
  delay: number;
  floatDelay: string;
  size: string;
  beaconColor: string;
};

const pins: Pin[] = [
  // Americas — New York
  { Component: AvatarAmericas,   x: "17%",  y: "32%", delay: 0,    floatDelay: "0s",    size: "w-9 h-9",   beaconColor: "#FFB804" },
  // West Africa — Nigeria (larger, focal point)
  { Component: AvatarAfricaWest, x: "43%",  y: "57%", delay: 0.15, floatDelay: "0.5s",  size: "w-11 h-11", beaconColor: "#338B74" },
  // Europe — London
  { Component: AvatarEurope,     x: "46%",  y: "22%", delay: 0.3,  floatDelay: "1.1s",  size: "w-9 h-9",   beaconColor: "#338B74" },
  // East Africa — Kenya
  { Component: AvatarAfricaEast, x: "58%",  y: "57%", delay: 0.45, floatDelay: "1.6s",  size: "w-9 h-9",   beaconColor: "#338B74" },
  // South Asia — India
  { Component: AvatarSouthAsia,  x: "69%",  y: "40%", delay: 0.6,  floatDelay: "2.0s",  size: "w-9 h-9",   beaconColor: "#FFB804" },
  // Southern Africa — South Africa
  { Component: AvatarAfricaSouth,x: "52%",  y: "75%", delay: 0.75, floatDelay: "0.8s",  size: "w-9 h-9",   beaconColor: "#338B74" },
];

export default function HeroMap() {
  const pinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinsRef.current) return;
    const pinEls = pinsRef.current.querySelectorAll(".pin-avatar");
    gsap.fromTo(
      pinEls,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.55,
        ease: "back.out(2)",
        stagger: 0.15,
        delay: 0.9,
      }
    );
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white h-72 md:h-80 select-none">
      {/* Map — mix-blend-mode:multiply knocks out the white background */}
      <img
        src={MapSvg}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ mixBlendMode: "multiply", opacity: 0.55 }}
        alt=""
        aria-hidden
      />

      {/* Pins */}
      <div ref={pinsRef} className="absolute inset-0">
        {pins.map((pin, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: pin.x,
              top: pin.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Beacon rings */}
            <span
              className="animate-beacon absolute rounded-full"
              style={{
                inset: "-2px",
                backgroundColor: pin.beaconColor,
                opacity: 0.35,
                animationDelay: `${i * 0.35}s`,
              }}
            />
            <span
              className="animate-beacon-slow absolute rounded-full"
              style={{
                inset: "-2px",
                backgroundColor: pin.beaconColor,
                opacity: 0.2,
                animationDelay: `${i * 0.35 + 0.7}s`,
              }}
            />

            {/* Avatar */}
            <div
              className={`pin-avatar animate-float relative ${pin.size}`}
              style={{ animationDelay: pin.floatDelay, opacity: 0 }}
            >
              {pin.Component ? (
                <div className="w-full h-full rounded-full border-2 border-white shadow-lg overflow-hidden">
                  <pin.Component />
                </div>
              ) : (
                <img
                  src={pin.src}
                  className="w-full h-full rounded-full border-2 border-white shadow-lg object-cover"
                  alt=""
                />
              )}
              {/* Small location dot below */}
              <div
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: pin.beaconColor }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
