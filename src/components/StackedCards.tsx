import { useEffect, useRef, useState } from "react";
import Ai from "@/assets/images/ai.svg";
import Digital from "@/assets/images/digital.svg";
import Product from "@/assets/images/product.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

gsap.registerPlugin(ScrollTrigger);

export default function StackedWhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const works = [
    {
      id: "ai",
      color: "bg-[#FFEBB9]",
      title: "AI Integration",
      text: "Turn possibilities into performance. We design and deploy tailored AI solutions that automate processes, enhance decision-making, and give your business a competitive edge. From intelligent chatbots to predictive analytics, we help you scale smarter, faster, and with confidence.",
      cta: "Let's Build Smarter",
      image: Ai,
    },
    {
      id: "digital",
      color: "bg-[#FFDCE3]",
      title: "Digital Transformation",
      text: "Don't just keep up—stay ahead. We reimagine your operations with smarter digital workflows that cut inefficiencies, boost productivity, and create seamless customer experiences. Whether it's upgrading legacy systems or building future-ready platforms, we equip your business to thrive in a digital-first world.",
      cta: "Transform With Us",
      image: Digital,
    },
    {
      id: "product",
      color: "bg-[#E6FFF9]",
      title: "Product Management & Development",
      text: "Ideas are easy. Execution wins. From strategy and roadmapping to design, build, and market launch, we take your concept and transform it into a product people love—and businesses rely on. Our end-to-end approach ensures faster go-to-market, scalable growth, and measurable impact.",
      cta: "Let's make it real",
      image: Product,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Initial setup - position cards in stack
    cardsRef.current.forEach((card, index) => {
      if (card) {
        if (index === 0) {
          // First card is active - HIGHEST z-index (on top)
          gsap.set(card, {
            y: 0,
            scale: 1,
            zIndex: 50, // Highest z-index for active card
            opacity: 1,
          });
        } else {
          // Future cards are hidden initially
          gsap.set(card, {
            y: 100,
            scale: 1,
            zIndex: 0,
            opacity: 0,
            height: 60,
          });
        }
      }
    });

    // Create scroll trigger
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * works.length),
          works.length - 1
        );

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);

          // Animate cards
          cardsRef.current.forEach((card, index) => {
            if (card) {
              if (index === newIndex) {
                // Active card - full size with content, HIGHEST z-index (on top)
                gsap.to(card, {
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  height: 500,
                  zIndex: 50, // Highest z-index for active card
                  duration: 0.5,
                  ease: "power2.out",
                });
              } else if (index < newIndex) {
                // Past cards - thin bars stacked behind, oldest has LOWEST z-index
                const offset = (newIndex - index) * 40;
                gsap.to(card, {
                  scale: 1,
                  y: -offset,
                  opacity: 1,
                  height: 60,
                  zIndex: 10 - (newIndex - index), // Oldest past card gets lowest z-index
                  duration: 0.5,
                  ease: "power2.out",
                });
              } else {
                // Future cards - hidden or very low opacity
                gsap.to(card, {
                  scale: 1,
                  y: 100,
                  opacity: 0,
                  height: 60,
                  zIndex: 0,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            }
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [currentIndex, works.length]);

  return (
    <div 
       ref={sectionRef}
      className="relative z-10 bg-white mb-64"
      style={{ height: "220vh" }}
    >
      {/* Section Header */}
      <div className="text-center mb-4 px-4 pt-20">
        <h2 className="text-3xl md:text-5xl font-medium text-black mb-6">
          Our Expertise. Your Growth.
        </h2>
        <p className="text-lg text-[#404040] max-w-3xl mx-auto">
          Every business challenge is an opportunity to innovate. Our team
          blends strategy, technology, and execution to deliver AI solutions,
          digital transformation, and product development that give you the
          edge.
        </p>
      </div>

      {/* Sticky Cards Container */}
      <div className="sticky top-24 h-[200px] flex items-center justify-center px-4 z-20">
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto">
          {works.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`${work.color} absolute rounded-3xl overflow-hidden shadow-xl`}
              style={{
                height: index === currentIndex ? "400px" : "60px",
                width: index === currentIndex 
                  ? "100%" 
                  : `${Math.max(60, 100 - (currentIndex - index) * 15)}%`, // Progressive width reduction
                left: index === currentIndex 
                  ? "0" 
                  : `${Math.min(20, (currentIndex - index) * 7.5)}%`, // Center with progressive offset
                right: index === currentIndex 
                  ? "0" 
                  : `${Math.min(20, (currentIndex - index) * 7.5)}%`, // Center with progressive offset
              }}
            >
              {/* Show content only for active card */}
              {index === currentIndex ? (
                <div className="h-full grid lg:grid-cols-2 gap-8 items-center px-6 lg:px-12 py-8">
                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-4xl font-medium text-black leading-tight">
                      {work.title}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      {work.text}
                    </p>
                    <Link
                      to={routes.contact}
                      className="inline-block bg-[#338B74] text-white hover:bg-emerald-700 rounded-2xl px-6 py-3 font-medium transition-colors"
                    >
                      {work.cta}
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-white rounded-2xl p-4 lg:p-6 w-full max-w-sm lg:max-w-md h-48 lg:h-64 flex items-center justify-center shadow-sm">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // For inactive cards, just show colored background (thin bar)
                <div className="w-full h-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}