"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { CheckCircle2, LayoutDashboard, FileText, Calendar, MessageSquare, Clock, ShieldCheck, Zap } from "lucide-react";

const RealTimeControl = ({ isDark = true }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");

  const icons = [
    LayoutDashboard,
    Clock,
    CheckCircle2,
    Calendar,
    FileText,
    ShieldCheck,
    MessageSquare,
    Zap,
    MessageSquare
  ];

  const items = (t("realTimeControl.items", { returnObjects: true }) as string[] || []);

  return (
    <section className={cn(
      "relative py-24 sm:py-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-12 sm:mb-20",
      isDark ? "bg-black text-white rounded-[48px] shadow-2xl" : "bg-[#FAFBFF] text-slate-900 rounded-[48px] border border-slate-100 shadow-xl shadow-blue-500/5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* Left: Portal Mockup / Visual */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-10 bg-primary-blue/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className={cn(
              "relative rounded-[3.5rem] border overflow-hidden shadow-3xl transition-all duration-700 group-hover:scale-[1.02]",
              isDark ? "bg-[#050505] border-white/10" : "bg-slate-50 border-slate-200"
            )}>
              {/* Fake Dashboard Header */}
              <div className={cn(
                "h-16 border-b flex items-center px-10 justify-between",
                isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-100"
              )}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-7 h-7 rounded-full border-2 border-slate-800 bg-slate-700" />
                        ))}
                    </div>
                    <div className="h-4 w-px bg-slate-500/20" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Live Workspace</span>
                </div>
              </div>

              {/* Fake Dashboard Content */}
              <div className="p-10 sm:p-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.slice(0, 4).map((item, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-5 p-7 rounded-[2.5rem] border transition-all duration-500 hover:translate-x-1",
                    isDark ? "bg-white/5 border-white/5 hover:border-primary-blue/30 shadow-inner" : "bg-white border-slate-200 shadow-sm hover:border-blue-500/30 hover:shadow-md"
                  )}>
                    <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg",
                        isDark ? "bg-primary-blue/10 text-primary-blue" : "bg-blue-50 text-blue-600"
                    )}>
                        {icons[i] && React.createElement(icons[i], { className: "w-6 h-6" })}
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-black tracking-tight leading-tight block">{item}</span>
                        <div className="h-1 w-8 bg-blue-500/20 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                {t("realTimeControl.title").split(' — ')[0]} — <br />
                <span className="font-bodoni italic text-blue-600 lowercase">
                  {t("realTimeControl.title").split(' — ')[1]}
                </span>
              </h2>
              <div className="flex items-center gap-5">
                  <div className="w-16 h-2 bg-primary-blue rounded-full" />
                  <p className={cn(
                    "text-2xl sm:text-3xl font-bodoni italic",
                    isDark ? "text-primary-blue" : "text-blue-600"
                  )}>
                    {t("realTimeControl.subtitle")}
                  </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
               {items.map((item, i) => (
                <div key={i} className={cn(
                    "group flex items-center gap-4 p-5 rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg",
                    isDark ? "bg-[#0a0a0a] border-white/5 hover:border-blue-500/20" : "bg-white border-slate-200 shadow-sm hover:border-blue-500/20"
                )}>
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {icons[i] && React.createElement(icons[i], { className: "w-5 h-5" })}
                  </div>
                  <span className={cn(
                    "text-lg font-bold tracking-tight",
                    isDark ? "text-slate-200" : "text-slate-800"
                  )}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className={cn(
                "pt-10 border-t",
                isDark ? "border-white/10" : "border-slate-100"
            )}>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <p className={cn(
                        "text-lg font-black tracking-tight uppercase tracking-[0.25em]",
                        isDark ? "text-slate-500" : "text-slate-400"
                    )}>
                        {t("realTimeControl.footer")}
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealTimeControl;
