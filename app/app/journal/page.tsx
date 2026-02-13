"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { storage, type JournalEntry } from "@/lib/storage";
import { Plus, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function JournalPage() {
  const router = useRouter();
  const [journals, setJournals] = useState<JournalEntry[]>([]);

  useEffect(() => {
    setJournals(storage.getJournals());
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-24 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-trading-text-primary">Trade Journal</h1>
        {/* <button 
            onClick={() => router.push('/app/analyze')}
            className="p-2 bg-trading-primary rounded-full text-white shadow-lg shadow-blue-900/20"
        >
            <Plus size={24} />
        </button> */}
      </div>

        {journals.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-trading-text-muted space-y-4">
                <p>No journal entries yet.</p>
                <button 
                    onClick={() => router.push('/app/analyze')}
                    className="text-trading-primary font-medium hover:underline"
                >
                    Start a new analysis
                </button>
            </div>
        ) : (
            <div className="space-y-4">
                {journals.map((entry) => (
                    <div key={entry.id} className="bg-trading-card p-4 rounded-xl border border-gray-800 flex justify-between items-center">
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                                <span className="font-bold text-lg">{entry.pair}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                                    entry.direction === "Long" 
                                    ? "bg-trading-success/10 text-trading-success" 
                                    : "bg-trading-danger/10 text-trading-danger"
                                }`}>
                                    {entry.direction}
                                </span>
                            </div>
                            <div className="text-xs text-trading-text-secondary">
                                {new Date(entry.date).toLocaleDateString()}
                            </div>
                        </div>

                        <div className="text-right space-y-1">
                            <div className={`flex items-center justify-end font-bold ${
                                entry.result === "Win" ? "text-trading-success" : 
                                entry.result === "Loss" ? "text-trading-danger" : 
                                "text-gray-400"
                            }`}>
                                {entry.result === "Win" && <TrendingUp size={16} className="mr-1" />}
                                {entry.result === "Loss" && <TrendingDown size={16} className="mr-1" />}
                                {entry.result === "BE" && <Minus size={16} className="mr-1" />}
                                {entry.result}
                            </div>
                             <div className="text-xs text-trading-text-muted">
                                Entry: {entry.entryPrice}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}
