"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storage, type SetupResult } from "@/lib/storage";
import { ChevronRight, Image as ImageIcon, Check, Zap, Anchor, Activity, TrendingUp } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { IconTrendUp } from "@/components/icons/IconTrendUp";
import { IconSideways } from "@/components/icons/IconSideways";
import { IconBOS } from "@/components/icons/IconBOS";
import { IconCHoCH } from "@/components/icons/IconCHoCH";
import { IconTrendDown } from "@/components/icons/IconTrendDown";
import { IconSpreadTight } from "@/components/icons/IconSpreadTight";
import { IconSpreadWide } from "@/components/icons/IconSpreadWide";
import { IconZoneFresh } from "@/components/icons/IconZoneFresh";
import { IconZoneUsed } from "@/components/icons/IconZoneUsed";
import { IconRiskSafe } from "@/components/icons/IconRiskSafe";
import { IconRiskGambling } from "@/components/icons/IconRiskGambling";
import { IconPsychCalm } from "@/components/icons/IconPsychCalm";
import { IconPsychPanic } from "@/components/icons/IconPsychPanic";
import { IconFibGolden } from "@/components/icons/IconFibGolden";
import { IconFibInvalid } from "@/components/icons/IconFibInvalid";
import { IconApproachCompression } from "@/components/icons/IconApproachCompression";
import { IconApproachMomentum } from "@/components/icons/IconApproachMomentum";
import { IconRejectionValid } from "@/components/icons/IconRejectionValid";
import { IconRejectionInvalid } from "@/components/icons/IconRejectionInvalid";
import { IconEMASlope } from "@/components/icons/IconEMASlope";
import { IconEMAFlat } from "@/components/icons/IconEMAFlat";
import { IconMicroBreak } from "@/components/icons/IconMicroBreak";
import { IconMicroFakeout } from "@/components/icons/IconMicroFakeout";
import { IconConsolidation } from "@/components/icons/IconConsolidation";
import { IconChasing } from "@/components/icons/IconChasing";
import { IconBreakoutBody } from "@/components/icons/IconBreakoutBody";
import { IconBreakoutFakeout } from "@/components/icons/IconBreakoutFakeout";
import { IconHighVolRetest } from "@/components/icons/IconHighVolRetest";
import { IconLowVol } from "@/components/icons/IconLowVol";
import { IconADRRoom } from "@/components/icons/IconADRRoom";
import { IconADRMaxed } from "@/components/icons/IconADRMaxed";

// --- Types ---
type Option = {
  value: string;
  label: string;
  description?: string;
  score: number;
  icon?: React.ComponentType<any>;
  color?: string;
};

type Question = {
  id: string;
  title: string;
  question: string;
  timeframe?: string; // New field
  options: Option[];
};

type TradingStyle = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  questions: Question[];
};

// --- Common Questions (Risk & Psych) ---
const COMMON_QUESTIONS: Question[] = [
  {
    id: "risk",
    title: "Risk Management",
    question: "Bagaimana pengaturan risiko anda?",
    options: [
      {
        value: "safe",
        label: "Safe & Calculated",
        description: "SL terpasang, RR >= 1:2",
        score: 20,
        icon: IconRiskSafe, 
        color: "text-trading-success"
      },
      {
        value: "risky",
        label: "Gambling",
        description: "No SL atau RR Buruk",
        score: -50,
        icon: IconRiskGambling,
        color: "text-trading-danger"
      }
    ]
  },
  {
      id: "psychology",
      title: "State of Mind",
      question: "Bagaimana kondisi mental anda?",
      options: [
          {
              value: "focused",
              label: "Calm & Focused",
              description: "Siap menerima risiko",
              score: 20,
              icon: IconPsychCalm, 
              color: "text-trading-primary"
          },
          {
              value: "emotional",
              label: "Emotional / FOMO",
              description: "Ingin balas dendam / buru-buru",
              score: -50,
              icon: IconPsychPanic, 
              color: "text-trading-danger"
          }
      ]
  }
];

