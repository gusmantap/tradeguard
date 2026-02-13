import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-gray-900 to-trading-bg">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Siap Berhenti Trading Pakai Ego?
        </h2>
        <p className="text-xl text-trading-text-secondary mb-12">
            Market tidak peduli perasaan Anda. Market hanya merespon eksekusi yang disiplin. 
            Mulai bangun sistem trading yang profesional hari ini.
        </p>
        
        <Link href="/app/analyze" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1">
            <span>Mulai Disiplin Sekarang</span>
            <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
};
