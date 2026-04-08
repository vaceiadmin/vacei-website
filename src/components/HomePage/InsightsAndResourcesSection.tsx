"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Play, ArrowRight, FileText, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/common/LocalizedLink";
import { SectionTitleHero } from "@/components/HomePage/SectionTitleHero";
import { cn } from "@/lib/utils";

const InsightsVideoGallery = dynamic(
  () => import("@/components/HomePage/InsightsVideoGallery"),
  {
    loading: () => (
      <div
        className="mt-20 min-h-[min(70vh,520px)] scroll-mt-28 rounded-[2rem] border border-white/[0.06] bg-[#0c0d12]"
        aria-hidden
      >
        <div className="h-full min-h-[inherit] animate-pulse rounded-[2rem] bg-gradient-to-b from-white/[0.06] to-transparent" />
      </div>
    ),
  }
);

const typeColorClass: Record<string, string> = {
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  purple: "text-primary-blue",
};

const InsightsAndResourcesSection = () => {
  const { t } = useTranslation("home");

  const resourcesList = useMemo(() => {
    const raw =
      (t("insightsResources.resources", { returnObjects: true }) as any[]) || [];
    const config = [
      {
        icon: <FileText className="w-5 h-5 text-emerald-400" />,
        href: "/insights/preparing-for-seamless-audit",
        color: "emerald",
      },
      {
        icon: <Play className="w-5 h-5 pl-0.5 text-blue-400" />,
        href: "#insights-video-gallery",
        color: "blue",
        ctaWatchVideo: true,
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary-blue" />,
        href: "/insights/scaling-operations-checklist",
        color: "purple",
      },
    ];

    return raw.map((r, i) => ({
      ...r,
      ...config[i],
    }));
  }, [t]);

  return (
    <section className="py-24 bg-black relative overflow-hidden rounded-[48px]">
      {/* Background glow behind title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-6">
            {t("insightsResources.badge")}
          </div>
          <SectionTitleHero
            variant="dark"
            className="mb-6 items-center text-center"
            line1={t("insightsResources.titleLine1")}
            highlight={t("insightsResources.titleHighlight")}
          />
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            {t("insightsResources.subtitle")}
          </p>
        </div>

        {/* Grid of Resource Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourcesList.map((item, index) => {
            const CardContent = (
              <div className="flex flex-col h-full bg-[#0A0B10] border border-white/5 rounded-3xl p-8 hover:bg-[#0D0F18] hover:border-white/10 transition-all duration-300 group shadow-2xl hover:shadow-[0_20px_40px_-20px_rgba(59,130,246,0.15)] cursor-pointer">
                {/* Card Header (Type & Category) */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <span
                      className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        typeColorClass[item.color as string] ?? "text-blue-400"
                      )}
                    >
                      {item.type}
                    </span>
                    <div className="text-sm font-semibold text-slate-500 mt-0.5">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>

                {/* Card Footer */}
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                  {"ctaWatchVideo" in item && item.ctaWatchVideo
                    ? t("insightsResources.watchVideo")
                    : t("insightsResources.readMore")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );

            return (
              <LocalizedLink key={index} href={item.href || "#"}>
                {CardContent}
              </LocalizedLink>
            );
          })}
        </div>

        <InsightsVideoGallery />

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <LocalizedLink
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-6 py-3 rounded-xl border border-blue-500/20"
          >
            {t("insightsResources.viewAll")}{" "}
            <ArrowRight className="w-4 h-4" />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
};

export default InsightsAndResourcesSection;
