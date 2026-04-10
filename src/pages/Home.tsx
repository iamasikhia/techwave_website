import HomeLayout from "../layouts/HomeLayout";
import Company2 from "@/assets/images/9.svg";
import company6 from "@/assets/images/7.svg";
import Company4 from "@/assets/images/8.png";
import Company5 from "@/assets/images/5.svg";
import WatergateLogo from "@/assets/images/watergatelogo.png";
import { works } from "@/lib/data";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";
import StackedWhatWeDo from "@/components/StackedCards";
import HeroMap from "@/components/HeroMap";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const companiesRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const heroTimeline = gsap.timeline({ delay: 0.15 });
    heroTimeline
      .fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-buttons", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-map", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.3");

    ScrollTrigger.create({
      trigger: companiesRef.current, start: "top 85%",
      animation: gsap.fromTo(".company-logo", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }),
    });

    ScrollTrigger.create({
      trigger: worksRef.current, start: "top 80%",
      animation: gsap.fromTo(".work-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.15 }),
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="hero-badge inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Training · Network · Mentorship
            </div>

            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 mb-6 leading-[1.1] tracking-tight">
              Supporting Entrepreneurs
              <br />
              <span className="text-[#338B74]">Across Africa</span>
            </h1>

            <p className="hero-subtitle text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Techwave Africa is building a community of entrepreneurs with the
              spirit to create, the skills to compete, and the network to make
              an enduring impact across Africa and the world.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={routes.community}
                className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white rounded-full px-7 py-3 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
              >
                Join Our Community
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to={routes.portfolio}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full px-7 py-3 font-medium transition-all duration-200"
              >
                Impact Driven Projects
              </Link>
            </div>

            {/* Hero Map */}
            <div className="hero-map max-w-4xl mx-auto mt-14">
              <HeroMap />
            </div>
          </div>
        </section>

        {/* Trusted Companies */}
        <section className="border-y border-gray-100 bg-gray-50/50 px-6 py-14" ref={companiesRef}>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">
              Backed by entrepreneurs & organisations who believe in Africa
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <img src={WatergateLogo} alt="Watergate Fountain" className="company-logo h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" />
              <img src={Company4} alt="" className="company-logo h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" />
              <img src={Company2} alt="" className="company-logo h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" />
              <img src={company6} alt="" className="company-logo h-9 w-auto opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" />
              <img src={Company5} alt="" className="company-logo h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-white px-4 md:px-8 py-8">
          <div className="max-w-5xl mx-auto text-center">
            <StackedWhatWeDo />
          </div>
        </section>

        {/* Our Work */}
        <section className="bg-gray-50/50 border-t border-gray-100 px-6 py-20 pt-48" ref={worksRef}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-5 uppercase tracking-wider">
                Organizations We've Supported
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-950 mb-4 tracking-tight">
                Real Founders. Real Impact.
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                These are some of the entrepreneurs and businesses we've walked alongside,
                from early idea to launched product. Their wins are what drive us.
              </p>
            </div>

            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2">
              {works.slice(0, 4).map((work, index) => (
                <article
                  key={index}
                  className="work-card flex-none w-full md:w-[46%] lg:w-[38%] snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden text-left flex flex-col hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="p-3">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-44 object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-grow">
                      {work.summary}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {work.technologies.map((tech) => (
                          <span key={tech} className="text-xs text-gray-600 bg-gray-100 rounded-full px-2.5 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#338B74] hover:text-[#2a7562] transition-colors"
                        >
                          Visit Site
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to={routes.portfolio}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full px-6 py-2.5 transition-all duration-200 text-sm"
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog — commented out for now */}
        {/* <section className="bg-white border-t border-gray-100 px-6 py-20" ref={blogsRef}>
          ...
        </section> */}
      </div>
    </HomeLayout>
  );
}
