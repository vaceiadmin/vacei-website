import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Rocket, Sparkles } from "lucide-react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

import GetInstantQuoteButton from "../common/GetInstantQuoteButton";

const WorkspaceEntrySection = () => {
  const { reduceMotion } = usePerformance();
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#020410] rounded-[48px]"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-blue-500/20">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[0%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]" />

        <svg className="absolute top-20 right-10 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 20V180M20 100H180" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          
          {/* Card 1: Existing Company (Dark Glassmorphic) */}
          <div className="group relative">
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 lg:p-12 transition-all duration-500",
              !reduceMotion && "hover:shadow-[0_48px_100px_-24px_rgba(59,130,246,0.2)] hover:-translate-y-2 hover:bg-white/[0.05]"
            )}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600/20" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Entities</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                  Create a workspace for your <span className="relative inline-block text-blue-400">
                    business.
                    <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M1 7C50 2 150 2 199 7" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </h3>

                <p className="text-[15px] text-slate-400 leading-relaxed mb-6 max-w-md font-medium">
                  Manage all your advisors in one place. Upload documents, track deadlines, respond to requests, and coordinate professional services from one dashboard.
                </p>

                <div className="space-y-3 mb-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">What you can do</h4>
                  {[
                    "Manage multiple companies",
                    "Centralise documents",
                    "Track compliance and filings",
                    "Keep all advisors in one place",
                    "Monitor progress across engagements"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {text}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <GetInstantQuoteButton
                    text="Create Workspace"
                    href="/quote#process-steps"
                    className="h-[52px] px-8 text-sm"
                  />

                  <div className="flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-300">One-click Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: New Company (Deep Dark) */}
          <div className="group relative">
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] bg-slate-950 border border-white/5 p-8 sm:p-10 lg:p-12 transition-all duration-500",
              !reduceMotion && "hover:shadow-[0_48px_120px_-24px_rgba(59,73,230,0.4)] hover:-translate-y-2"
            )}>
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-subtle" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-inner transition-all duration-500 group-hover:shadow-blue-400/20 group-hover:scale-110">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-100/50">New Founders</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                  Start your company and <span className="text-blue-400">scale from day one.</span>
                </h3>

                <p className="text-base text-blue-100/40 leading-relaxed mb-auto max-w-md font-medium">
                  Set up your company and centralise incorporation, approvals, compliance, and ongoing support in the same workspace you will use to run the business.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <GetInstantQuoteButton
                    text="Start Incorporation"
                    href="/quote#process-steps"
                    className="h-[52px] px-8 text-sm bg-white text-slate-900 border-none hover:bg-slate-50 shadow-white/5"
                    hasShadow={false}
                  />
                  <Link
                    href="/contact"
                    className="h-[52px] px-8 text-sm flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020410] to-transparent opacity-80 z-20" />
    </section>
  );
};

export default WorkspaceEntrySection;
