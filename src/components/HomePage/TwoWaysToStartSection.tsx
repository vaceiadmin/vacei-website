"use client";

import React from 'react';
import { ClipboardList, Network, FileSpreadsheet, UserCheck, UserPlus, Layers, HeartHandshake } from "lucide-react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { useTranslation } from 'react-i18next';
import { SectionTitleHero } from "@/components/HomePage/SectionTitleHero";

const StepItem = ({
  title,
  desc,
  icon,
  number,
  isLast,
  variant = "light",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  number: number;
  isLast: boolean;
  variant?: "light" | "dark";
}) => {
  const isDark = variant === "dark";
  return (
    <div className="relative flex gap-5 pb-8 last:pb-0 group">
      {!isLast && (
        <div
          className={`absolute left-[20px] top-[40px] bottom-[-20px] w-px transition-colors duration-500 hidden md:block ${
            isDark
              ? "bg-white/15 group-hover:bg-blue-400/50"
              : "bg-slate-200 group-hover:bg-blue-500/50"
          }`}
        />
      )}
      <div
        className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
          isDark
            ? "bg-white/5 border border-white/15 text-blue-400 group-hover:border-blue-400/60"
            : "bg-slate-50 border border-slate-200 text-blue-600 group-hover:border-blue-500"
        }`}
      >
        {icon}
        <div
          className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black border ${
            isDark
              ? "bg-blue-500 text-white border-blue-400"
              : "bg-slate-900 text-white border-slate-900"
          }`}
        >
          {number}
        </div>
      </div>
      <div className="flex-1 pt-0">
        <h3
          className={`text-base font-black mb-1 transition-colors ${
            isDark
              ? "text-white group-hover:text-blue-300"
              : "text-slate-900 group-hover:text-blue-600"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-medium leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

const TwoWaysToStartSection = () => {
  const { t } = useTranslation('home');

  const MarketplaceSteps = [
    {
      title: t("marketplace.steps.0.title"),
      desc: t("marketplace.steps.0.desc"),
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      title: t("marketplace.steps.1.title"),
      desc: t("marketplace.steps.1.desc"),
      icon: <Network className="w-5 h-5" />
    },
    {
      title: t("marketplace.steps.2.title"),
      desc: t("marketplace.steps.2.desc"),
      icon: <FileSpreadsheet className="w-5 h-5" />
    },
    {
      title: t("marketplace.steps.3.title"),
      desc: t("marketplace.steps.3.desc"),
      icon: <UserCheck className="w-5 h-5" />
    }
  ];

  const inviteFlowRaw = t("howItWorks.twoWaysToStart.inviteFlowSteps", {
    returnObjects: true,
  }) as { title: string; desc: string }[] | string;
  const inviteFlowSteps = Array.isArray(inviteFlowRaw) ? inviteFlowRaw : [];

  const inviteStepIcons = [
    <UserPlus key="0" className="w-5 h-5" />,
    <UserCheck key="1" className="w-5 h-5" />,
    <Layers key="2" className="w-5 h-5" />,
    <HeartHandshake key="3" className="w-5 h-5" />,
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden isolate z-0 rounded-[48px]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">

        {/* Header Style (Matching Before/After) */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest">{t("howItWorks.twoWaysToStart.badge")}</span>
          </div>
          <SectionTitleHero
            variant="dark"
            className="mb-6 items-center text-center"
            line1={t("howItWorks.twoWaysToStart.titleLine1")}
            highlight={t("howItWorks.twoWaysToStart.titleHighlight")}
          />
          <p className="mt-4 text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            {t("howItWorks.twoWaysToStart.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-full items-stretch">

          {/* Marketplace Card (Light Theme) */}
          <div className="relative z-10 flex flex-col group/card h-full w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-200 to-blue-300 rounded-[2.5rem] blur-xl opacity-40 group-hover/card:opacity-60 transition duration-500 pointer-events-none" />

            <div className="relative w-full h-full flex flex-col bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50 shrink-0">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">{t("howItWorks.twoWaysToStart.marketplaceBadge")}</span>
                    {/* <span className="text-[10px] font-black uppercase tracking-widest text-white bg-blue-600 px-3 py-1 rounded-full shadow-lg shadow-blue-500/20 animate-pulse">{t("twoWaysToStart.recommendedBadge")}</span> */}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{t("howItWorks.twoWaysToStart.marketplaceTitle")}</h3>
                  <p className="text-[15px] font-semibold text-slate-500 max-w-sm leading-relaxed">
                    {t("howItWorks.twoWaysToStart.marketplaceSubtitle")}
                  </p>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-slate-100/50 flex flex-col items-center">
                <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm w-full mb-10">
                  <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-video bg-white overflow-hidden p-[2px]">
                    <img
                      src="/assets/videos/Request%20Service_V1.2.gif"
                      alt={t("marketplace.gifAlt")}
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover/card:opacity-100"
                    />
                  </div>
                </div>

                <div className="w-full">
                  {MarketplaceSteps.map((step, i) => (
                    <StepItem key={i} {...step} number={i + 1} isLast={i === MarketplaceSteps.length - 1} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Invite Advisors Card (Dark Theme) */}
          <div className="relative z-10 flex flex-col group/card h-full w-full mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] blur-xl opacity-30 group-hover/card:opacity-50 transition duration-500 pointer-events-none" />

            <div className="relative w-full h-full flex flex-col bg-[#020410] rounded-[2rem] border border-blue-500/30 overflow-hidden shadow-2xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="p-8 border-b border-white/10 flex items-start justify-between relative z-10 bg-white/5 backdrop-blur-sm shrink-0">
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">{t("howItWorks.twoWaysToStart.inviteBadge")}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{t("howItWorks.twoWaysToStart.inviteTitle")}</h3>
                  <p className="text-[15px] font-semibold text-blue-300/60 max-w-sm leading-relaxed">
                    {t("howItWorks.twoWaysToStart.inviteSubtitle")}
                  </p>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-black/20 flex flex-col relative flex-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="rounded-xl overflow-hidden bg-[#0e1222] border border-white/10 shadow-xl relative z-10 w-full mb-10">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-video bg-[#0a0d1d] overflow-hidden p-[2px]">
                    <img
                      src="/assets/videos/Invite%20Advisor%20V1.2.gif"
                      alt={t("inviteAdvisors.gifAlt")}
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover/card:opacity-100"
                    />
                  </div>
                </div>

                <div className="relative z-10 w-full">
                  {inviteFlowSteps.map((step, i) => (
                    <StepItem
                      key={i}
                      variant="dark"
                      title={step.title}
                      desc={step.desc}
                      icon={inviteStepIcons[i] ?? <UserCheck className="w-5 h-5" />}
                      number={i + 1}
                      isLast={i === inviteFlowSteps.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Area Area */}
        <div className="mt-16 text-center flex flex-col items-center relative z-20">
          <GetInstantQuoteButton
            text={t("howItWorks.twoWaysToStart.footerCta")}
            className="h-[56px] px-12 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] mb-6 text-[15px] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105"
          />
          <p className="text-[13px] font-black text-slate-500 uppercase tracking-widest max-w-md mx-auto">
            {t("howItWorks.twoWaysToStart.footerNote")}
          </p>
        </div>

      </div>
    </section>
  );
};

export default TwoWaysToStartSection;
