import DashboardHeader from "@/components/DashboardHeader";
import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  return (
    <div
      className={`font-roobert flex flex-col min-h-screen text-foreground transition-colors duration-300`}
    >
      <DashboardHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
