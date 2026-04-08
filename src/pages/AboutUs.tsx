import HomeLayout from "@/layouts/HomeLayout";
import GeometricImage from "@/assets/images/geometric.png";
import Explore from "@/assets/images/explore.png";
import Strategize from "@/assets/images/strategize.png";
import Implement from "@/assets/images/implement.png";
import Deliver from "@/assets/images/deliver.png";
import Ceo from "@/assets/images/ceo.jpg";
import StackedWhatWeDo from "@/components/StackedCards";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

const processSteps = [
  {
    image: Explore,
    title: "Join",
    description: "You become part of a growing community of African entrepreneurs who share your drive to build something meaningful.",
    number: "01",
  },
  {
    image: Strategize,
    title: "Learn",
    description: "Access structured technology training programmes designed to give you practical, business-ready digital skills.",
    number: "02",
  },
  {
    image: Implement,
    title: "Connect",
    description: "Build real relationships with fellow founders, investors, and industry professionals across Africa and the diaspora.",
    number: "03",
  },
  {
    image: Deliver,
    title: "Grow",
    description: "Work with experienced mentors who provide honest guidance, strategic insight, and accountability as you build and scale.",
    number: "04",
  },
];

export default function AboutUs() {
  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              About Techwave Africa
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              Innovation Rooted in Africa,
              <br />
              <span className="text-[#338B74]">Impacting the World</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Techwave Africa exists to back the next generation of African entrepreneurs,
              equipping them with technology skills, connecting them with the right people,
              and guiding them with mentors who have walked the path before.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={routes.contact}
                className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white rounded-full px-7 py-3 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
              >
                Work With Us
              </Link>
              <Link
                to={routes.portfolio}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-full px-7 py-3 font-medium transition-all duration-200"
              >
                See Our Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#0f1f1a] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#338B74]/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#338B74]/8 blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={GeometricImage}
                alt="AI Integration"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 text-white">
              <div className="inline-flex items-center gap-2 bg-[#338B74]/15 border border-[#338B74]/30 text-[#6ee7b7] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-6 uppercase tracking-wider">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                Built on Faith.
                <br />
                <span className="text-[#338B74]">Driven by Purpose.</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-lg">
                We believe Africa's greatest resource is its people. Our mission is to unlock the
                potential of African entrepreneurs by giving them technology training, a powerful
                community, and mentors who invest in their growth. Because when African
                entrepreneurs win, Africa wins.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-white px-4 md:px-8 py-8">
          <div className="max-w-5xl mx-auto text-center">
            <StackedWhatWeDo />
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 border-t border-gray-100 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-5 uppercase tracking-wider">
                Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-950 mb-4 tracking-tight">
                From Idea to Impact
              </h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                Four steps that take you from where you are to where you're meant to be.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <img src={step.image} alt={step.title} className="h-12 w-12 object-contain" />
                    <span className="text-xs font-bold text-gray-300">{step.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Quote */}
        <section className="bg-white border-t border-gray-100 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="shrink-0 text-center">
                <img
                  src={Ceo}
                  alt="Asikhia Iseoluwa - Founder & CEO"
                  className="w-48 h-56 object-cover rounded-2xl shadow-lg mx-auto"
                />
                <div className="mt-4">
                  <div className="text-base font-semibold text-gray-900">Asikhia Iseoluwa</div>
                  <div className="text-sm text-gray-500 mt-0.5">Founder & CEO</div>
                </div>
              </div>
              <div className="flex-1">
                <svg className="w-10 h-10 text-[#338B74]/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden>
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-6">
                  "Africa is not short of brilliant minds. What our entrepreneurs
                  need is the right training, the right people around them, and
                  someone who believes in them before the world does. That is
                  exactly what Techwave Africa is here to be."
                </p>
                <div className="w-12 h-0.5 bg-[#338B74] rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
