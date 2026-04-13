import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/common/LocalizedLink";
import { ArrowRight, Building2, Rocket, Sparkles, LayoutPanelLeft, MousePointerClick, ShieldCheck, Zap } from "lucide-react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

import GetInstantQuoteButton from "../common/GetInstantQuoteButton";
import { SectionTitleHero } from "@/components/HomePage/SectionTitleHero";

const WorkspaceEntrySection = ({ isDark = true }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");
  const { reduceMotion } = usePerformance();
  const sectionRef = useRef(null);

  const card1Bullets = useMemo(
    () => (t("workspaceEntry.card1Bullets", { returnObjects: true }) as string[]) ?? [],
    [t]
  );

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-12 sm:mb-20",
        isDark ? "bg-[#05050A] rounded-[48px] text-white shadow-2xl" : "bg-[#FAFBFF] rounded-[48px] text-slate-900 border border-slate-100 shadow-xl shadow-blue-500/5"
      )}
    >
      {/* Background Polish */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={cn(
          "absolute top-0 right-0 w-1/2 h-full blur-[120px] opacity-20",
          isDark ? "bg-blue-600/30" : "bg-blue-400/20"
        )} />
        <div className={cn(
          "absolute bottom-0 left-0 w-1/2 h-full blur-[120px] opacity-20",
          isDark ? "bg-blue-500/10" : "bg-blue-600/10"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <SectionTitleHero
            variant={isDark ? "dark" : "light"}
            line1={t("workspaceEntry.sectionTitleLine1")}
            highlight={t("workspaceEntry.sectionTitleHighlight")}
            className="items-center"
          />
          <p className={cn(
             "mt-6 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto",
             isDark ? "text-slate-400" : "text-slate-600"
          )}>
            {t("workspaceEntry.sectionBody")}
          </p>
        </div>

        <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
            isDark ? "bg-transparent" : "bg-transparent"
        )}>
          
          {/* Card 1: Existing Company */}
          <div className="group relative">
            <div className={cn(
                "relative z-10 h-full p-8 sm:p-12 lg:p-14 rounded-[3rem] border transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col justify-between gap-10",
                isDark ? "bg-[#0A0A0F] border-white/5 hover:border-blue-500/40 shadow-2xl" : "bg-white border-slate-100 shadow-xl shadow-blue-500/5 hover:border-blue-500/40"
            )}>
                 {/* Card Glow */}
                 <div className="absolute -inset-20 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                 <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-inner">
                          <Building2 className="w-7 h-7" />
                       </div>
                       <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{t("workspaceEntry.card1MicroLabel")}</span>
                           <span className="text-xs font-bold text-blue-500">{t("workspaceEntry.card1MicroAccent")}</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                        {t("workspaceEntry.card1TitleBefore")}<span className="text-blue-500">{t("workspaceEntry.card1TitleAccent")}</span>
                      </h3>
                      <p className={cn(
                        "text-lg font-medium leading-relaxed opacity-70",
                        isDark ? "text-slate-400" : "text-slate-600"
                      )}>
                        {t("workspaceEntry.card1Body")}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">{t("workspaceEntry.keyCapabilitiesHeading")}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {card1Bullets.map((text, idx) => (
                          <div key={idx} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover/item:scale-150 transition-transform" />
                            <span className="text-sm font-bold opacity-80 group-hover/item:opacity-100 transition-opacity">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>

                <div className="relative z-10 pt-8 mt-auto flex flex-col sm:flex-row items-center gap-8 border-t border-white/5">
                   <GetInstantQuoteButton
                      text={t("workspaceEntry.createWorkspaceCta")}
                      href="https://client.vacei.com/onboarding"
                      className="h-16 px-10 rounded-2xl w-full sm:w-auto text-base"
                   />
                   <div className="flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
                          <MousePointerClick className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{t("workspaceEntry.oneClickSync")}</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Card 2: New Company */}
          <div className="group relative">
            <div className={cn(
                "relative z-10 h-full p-8 sm:p-12 lg:p-14 rounded-[3rem] border transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col justify-between gap-10",
                isDark ? "bg-[#0F111A] border-white/5 hover:border-emerald-500/40 shadow-2xl" : "bg-slate-50 border-slate-100 shadow-xl hover:bg-white hover:border-emerald-500/40"
            )}>
                 {/* Card Glow */}
                 <div className="absolute -inset-20 bg-emerald-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                 <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-inner">
                          <Rocket className="w-7 h-7" />
                       </div>
                       <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{t("workspaceEntry.card2MicroLabel")}</span>
                           <span className="text-xs font-bold text-emerald-500">{t("workspaceEntry.card2MicroAccent")}</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                        {t("workspaceEntry.card2Title")}<span className="text-emerald-500">{t("workspaceEntry.card2TitleAccent")}</span>
                      </h3>
                      <p className={cn(
                        "text-lg font-medium leading-relaxed opacity-70",
                        isDark ? "text-slate-400" : "text-slate-600"
                      )}>
                        {t("workspaceEntry.card2Body")}
                      </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-4 transform transition-transform group-hover:scale-[1.02] duration-500">
                       <div className="flex items-center gap-3">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-black uppercase tracking-widest text-blue-400">{t("workspaceEntry.builderBadge")}</span>
                       </div>
                       <p className="text-sm opacity-70 font-medium">{t("workspaceEntry.builderDescription")}</p>
                    </div>
                 </div>

                <div className="relative z-10 pt-8 mt-auto flex flex-col sm:flex-row items-center gap-4 border-t border-white/5">
                  <GetInstantQuoteButton
                    text={t("workspaceEntry.startIncorporationCta")}
                    href="https://client.vacei.com/onboarding"
                    className={cn(
                      "h-16 px-10 rounded-2xl border-none w-full sm:w-auto text-base",
                      isDark ? "bg-white text-slate-900 hover:bg-emerald-50" : "bg-slate-900 text-white hover:bg-slate-800"
                    )}
                    hasShadow={false}
                  />
                  <LocalizedLink
                    href="/contact"
                    className={cn(
                      "h-16 px-8 rounded-2xl border font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center w-full sm:w-auto",
                      isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-slate-200 text-slate-900 hover:bg-slate-100 shadow-sm"
                    )}
                  >
                    {t("workspaceEntry.bookConsultationCta")}
                  </LocalizedLink>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkspaceEntrySection;
