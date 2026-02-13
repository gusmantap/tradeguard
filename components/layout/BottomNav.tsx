"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LineChart, BookOpen, Settings } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Analyze",
      href: "/app/analyze",
      icon: LineChart,
    },
    {
      label: "Journal",
      href: "/app/journal",
      icon: BookOpen,
    },
    {
      label: "Settings",
      href: "/app/settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-trading-card border-t border-trading-border pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? "text-trading-primary" : "text-trading-text-muted hover:text-trading-text-secondary"
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
