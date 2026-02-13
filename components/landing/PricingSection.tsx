import React from "react";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-1 border border-trading-border shadow-2xl">
            <div className="bg-trading-bg rounded-[22px] p-8 md:p-12 text-center h-full flex flex-col">
                <div className="mb-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-trading-primary/10 text-trading-primary text-sm font-bold mb-4">
                        LIFETIME ACCESS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Rp 150.000
                    </h2>
                    <p className="text-trading-text-muted uppercase tracking-widest text-xs">Sekali Bayar • Tanpa Langganan</p>
                </div>

                <div className="py-8 border-y border-trading-border/50 space-y-4 mb-8">
                    <p className="text-trading-text-secondary italic">
                        "Jauh lebih murah dibandingkan 1x Stop Loss (SL) di XAUUSD."
                    </p>
                </div>

                <ul className="text-left space-y-4 mb-10 mx-auto max-w-xs">
                    <li className="flex items-center gap-3 text-white">
                        <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>Unlimited Setup Validations</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                        <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>Full Psychology Checklist</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                        <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>Journal History & Analytics</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                        <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-black" />
                        </div>
                        <span>Dark Mode Friendly UI</span>
                    </li>
                </ul>

                <Link href="/app/analyze" className="mt-auto w-full py-5 bg-trading-primary hover:bg-blue-600 text-white rounded-xl font-bold shadow-glow text-lg flex items-center justify-center gap-2 group transition-all">
                    <Zap className="w-5 h-5 fill-current" />
                    <span>Amankan Akses Sekarang</span>
                </Link>
                
                <p className="mt-6 text-xs text-trading-text-muted">
                    Investasi kecil untuk menjaga modal besar Anda.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
