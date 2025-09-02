import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
  bg?: string;
}

const HomeLayout = ({ children, bg='bg-gradient-to-r from-[#fffffe] via-[#fff8e7] to-[#ffebe9]' }: MainLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // always scroll to top when the route changes
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  return (
    <div className={`font-roobert flex flex-col min-h-screen ${bg} text-foreground transition-colors duration-300`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;