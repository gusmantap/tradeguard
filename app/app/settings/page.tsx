"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const clearData = () => {
    if (confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      localStorage.clear();
      alert("Data cleared.");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-24 space-y-6">
       <h1 className="text-2xl font-bold text-trading-text-primary">Settings</h1>

       <div className="bg-trading-card rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
                <h2 className="font-medium text-lg">Data Management</h2>
            </div>
            <div className="p-4">
                <button 
                    onClick={clearData}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-trading-danger/10 text-trading-danger hover:bg-trading-danger/20 transition-colors"
                >
                    <span className="font-medium">Clear All Data</span>
                    <Trash2 size={18} />
                </button>
                <p className="mt-2 text-xs text-trading-text-muted">
                    Permanently remove all your setups and journal entries from this device.
                </p>
            </div>
       </div>

       <div className="bg-trading-card rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
                <h2 className="font-medium text-lg">About</h2>
            </div>
            <div className="p-4 text-trading-text-secondary text-sm space-y-2">
                <p>TradeGuard v1.0.0</p>
                <p>Strategy: Basic Trend Follow + CTB</p>
            </div>
       </div>
    </div>
  );
}
