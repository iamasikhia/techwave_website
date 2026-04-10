import HomeLayout from "@/layouts/HomeLayout";
import EdifyImage from "@/assets/images/edify.jpg";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

const stats = [
  { value: "9M+", label: "Children impacted" },
  { value: "31,000", label: "Partner schools" },
  { value: "9", label: "African countries" },
  { value: "$20M+", label: "EdTech loan budget" },
];

const stakeholders = [
  "Minister of Education of Nigeria",
  "CEOs & Executive Directors",
  "Country Managers",
  "International Program Managers",
  "Education Specialists",
  "Channel Managers & VPs",
  "Directors of Operations",
];

export default function EdifyStory() {
  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link
              to={routes.portfolio}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Portfolio
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              Edify: Bringing Technology
              <br />
              <span className="text-[#338B74]">to Africa's Classrooms</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              How a 9-month consultancy engagement helped one of the world's largest
              education impact organisations launch EdTech across Africa.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <img
            src={EdifyImage}
            alt="Edify schools across Africa"
            className="w-full h-72 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Stats */}
        <section className="bg-gray-50 border-y border-gray-100 px-6 py-12 mb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6" data-sr-group>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-950 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="max-w-3xl mx-auto px-6 pb-24 space-y-12" data-sr>

          {/* About Edify */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              About Edify
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Edify is a 16-year-old global impact organisation providing access to education across
              Africa. They have impacted over 9 million children across 31,000 private schools in 9
              African countries, supported by a global team of over 300 staff. Their work spans
              financial support, Christ-centred education, and training for their partner schools.
            </p>
          </div>

          {/* The Problem */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF1F2] text-rose-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              The Challenge
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">When Covid stopped the classrooms</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              When Covid hit in 2020, there was a total pause on movement around the world. Edify's
              operations and continuous impact across Africa were severely disrupted. Children could
              no longer go to school, and this lasted for over 10 months, creating a significant gap
              in learning and leaving thousands of kids with unstructured idle time.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Driven by a mission to equip children with digital skills and prepare them for the
              world of work, Edify set out to find a new way to ensure continuous learning. That
              is where EdTech came in.
            </p>
          </div>

          {/* The EdTech Project */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFFBEB] text-amber-600 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              The EdTech Project
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">A $20M investment in Africa's future</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              The EdTech project launched in 2022 with over $20,000,000 budgeted as an EdTech loan
              for partner schools. Schools go through an EdTech requirements process to understand
              what they need for implementation. With a total cost breakdown, they can then request
              capital from the available loan at a 6% annual interest rate.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Since its inception, Edify has integrated EdTech into over 3,300 of their 31,000
              schools, building partnerships with EdTech vendors across Africa and impacting millions
              of children who had never had access to this technology before.
            </p>
          </div>

          {/* Turning Point divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-semibold text-[#338B74] uppercase tracking-widest">The Turning Point</span>
            </div>
          </div>

          {/* My Role */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F0FDFA] text-[#338B74] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              My Role
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Selected as consultant from Notre Dame ESTEEM</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              As the mission grew bigger, Edify needed more experienced hands. They needed someone
              with a passion for the project, a belief in the mission, and hands-on experience with
              educational technologies. As a student at the Notre Dame ESTEEM program, I was
              selected for this project and given the opportunity to be part of a massive global
              impact initiative.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              My mandate was clear: find and connect with EdTech vendors across Africa that Edify
              could partner with, create computer lab models to assess budget and suitability for
              schools, and build a 3 to 5-year financial forecast to help schools plan ahead.
            </p>
          </div>

          {/* The Work */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              The Work
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9 months. 200+ stakeholders. 12 countries.</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Over a 9-month engagement with the Edify team, I contacted over 200 stakeholders and
              had meaningful conversations with 50 of them across 12 different countries, spanning
              the United States, Europe, and Africa. These conversations shaped the strategy for
              EdTech expansion and helped identify the right partners for Edify's mission.
            </p>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Stakeholders engaged</h3>
              <div className="flex flex-wrap gap-2">
                {stakeholders.map((s) => (
                  <span key={s} className="text-xs text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Global OEMs & partners engaged</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Conversations were held with some of the world's leading technology manufacturers
                and global impact organisations to explore partnership opportunities for Edify's
                EdTech rollout across Africa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Lenovo", "Dell", "HP", "World Computer Exchange"].map((oem) => (
                  <span key={oem} className="text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1.5">
                    {oem}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              I built a financial forecast from the Edify schools' perspective, helping them plan
              ahead and understand the annual cost requirements for EdTech implementation. I also
              provided recommendations on how they could leverage the partnerships built to begin
              EdTech rollout across target countries.
            </p>
          </div>

          {/* Outcome */}
          <div className="bg-[#0f1f1a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#338B74]/10 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#338B74]/15 border border-[#338B74]/30 text-[#6ee7b7] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
                Outcome
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">EdTech launched in Nigeria</h2>
              <p className="text-base text-gray-400 leading-relaxed">
                As a direct result of the work done, Edify successfully launched EdTech in Nigeria
                through the relationship built with one of the country's leading technology
                implementation vendors, Edgenet Solutions. A partnership that began with a
                conversation is now creating real digital access for children across Nigerian
                classrooms.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link
              to={routes.portfolio}
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full px-6 py-2.5 transition-all duration-200 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Portfolio
            </Link>
          </div>

        </section>
      </div>
    </HomeLayout>
  );
}
