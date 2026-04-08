import HomeLayout from "@/layouts/HomeLayout";
import { works } from "@/lib/data";

export default function Portfolio() {
  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Organizations We've Supported
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              Real Founders.
              <br />
              <span className="text-[#338B74]">Real Impact.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto leading-relaxed">
              These are some of the entrepreneurs and businesses we've walked alongside,
              from early idea to launched product. Every project here represents a founder
              who dared to build, and a team that showed up to support them.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-gray-50 border-t border-gray-100 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {works.map((work, index) => (
                <article
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden text-left flex flex-col hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="p-3">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-56 object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5 leading-relaxed flex-grow">
                      {work.summary}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#338B74] hover:text-[#2a7562] transition-colors"
                        >
                          Visit Site
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
