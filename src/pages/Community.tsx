import { Button } from "@/components/ui/button";
import HomeLayout from "@/layouts/HomeLayout";
import CommunityImage from "@/assets/images/community.svg";

export default function Community() {
  return (
    <HomeLayout>
      <div className="pt-10">
        <section className="py-28 md:py-32">
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
                Connecting Innovators. 
                <br />
                Building the Future.
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
                We're bringing together tech founders, professionals, and creators who are shaping the future of innovation. This is more than networking—it's a community built on collaboration, learning, and shared growth.
              </p>

              <Button className="bg-[#338B74] text-white rounded-2xl px-4 py-2 h-10 text-base font-semibold">
                  Join Our Community
                </Button>
            </div>
            <img
              src={CommunityImage}
              alt="Community"
              className="w-full lg:w-1/3 h-auto mt-5 lg:mt-0 mx-auto"
            />
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
