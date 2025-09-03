import logo from "@/assets/images/logo.svg";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuthStore } from "@/stores/authStore";
import { ChevronDown, LogOut } from "lucide-react";
import LogoutConfirmModal from "./LogoutModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";

export default function DashboardHeader() {
  const [showLogout, setShowLogout] = useState(false);

  const { user, logout } = useAuthStore();
  const confirmLogout = () => {
    logout();
    setShowLogout(false);
    console.log('object')
  };
  return (
    <>
    <header className="fixed top-0 left-0 right-0 py-4 z-50 flex justify-center pointer-events-none">
      <div className="w-4/6 pointer-events-auto bg-white/90 backdrop-blur border border-white rounded-2xl max-w-8xl mx-auto px-2 h-16 shadow-sm transition-colors">
        <div className="w-full flex items-center justify-between h-16">
          <div className="flex items-center justify-center pr-12 lg:pr-40">
            <Link to={routes.home}>
              <img src={logo} alt="CentriSync Logo" className="" />
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 hover:bg-gray-100 px-2 lg:px-3"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user?.avatar || "/placeholder-user.jpg"} />
                  <AvatarFallback className="bg-gray-900 text-white text-sm">
                    {user?.firstName?.toLocaleUpperCase().charAt(0)}
                    {user?.lastName?.toLocaleUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-bold text-black hidden lg:block">
                  {user?.firstName} {user?.lastName}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500 hidden lg:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 text-xs">
              <DropdownMenuItem
                className="cursor-pointer text-[#F75555]"
                onClick={() => setShowLogout(true)}
              >
                <LogOut color="#F75555" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
    </header>
    <LogoutConfirmModal
        open={showLogout}
        onCancel={() => setShowLogout(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
}
