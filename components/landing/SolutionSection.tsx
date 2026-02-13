import React from "react";
import { CheckCircle2, ListChecks, BrainCircuit, BarChart3 } from "lucide-react";

export const SolutionSection = () => {
    const solutions = [
        {
            icon: ListChecks,
            title: "Checklist Validation",
            desc: "Paksa diri Anda untuk mencentang syarat teknikal sebelum klik Buy/Sell."
        },
        {
            icon: BrainCircuit,
            title: "Psychology Check",
            desc: "Validasi apakah Anda sedang tenang, marah, atau FOMO sebelum entry."
        },
        {
            icon: BarChart3,
            title: "Quality Score",
            desc: "Dapatkan skor objektif (0-100). Jika skor < 70, sistem menyarankan jangan entry."
        },
        {
            icon: CheckCircle2,
            title: "Rule-Based System",
            desc: "Trading menjadi aktivitas membosankan yang terukur, bukan wahana emosi."
        }
    ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
                    SOLUSI TRADEGUARD
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Filter Kebodohan <br />
                    <span className="text-trading-primary">Sebelum Terjadi.</span>
                </h2>
                <p className="text-lg text-trading-text-secondary mb-8 leading-relaxed">
                    TraderGuard memaksa Anda melewati serangkaian "Validasi" sebelum Anda diizinkan merasa yakin dengan sebuah posisi. Ini adalah dinding pertahanan antara modal Anda dan sifat impulsif Anda.
                </p>

                <div className="space-y-6">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-trading-card border border-trading-border flex items-center justify-center shrink-0 text-trading-primary">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                <p className="text-trading-text-muted text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-trading-primary/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />
                <div className="bg-trading-bg border border-trading-border rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                    {/* Mock UI Card */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-trading-border pb-4">
                            <span className="font-mono text-trading-text-muted text-xs">SETUP #294</span>
                            <span className="bg-trading-success/10 text-trading-success px-2 py-1 rounded text-xs font-bold">SCORE: 95</span>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-trading-card rounded-lg border border-trading-border/50">
                                <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-black" /></div>
                                <span className="text-sm text-trading-text-primary">Trend H4 Valid (Uptrend)</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-trading-card rounded-lg border border-trading-border/50">
                                <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-black" /></div>
                                <span className="text-sm text-trading-text-primary">Retracement Golden Zone (61.8%)</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-trading-card rounded-lg border border-trading-border/50">
                                <div className="w-5 h-5 rounded-full bg-trading-success flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-black" /></div>
                                <span className="text-sm text-trading-text-primary">Psychology: Calm & Focused</span>
                            </div>
                        </div>
                    </div>

                    {/* Overlay Warning */}
                    <div className="absolute bottom-6 right-6 left-6 bg-trading-primary text-white p-4 rounded-xl text-center font-bold shadow-lg animate-bounce-slow">
                        Setup Valid! Safe to Entry.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
