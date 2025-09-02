import logo from "@/assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { routes } from "@/lib/route";

export default function Footer() {
    const location = useLocation()
  return (
    <section>
      <section className={`${location.pathname === routes.contact ? 'hidden' : ''} bg-[#338B74]`}>
        <div className="flex justify-between items-center">
          <div className="hidden lg:block">
            <svg
              width="362"
              height="459"
              viewBox="0 0 362 459"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M304.273 324.557C358.799 293.076 377.48 223.355 346 168.83L117.468 -227L-412.333 78.8807L-126.801 573.437L304.273 324.557Z"
                fill="white"
                fillOpacity="0.03"
              />
              <path
                d="M248.634 299.077C303.159 267.596 321.841 197.875 290.36 143.35L86.7711 -209.277L-443.03 96.6034L-182.44 547.957L248.634 299.077Z"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M207.566 256.088C250.613 231.236 265.361 176.192 240.509 133.146L53.8008 -190.241L-476 115.639L-244.292 516.969L207.566 256.088Z"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-8 py-16 text-center">
            <h1 className="text-4xl font-medium text-white mb-6 leading-tight">
              Let's Build What's Next, Together.
            </h1>

            <p className="text-lg text-white mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              Whether it's designing seamless user experiences, shaping digital
              products, or exploring the future of tech — we're here to bring
              ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={routes.contact} className="bg-[#FFB804] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <svg
              width="390"
              height="459"
              viewBox="0 0 390 459"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.7268 346.557C3.20144 315.076 -15.4802 245.355 16 190.83L244.532 -205L774.333 100.881L488.801 595.437L57.7268 346.557Z"
                fill="white"
                fillOpacity="0.03"
              />
              <path
                d="M113.366 321.077C58.8411 289.596 40.1594 219.875 71.6396 165.35L275.229 -187.277L805.03 118.603L544.44 569.957L113.366 321.077Z"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M154.434 278.088C111.388 253.236 96.6389 198.192 121.492 155.146L308.199 -168.241L838 137.639L606.292 538.969L154.434 278.088Z"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-100 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src={logo} alt="CentriSync Logo" />
            </div>

            <nav className="flex justify-center items-center flex-wrap text-center align-center font-medium text-base text-[#404040] space-x-8 mb-4 md:mb-0">
              <a href="#" className="hover:text-black">
                Home
              </a>
              <a href="#" className="hover:text-black">
                About Us
              </a>
              <a href="#" className="hover:text-black">
                Services
              </a>
              <a href="#" className="hover:text-black">
                Portfolio
              </a>
              <a href="#" className="hover:text-black">
                Global Tech news
              </a>
            </nav>

            <p className="text-[#404040] text-base font-medium">
              © Copyright {new Date().getFullYear()} techwaveafrica.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
