import { Badge } from "@/components/ui/badge";
import HomeLayout from "@/layouts/HomeLayout";
import { works } from "@/lib/data";

export default function Portfolio() {
  return (
    <HomeLayout>
      <div className="pt-10">
        <section className="pt-28 md:pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-3 py-2 rounded-full bg-white text-gray-600 border border-gray-200"
            >
              <div className="h-4 w-4 border border-[#FFB804] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FFB804] rounded-full"></div>
              </div>
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
              Our Work Speaks for Itself
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              At Techwave Africa, we take pride in building digital products and
              solutions that empower businesses and individuals. From concept to
              execution, every project reflects our commitment to innovation,
              excellence, and impact.
            </p>
          </div>
        </section>
        <section className="bg-white p-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 space-x-4 space-y-8">
            {works.map((work, index) => (
              <article
                key={index}
                className="bg-white border border-[#EDECEC] rounded-2xl overflow-hidden text-left flex flex-col min-h-[420px]"
              >
                <div className="p-4 rounded-t-xl">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] mb-4">{work.summary}</p>

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
        </section>
      </div>
    </HomeLayout>
  );
}
