import React from "react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

const ComplianceDashboardSection = () => {
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-black rounded-[48px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Stay compliant. <span className="text-blue-400">Stay ahead.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
              Compliance isn't a one-time event; it's an ongoing process. Automated alerts, entity management, and regulatory updates keep you in the loop.
            </p>
          </div>

          <div
            className={cn(
              "relative rounded-[2.5rem] border border-white/20 bg-[#0F111A] backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden",
              !isIPhone && !isLowPerformance && "hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500"
            )}
          >
            {/* Interior Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.05] to-transparent pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
                  Compliance Score
                </p>
                <p className="text-4xl font-black text-white tracking-tight">92%</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                  On track
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                Upcoming Deadlines
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-5 py-4 border border-white/5">
                  <div>
                    <p className="text-sm font-black text-white">
                      VAT Filing
                    </p>
                    <p className="text-xs text-slate-500 font-medium">Due in 7 days</p>
                  </div>
                  <span className="inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-500 border border-amber-500/20">
                    Pending
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-5 py-4 border border-white/5">
                  <div>
                    <p className="text-sm font-black text-white">
                      Annual Return
                    </p>
                    <p className="text-xs text-slate-500 font-medium">Due in 20 days</p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/20">
                    Scheduled
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs sm:text-sm text-slate-500 font-medium italic">
                Everything visible in one place—no spreadsheets, no manual trackers, no guessing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceDashboardSection;
