import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { DifferenceSection } from "@/components/landing/DifferenceSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-trading-bg">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferenceSection />
      <AudienceSection />
      <PricingSection />
      <CTASection />
      
      {/* Footer Simple */}
      <footer className="py-8 text-center text-trading-text-muted text-sm border-t border-trading-border/30">
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} TraderGuard. All Rights Reserved.</p>
            <p className="mt-2 text-xs opacity-50">Trading involves risk. Invest responsibly.</p>
        </div>
      </footer>
    </main>
  );
}
