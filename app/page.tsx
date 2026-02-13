"use client";

import Link from "next/link";
import { LineChart, BookOpen, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[80vh] justify-center space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter text-trading-text-primary">
          TradeGuard
        </h1>
        <p className="text-trading-text-secondary text-lg">
          Discipline. Patience. Profit.
        </p>
      </div>

      <div className="grid gap-4">
        <Link 
          href="/analyze"
          className="group relative overflow-hidden bg-trading-card border border-gray-800 p-6 rounded-2xl hover:border-trading-primary transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-trading-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center space-x-4">
            <div className="p-3 bg-trading-primary/20 rounded-xl text-trading-primary">
              <LineChart size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-trading-text-primary">Analyze Setup</h2>
              <p className="text-sm text-trading-text-secondary">Validate your trade before entry</p>
            </div>
          </div>
        </Link>

        <Link 
          href="/journal"
          className="group relative overflow-hidden bg-trading-card border border-gray-800 p-6 rounded-2xl hover:border-trading-success transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-trading-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center space-x-4">
             <div className="p-3 bg-trading-success/20 rounded-xl text-trading-success">
              <BookOpen size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-trading-text-primary">Journal</h2>
              <p className="text-sm text-trading-text-secondary">Review your performance</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-trading-card/50 rounded-xl p-4 border border-gray-800/50">
        <div className="flex items-center space-x-2 text-trading-text-muted mb-2">
          <Clock size={16} />
          <span className="text-xs font-medium uppercase tracking-wider">Recent Activity</span>
        </div>
        <p className="text-sm text-trading-text-secondary text-center py-4">
          No recent activity
        </p>
      </div>
    </div>
  );
}