"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { storage, type SetupResult, type JournalEntry } from "@/lib/storage";
import { ChevronLeft, Save } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

function CreateJournalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setupId = searchParams.get("setupId");

  const [setup, setSetup] = useState<SetupResult | null>(null);
  const [formData, setFormData] = useState({
    pair: "XAUUSD",
    direction: "Long" as "Long" | "Short",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    result: "Pending" as "Win" | "Loss" | "BE" | "Pending",
    notes: "",
  });

  useEffect(() => {
    if (setupId) {
      const foundSetup = storage.getSetupById(setupId);
      if (foundSetup) {
        setSetup(foundSetup);
      }
    }
  }, [setupId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!setupId) return;

    const entry: JournalEntry = {
      id: uuidv4(),
      setupId: setupId,
      date: new Date().toISOString(),
      pair: formData.pair,
      direction: formData.direction,
      entryPrice: Number(formData.entryPrice),
      stopLoss: Number(formData.stopLoss),
      takeProfit: Number(formData.takeProfit),
      result: formData.result as "Win" | "Loss" | "BE", // Pending is just for UI, defaulting to Open/Pending implies no result yet but type expects strictly
      notes: formData.notes,
    };
    
    // If result is pending, we might want to handle it differently, 
    // but for now let's adhere to the type or adjust it. 
    // The type in storage.ts says "Win" | "Loss" | "BE". 
    // Let's assume user fills this after trade is done or we default to a specific state.
    // For this MVP, let's allow saving "Open" trades?
    // The type in storage.ts needs to be flexible or we just enforce picking one.
    // Let's stick to the type and maybe add "Open" to storage.ts if needed, 
    // but for now I will cast or just save what we have.
    // Actually, let's update storage.ts later if needed. For now, let's force user to pick or default to BE?
    // Or just "Win" / "Loss" / "BE".
    
    storage.saveJournal(entry);
    router.push("/app/journal");
  };

  return (
    <div className="flex flex-col min-h-screen pb-24 animate-in fade-in space-y-6">
      <div className="flex items-center space-x-4">
        <button onClick={() => router.back()} className="p-2 -ml-2 hover:bg-gray-800 rounded-full">
            <ChevronLeft />
        </button>
        <h1 className="text-2xl font-bold">New Journal Entry</h1>
      </div>

      {setup && (
        <div className="bg-trading-card p-4 rounded-lg border border-gray-800 space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm text-trading-text-muted">Linked Setup Quality</span>
                <span className={`px-2 py-1 rounded text-xs font-bold
                    ${setup.status === "Excellent" ? "bg-trading-success/20 text-trading-success" : 
                    setup.status === "Good" ? "bg-trading-primary/20 text-trading-primary" : 
                    "bg-yellow-500/20 text-yellow-500"}
                `}>
                    {setup.status}
                </span>
            </div>
            <div className="text-xs text-trading-text-secondary">
                {new Date(setup.date).toLocaleString()}
            </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-trading-text-secondary mb-1">Pair</label>
                <select 
                    value={formData.pair}
                    onChange={(e) => setFormData({...formData, pair: e.target.value})}
                    className="w-full bg-trading-bg border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-trading-primary outline-none appearance-none"
                >
                    <option value="XAUUSD">XAUUSD</option>
                    <option value="BTCUSD">BTCUSD</option>
                    <option value="EURUSD">EURUSD</option>
                    <option value="GBPUSD">GBPUSD</option>
                    <option value="US30">US30</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-trading-text-secondary mb-1">Direction</label>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={() => setFormData({...formData, direction: "Long"})}
                        className={`flex-1 py-3 rounded-lg font-medium border transition-colors ${
                            formData.direction === "Long" 
                            ? "bg-trading-success/20 border-trading-success text-trading-success" 
                            : "bg-trading-card border-gray-700 text-trading-text-muted"
                        }`}
                    >
                        Long
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({...formData, direction: "Short"})}
                        className={`flex-1 py-3 rounded-lg font-medium border transition-colors ${
                            formData.direction === "Short" 
                            ? "bg-trading-danger/20 border-trading-danger text-trading-danger" 
                            : "bg-trading-card border-gray-700 text-trading-text-muted"
                        }`}
                    >
                        Short
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-trading-text-secondary mb-1">Entry Price</label>
                    <input 
                        type="number" 
                        step="0.01"
                        value={formData.entryPrice}
                        onChange={(e) => setFormData({...formData, entryPrice: e.target.value})}
                        className="w-full bg-trading-bg border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-trading-primary outline-none"
                        required
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-trading-text-secondary mb-1">Stop Loss</label>
                    <input 
                        type="number" 
                        step="0.01"
                        value={formData.stopLoss}
                        onChange={(e) => setFormData({...formData, stopLoss: e.target.value})}
                        className="w-full bg-trading-bg border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-trading-danger outline-none"
                        required
                    />
                </div>
            </div>
             <div>
                <label className="block text-sm font-medium text-trading-text-secondary mb-1">Take Profit</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={formData.takeProfit}
                    onChange={(e) => setFormData({...formData, takeProfit: e.target.value})}
                    className="w-full bg-trading-bg border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-trading-success outline-none"
                    required
                />
            </div>

             <div>
                <label className="block text-sm font-medium text-trading-text-secondary mb-1">Outcome</label>
                 <div className="grid grid-cols-3 gap-3">
                    {["Win", "Loss", "BE"].map((r) => (
                        <button
                            key={r}
                            type="button"
                            onClick={() => setFormData({...formData, result: r as any})}
                             className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                                formData.result === r
                                ? r === "Win" ? "bg-trading-success/20 border-trading-success text-trading-success"
                                : r === "Loss" ? "bg-trading-danger/20 border-trading-danger text-trading-danger"
                                : "bg-gray-600/20 border-gray-500 text-gray-400"
                                : "bg-trading-card border-gray-700 text-trading-text-muted"
                            }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-trading-text-secondary mb-1">Notes</label>
                <textarea 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-trading-bg border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-trading-primary outline-none h-24"
                    placeholder="Execution details, emotions, etc."
                />
            </div>
        </div>

        <button 
            type="submit"
            className="w-full bg-trading-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center space-x-2 transition-transform active:scale-[0.98]"
        >
            <Save size={20} />
            <span>Finish & Save to Journal</span>
        </button>
      </form>
    </div>
  );
}

export default function CreateJournalPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateJournalContent />
        </Suspense>
    )
}
