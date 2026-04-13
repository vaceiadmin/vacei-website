"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Layers, MousePointer2, UserPlus, Info } from "lucide-react";

const FlexibilitySection = ({ isDark = false }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");

  return (
    <section className={cn(
      "relative py-24 sm:py-32 overflow-hidden mb-12 sm:mb-20",
      isDark && "mx-4 sm:mx-6 lg:mx-8",
      isDark ? "bg-[#05050A] text-white rounded-[48px] shadow-2xl" : "bg-[#FAFBFF] text-slate-900 rounded-[48px] border border-slate-100 shadow-xl shadow-blue-500/5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Service Choice */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">
                {t("flexibility.title")}
              </h2>
              <div className="space-y-6">
                {(t("flexibility.options", { returnObjects: true }) as string[] || []).map((option, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "group flex items-center gap-6 p-8 rounded-[2rem] border transition-all duration-500",
                      isDark ? "bg-white/5 border-white/10 hover:border-primary-blue shadow-lg" : "bg-white border-slate-200 hover:border-blue-500 shadow-xl shadow-blue-500/5"
                    )}
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110",
                      i === 0 ? (isDark ? "bg-primary-blue/20 text-primary-blue" : "bg-blue-500/10 text-blue-600") : (isDark ? "bg-emerald-500/20 text-emerald-500" : "bg-emerald-500/10 text-emerald-600")
                    )}>
                      {i === 0 ? <Layers className="w-6 h-6" /> : <MousePointer2 className="w-6 h-6" />}
                    </div>
                    <span className="text-2xl font-black tracking-tight">{option}</span>
                    <div className={cn(
                        "ml-auto w-2 h-2 rounded-full",
                        i === 0 ? "bg-primary-blue" : "bg-emerald-500"
                    )} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Advisor Integration */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-blue/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className={cn(
              "relative p-10 sm:p-14 rounded-[4rem] border transition-all duration-700",
              isDark ? "bg-[#0A0B10] border-white/10 shadow-3xl" : "bg-white border-blue-100 shadow-2xl shadow-blue-500/10"
            )}>
              <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                <UserPlus className="w-48 h-48" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-1 bg-primary-blue rounded-full")} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue">Partner Ecosystem</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  {t("flexibility.advisorsHeadline")}
                </h3>
                <p className={cn(
                  "text-xl font-medium leading-relaxed",
                  isDark ? "text-slate-400" : "text-slate-600"
                )}>
                  {t("flexibility.advisorsBody")}
                </p>
                
                <div className={cn(
                  "mt-10 flex items-center gap-4 p-6 rounded-2xl border text-[13px] font-bold leading-relaxed",
                  isDark ? "bg-blue-500/5 border-blue-500/10 text-blue-300" : "bg-blue-50 border-blue-100 text-blue-700 shadow-inner"
                )}>
                  <Info className="w-5 h-5 shrink-0" />
                  {t("flexibility.advisorsNote")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlexibilitySection;
