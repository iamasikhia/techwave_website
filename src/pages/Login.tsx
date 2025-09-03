/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import HomeLayout from "@/layouts/HomeLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/lib/api";
import { useAuthStore } from "@/stores/authStore";
import { routes } from "@/lib/route";
import Hello from "@/assets/images/blog.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { saveUser } = useAuthStore();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }
    setLoading(true);
    try {
      const resp = await authApi.login({ email, password });
      // Log the response as requested
      await saveUser(resp.user, resp.token);
      console.log("Login response:", resp);
      // navigate to home or dashboard
      navigate(routes.dashboardBlogs);
    } catch (err: unknown) {
      let message = "Login failed";
      if (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof (err as any).response === "object" &&
        (err as any).response !== null &&
        "data" in (err as any).response
      ) {
        message = (err as any).response.data.message;
      }
      setError(message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <HomeLayout>
      <div className="pt-10">
        <section className="pt-20 md:pt-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-3 py-2 rounded-full bg-white text-gray-600 border border-gray-200"
            >
              <div className="h-4 w-4 border border-[#FFB804] rounded-full flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-[#FFB804] rounded-full" />
              </div>
              Login
            </Badge>
            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4 leading-tight">
              Welcome back — sign in to continue
            </h1>
            <p className="text-sm text-gray-600">
              Enter your account details below.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 mt-8">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                {error && (
                  <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded">
                    {error}
                  </div>
                )}

                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300 outline-none"
                  placeholder="you@company.com"
                  required
                />

                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded border border-gray-200 focus:ring-2 focus:ring-yellow-300 outline-none"
                  placeholder="Your password"
                  required
                />

                <div className="flex items-center justify-between mb-4">
                  <label className="inline-flex items-center text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm text-yellow-600 hover:underline"
                  >
                    Forgot?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded font-medium disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
