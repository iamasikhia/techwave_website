import MapSvg from "@/assets/images/map.svg";
import P1 from "@/assets/images/p1.svg";
import P2 from "@/assets/images/p2.svg";
import P3 from "@/assets/images/p3.svg";
import P4 from "@/assets/images/p4.svg";
import P5 from "@/assets/images/p5.svg";
import P6 from "@/assets/images/p6.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const pins = [
  { src: P3, x: "17%",  y: "32%", delay: 0,    floatDelay: "0s",    size: "w-9 h-9",   beaconColor: "#FFB804" },
  { src: P5, x: "43%",  y: "57%", delay: 0.15, floatDelay: "0.5s",  size: "w-11 h-11", beaconColor: "#338B74" },
  { src: P4, x: "46%",  y: "22%", delay: 0.3,  floatDelay: "1.1s",  size: "w-9 h-9",   beaconColor: "#338B74" },
  { src: P1, x: "58%",  y: "57%", delay: 0.45, floatDelay: "1.6s",  size: "w-9 h-9",   beaconColor: "#338B74" },
  { src: P2, x: "69%",  y: "40%", delay: 0.6,  floatDelay: "2.0s",  size: "w-9 h-9",   beaconColor: "#FFB804" },
  { src: P6, x: "52%",  y: "75%", delay: 0.75, floatDelay: "0.8s",  size: "w-9 h-9",   beaconColor: "#338B74" },
];

export default function HeroMap() {
  const pinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinsRef.current) return;
    const pinEls = pinsRef.current.querySelectorAll(".pin-avatar");
    gsap.fromTo(
      pinEls,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(2)", stagger: 0.15, delay: 0.9 }
    );
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white h-72 md:h-80 select-none">
      <img
        src={MapSvg}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ mixBlendMode: "multiply", opacity: 0.55 }}
        alt=""
        aria-hidden
      />

      <div ref={pinsRef} className="absolute inset-0">
        {pins.map((pin, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
          >
            <span
              className="animate-beacon absolute rounded-full"
              style={{ inset: "-2px", backgroundColor: pin.beaconColor, opacity: 0.35, animationDelay: `${i * 0.35}s` }}
            />
            <span
              className="animate-beacon-slow absolute rounded-full"
              style={{ inset: "-2px", backgroundColor: pin.beaconColor, opacity: 0.2, animationDelay: `${i * 0.35 + 0.7}s` }}
            />
            <div
              className={`pin-avatar animate-float relative ${pin.size}`}
              style={{ animationDelay: pin.floatDelay, opacity: 0 }}
            >
              <img
                src={pin.src}
                className="w-full h-full rounded-full border-2 border-white shadow-lg object-cover"
                alt=""
              />
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
