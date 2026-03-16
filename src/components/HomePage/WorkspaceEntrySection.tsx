import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Rocket, ArrowUpRight, Sparkles } from "lucide-react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

import GetInstantQuoteButton from "../common/GetInstantQuoteButton";

const WorkspaceEntrySection = () => {
  const { reduceMotion, isIPhone } = usePerformance();
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-12 lg:py-16 overflow-hidden bg-[#F5F8FF]"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mesh Gradient Blobs */}
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[0%] w-[35%] h-[35%] bg-indigo-100/30 rounded-full blur-[100px]" />
        
        {/* Abstract Geometric Shapes */}
        <svg className="absolute top-20 right-10 w-64 h-64 text-blue-200/20" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 20V180M20 100H180" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Subtle Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
        >
          {/* Card 1: Existing Company */}
          <div
            className="group relative"
          >
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] border border-white bg-white/60 backdrop-blur-xl p-8 sm:p-10 lg:p-12 transition-all duration-500",
              !reduceMotion && "hover:shadow-[0_48px_100px_-24px_rgba(30,58,138,0.1)] hover:-translate-y-2"
            )}>
              {/* Internal Accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600/10" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-blue-600/50 mb-0.5">Entry Path 01</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-900/80">Active Entities</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-[1.2] mb-6">
                  Create a workspace for your <span className="relative inline-block">
                    existing business.
                    <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M1 7C50 2 150 2 199 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed mb-auto max-w-md font-medium">
                  Manage all your advisors in one place. Upload documents, track compliance, and coordinate your professional services from a single dashboard.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <GetInstantQuoteButton 
                    text="Create Workspace"
                    href="/quote#process-steps"
                    className="h-[52px] px-8 text-sm"
                  />
                  
                  <div className="flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-blue-50/50 border border-blue-100">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-700">One-click Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: New Company */}
          <div
            className="group relative"
          >
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] bg-[#080B24] p-8 sm:p-10 lg:p-12 transition-all duration-500",
              !reduceMotion && "hover:shadow-[0_48px_120px_-24px_rgba(59,73,230,0.5)] hover:-translate-y-2"
            )}>
              {/* Complex Visual Layer */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-subtle" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-inner transition-all duration-500 group-hover:shadow-blue-400/20 group-hover:scale-110">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-blue-300/30 mb-0.5">Entry Path 02</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-100/70">New Founders</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                  Launch and scale <span className="text-blue-400">from day one.</span>
                </h3>
                
                <p className="text-base text-blue-100/60 leading-relaxed mb-auto max-w-md font-medium">
                  Start your company and centralise documents, approvals, and compliance in the same workspace you will use to run the business.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <GetInstantQuoteButton 
                    text="Start Incorporation"
                    href="/quote#process-steps"
                    className="h-[52px] px-8 text-sm bg-white text-slate-900 border-none hover:bg-slate-50 shadow-white/5"
                    hasShadow={false}
                  />

                  <div className="flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-[11px] font-bold text-white/60">Live Advisory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Wave Detail */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-50 z-20" />
    </section>
  );
};

export default WorkspaceEntrySection;
