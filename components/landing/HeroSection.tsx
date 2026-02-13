import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-trading-primary/10 rounded-full blur-3xl opacity-50" />
         <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-trading-success/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trading-border border border-gray-700 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <ShieldCheck className="w-4 h-4 text-trading-primary" />
           <span className="text-xs font-mono text-trading-text-muted uppercase tracking-widest">
             Sistem Disiplin Trading Berbasis SOP
           </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Berhenti <span className="text-trading-danger">Revenge Trade</span>. <br />
          Mulai Trading dengan <span className="text-trading-primary">Sistem</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-trading-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          TraderGuard bukan signal provider. Ini adalah <strong>sistem validasi kualitas setup</strong> untuk mencegah Anda dari entry impulsif dan menghancurkan akun sendiri.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-trading-primary hover:bg-blue-600 active:bg-blue-700 text-white rounded-xl font-bold shadow-glow transition-all flex items-center justify-center gap-2">
            <span>Dapatkan Akses Lifetime</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-trading-card border border-trading-border hover:bg-trading-border text-trading-text-primary rounded-xl font-bold transition-all flex items-center justify-center">
            Pelajari Cara Kerjanya
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-trading-text-muted opacity-60">
          *Kami tidak menjanjikan profit instan. Kami menjanjikan disiplin.
        </p>
      </div>
    </section>
  );
};
