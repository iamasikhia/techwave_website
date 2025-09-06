import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HomeLayout from "@/layouts/HomeLayout";
import GeometricImage from "@/assets/images/geometric.png";
import Explore from "@/assets/images/explore.png";
import Strategize from "@/assets/images/strategize.png";
import Implement from "@/assets/images/implement.png";
import Deliver from "@/assets/images/deliver.png";
import Ceo from "@/assets/images/ceo.jpg";
import StackedWhatWeDo from "@/components/StackedCards";

export default function AboutUs() {
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
              About Techwave Africa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
              Innovation Rooted in Africa,
              <br />
              Impacting the World
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              Techwave Africa is driven with the vision to build innovative
              solutions that bring answers to the problem and needs of
              businesses and individuals around the world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[#338B74] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                Work With Us
              </Button>
              <Button className="bg-[#FFB804] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                See Our Solutions
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-[#338B74] p-16 mt-16">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center space-around">
            <div className="relative mr-10 mb-0">
              <img
                src={GeometricImage}
                alt="AI Integration"
                className="w-[490px] h-auto rounded-t-lg"
              />
            </div>
            <div className="max-w-xl mx-auto text-left pb-10 text-white">
              <div className="text-lg font-normal mb-6">Why?</div>
              <div className="text-5xl font-medium">
                Empowering the Future Through Faith and Innovation
              </div>

              <div className="text-lg text-white mb-8 tracking-[0.2px] max-w-md mt-5">
                As change agents we are on a mission to create innovative
                products that inspire positive change and bring light to lives
                across the globe.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 md:px-16 py-16 pb-48">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* What we do section */}
            <StackedWhatWeDo />
            </div>
        </section>

        <section className="bg-[#FFEBB9] p-16 ">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center space-around">
            <div className="max-w-xl mx-auto text-left pb-10 text-black">
              <div className="text-lg font-normal mb-6">Why?</div>
              <div className="text-5xl font-medium">
                Empowering the Future Through Faith and Innovation
              </div>

              <div className="text-lg text-black mb-8 tracking-[0.2px] max-w-md mt-5">
                As change agents we are on a mission to create innovative
                products that inspire positive change and bring light to lives
                across the globe.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4">
                <img src={Explore} alt="Explore" className="h-auto" />
                <div className="text-xl font-semibold pt-2">Explore</div>
                <div className="mt-2 text-md text-[#404040]">
                  We begin by thoroughly understanding your needs, objectives,
                  and challenges to gather key insights.
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <img src={Strategize} alt="Strategize" className="h-auto" />
                <div className="text-xl font-semibold pt-2">Strategize</div>
                <div className="mt-2 text-md text-[#404040]">
                  We craft a detailed plan that outlines the approach,
                  resources, and timelines required to achieve your goals.
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <img src={Implement} alt="Implement" className="h-auto" />
                <div className="text-xl font-semibold pt-2">Implement</div>
                <div className="mt-2 text-md text-[#404040]">
                  Our skilled team executes the plan using advanced technologies
                  and best practices to bring your vision to life.
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <img src={Deliver} alt="Deliver" className="h-auto" />
                <div className="text-xl font-semibold pt-2">Deliver</div>
                <div className="mt-2 text-md text-[#404040]">
                  We deliver the final product with precision, providing ongoing
                  support to ensure its success and your satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-5xl mx-auto py-16 gap-8 flex justify-between items-center">
            <div className="text-5xl font-medium mb-6">
                <img src={Ceo} alt="CEO" className="h-56 w-64 rounded-xl" />
                <div className="text-3xl font-medium">
                    Asikhia Iseoluwa
                </div>
                <div className="text-xl font-medium">
                    Founder & CEO
                </div>
            </div>
            <div className="text-4xl text-black mb-8 tracking-[0.2px] max-w-2xl">
              “Together, we will reshape the digital landscape. Your vision, powered by our innovation, will redefine what's possible.”
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
