"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Bell, MoreVertical } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const getTitle = () => {
    if (pathname === "/") return "TradeGuard";
    if (pathname.startsWith("/app/analyze")) return "Analyze Setup";
    if (pathname.startsWith("/app/journal")) return "Trade Journal";
    if (pathname.startsWith("/app/settings")) return "Settings";
    return "TradeGuard";
  };

  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-trading-card/90 backdrop-blur-md border-b border-trading-border z-50 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        {!isHome && (
          <button 
            onClick={() => router.back()} 
            className="p-1 -ml-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={24} className="text-trading-text-primary" />
          </button>
        )}
        <h1 className="text-xl font-bold text-trading-text-primary tracking-wide">
          {getTitle()}
        </h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 text-trading-text-secondary hover:text-white transition-colors">
            <Bell size={24} />
        </button>
        <button className="p-2 text-trading-text-secondary hover:text-white transition-colors">
            <MoreVertical size={24} />
        </button>
      </div>
    </header>
  );
}
