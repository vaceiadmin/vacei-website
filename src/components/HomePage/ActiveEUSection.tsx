"use client";

import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

// Helper component for premium country markers
const CountryMarker = ({ code, className }: { code: string; className?: string }) => (
  <div className={cn(
    "flex items-center justify-center w-full h-full rounded-xl bg-white shadow-[0_8px_16px_rgba(0,0,0,0.06)] border border-slate-100 text-[10px] font-black text-blue-600 transition-transform duration-300 hover:scale-125",
    className
  )}>
    {code}
  </div>
);

const ActiveEUSection = () => {
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#ecf0f0] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[11px] font-black uppercase tracking-[0.2em] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              European Reach
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Active Across <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-700">
                the EU Union.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              VACEI connects businesses with top-tier professional advisors across every European jurisdiction. 
              Manage filings, tax, and legal requirements from one unified platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
               {["27 Countries", "Unified API", "Local Experts"].map((item) => (
                 <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-blue-500">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Orbiting Circles Visualization (Exact Magic UI Style) */}
          <div className="relative flex h-[500px] lg:h-[600px] w-full flex-col items-center justify-center overflow-hidden">
            
            {/* Central Business Hub Icon */}
            <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 p-6 group transition-all duration-500 hover:rotate-12 translate-z-0">
               <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M3 21h18" />
                 <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
                 <path d="M5 21V10.85" />
                 <path d="M19 21V10.85" />
                 <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
               </svg>
               <div className="absolute -inset-4 bg-blue-500/5 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
            </div>

            {/* Orbiting Circles Layer 1 - Major Economies */}
            <OrbitingCircles
              radius={90}
              duration={20}
              iconSize={45}
              className="border-none bg-transparent"
            >
              <CountryMarker code="DE" />
              <CountryMarker code="FR" />
              <CountryMarker code="IT" />
              <CountryMarker code="ES" />
            </OrbitingCircles>

            {/* Orbiting Circles Layer 2 - Growth Markets (Reverse) */}
            <OrbitingCircles
              radius={180}
              duration={35}
              reverse
              iconSize={38}
              className="border-none bg-transparent"
            >
              <CountryMarker code="NL" />
              <CountryMarker code="BE" />
              <CountryMarker code="AT" />
              <CountryMarker code="SE" />
              <CountryMarker code="IE" />
              <CountryMarker code="PT" />
            </OrbitingCircles>

            {/* Orbiting Circles Layer 3 - Emerging Hubs */}
            <OrbitingCircles
              radius={260}
              duration={50}
              iconSize={32}
              className="border-none bg-transparent"
            >
              <CountryMarker code="DK" />
              <CountryMarker code="GR" />
              <CountryMarker code="PL" />
              <CountryMarker code="FI" />
              <CountryMarker code="LU" />
              <CountryMarker code="CZ" />
              <CountryMarker code="HU" />
              <CountryMarker code="MT" />
            </OrbitingCircles>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ActiveEUSection;
