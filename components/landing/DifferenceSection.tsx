import React from "react";
import { History, Shield, X, Check } from "lucide-react";

export const DifferenceSection = () => {
  return (
    <section className="py-20 bg-trading-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trading Journal vs TraderGuard</h2>
            <p className="text-trading-text-secondary">Kenapa mencatat saja tidak cukup untuk mengubah kebiasaan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Journal Biasa */}
            <div className="p-8 rounded-3xl border border-trading-border bg-trading-bg opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                        <History size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-400">Journal Biasa</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-trading-text-muted">
                        <X className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Mencatat setelah kejadian (Post-Mortem)</span>
                    </li>
                    <li className="flex gap-3 text-trading-text-muted">
                        <X className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Hanya data statistik, tanpa konteks emosi</span>
                    </li>
                    <li className="flex gap-3 text-trading-text-muted">
                        <X className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Tidak mencegah entry bodoh saat itu terjadi</span>
                    </li>
                    <li className="flex gap-3 text-trading-text-muted">
                        <X className="w-5 h-5 text-gray-500 shrink-0" />
                        <span>Sering lupa diisi kalau lagi loss</span>
                    </li>
                </ul>
            </div>

            {/* TraderGuard */}
            <div className="p-8 rounded-3xl border border-trading-primary/50 bg-gradient-to-b from-trading-primary/5 to-trading-bg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-trading-primary/10 blur-3xl rounded-full" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-trading-primary flex items-center justify-center text-white shadow-glow">
                        <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">TraderGuard</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                    <li className="flex gap-3 text-white">
                        <Check className="w-5 h-5 text-trading-primary shrink-0" />
                        <span>Validasi di DEPAN (Pre-Mortem)</span>
                    </li>
                    <li className="flex gap-3 text-white">
                        <Check className="w-5 h-5 text-trading-primary shrink-0" />
                        <span>Mencegah entry jika skor kualitas rendah</span>
                    </li>
                    <li className="flex gap-3 text-white">
                        <Check className="w-5 h-5 text-trading-primary shrink-0" />
                        <span>Memaksa cek psikologi saat itu juga</span>
                    </li>
                    <li className="flex gap-3 text-white">
                        <Check className="w-5 h-5 text-trading-primary shrink-0" />
                        <span>Membangun habit disiplin real-time</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};
