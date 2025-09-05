/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import HomeLayout from "@/layouts/HomeLayout";
import CommunityImage from "@/assets/images/community.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useJoinTechwaveCommunity } from "@/lib/api";
import toast from "react-hot-toast";

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<{ email: string }>({
    defaultValues: { email: '' }
  });

  const joinCommunityMutation = useJoinTechwaveCommunity();

  const onSubmit = async (data: { email: string }) => {
    setSuccessMessage(null);
    setErrorMessage(null);
    setSubmitting(true);

    try {
      await joinCommunityMutation.mutateAsync(data);
      toast.success('Welcome to the community! You\'ll receive updates and invitations via email.');
      reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccessMessage(null);
      }, 2000);
    } catch (err) {
      if (typeof err === "object" && err !== null && "response" in err && typeof (err as any).response === "object" && (err as any).response !== null && "data" in (err as any).response && typeof (err as any).response.data === "object" && (err as any).response.data !== null && "message" in (err as any).response.data) {
        toast.error((err as any).response.data.message || 'Failed to join community. Please try again.');
      } else {
        toast.error('Failed to join community. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
    setErrorMessage(null);
    reset();
  };
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

              <Button 
                className="bg-[#338B74] text-white rounded-2xl px-4 py-2 h-10 text-base font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
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

        {/* Join Community Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 bg-opacity-20 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-black mb-2">Join Our Community</h2>
                <p className="text-gray-600">Enter your email to get started with the Techwave community</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#338B74] focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-4 py-3 bg-[#338B74] text-white rounded-lg hover:bg-emerald-700 disabled:opacity-60 transition-colors"
                  >
                    {submitting ? 'Joining...' : 'Join Community'}
                  </button>
                </div>

                <div aria-live="polite">
                  {successMessage && (
                    <p className="text-green-600 text-sm text-center">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-red-600 text-sm text-center">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </HomeLayout>
  );
}
