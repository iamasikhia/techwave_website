/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeLayout from "@/layouts/HomeLayout";
import CommunityImage from "@/assets/images/community.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useJoinTechwaveCommunity } from "@/lib/api";
import toast from "react-hot-toast";

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    color: "bg-[#FFFBEB] text-amber-600",
    title: "Technology Training",
    description:
      "Practical, hands-on programmes that equip you with real digital skills, from building your first product to leveraging AI in your business. No jargon, no fluff. Just skills that work.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    color: "bg-[#F0FDFA] text-[#338B74]",
    title: "Community & Network",
    description:
      "Connect with entrepreneurs across Africa who are building, launching, and scaling. Share resources, find collaborators, get feedback, and forge relationships that accelerate your journey.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    color: "bg-[#FFF1F2] text-rose-500",
    title: "Mentorship",
    description:
      "Get paired with experienced founders, investors, and industry leaders who provide honest guidance, strategic thinking, and the kind of accountability that turns ambition into results.",
  },
];

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });

  const joinCommunityMutation = useJoinTechwaveCommunity();

  const onSubmit = async (data: { email: string }) => {
    setSubmitting(true);
    try {
      await joinCommunityMutation.mutateAsync(data);
      toast.success("Welcome to the community! Check your email for next steps.");
      reset();
      setTimeout(() => setIsModalOpen(false), 2000);
    } catch (err) {
      const message =
        typeof err === "object" && err !== null && "response" in err
          ? (err as any).response?.data?.message
          : null;
      toast.error(message || "Failed to join. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
                  Techwave Africa Community
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
                  Built for Entrepreneurs
                  <br />
                  <span className="text-[#338B74]">Who Dare to Build.</span>
                </h1>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                  Join a growing community of African entrepreneurs who are learning together,
                  supporting each other, and building businesses that create real impact across
                  the continent and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white font-semibold rounded-full px-7 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
                  >
                    Join the Community
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <p className="text-sm text-gray-400 self-center">Free to join · No spam</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={CommunityImage}
                  alt="Techwave Africa Community"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="bg-gray-50 border-t border-gray-100 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-semibold rounded-full px-3.5 py-1.5 mb-5 uppercase tracking-wider">
                What You Get
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-950 mb-4 tracking-tight">
                Three pillars. One mission.
              </h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                Everything you need to grow as an entrepreneur, under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.color}`}>
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Manifesto */}
        <section className="bg-[#0f1f1a] px-6 py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#338B74]/20 to-transparent" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/15 border border-[#338B74]/30 text-[#6ee7b7] text-xs font-semibold rounded-full px-3.5 py-1.5 mb-8 uppercase tracking-wider">
              Our Belief
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10">
              "Africa does not lack talent, ideas, or ambition. What our entrepreneurs need
              is the <span className="text-[#338B74]">right skills</span>, the{" "}
              <span className="text-[#338B74]">right people</span>, and the{" "}
              <span className="text-[#338B74]">right guidance</span>. That is exactly what
              Techwave Africa is here to provide."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-0.5 bg-[#338B74] rounded-full" />
              <p className="text-gray-400 text-sm">Asikhia Iseoluwa · Founder, Techwave Africa</p>
              <div className="w-10 h-0.5 bg-[#338B74] rounded-full" />
            </div>
          </div>
        </section>

      </div>

      {/* Join Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#338B74]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#338B74" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Join Techwave Africa</h2>
              <p className="text-sm text-gray-500">Enter your email and we'll send you everything you need to get started.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#338B74]/30 focus:border-[#338B74]/50 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setIsModalOpen(false); reset(); }}
                  className="flex-1 px-4 py-3 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-3 text-sm bg-[#338B74] text-white font-semibold rounded-xl hover:bg-[#2a7562] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? "Joining..." : "Join the Community"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </HomeLayout>
  );
}
