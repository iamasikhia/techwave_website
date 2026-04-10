import { useEffect, useRef } from "react";
import TrainingIllustration from "@/components/illustrations/TrainingIllustration";
import NetworkIllustration from "@/components/illustrations/NetworkIllustration";
import MentorshipIllustration from "@/components/illustrations/MentorshipIllustration";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: "training",
    color: "bg-[#FFFBEB]",
    title: "Technology Enablement",
    text: "Skills are the foundation of every successful business. We equip African entrepreneurs with practical, hands-on technology training - from no-code tools and digital marketing to software development and AI literacy. Our programs meet you where you are and build the confidence to compete globally.",
    cta: "Start Learning",
    Illustration: TrainingIllustration,
  },
  {
    id: "network",
    color: "bg-[#F0FDFA]",
    title: "Community & Network",
    text: "Building alone is hard. Building together is powerful. Our community connects ambitious entrepreneurs across Africa - sharing opportunities, resources, honest feedback, and the kind of real relationships that open doors. When one of us grows, we all grow.",
    cta: "Join the Community",
    Illustration: NetworkIllustration,
  },
  {
    id: "mentorship",
    color: "bg-[#FFF1F2]",
    title: "Mentorship",
    text: "Every great founder needs a guide. We connect entrepreneurs with experienced mentors - business leaders, tech veterans, and industry experts - who provide the strategic insight, honest advice, and lived experience needed to turn bold ideas into businesses that last.",
    cta: "Find a Mentor",
    Illustration: MentorshipIllustration,
  },
];

const CARD_FULL = 420;
const CARD_BAR  = 56;

export default function StackedWhatWeDo() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef    = useRef<(HTMLDivElement | null)[]>([]);
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const cards    = cardsRef.current;
    const contents = contentsRef.current;
    const n        = works.length;

    // ── Initial state ────────────────────────────────────────────────
    cards.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, {
        height:  i === 0 ? CARD_FULL : CARD_BAR,
        y:       i === 0 ? 0 : 80,
        opacity: i === 0 ? 1 : 0,
        zIndex:  n - i,
        width:   "100%",
        left:    0,
      });
    });
    contents.forEach((c, i) => {
      if (!c) return;
      gsap.set(c, { opacity: i === 0 ? 1 : 0 });
    });

    // ── Build a scrubbed timeline ────────────────────────────────────
    // Each transition occupies 1 unit of the timeline.
    // Total duration = n - 1 units.
    const tl = gsap.timeline({ paused: true });

    for (let i = 0; i < n - 1; i++) {
      const curr    = cards[i]!;
      const next    = cards[i + 1]!;
      const currCnt = contents[i]!;
      const nextCnt = contents[i + 1]!;
      const at      = i; // timeline position

      // Fade out current card content
      tl.to(currCnt, { opacity: 0, duration: 0.25, ease: "power2.in" }, at);

      // Shrink current card to a bar and push it up
      tl.to(curr, {
        height:  CARD_BAR,
        y:       -(i + 1) * (CARD_BAR + 8),
        duration: 0.5,
        ease:    "power2.inOut",
      }, at + 0.1);

      // Slide next card up and expand it
      tl.to(next, {
        opacity:  1,
        y:        0,
        height:   CARD_FULL,
        duration: 0.6,
        ease:     "power2.inOut",
      }, at + 0.2);

      // Fade in next card content after it has mostly expanded
      tl.to(nextCnt, { opacity: 1, duration: 0.3, ease: "power2.out" }, at + 0.65);
    }

    // ── Attach to scroll ─────────────────────────────────────────────
    const trigger = ScrollTrigger.create({
      trigger:   sectionRef.current,
      start:     "top 15%",
      end:       "bottom 85%",
      scrub:     1.2,          // lag in seconds — feels organic
      animation: tl,
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 bg-white"
      style={{ height: "230vh" }}
    >
      {/* Section Header */}
      <div className="text-center mb-4 px-4 pt-20">
        <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-6 uppercase tracking-wider">
          How We Support You
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-950 mb-5 tracking-tight">
          Three pillars. One mission.
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We believe African entrepreneurs have everything it takes to build world-class businesses.
          Our job is to give them the training, the network, and the mentors to make it happen.
        </p>
      </div>

      {/* Sticky container */}
      <div className="sticky top-20 flex items-start justify-center px-4 z-20 pt-4">
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto" style={{ height: `${CARD_FULL}px` }}>
          {works.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`${work.color} absolute inset-x-0 rounded-3xl overflow-hidden shadow-xl`}
              style={{ height: CARD_FULL }}
            >
              {/* Always-rendered content — opacity controlled by GSAP */}
              <div
                ref={(el) => { contentsRef.current[index] = el; }}
                className="h-full grid lg:grid-cols-2 gap-8 items-center px-6 lg:px-12 py-8"
                style={{ opacity: 0 }}
              >
                {/* Text */}
                <div className="space-y-5">
                  <h3 className="text-2xl lg:text-4xl font-medium text-gray-950 leading-tight">
                    {work.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {work.text}
                  </p>
                  <Link
                    to={routes.contact}
                    className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
                  >
                    {work.cta}
                  </Link>
                </div>

                {/* Illustration */}
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-transparent rounded-2xl p-4 lg:p-6 w-full max-w-sm lg:max-w-md h-48 lg:h-64 flex items-center justify-center overflow-hidden">
                    <work.Illustration />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
