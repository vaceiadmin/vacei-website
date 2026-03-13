"use client";

import React from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

// Helper component for premium country markers
const CountryMarker = ({ code, className }: { code: string; className?: string }) => (
    <div className={cn(
        "relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:scale-125 group/flag shrink-0",
        className
    )}>
        <img
            src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
            alt={code}
            className="w-full h-full object-cover"
        />
    </div>
);

const ActiveEUSection = () => {
    const { isIPhone, isLowPerformance } = usePerformance();

    return (
        <section className="relative w-full py-20 bg-[#ecf0f0] overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">

                    {/* Left Side: Content (40%) */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
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

                    {/* Right Side: Orbiting Circles Visualization (60%) */}
                    <div className="lg:col-span-3 relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden">

                        {/* Central Business Hub Icon */}
                        <div className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg border border-slate-50 p-2 group transition-all duration-500 hover:rotate-12 translate-z-0">
                            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 21h18" />
                                <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
                                <path d="M5 21V10.85" />
                                <path d="M19 21V10.85" />
                                <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                            </svg>
                        </div>

                        {/* Orbiting Circles Layer 1 - Major Economies */}
                        <OrbitingCircles
                            radius={80}
                            duration={20}
                            iconSize={24}
                            className="border-none bg-transparent"
                        >
                            <CountryMarker code="DE" />
                            <CountryMarker code="FR" />
                            <CountryMarker code="IT" />
                            <CountryMarker code="ES" />
                        </OrbitingCircles>

                        {/* Orbiting Circles Layer 2 - Northern & Western Europe (Reverse) */}
                        <OrbitingCircles
                            radius={140}
                            duration={35}
                            reverse
                            iconSize={24}
                            className="border-none bg-transparent"
                        >
                            <CountryMarker code="NL" />
                            <CountryMarker code="BE" />
                            <CountryMarker code="AT" />
                            <CountryMarker code="SE" />
                            <CountryMarker code="IE" />
                            <CountryMarker code="PT" />
                        </OrbitingCircles>

                        {/* Orbiting Circles Layer 3 - Central & Southern Hubs */}
                        <OrbitingCircles
                            radius={200}
                            duration={50}
                            iconSize={20}
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

                        {/* Orbiting Circles Layer 4 - Eastern & Baltic Regions (Reverse) */}
                        <OrbitingCircles
                            radius={260}
                            duration={65}
                            reverse
                            iconSize={20}
                            className="border-none bg-transparent"
                        >
                            <CountryMarker code="RO" />
                            <CountryMarker code="BG" />
                            <CountryMarker code="HR" />
                            <CountryMarker code="CY" />
                            <CountryMarker code="EE" />
                            <CountryMarker code="LV" />
                            <CountryMarker code="LT" />
                            <CountryMarker code="SK" />
                            <CountryMarker code="SI" />
                        </OrbitingCircles>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ActiveEUSection;