// --- Trading Styles Configuration ---
const TRADING_STYLES: TradingStyle[] = [
  {
    id: "sniper",
    name: "The Sniper Scalper",
    description: "M1-M5 | Speed, Momentum, Low Spread",
    icon: Zap,
    questions: [
      {
        id: "spread",
        title: "Session & Spread",
        question: "Cek Jam & Spread (London/NY Overlap?)",
        timeframe: "Session",
        options: [
          { value: "valid", label: "Tight Spread", description: "< 20pt (Gold) / < 1pip", score: 20, icon: IconSpreadTight, color: "text-trading-success" },
          { value: "invalid", label: "Wide Spread", description: "Pasar Sepi / Spread Lebar", score: -50, icon: IconSpreadWide, color: "text-trading-danger" }
        ]
      },
      {
        id: "momentum",
        title: "Momentum Bias (EMA)",
        question: "Posisi harga vs EMA 50/200?",
        timeframe: "M15 / H1",
        options: [
          { value: "strong", label: "Stong Slope", description: "Harga > EMA & Miring Tajam", score: 20, icon: IconEMASlope },
          { value: "weak", label: "Flat / Messy", description: "EMA Datar / Kusut", score: -20, icon: IconEMAFlat, color: "text-trading-warning" }
        ]
      },
      {
        id: "micro_structure",
        title: "Micro Structure (M1)",
        question: "Ada Break di M1?",
        timeframe: "M1",
        options: [
          { value: "break", label: "Valid Break", description: "Tembus High/Low via Marubozu", score: 20, icon: IconMicroBreak },
          { value: "fake", label: "No Break / Wick", description: "Hanya ekor / belum tembus", score: 0, icon: IconMicroFakeout }
        ]
      }
    ]
  },
  {
    id: "reversal",
    name: "SnR Reversal",
    description: "Bounce Trader | Patience at Strong Wall",
    icon: Anchor,
    questions: [
      {
        id: "zone_quality",
        title: "Zone Quality (H1/H4)",
        question: "Apakah Zone SnR ini Fresh?",
        timeframe: "H1 / H4",
        options: [
          { value: "fresh", label: "Fresh / Virgin", description: "Untouched or 1x Touch", score: 20, icon: IconZoneFresh, color: "text-trading-success" },
          { value: "used", label: "Tested > 3x", description: "Zone Lemah / Rawan Jebol", score: -30, icon: IconZoneUsed, color: "text-trading-danger" }
        ]
      },
      {
        id: "approach",
        title: "Approach Behavior",
        question: "Cara harga mendekati zone?",
        timeframe: "M5 / M15",
        options: [
          { value: "compression", label: "Compression", description: "Mendekat pelan/ragu (CP)", score: 20, icon: IconApproachCompression }, 
          { value: "momentum", label: "Big Momentum", description: "Menabrak zone dengan keras", score: -50, icon: IconApproachMomentum, color: "text-trading-danger" }
        ]
      },
      {
        id: "rejection",
        title: "Rejection Confirmation",
        question: "Reaksi saat sentuh zone?",
        timeframe: "M5 Entry",
        options: [
          { value: "reject", label: "Valid Rejection", description: "Long Wick / Engulfing", score: 20, icon: IconRejectionValid },
          { value: "none", label: "No Reaction", description: "Tembus tanpa rem", score: -50, icon: IconRejectionInvalid }
        ]
      }
    ]
  },
  {
    id: "breakout",
    name: "Breakout Momentum",
    description: "News/Volume | Catching Explosions",
    icon: Activity,
    questions: [
      {
        id: "consolidation",
        title: "Consolidation Build-up",
        question: "Ada pola pemadatan harga?",
        timeframe: "M15 / H1",
        options: [
          { value: "buildup", label: "Valid Build-up", description: "Triangle/Flag > 2 Jam", score: 20, icon: IconConsolidation },
          { value: "chasing", label: "Chasing Price", description: "Harga lari terus tanpa istirahat", score: -99, icon: IconChasing, color: "text-trading-danger" }
        ]
      },
      {
        id: "candle_close",
        title: "The Breakout Candle",
        question: "Status candle penembus?",
        timeframe: "M15 / H1",
        options: [
          { value: "body_close", label: "Body Close", description: "Tebal di luar area", score: 20, icon: IconBreakoutBody, color: "text-trading-success" },
          { value: "wick_only", label: "Fakeout (Wick)", description: "Hanya ekor yang keluar", score: -50, icon: IconBreakoutFakeout, color: "text-trading-danger" }
        ]
      },
      {
        id: "volume_retest",
        title: "Volume / Retest",
        question: "Konfirmasi tambahan?",
        timeframe: "M1 / M5",
        options: [
          { value: "valid", label: "High Vol / Retest", description: "Lonjakan Volume atau Pantulan", score: 20, icon: IconHighVolRetest },
          { value: "low", label: "Low Volume", description: "Break sepi peminat", score: 0, icon: IconLowVol }
        ]
      }
    ]
  },
  {
    id: "trend",
    name: "Intraday Trend Follow",
    description: "Classic | Following Daily Flow",
    icon: TrendingUp,
    questions: [
      {
        id: "adr",
        title: "Daily Range (ADR)",
        question: "Sudah mentok range harian?",
        timeframe: "Daily (D1)",
        options: [
          { value: "room", label: "Ada Ruang", description: "Belum mencapai ADR", score: 20, icon: IconADRRoom },
          { value: "maxed", label: "Mentok ADR", description: "Risiko balik arah tinggi", score: -50, icon: IconADRMaxed, color: "text-trading-danger" }
        ]
      },
      {
        id: "fib",
        title: "Fibonacci Retracement",
        question: "Koreksi di level berapa?",
        timeframe: "H1",
        options: [
          { value: "golden", label: "Golden Area", description: "Fib 50% - 61.8%", score: 20, icon: IconFibGolden },
          { value: "shallow_deep", label: "Too Shallow/Deep", description: "< 23% or > 78%", score: -10, icon: IconFibInvalid }
        ]
      },
      {
        id: "choch",
        title: "Change of Character",
        question: "Trend M15 sdh searah H1?",
        timeframe: "M15",
        options: [
          { value: "aligned", label: "Aligned (ChoCH)", description: "M15 bikin new HH/LL", score: 20, icon: IconCHoCH },
          { value: "counter", label: "Counter Trend", description: "Belum ada konfirmasi", score: -50, icon: IconSideways }
        ]
      }
    ]
  }
];


