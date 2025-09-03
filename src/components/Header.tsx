import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.svg";
import { routes } from "@/lib/route";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { label: 'Home', href: routes.home },
    { label: 'About Us', href: routes.about },
    { label: 'Services', href: routes.about },
    { label: 'Portfolio', href: routes.portfolio },
    { label: 'Global Tech News', href: routes.blog },
    { label: 'Community', href: routes.community },
  ];

  // Smooth scroll helper
  const scrollToHash = (hash: string) => {
    const id = hash.replace(/^#/, '');
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl = document.querySelector('header');
    const offset = (headerEl instanceof HTMLElement ? headerEl.offsetHeight : 80) + 16; // add margin
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Handle initial hash navigation or hash changes within same page
  useEffect(() => {
    if (location.hash) {
      // Delay to ensure layout is ready
      setTimeout(() => scrollToHash(location.hash), 50);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // If not on home (or main) page but want a section, navigate first then scroll
      if (location.pathname !== routes.home) {
        navigate(routes.home + href);
      } else {
        scrollToHash(href);
      }
    } else {
      navigate(href);
    }
  };

  const contact = () => {
    navigate(routes.contact)
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-4 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white/90 backdrop-blur border border-white rounded-2xl max-w-8xl mx-auto px-2 h-16 shadow-sm transition-colors">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center pr-12 lg:pr-40">
            <img src={logo} alt="CentriSync Logo" className="" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10 text-base">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`${location.pathname === item.href ? "text-[#338B74]" : "text-gray-700"} hover:text-black font-medium focus:outline-none cursor-pointer`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-1 pl-12 lg:pl-40">
            <div className="hidden md:flex items-center justify-center space-x-1">
              <Link
                to={routes.contact}
                className="bg-[#338B74] text-test flex items-center text-white rounded-full px-4 h-8 font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle navigation menu"
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-full border border-gray-300 hover:border-black transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span
                className={`h-0.5 w-5 bg-black transition-transform ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-black my-1 transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-5 bg-black transition-transform ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[80%] bg-white shadow-xl border-l flex flex-col pt-24 pb-6 px-6 gap-8 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col space-y-6 text-lg font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleNavClick(item.href);
                  setMobileOpen(false);
                }}
                className="text-left text-gray-700 hover:text-black focus:outline-none"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Button
              variant="ghost"
              className="bg-[#F2F2F2] text-black hover:bg-black hover:text-white rounded-full h-10 font-medium"
              onClick={() => {
                setMobileOpen(false);
                contact();
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
