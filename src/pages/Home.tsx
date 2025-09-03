import HomeLayout from "../layouts/HomeLayout";
import { Button } from "@/components/ui/button";
import MapSvg from "@/assets/images/map.svg";
import Company1 from "@/assets/images/1.svg";
import Company2 from "@/assets/images/2.svg";
import Company3 from "@/assets/images/3.svg";
import Company4 from "@/assets/images/4.svg";
import Company5 from "@/assets/images/5.svg";
import BlogImage from "@/assets/images/blog.png";
import { useGetBlogs } from "@/lib/api";
import Ai from "@/assets/images/ai.svg";
import Digital from "@/assets/images/digital.svg";
import Product from "@/assets/images/product.svg";
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


export default function Home() {
  const { data: blogData, isLoading: blogsLoading } = useGetBlogs(1, 3);
  const blogs = (blogData && (blogData.items ?? blogData)) || [];
  return (
    <HomeLayout>
      <div className="pt-10">
        <section className="pt-28 md:pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
              Redefining Businesses
              <br />
              Through Technology & AI
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              We help ambitious businesses unlock the power of AI, reinvent
              digital processes, and build products that scale globally
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={routes.contact} className="bg-[#338B74] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                Work With Us
              </Link>
              <Link to={routes.portfolio} className="bg-[#FFB804] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                See Our Solutions
              </Link>
            </div>

            <div className="relative max-w-4xl mx-auto mt-10">
              <div className="relative rounded-3xl p-8 h-80">
                <div className="absolute inset-0">
                  <img src={MapSvg} className="w-full h-full" />
                </div>
                <div className="absolute top-1/2 left-20">
                    <div className="flex items-center justify-center">
                        <img src={P5} className="w-12 h-12 rounded-full" />
                    </div>
                </div>
                <div className="absolute top-0 left-1/2">
                    <div className="flex items-center justify-center">
                        <img src={P2} className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                <div className="absolute top-1/2 right-20">
                    <div className="flex items-center justify-center">
                        <img src={P4} className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                <div className="absolute top-1/2 left-64">
                    <div className="flex items-center justify-center">
                        <img src={P1} className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                <div className="absolute top-12 right-64">
                    <div className="flex items-center justify-center">
                        <img src={P3} className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                <div className="absolute bottom-12 right-32">
                    <div className="flex items-center justify-center">
                        <img src={P6} className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E6FFF9] px-16 py-16">
          <div className="max-w-3xl mx-auto text-medium text-2xl text-center">
            We're proud to support visionary brands globally, delivering
            solutions that create lasting impact.
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 justify-center align-center">
            <img src={Company1} alt="" />
            <img src={Company2} alt="" />
            <img src={Company3} alt="" />
            <img src={Company4} alt="" />
            <img src={Company5} alt="" />
          </div>
        </section>

        <section className="bg-white px-4 md:px-16 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-black mb-6">
              Our Expertise. Your Growth.
            </h2>

            <p className="text-lg text-[#404040]">
              Every business challenge is an opportunity to innovate. Our team
              blends strategy, technology, and execution to deliver AI
              solutions, digital transformation, and product development that
              give you the edge.
            </p>

            <div className="bg-[#FFEBB9] max-w-7xl mx-auto pt-12 pl-3 md:pl-16 rounded-2xl mt-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
                <div className="text-left pb-10">
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">
                    AI Integration
                  </h2>

                  <div className="text-lg text-[#404040] mb-8 tracking-[0.2px] max-w-md">
                    Turn possibilities into performance. We design and deploy
                    tailored AI solutions that automate processes, enhance
                    decision-making, and give your business a competitive edge.
                    From intelligent chatbots to predictive analytics, we help
                    you scale smarter, faster, and with confidence.
                  </div>

                  <Button className="bg-[#338B74] text-white hover:bg-gray-800 rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                    Let's Build Smarter
                  </Button>
                </div>

                <div className="relative mr-10 mb-0">
                  <img
                    src={Ai}
                    alt="AI Integration"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#FFDCE3] max-w-7xl mx-auto pt-12 px-8 lg:pl-16 rounded-2xl mt-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
                <div className="relative mb-[-5px]">
                  <img
                    src={Digital}
                    alt="Digital Transformation"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
                <div className="text-left pb-10">
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">
                    Digital Transformation
                  </h2>

                  <div className="text-lg text-[#404040] mb-8 tracking-[0.2px] max-w-md">
                    Don't just keep up—stay ahead. We reimagine your operations
                    with smarter digital workflows that cut inefficiencies,
                    boost productivity, and create seamless customer
                    experiences. Whether it's upgrading legacy systems or
                    building future-ready platforms, we equip your business to
                    thrive in a digital-first world.
                  </div>

                  <Button className="bg-[#338B74] text-white hover:bg-gray-800 rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                    Transform With Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-[#E6FFF9] max-w-7xl mx-auto pt-12 pl-8 lg:pl-16 rounded-2xl mt-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center pt-10">
                <div className="text-left pb-10">
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">
                    Product Management & Development
                  </h2>

                  <div className="text-lg text-[#404040] mb-8 tracking-[0.2px] max-w-md">
                    Ideas are easy. Execution wins. From strategy and
                    roadmapping to design, build, and market launch, we take
                    your concept and transform it into a product people love—and
                    businesses rely on. Our end-to-end approach ensures faster
                    go-to-market, scalable growth, and measurable impact.
                  </div>

                  <Button className="bg-[#338B74] text-white hover:bg-gray-800 rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                    Let's make it real
                  </Button>
                </div>

                <div className="relative mr-10 mb-[-25px]">
                  <img
                    src={Product}
                    alt="Product Management & Development"
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work section - horizontal carousel */}
        <section className="bg-white px-6 md:px-16 py-16">
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
              <Button className="bg-[#338B74] text-white rounded-xl px-6 py-2 h-10 text-base font-semibold">
                See All Our Works
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF4E5] px-6 md:px-16 py-16">
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
                  <div key={idx} className="overflow-hidden border border-gray-100">
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
                    className="overflow-hidden border border-gray-100"
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
