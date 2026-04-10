import HomeLayout from "@/layouts/HomeLayout";
import WatergatePic from "@/assets/images/watergate-pic.jpg";
import WatergatePic2 from "@/assets/images/watergate.jpg";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

const stats = [
  { value: "2018", label: "Year founded" },
  { value: "3,600+", label: "Young people trained" },
  { value: "300+", label: "Personally mentored in digital skills" },
  { value: "5+", label: "Years of impact" },
];

const programmes = [
  { title: "Agribusiness", description: "Teaching modern, commercially viable farming and agro-processing techniques to young people in the community." },
  { title: "Catering & Food Production", description: "Equipping students with culinary and food business skills to launch and grow food-related enterprises." },
  { title: "Fashion Design", description: "Training young designers in tailoring, pattern cutting, and running a fashion business from scratch." },
  { title: "Digital Skills", description: "300+ young people personally mentored in digital literacy, equipping them for the modern world of work." },
];

export default function WatergateStory() {
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
              Origin Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              Watergate Fountain
              <br />
              <span className="text-[#338B74]">Where It All Began.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              How a community encounter in Ijebu-Ode sparked a movement that has
              trained over 3,600 young Nigerians and laid the foundation for everything
              Techwave Africa stands for today.
            </p>
          </div>
        </section>

        {/* Hero Images */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={WatergatePic}
              alt="Watergate Fountain Institute"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
            <img
              src={WatergatePic2}
              alt="Watergate Fountain trainees"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>
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

          {/* The Encounter */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              The Beginning
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">A community encounter that changed everything</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              In 2018, I volunteered in my community in Ijebu-Ode, Ogun State, Nigeria. It was
              there I came face to face with a reality that many people speak about but few stop to
              act on: young people full of potential, full of hunger to learn and build something
              meaningful, yet locked out of the system by the cost of tertiary education.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              These were not people who lacked ambition. They lacked access. And that distinction
              changed the direction of my life. I knew I could not walk away from it.
            </p>
          </div>

          {/* Founding */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F0FDFA] text-[#338B74] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              The Initiative
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Becoming a founding member of WGFI</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              This encounter inspired me to become one of the founding members of the Watergate
              Fountain Institute (WGFI), a non-profit vocational training initiative built on the
              belief that practical skills can open doors that formal education sometimes cannot.
              Everything we do is free. Every programme, every session, every mentorship hour — no
              cost to the student, ever.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Working alongside a dedicated team of volunteers, we built a programme from the
              ground up. No tuition fees. No prerequisites. We also provide accommodation and
              feeding for our students throughout the programme. WGFI removes every possible
              barrier so that nothing stands between a young person and the skills they need.
            </p>
          </div>

          {/* Programmes */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFFBEB] text-amber-600 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              What We Taught
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills that create real livelihoods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-sr-group>
              {programmes.map((p) => (
                <div key={p.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Mentorship */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF1F2] text-rose-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
              Personal Impact
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">300+ young people. One mentor at a time.</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Beyond the classroom, I personally mentored over 300 young people in digital skills,
              helping them navigate a rapidly changing world of work where technology literacy is no
              longer optional. These were one-on-one and small group sessions focused on practical
              application: how to use a computer, how to get online, how to build something.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Many of these individuals had never had anyone sit with them and say, "you can do
              this." That time spent together was as much about belief as it was about skill.
            </p>
          </div>

          {/* The Impact */}
          <div className="bg-[#0f1f1a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#338B74]/10 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#338B74]/15 border border-[#338B74]/30 text-[#6ee7b7] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-4 uppercase tracking-wider">
                Five Years On
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">3,600 lives. A movement built by volunteers.</h2>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Over five years, WGFI has trained over 3,600 young people across Nigeria,
                including 2,600 entrepreneurs and 1,000 research students. These are real people
                with real businesses, real employment, and real futures that look different because
                of the time we showed up.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                WGFI is aligned with the United Nations' SDG 8: Decent Work and Economic Growth,
                and stands as the founding proof of what Techwave Africa believes at its core.
                When you give people the right skills and the right support, they do not just
                survive. They build.
              </p>
            </div>
          </div>

          {/* Reflection */}
          <div className="border-l-4 border-[#338B74] pl-6">
            <p className="text-xl text-gray-700 font-medium leading-relaxed italic mb-4">
              "Seeing these individuals develop skills to create better futures for themselves has
              been one of the most fulfilling experiences of my life. It is what Watergate started.
              It is what Techwave Africa continues."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#338B74] rounded-full" />
              <p className="text-sm text-gray-500">Asikhia Iseoluwa, Founding Member, WGFI</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="https://watergatefountain.techwaveafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white font-semibold rounded-full px-7 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25 text-sm"
            >
              Visit Watergate Fountain
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <Link
              to={routes.portfolio}
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full px-6 py-3 transition-all duration-200 text-sm"
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
