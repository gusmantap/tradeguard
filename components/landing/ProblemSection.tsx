import React from "react";
import { AlertTriangle, XCircle, Activity, Frown } from "lucide-react";

export const ProblemSection = () => {
    const problems = [
        {
            icon: Activity,
            title: "Overtrading",
            desc: "Terus entry walau market tidak jelas, akhirnya profit pagi habis di sore hari.",
            color: "text-orange-500"
        },
        {
            icon: AlertTriangle,
            title: "Revenge Trade",
            desc: "Loss satu kali, langsung lipat lot untuk 'balas dendam', malah MC.",
            color: "text-red-500"
        },
        {
            icon: XCircle,
            title: "Entry Impulsif",
            desc: "Lihat candle bergerak cepat langsung klik BUY tanpa cek structure.",
            color: "text-purple-500"
        },
        {
            icon: Frown,
            title: "Setup Bagus, Eksekusi Rusak",
            desc: "Analisa benar, tapi keluar terlalu cepat atau tahan floating terlalu lama.",
            color: "text-blue-500"
        }
    ];

  return (
    <section className="py-20 bg-trading-card/30 border-y border-trading-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Masalahnya Bukan Strategi, <br />
            <span className="text-trading-danger">Masalahnya Disiplin.</span>
          </h2>
          <p className="text-trading-text-secondary">
            Anda tahu cara analisa support & resistance. Anda tahu supply & demand. 
            Tapi kenapa masih sering <em>blown account</em>? Karena musuh terbesar adalah diri sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, idx) => (
                <div key={idx} className="bg-trading-bg border border-trading-border p-6 rounded-2xl hover:border-trading-text-muted/30 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-trading-card flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-trading-text-muted leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
