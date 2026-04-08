import logo from "@/assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { routes } from "@/lib/route";

const navLinks = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label: "Our Story", href: routes.ourStory },
  { label: "Portfolio", href: routes.portfolio },
  { label: "Tech News", href: routes.blog },
  { label: "Community", href: routes.community },
];

export default function Footer() {
  const location = useLocation();

  return (
    <section>
      {/* CTA Banner */}
      {location.pathname !== routes.contact && (
        <div className="relative bg-[#0f1f1a] overflow-hidden">
          {/* Subtle geometric accent */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#338B74]/10 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#338B74]/8 blur-3xl" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#338B74]/20 to-transparent" />
          </div>

          <div className="relative max-w-4xl mx-auto px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/15 border border-[#338B74]/30 text-[#6ee7b7] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] animate-pulse" />
              Join the movement
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white mb-5 leading-tight tracking-tight">
              Africa's entrepreneurs
              <br />
              <span className="text-[#338B74]">are ready to build.</span>
            </h2>

            <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Get access to technology training, a community of driven founders, and mentors
              who have walked the path. Your next chapter starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={routes.community}
                className="inline-flex items-center gap-2 bg-[#338B74] hover:bg-[#2a7562] text-white font-semibold rounded-full px-7 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-[#338B74]/25"
              >
                Join the Community
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to={routes.contact}
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium rounded-full px-7 py-3 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to={routes.home} className="flex items-center shrink-0">
              <img src={logo} alt="Techwave Africa" className="h-7 w-auto" />
            </Link>

            <nav className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-sm text-gray-400 shrink-0">
              © {new Date().getFullYear()} Techwave Africa
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
