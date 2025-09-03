import { Badge } from "@/components/ui/badge";
import HomeLayout from "@/layouts/HomeLayout";
import ContactImage from "@/assets/images/contact.png";
import { useForm } from 'react-hook-form';
import { useContactUs } from '@/lib/api';
import { useState } from 'react';
import toast from "react-hot-toast";

export default function ContactUs() {
  const { register, handleSubmit, formState, reset } = useForm<{
    name: string;
    email: string;
    interest: string;
    budget: string;
    message: string;
  }>({
    defaultValues: {
      name: '',
      email: '',
      interest: '',
      budget: '',
      message: '',
    },
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const contactMutation = useContactUs();

  async function onSubmit(values: { name: string; email: string; interest: string; budget: string; message: string }) {
    setSuccessMessage(null);
    setErrorMessage(null);
    setSubmitting(true);
    try {
      await contactMutation.mutateAsync(values);
      toast.success('Thanks — we received your message and will get back to you soon.')
      setSuccessMessage('Thanks — we received your message and will get back to you soon.');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit. Please try again later.');
      setErrorMessage('Failed to submit. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

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
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
              Consult with our product
              analytics expert
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              Have questions about pricing, plans, or Growthly? Fill out the
              form, and our product analytics expert will get in touch with you
              directly.
            </p>
            <div className="h-96"></div>
          </div>
        </section>
        <section className="min-h-[500px] bg-white relative">
          {/* Contact form section */}
          <div className="absolute left-0 right-0 mx-auto max-w-6xl transform -translate-y-[300px] px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left: Image and contact card */}
                <div>
                  <img src={ContactImage} alt="Support" className="w-full h-auto rounded-lg mb-6" />

                  <div className="bg-[#FFF2E8] rounded-xl p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-xl">Contact Information:</h4>
                        <p className="text-sm text-[#888888] mt-2">You can also reach us on other platforms</p>

                        <div className="mt-4 text-sm text-[#374151]">
                          <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:Myidea@techwaveteam.com" className="underline">Myidea@techwaveteam.com</a>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <a href="tel:+2349056578947" className="underline">+234 905 6578 947</a>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm">
                        <h5 className="font-semibold">Socials</h5>
                        <ul className="mt-3 space-y-2 text-sm text-[#888888]">
                          <li><a href="#" className="underline">Instagram</a></li>
                          <li><a href="#" className="underline">Twitter</a></li>
                          <li><a href="#" className="underline">Facebook</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div>
                  <div className="bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                        <input
                          id="name"
                          {...register('name', { required: true })}
                          type="text"
                          className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none"
                          placeholder="Your name"
                        />
                        {formState.errors.name && (
                          <p className="text-xs text-red-500 mt-1">Please enter your name.</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                          id="email"
                          {...register('email', { required: true })}
                          type="email"
                          className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none"
                          placeholder="you@company.com"
                        />
                        {formState.errors.email && (
                          <p className="text-xs text-red-500 mt-1">Please enter your email.</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="interest" className="text-sm font-medium text-gray-700">What service are you interested in</label>
                        <select
                          id="interest"
                          {...register('interest')}
                          className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none"
                        >
                          <option value="">Select project type</option>
                          <option value="AI Integration">AI Integration</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="Product Development">Product Development</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="text-sm font-medium text-gray-700">Budget</label>
                        <select
                          id="budget"
                          {...register('budget')}
                          className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none"
                        >
                          <option value="">Select project budget</option>
                          <option value="$5k - $10k">$5k - $10k</option>
                          <option value="$10k - $50k">$10k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          {...register('message', { required: true })}
                          rows={6}
                          className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none"
                          placeholder="Tell us about your project"
                        />
                        {formState.errors.message && (
                          <p className="text-xs text-red-500 mt-1">Please enter a message.</p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-[#127a5c] text-white py-3 rounded-lg font-semibold disabled:opacity-60"
                        >
                          {submitting ? 'Sending...' : 'Submit'}
                        </button>
                      </div>

                      <div aria-live="polite">
                        {successMessage && (
                          <p className="text-sm text-green-600">{successMessage}</p>
                        )}
                        {errorMessage && (
                          <p className="text-sm text-red-600">{errorMessage}</p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
