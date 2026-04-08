import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import { routes } from "@/lib/route";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: routes.home },
    { label: "About Us", href: routes.about },
    { label: "Our Story", href: routes.ourStory },
    { label: "Portfolio", href: routes.portfolio },
    // { label: "Tech News", href: routes.blog },
    { label: "Community", href: routes.community },
  ];

  const scrollToHash = (hash: string) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.querySelector("header");
    const offset = (headerEl instanceof HTMLElement ? headerEl.offsetHeight : 80) + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => scrollToHash(location.hash), 50);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== routes.home) {
        navigate(routes.home + href);
      } else {
        scrollToHash(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 pointer-events-none">
      <div
        className={`pointer-events-auto mx-4 w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-lg shadow-black/5"
            : "bg-white/80 backdrop-blur border-gray-100 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <Link to={routes.home} className="flex items-center shrink-0">
            <img src={logo} alt="Techwave Africa" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none cursor-pointer ${
                  location.pathname === item.href
                    ? "text-[#338B74] bg-[#338B74]/8"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to={routes.contact}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#338B74] hover:bg-[#2a7562] text-white text-sm font-medium rounded-full px-4 h-8 transition-colors duration-200"
            >
              Contact Us
            </Link>

            <button
              aria-label="Toggle navigation menu"
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span
                className={`h-0.5 w-4.5 bg-gray-700 transition-all duration-200 ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4.5 bg-gray-700 my-1 transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4.5 bg-gray-700 transition-all duration-200 ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85%] bg-white shadow-2xl flex flex-col pt-20 pb-8 px-6 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { handleNavClick(item.href); setMobileOpen(false); }}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors focus:outline-none ${
                  location.pathname === item.href
                    ? "text-[#338B74] bg-[#338B74]/8"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              to={routes.contact}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[#338B74] hover:bg-[#2a7562] text-white font-medium rounded-full py-2.5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
