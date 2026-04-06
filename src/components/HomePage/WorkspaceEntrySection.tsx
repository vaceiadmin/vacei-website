import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/common/LocalizedLink";
import { ArrowRight, Building2, Rocket, Sparkles } from "lucide-react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

import GetInstantQuoteButton from "../common/GetInstantQuoteButton";

const WorkspaceEntrySection = () => {
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
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-black rounded-[48px]"
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
          <div className="group relative h-full">
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] border border-white/10 bg-[#0F111A] backdrop-blur-2xl p-8 sm:p-10 lg:p-12 transition-all duration-700",
              !reduceMotion && "hover:shadow-[0_48px_100px_-24px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:bg-[#151825] hover:border-blue-500/30"
            )}>
              {/* Subtle Interior Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600/20 group-hover:bg-blue-600/60 transition-colors duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/40">
                    <Building2 className="w-7 h-7 relative z-10" />
                    <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400/80 group-hover:text-blue-400 transition-colors duration-500">{t("workspaceEntry.activeEntities")}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                  {t("workspaceEntry.card1TitleBefore")}<span className="relative inline-block text-blue-400">
                    {t("workspaceEntry.card1TitleAccent")}
                    <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M1 7C50 2 150 2 199 7" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </h3>

                <p className="text-[15px] text-slate-400 leading-relaxed mb-6 max-w-md font-medium">
                  {t("workspaceEntry.card1Body")}
                </p>

                <div className="space-y-3 mb-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{t("workspaceEntry.whatYouCanDo")}</h4>
                  {card1Bullets.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0)] group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                      {text}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <GetInstantQuoteButton
                    text={t("workspaceEntry.createWorkspaceCta")}
                    href="https://client.vacei.com/onboarding"
                    className="h-[52px] px-8 text-sm"
                  />

                  <div className="flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-300">{t("workspaceEntry.oneClickSync")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: New Company (Deep Dark) */}
          <div className="group relative">
            <div className={cn(
              "relative h-full overflow-hidden rounded-[40px] bg-[#121421] border border-white/10 p-8 sm:p-10 lg:p-12 transition-all duration-700",
              !reduceMotion && "hover:shadow-[0_48px_120px_-24px_rgba(59,73,230,0.4)] hover:-translate-y-2 hover:border-blue-500/40 hover:bg-[#181B2D]"
            )}>
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              {/* Subtle Interior Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/[0.03] to-transparent pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-subtle" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-inner transition-all duration-700 group-hover:shadow-blue-400/20 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-blue-400/30">
                    <Rocket className="w-7 h-7 relative z-10" />
                    <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-100/50 group-hover:text-blue-400 transition-colors duration-500">{t("workspaceEntry.newFounders")}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                  {t("workspaceEntry.card2Title")}<span className="text-blue-400">{t("workspaceEntry.card2TitleAccent")}</span>
                </h3>

                <p className="text-base text-blue-100/40 leading-relaxed mb-auto max-w-md font-medium">
                  {t("workspaceEntry.card2Body")}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <GetInstantQuoteButton
                    text={t("workspaceEntry.startIncorporationCta")}
                    href="https://client.vacei.com/onboarding"
                    className="h-[52px] px-8 text-sm bg-white text-slate-900 border-none hover:bg-slate-50 shadow-white/5"
                    hasShadow={false}
                  />
                  <LocalizedLink
                    href="/contact"
                    className="h-[52px] px-8 text-sm flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    {t("workspaceEntry.bookConsultationCta")}
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-80 z-20" />
    </section>
  );
};

export default WorkspaceEntrySection;
