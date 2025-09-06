import HomeLayout from "../layouts/HomeLayout";
import MapSvg from "@/assets/images/map.svg";
// import Company1 from "@/assets/images/unilag.svg";
// import Company2 from "@/assets/images/2.svg";
import Company3 from "@/assets/images/3.svg";
// import Company4 from "@/assets/images/4.svg";
import Company5 from "@/assets/images/5.svg";
import BlogImage from "@/assets/images/blog.png";
import { useGetBlogs } from "@/lib/api";
import { works, type Blog } from "@/lib/data";

import P1 from "@/assets/images/p1.svg";
import P2 from "@/assets/images/p2.svg";
import P3 from "@/assets/images/p3.svg";
import P4 from "@/assets/images/p4.svg";
import P5 from "@/assets/images/p5.svg";
import P6 from "@/assets/images/p6.svg";
import { truncate } from "@/lib/utils";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";
import StackedWhatWeDo from "@/components/StackedCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const { data: blogData, isLoading: blogsLoading } = useGetBlogs(1, 3);
  const blogs = (blogData && (blogData.items ?? blogData)) || [];
  
  const heroRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section entrance animation
    const heroTimeline = gsap.timeline({ delay: 0.2 });
    
    heroTimeline
      .fromTo('.hero-title', {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .fromTo('.hero-subtitle', {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .fromTo('.hero-buttons', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .fromTo('.hero-map', {
        scale: 0.9,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

    // Animate map avatars with stagger
    gsap.fromTo('.map-avatar', {
      scale: 0,
      rotation: 180
    }, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      delay: 1.2
    });

    // Animate companies section on scroll
    ScrollTrigger.create({
      trigger: companiesRef.current,
      start: "top 80%",
      animation: gsap.fromTo('.company-logo', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      })
    });

    // Animate works section cards
    ScrollTrigger.create({
      trigger: worksRef.current,
      start: "top 80%",
      animation: gsap.fromTo('.work-card', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      })
    });

    // Animate blog cards
    ScrollTrigger.create({
      trigger: blogsRef.current,
      start: "top 80%",
      animation: gsap.fromTo('.blog-card', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15
      })
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <HomeLayout>
      <div className="pt-10">
        <section className="pt-28 md:pt-32" ref={heroRef}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="hero-title text-5xl md:text-6xl font-medium text-black mb-6 leading-tight">
              Redefining Businesses
              <br />
              Through Technology, AI & Talent
            </h1>

            <p className="hero-subtitle text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              We help ambitious businesses unlock the power of AI, reinvent
              digital processes, and build products that scale globally
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={routes.contact} className="bg-[#338B74] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold hover:bg-emerald-800 transition-colors duration-300 hover:scale-105 transform">
                Work With Us
              </Link>
              <Link to={routes.portfolio} className="bg-[#FFB804] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold hover:bg-amber-600 transition-colors duration-300 hover:scale-105 transform">
                See Our Solutions
              </Link>
            </div>

            <div className="hero-map relative max-w-4xl mx-auto mt-10">
              <div className="relative rounded-3xl p-8 h-80">
                <div className="absolute inset-0">
                  <img src={MapSvg} className="w-full h-full" />
                </div>
                <div className="map-avatar absolute top-1/2 left-20">
                    <div className="flex items-center justify-center">
                        <img src={P5} className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="map-avatar absolute top-0 left-1/2">
                    <div className="flex items-center justify-center">
                        <img src={P2} className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="map-avatar absolute top-1/2 right-20">
                    <div className="flex items-center justify-center">
                        <img src={P4} className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="map-avatar absolute top-1/2 left-64">
                    <div className="flex items-center justify-center">
                        <img src={P1} className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="map-avatar absolute top-12 right-64">
                    <div className="flex items-center justify-center">
                        <img src={P3} className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <div className="map-avatar absolute bottom-12 right-32">
                    <div className="flex items-center justify-center">
                        <img src={P6} className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E6FFF9] px-16 py-16" ref={companiesRef}>
          <div className="max-w-3xl mx-auto text-medium text-2xl text-center">
            We're proud to support visionary brands globally, delivering
            solutions that create lasting impact.
          </div>
          <div className="mt-12 max-w-4xl mx-auto flex gap-8 justify-center align-center">
            {/* <img src={Company1} alt="" className="company-logo hover:scale-110 transition-transform duration-300" /> */}
            {/* <img src={Company4} alt="" className="company-logo hover:scale-110 transition-transform duration-300" /> */}
            {/* <img src={Company2} alt="" className="company-logo hover:scale-110 transition-transform duration-300" /> */}
            <img src={Company3} alt="" className="company-logo hover:scale-110 transition-transform duration-300" />
            <img src={Company5} alt="" className="company-logo hover:scale-110 transition-transform duration-300" />
          </div>
        </section>

        <section className="bg-white px-4 md:px-16 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* What we do section */}
            <StackedWhatWeDo />
          </div>
        </section>

        {/* Our Work section - horizontal carousel */}
        <section className="bg-white px-6 md:px-16 py-16 pt-48">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-black mb-6">
              Our Work in Action
            </h2>

            <p className="text-lg text-[#404040] max-w-3xl mx-auto mb-6">
              The best way to understand what we do is to see it. These projects
              highlight our approach, our craft, and the measurable outcomes
              we've created for organizations shaping tomorrow.
            </p>

            <div className="relative mt-8">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 py-2 md:px-0 md:py-6">
                {works.slice(0, 4).map((work, index) => (
                  <article
                    key={index}
                    className="flex-none w-full md:w-[48%] lg:w-[40%] snap-start bg-white border border-[#EDECEC] rounded-2xl overflow-hidden text-left flex flex-col min-h-[420px]"
                  >
                    <div className="p-4 rounded-t-xl">
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm text-[#4b5563] mb-4">
                        {work.summary}
                      </p>

                      <div className="mt-auto">
                        <div className="text-sm font-medium text-[#111827] mb-2">
                          Technology Used
                        </div>
                        <div className="text-sm text-[#6b7280] flex flex-wrap gap-2">
                          {work.technologies.map((tech, tIdx) => (
                            <div key={tech}>
                              <span>{tech}</span>
                              {tIdx < work.technologies.length - 1 && (
                                <span className="text-gray-300">•</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link to={routes.portfolio} className="bg-[#338B74] text-white rounded-xl px-6 py-2 h-10 text-base font-semibold">
                See All Our Works
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF4E5] px-6 md:px-16 py-16" ref={blogsRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-black mb-6">
              The world of tech moves fast. <br /> We move faster.
            </h2>

            <p className="text-lg text-[#404040] max-w-3xl mx-auto mb-6">
              Our newsroom brings you the latest from the global technology
              stage—AI breakthroughs, digital transformation playbooks, and
              industry trends that shape tomorrow.
            </p>

            <div className="relative mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogsLoading && Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="blog-card overflow-hidden border border-gray-100">
                    <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="py-6 text-left">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                      <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
                    </div>
                  </div>
                ))}

                {!blogsLoading && blogs.map((article: Blog, index: number) => (
                  <div
                    key={article.id ?? index}
                    className="blog-card overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <img
                      src={article.thumbnail ?? BlogImage}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="py-6 text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-pretty">
                        {truncate(article.summary, 200)}
                      </p>
                      <div className="flex items-center justify-between">
                        
                        <Link
                          to={routes.blogDetails.replace(":id", article.uuid)}
                          className="text-emerald-600 hover:text-emerald-700 p-0"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link to={routes.blog} className="bg-[#338B74] text-white rounded-xl px-6 py-2 h-10 text-base font-semibold">
                See All Blogs
              </Link>
            </div>
            

          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