export default function AnalyzePage() {
  const router = useRouter();
  
  // State
  const [selectedStyleId, setSelectedStyleId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { value: string; score: number }>>({});
  
  // Derived State
  const selectedStyle = TRADING_STYLES.find(s => s.id === selectedStyleId);
  
  // Merge Style Questions + Common Questions
  const activeQuestions = useMemo(() => {
    if (!selectedStyle) return [];
    return [...selectedStyle.questions, ...COMMON_QUESTIONS];
  }, [selectedStyle]);

  const totalSteps = activeQuestions.length;
  const currentQuestion = activeQuestions[currentIndex];
  // Determine if we are in "Selection Mode" or "Wizard Mode"
  // Wizard Mode starts when style is selected.
  // Completion step is when currentIndex == totalSteps
  const isSelectionMode = !selectedStyleId;
  const isCompletionStep = !isSelectionMode && currentIndex === totalSteps;

  // Calculate live score logic same as before...
  const currentScore = useMemo(() => {
    let score = 0;
    Object.values(answers).forEach(a => score += a.score);
    return Math.max(0, Math.min(100, score));
  }, [answers]);

  const handleStyleSelect = (styleId: string) => {
      setSelectedStyleId(styleId);
      setCurrentIndex(0);
      setAnswers({});
  };

  const handleAnswer = (option: Option) => {
    const newAnswers = { 
        ...answers, 
        [currentQuestion.id]: { value: option.value, score: option.score } 
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < totalSteps) {
        setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handleSave = () => {
       const finalScore = currentScore;
       let status: SetupResult["status"] = "Avoid";
       if (finalScore >= 90) status = "Excellent";
       else if (finalScore >= 70) status = "Good";
       else if (finalScore >= 50) status = "Wait";

       const newResult: SetupResult = {
         id: uuidv4(),
         date: new Date().toISOString(),
         strategy: selectedStyle?.name || "Custom", // Use selected style name
         answers: Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, v.value])),
         score: finalScore,
         status,
       };
   
       storage.saveSetup(newResult);
       router.push("/journal"); 
  };

  const getScoreColor = (score: number) => {
      if (score < 50) return "text-trading-danger";
      if (score > 80) return "text-trading-success";
      return "text-trading-warning";
  };

  // --- 1. SELECTION SCREEN ---
  if (isSelectionMode) {
      return (
          <div className="flex flex-col min-h-[calc(100vh-8rem)] animate-in fade-in duration-500">
              <div className="mb-6">
                  <h1 className="text-2xl font-bold text-trading-text-primary mb-2">Choose Your Fighter</h1>
                  <p className="text-trading-text-secondary text-sm">Select the trading style for this setup.</p>
              </div>

              <div className="grid gap-4">
                  {TRADING_STYLES.map((style) => {
                      const Icon = style.icon;
                      return (
                          <button
                              key={style.id}
                              onClick={() => handleStyleSelect(style.id)}
                              className="bg-trading-card border border-trading-border p-4 rounded-xl flex items-center text-left hover:border-trading-primary hover:bg-white/5 transition-all group"
                          >
                              <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-trading-primary mr-4 group-hover:scale-110 transition-transform">
                                  <Icon size={24} />
                              </div>
                              <div>
                                  <h3 className="font-bold text-trading-text-primary">{style.name}</h3>
                                  <p className="text-xs text-trading-text-muted">{style.description}</p>
                              </div>
                              <ChevronRight className="ml-auto text-trading-text-muted opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </button>
                      )
                  })}
              </div>
          </div>
      )
  }

  // --- 2. COMPLETION SCREEN ---
  if (isCompletionStep) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-500">
              <div className="text-center space-y-4 mb-10">
                  <h1 className={`text-6xl font-bold font-mono ${getScoreColor(currentScore)} drop-shadow-lg`}>
                      {currentScore}
                  </h1>
                  <p className="text-trading-text-secondary uppercase tracking-widest text-sm">
                      Setup Score
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-trading-border border border-gray-700 text-xs text-trading-text-muted">
                      {selectedStyle?.name}
                  </div>
              </div>
              
              <button
                  onClick={handleSave}
                  className="w-full bg-trading-primary hover:bg-blue-600 active:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-glow flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  <span>Save Trade</span>
                  <Check className="ml-2 w-5 h-5" />
              </button>
          </div>
      );
  }

  // --- 3. WIZARD STEP ---
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]"> 
      {/* Sticky Header */}
      <div className="sticky top-16 z-10 bg-trading-bg/95 backdrop-blur border-b border-trading-border -mx-4 px-4 py-3 flex justify-between items-center shadow-lg mb-4">
        <div>
            <span className="text-[10px] font-mono text-trading-primary uppercase tracking-widest block">
                Step <span className="text-white">{currentIndex + 1}</span>/{totalSteps}
            </span>
            <h2 className="text-sm font-bold text-white truncate w-48">
                {currentQuestion.title}
            </h2>
            {currentQuestion.timeframe && (
              <span className="text-[10px] uppercase font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded ml-0 mt-1 inline-block">
                Timeframe: {currentQuestion.timeframe}
              </span>
            )}
        </div>
        <div className="bg-trading-border px-3 py-1 rounded-full border border-gray-700">
             <span className={`font-mono font-bold text-sm ${getScoreColor(currentScore)}`}>
                 {currentScore}
             </span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 bg-trading-border w-full -mt-4 mb-6">
          <div 
              className="h-full bg-trading-primary transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
          />
      </div>

      {/* Question Content */}
      <div className="flex-1 pb-24 animate-in slide-in-from-right-8 duration-300" key={currentQuestion.id + currentIndex}>
          <p className="text-trading-text-secondary mb-4 text-sm font-medium leading-relaxed">
              {currentQuestion.question}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id]?.value === option.value;
                  const Icon = option.icon || ImageIcon;
                  
                  return (
                      <div 
                        key={option.value}
                        onClick={() => handleAnswer(option)}
                        className={`
                            cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center relative border transition-all duration-300 group
                            ${isSelected 
                                ? "bg-blue-900/20 border-trading-primary shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
                                : "bg-trading-card border-trading-border hover:border-gray-600 hover:bg-white/5"}
                        `}
                      >
                          {/* Checkmark Absolute */}
                          <div className={`
                                absolute top-3 right-3 w-6 h-6 rounded-full border flex items-center justify-center transition-colors z-10
                                ${isSelected ? "bg-trading-primary border-trading-primary" : "border-trading-text-muted bg-trading-bg/50"}
                          `}>
                               {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                          </div>

                          {/* Icon Box - Large & Centered */}
                          <div className="w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden flex items-center justify-center">
                              <Icon className="w-full h-full object-contain drop-shadow-2xl filter" />
                          </div>
                          
                          {/* Text/Label */}
                          <div className="text-center w-full">
                              <h3 className={`font-bold text-base mb-1 ${option.color || "text-trading-text-primary"}`}>
                                  {option.label}
                              </h3>
                              {option.description && (
                                  <p className="text-[10px] text-trading-text-muted leading-tight line-clamp-2 px-1">
                                      {option.description}
                                  </p>
                              )}
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 left-0 w-full px-4 z-20">
          <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className={`
                  w-full py-4 rounded-xl font-bold shadow-glow flex items-center justify-center transition-all
                  ${answers[currentQuestion.id] 
                    ? "bg-trading-primary hover:bg-blue-600 active:bg-blue-700 text-white" 
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"}
              `}
          >
              <span>{isCompletionStep ? "Finish" : "Next Validation"}</span>
              <ChevronRight className="ml-2 w-5 h-5" />
          </button>
      </div>
    </div>
  );
}
