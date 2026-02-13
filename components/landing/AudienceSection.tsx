import React from "react";
import { UserCheck, UserX } from "lucide-react";

export const AudienceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Untuk Siapa Ini?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Suitable */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-8 h-8 text-trading-success" />
                    <h3 className="text-2xl font-bold text-white">Sangat Cocok Untuk:</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-success mt-2.5" />
                        <p className="text-trading-text-secondary">Trader dengan pengalaman 6-24 bulan yang sudah paham basic tapi belum konsisten.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-success mt-2.5" />
                        <p className="text-trading-text-secondary">Mereka yang sadar bahwa masalah utamanya adalah <strong>disiplin</strong>, bukan strategi.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-success mt-2.5" />
                        <p className="text-trading-text-secondary">Trader yang ingin membangun karir profesional jangka panjang.</p>
                    </li>
                </ul>
            </div>

             {/* Not Suitable */}
             <div className="space-y-6 opacity-70">
                <div className="flex items-center gap-3 mb-6">
                    <UserX className="w-8 h-8 text-trading-danger" />
                    <h3 className="text-2xl font-bold text-trading-text-muted">TIDAK Cocok Untuk:</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-danger mt-2.5" />
                        <p className="text-trading-text-muted">Pencari Signal / Copy trade users.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-danger mt-2.5" />
                        <p className="text-trading-text-muted">Orang yang ingin kaya cepat (Get rich quick schemes).</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-trading-danger mt-2.5" />
                        <p className="text-trading-text-muted">Trader yang malas mengikuti SOP dan prosedur.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};
