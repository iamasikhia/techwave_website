import HomeLayout from "@/layouts/HomeLayout";
import TechwaveTeam from "@/assets/images/techwave-team.jpg";
import CentriPic from "@/assets/images/centri-pic.jpeg";
import WatergatePic from "@/assets/images/watergate-pic.jpg";
import WatergatePic2 from "@/assets/images/watergate.jpg";

const milestones = [
  {
    year: "2018",
    scope: "Nigeria",
    name: "Watergate Fountain",
    tagline: "Entrepreneurship & research training, Nigeria.",
    description:
      "Watergate Fountain is a free entrepreneurship and research training programme with the mission to provide Nigerians with entrepreneurial and vocational skills across a variety of fields. We also train students to write research papers from start to completion, offering free consultation before final submission. In four years, we have graduated 3,600 trainees - 2,600 entrepreneurs and 1,000 research students - driven by SDG 8: Decent Work and Economic Growth. We believe entrepreneurship is one of the most powerful gateways out of poverty in Nigeria.",
    side: "right",
    color: "#3B82F6",
    bgLight: "#EFF6FF",
    image: WatergatePic,
    image2: WatergatePic2,
    url: "https://watergatefountain.techwaveafrica.com",
    urlLabel: "Visit Watergate Fountain",
  },
  {
    year: "2023",
    scope: "Africa",
    name: "Techwave Africa",
    tagline: "Technology enablement and training for entrepreneurs, Africa.",
    description:
      "Techwave Africa was founded to close the technology gap for African entrepreneurs. We provide hands-on technology training, digital skills development, and the enablement tools that founders need to build, launch, and scale in a digital-first world. From no-code platforms to AI tools, we equip entrepreneurs with practical skills they can apply immediately - because the right technology in the right hands changes everything.",
    side: "left",
    color: "#338B74",
    bgLight: "#F0FDFA",
    image: TechwaveTeam,
    image2: null,
    url: null,
    urlLabel: null,
  },
  {
    year: "2026",
    scope: "Global",
    name: "Centri AI",
    tagline: "AI automations for businesses, Global.",
    description:
      "Centri AI was founded on a simple belief: most businesses are leaving enormous value on the table because AI feels too complex to implement. We build custom AI automations that save you time, money, and headspace - from discovery call to live automation in as little as 5 days. We design, build, and deploy custom AI workflows that integrate with the tools your team already uses. We also train your team to understand, use, and manage these systems so you stay in control long-term. No black boxes, no vendor lock-in - just AI that works for you. Headquartered in Indiana, USA.",
    side: "right",
    color: "#1E3A5F",
    bgLight: "#EFF6FF",
    image: CentriPic,
    image2: null,
    url: "https://www.centriai.com/about",
    urlLabel: "Visit Centri AI",
  },
];

// Placeholder shown when no image is uploaded yet
function ImagePlaceholder({ color, label }: { color: string; label: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed"
      style={{ borderColor: color + "40", background: color + "08" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: color + "15" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>
      <p className="text-xs font-medium" style={{ color: color + "80" }}>
        {label}
      </p>
    </div>
  );
}

export default function OurStory() {
  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              A journey built on
              <br />
              <span className="text-[#338B74]">faith, grit & purpose.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              From our first venture in 2018 to building a continent-wide entrepreneur community today.
              This is the story of why we started, what we've built, and where we're going.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gray-50 border-t border-gray-100 px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Vertical spine */}
            <div className="relative">
              {/* Centre line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#338B74]/30 via-[#338B74]/60 to-[#338B74]/20 hidden md:block" />

              <div className="flex flex-col gap-20">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">

                    {/* Left column */}
                    <div className={`w-full md:w-[calc(50%-32px)] ${m.side === "right" ? "md:pr-10 md:text-right" : "md:order-3 md:pl-10 md:text-left"}`}>
                      {m.side === "right" ? (
                        <TimelineContent milestone={m} />
                      ) : (
                        <TimelineImage milestone={m} index={i} />
                      )}
                    </div>

                    {/* Centre node */}
                    <div className="relative z-10 shrink-0 hidden md:flex flex-col items-center" style={{ width: "64px" }}>
                      <div
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white text-xs text-center leading-tight px-1"
                        style={{ background: m.color }}
                      >
                        {m.scope}
                      </div>
                    </div>

                    {/* Right column */}
                    <div className={`w-full md:w-[calc(50%-32px)] ${m.side === "right" ? "md:pl-10 md:text-left" : "md:order-1 md:pr-10 md:text-right"}`}>
                      {m.side === "right" ? (
                        <TimelineImage milestone={m} index={i} />
                      ) : (
                        <TimelineContent milestone={m} />
                      )}
                    </div>

                    {/* Mobile year badge */}
                    <div
                      className="md:hidden inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white text-sm font-bold"
                      style={{ background: m.color }}
                    >
                      {m.scope}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's next CTA */}
        <section className="bg-white border-t border-gray-100 px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-6 uppercase tracking-wider">
              The Journey Continues
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-950 mb-5 tracking-tight">
              The best chapter is still being written.
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto">
              Every entrepreneur we support adds a new page to this story.
              Join the community and become part of what we're building together.
            </p>
            <a
              href="/community"
              className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white font-semibold rounded-full px-7 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
            >
              Join the Community
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}

function TimelineContent({ milestone: m }: { milestone: typeof milestones[0] }) {
  return (
    <div>
      {/* Year pill - desktop only */}
      <div
        className="hidden md:inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-white text-xs font-bold mb-4"
        style={{ background: m.color }}
      >
        {m.year}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-gray-950 mb-2 leading-tight">
        {m.name}
      </h3>
      <p className="text-sm font-medium mb-3" style={{ color: m.color }}>
        {m.tagline}
      </p>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {m.description}
      </p>
      {m.url && (
        <a
          href={m.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-200 hover:shadow-md"
          style={{
            background: m.color + "15",
            color: m.color,
            border: `1px solid ${m.color}30`,
          }}
        >
          {m.urlLabel}
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      )}
    </div>
  );
}

function TimelineImage({ milestone: m, index }: { milestone: typeof milestones[0]; index: number }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full rounded-2xl overflow-hidden shadow-md"
        style={{ background: m.bgLight }}
      >
        {m.image ? (
          <img src={m.image} alt={m.name} className="w-full h-auto object-contain rounded-2xl" />
        ) : (
          <div className="h-56">
            <ImagePlaceholder color={m.color} label={`Upload image for ${m.name} (Point ${["A", "B", "C"][index]})`} />
          </div>
        )}
      </div>
      {m.image2 && (
        <div className="w-full rounded-2xl overflow-hidden shadow-md" style={{ background: m.bgLight }}>
          <img src={m.image2} alt={`${m.name} 2`} className="w-full h-auto object-contain rounded-2xl" />
        </div>
      )}
    </div>
  );
}
