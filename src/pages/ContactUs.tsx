import HomeLayout from "@/layouts/HomeLayout";
import ContactImage from "@/assets/images/contact.png";
import { useForm } from "react-hook-form";
import { useContactUs } from "@/lib/api";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const { register, handleSubmit, formState, reset } = useForm<{
    name: string;
    email: string;
    message: string;
  }>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const [submitting, setSubmitting] = useState(false);
  const contactMutation = useContactUs();

  async function onSubmit(values: { name: string; email: string; message: string }) {
    setSubmitting(true);
    try {
      await contactMutation.mutateAsync(values);
      toast.success("Thanks! We received your message and will get back to you soon.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#338B74]/30 focus:border-[#338B74]/50 transition-all";

  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              We'd Love to
              <br />
              <span className="text-[#338B74]">Hear From You.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question, want to share an idea, are looking for support,
              or just want to say hello. Our door is always open. Reach out and we'll
              get back to you as soon as we can.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 border-t border-gray-100 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden" data-sr>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image + Contact Info */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <img
                    src={ContactImage}
                    alt="Get in touch with Techwave Africa"
                    className="w-full h-auto rounded-xl mb-8"
                  />

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Contact Information</h4>
                    <p className="text-sm text-gray-500 mb-5">You can also reach us directly</p>

                    <div className="space-y-3 mb-6">
                      <a
                        href="mailto:contactus@techwaveafrica.com"
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#338B74]/8 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#338B74" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        contactus@techwaveafrica.com
                      </a>
                      <a
                        href="tel:+2349056578947"
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#338B74]/8 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#338B74" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                        </div>
                        +234 905 6578 947
                      </a>
                    </div>

                  </div>
                </div>

                {/* Right: Form */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Send us a message</h3>
                  <p className="text-sm text-gray-500 mb-7">Whatever's on your mind, we're happy to hear it. We'll get back to you soon.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        {...register("name", { required: true })}
                        type="text"
                        className={inputClass}
                        placeholder="Your full name"
                      />
                      {formState.errors.name && (
                        <p className="text-xs text-red-500 mt-1.5">Please enter your name.</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        {...register("email", { required: true })}
                        type="email"
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                      {formState.errors.email && (
                        <p className="text-xs text-red-500 mt-1.5">Please enter your email.</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        {...register("message", { required: true })}
                        rows={5}
                        className={inputClass}
                        placeholder="Tell us what's on your mind..."
                      />
                      {formState.errors.message && (
                        <p className="text-xs text-red-500 mt-1.5">Please enter a message.</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#338B74] hover:bg-[#2a7562] text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#338B74]/20"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
