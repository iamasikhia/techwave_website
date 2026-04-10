import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

interface MainLayoutProps {
  children: ReactNode;
  bg?: string;
}

const HomeLayout = ({ children, bg='bg-white' }: MainLayoutProps) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }

    // Page entrance animation
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
      );
    }

    // Scroll-reveal animations — runs after entrance anim settles
    const timer = setTimeout(() => {
      const revealTriggers: ScrollTrigger[] = [];

      // Sections fade + rise
      gsap.utils.toArray<HTMLElement>("[data-sr]").forEach((el) => {
        const delay = parseFloat(el.dataset.srDelay ?? "0");
        revealTriggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: () =>
              gsap.fromTo(
                el,
                { opacity: 0, y: 44 },
                { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay }
              ),
          })
        );
      });

      // Staggered children (cards, grid items)
      gsap.utils.toArray<HTMLElement>("[data-sr-group]").forEach((group) => {
        const children = group.children;
        revealTriggers.push(
          ScrollTrigger.create({
            trigger: group,
            start: "top 88%",
            once: true,
            onEnter: () =>
              gsap.fromTo(
                children,
                { opacity: 0, y: 36 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }
              ),
          })
        );
      });

      return () => revealTriggers.forEach((t) => t.kill());
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`flex flex-col min-h-screen ${bg} text-foreground transition-colors duration-300`}>
      <Header />
      <main ref={mainRef} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;