"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";
import LocalizedLink from "@/components/common/LocalizedLink";
import { cn } from "@/lib/utils";

const InteractiveBlock = ({ isDark = false }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");

  return (
    <section className={cn(
      "relative py-24 sm:py-32 overflow-hidden mt-12 mx-4 sm:mx-6 lg:mx-8 mb-12  rounded-[48px]",
      isDark ? "bg-[#05050A] text-white shadow-2xl" : "bg-white text-slate-900 border border-slate-100 shadow-xl shadow-blue-500/5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content & Form Preview */}
          <div className="space-y-8">
            <div>
              <h2 className={cn(
                "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-8",
                isDark ? "text-white" : "text-slate-900"
              )}>
                {t("interactiveBlock.title")}
              </h2>
              <div className="flex flex-wrap gap-4 mb-8">
                {(t("interactiveBlock.microcopy", { returnObjects: true }) as string[] || []).map((text, i) => (
                  <div key={i} className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border",
                    isDark ? "bg-white/5 border-white/10 text-white/70" : "bg-blue-50 border-blue-100 text-blue-600"
                  )}>
                    {i === 0 && <Clock className="w-3.5 h-3.5" />}
                    {i === 1 && <Shield className="w-3.5 h-3.5" />}
                    {i === 2 && <Zap className="w-3.5 h-3.5" />}
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className={cn(
              "p-8 rounded-[2.5rem] border shadow-2xl transition-all duration-500 hover:shadow-primary-blue/5",
              isDark ? "bg-[#0F111A] border-white/10" : "bg-white border-slate-100"
            )}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    {t("interactiveBlock.companyNameLabel")}
                  </label>
                  <div className={cn(
                    "h-14 rounded-2xl border px-5 flex items-center text-sm font-medium",
                    isDark ? "bg-white/5 border-white/10 text-white/50" : "bg-slate-50 border-slate-200 text-slate-400"
                  )}>
                    e.g. Acme Global Ltd
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      {t("interactiveBlock.countryLabel")}
                    </label>
                    <div className={cn(
                      "h-14 rounded-2xl border px-5 flex items-center text-sm font-medium",
                      isDark ? "bg-white/5 border-white/10 text-white/50" : "bg-slate-50 border-slate-200 text-slate-400"
                    )}>
                      Select Country
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      {t("interactiveBlock.servicesLabel")}
                    </label>
                    <div className={cn(
                      "h-14 rounded-2xl border px-5 flex items-center text-sm font-medium",
                      isDark ? "bg-white/5 border-white/10 text-white/50" : "bg-slate-50 border-slate-200 text-slate-400"
                    )}>
                      Select Services
                    </div>
                  </div>
                </div>

                <a
                  href="https://client.vacei.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 rounded-2xl bg-primary-blue text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25"
                >
                  {t("interactiveBlock.cta")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual Polish */}
          <div className="relative">
            <div className={cn(
              "absolute -inset-4 rounded-[3rem] blur-3xl opacity-20 pointer-events-none",
              isDark ? "bg-primary-blue" : "bg-blue-400"
            )} />

            <div className={cn(
              "relative rounded-[2.5rem] border overflow-hidden p-8 sm:p-12",
              isDark ? "bg-[#0F111A] border-white/10" : "bg-white border-slate-200 shadow-xl"
            )}>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-primary-blue">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Fast Setup</h4>
                    <p className="text-sm text-slate-400">Portal ready in seconds after registration.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Real-time Visibility</h4>
                    <p className="text-sm text-slate-400">Instant tracking of your business status.</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100/10">
                  <p className="text-sm text-slate-400 mb-6">Want to skip the form and talk to us first?</p>
                  <LocalizedLink
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors",
                      isDark ? "text-white hover:text-primary-blue" : "text-slate-900 hover:text-blue-600"
                    )}
                  >
                    {t("interactiveBlock.secondaryCta")}
                    <ArrowRight className="w-4 h-4 text-primary-blue" />
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveBlock;
