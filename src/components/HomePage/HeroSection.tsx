"use client";

import React, { useMemo, useState } from "react";
import LocalizedLink from "@/components/common/LocalizedLink";
import { ArrowRight } from "lucide-react";
import GradientContainer from "@/components/common/GradientContainer";
import { useTranslation } from "react-i18next";
import { useLazyMedia } from "@/hooks/use-lazy-media";
import { lazyImgProps } from "@/lib/lazy-media-props";
import { cn } from "@/lib/utils";

const HeroSection = ({ isDark = false }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const { ref: lazyMediaRef, shouldLoad: loadHeroVideo } = useLazyMedia();
  const trustPillLabels = useMemo(
    () => (t("hero.trustPillLabels", { returnObjects: true }) as string[]) ?? [],
    [t]
  );

  return (
    <section className="w-full relative">
      <GradientContainer
        backgroundColor={isDark ? "bg-black" : "bg-white"}
        roundedClassName="rounded-none"
        showNoise={false}
        className={cn(
          "relative flex min-h-0 flex-col justify-center pt-24 pb-10 sm:min-h-[88vh] sm:pt-28 sm:pb-16 lg:min-h-screen lg:pb-32 overflow-hidden",
          !isDark && "border-x-0 border-t-0 border-b border-slate-100 shadow-none sm:shadow-none"
        )}
        radialOpacity={isDark ? 0.38 : 0.2}
        leftPositionClass="-top-[5%] -left-[5%]"
        rightPositionClass="-bottom-[5%] -right-[5%]"
      >
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 sm:gap-10 lg:flex-row lg:items-center lg:gap-8 lg:px-8">

          {/* Left Content Area */}
          <div className="relative z-20 flex w-full flex-col items-start text-left lg:w-[48%]">
            <div className="relative mb-4 sm:mb-6">
              <h1 className="flex flex-col gap-1.5 tracking-tight sm:gap-2">
                <span
                  className={cn(
                    "text-[1.625rem] font-bodoni leading-[1.15] sm:text-4xl md:text-5xl",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  {t("hero.titleLine1")}
                </span>
                <span
                  className={cn(
                    "text-[1.625rem] font-sans font-extrabold leading-[1.15] sm:text-4xl md:text-5xl",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  {t("hero.titleLine2")}
                </span>
                <span className="font-bodoni text-[1.625rem] italic leading-[1.15] text-primary-blue sm:text-4xl md:text-5xl">
                  {t("hero.titleHighlight")}
                </span>
              </h1>
            </div>

            <div className="mt-4 max-w-xl space-y-3 sm:mt-6 sm:space-y-4">
              <p
                className={cn(
                  "text-base leading-relaxed text-balance font-medium sm:text-lg md:text-xl",
                  isDark ? "text-gray-400" : "text-slate-600"
                )}
              >
                {t("hero.body")}
              </p>
              <p
                className={cn(
                  "text-[15px] leading-relaxed text-balance font-medium sm:text-base md:text-[17px]",
                  isDark ? "text-gray-300" : "text-slate-700"
                )}
              >
                {t("hero.body2")}
              </p>
            </div>

            <div className="mb-6 mt-8 flex w-full flex-col gap-3 sm:mb-8 sm:mt-10 sm:flex-row sm:gap-4 sm:w-auto">
              <LocalizedLink
                href="/quote"
                className={cn(
                  "group flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-bold transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:py-4",
                  isDark
                    ? "bg-gradient-to-b from-white to-gray-200 text-slate-900 shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                    : "bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_12px_28px_-6px_rgba(37,99,235,0.45)] ring-1 ring-blue-500/30 hover:from-blue-500 hover:to-blue-600"
                )}
              >
                <span>{t("hero.quoteCta")}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </LocalizedLink>

              <LocalizedLink
                href="/contact"
                className={cn(
                  "group flex w-full items-center justify-center gap-2 rounded-full border px-8 py-3.5 text-[15px] font-medium transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:py-4",
                  isDark
                    ? "border-gray-700 bg-[#0A0A0F]/50 text-white hover:bg-white/5 hover:border-gray-500"
                    : "border-blue-200/80 bg-white text-blue-700 shadow-sm shadow-blue-500/10 hover:bg-blue-50/90 hover:border-blue-300"
                )}
              >
                <span>{t("hero.demoCta")}</span>
                <ArrowRight className="w-4 h-4 ml-1 text-primary-blue transition-transform group-hover:translate-x-1" />
              </LocalizedLink>
            </div>

            <div className="hide-scrollbar flex w-full flex-row flex-wrap items-center gap-x-5 gap-y-3 overflow-x-auto pb-1 sm:gap-x-10 sm:pb-0">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                </div>
                <span
                  className={cn(
                    "text-[14px] font-medium leading-none",
                    isDark ? "text-gray-400" : "text-slate-600"
                  )}
                >
                  {t("hero.benefit1")}
                </span>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                </div>
                <span
                  className={cn(
                    "text-[14px] font-medium leading-none",
                    isDark ? "text-gray-400" : "text-slate-600"
                  )}
                >
                  {t("hero.benefit2")}
                </span>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                </div>
                <span
                  className={cn(
                    "text-[14px] font-medium leading-none",
                    isDark ? "text-gray-400" : "text-slate-600"
                  )}
                >
                  {t("hero.benefit3")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="relative mt-6 flex w-full max-w-lg justify-center self-center sm:mt-10 lg:mt-0 lg:w-[50%] lg:max-w-none">
            <div className="relative mx-auto w-full max-w-[min(100%,520px)] lg:max-w-[650px]">

              {/* Main Browser Window Wrapper */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1D1E30] border border-white/10 shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]">

                {/* Browser Header */}
                <div className="h-10 w-full bg-[#181926] border-b border-white/5 flex items-center px-4 justify-between relative">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bg-black/20 px-6 py-1 rounded-md flex items-center justify-center">
                    <span className="text-[10px] text-white/40 tracking-widest font-mono">vacei.com</span>
                  </div>
                </div>

                {/* Video — MP4 loads only near viewport; GIF fallback uses native lazy decoding */}
                <div
                  ref={lazyMediaRef}
                  className="relative w-full aspect-video bg-black overflow-hidden"
                >
                  <img
                    src="/assets/videos/Main%20Render.gif"
                    alt="VACEI platform preview fallback"
                    {...lazyImgProps}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isVideoReady && !hasVideoError ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  {loadHeroVideo && (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster="/assets/videos/Main%20Render.gif"
                      onPlaying={() => setIsVideoReady(true)}
                      onError={() => setHasVideoError(true)}
                      aria-label="VACEI platform preview video"
                    >
                      <source src="/assets/videos/hero-banner-v1.mp4?v=20260323" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

              </div>

              {/* Glowing circle floating element top-right outside */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#181926] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl z-20 hidden sm:flex">
                <div className="w-6 h-6 rounded-full border-2 border-primary-blue border-r-transparent animate-spin" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip: in-flow on small screens to avoid overlap with floating UI; absolute on md+ */}
        {t("hero.trustStrip").trim() ? (
          <div className="relative z-30 mx-auto mt-8 w-full max-w-4xl px-4 sm:mt-10 md:absolute md:-bottom-20 md:left-1/2 md:mt-0 md:-translate-x-1/2 lg:-bottom-24">
            <div className="flex flex-col items-stretch justify-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-full sm:px-8 md:px-10">
              {trustPillLabels.map((label, i) => (
                <React.Fragment key={`${label}-${i}`}>
                  {i > 0 ? <div className="hidden h-4 w-px bg-slate-200 sm:block" /> : null}
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-black group-hover:scale-110 transition-transform">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : null}
      </GradientContainer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />

      {/* Bottom Services Strip (Marquee) — extra top padding on md+ clears the absolutely positioned trust strip */}
      <div className="relative mt-2 w-full overflow-hidden rounded-b-4xl border-b border-gray-100 bg-white pt-6 sm:pt-8  pb-6 sm:pb-8">
        {/* Subtle fade effect on the edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-x-4 sm:gap-x-6 px-2 sm:px-3">
              {(t("hero.marquee", { returnObjects: true }) as string[] || []).map((service, index) => (
                <div key={index} className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 bg-slate-50 border border-slate-200/60 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-blue/5 hover:border-primary-blue/30 hover:bg-white cursor-default group">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary-blue shadow-[0_0_8px_rgba(37,99,235,0.7)] shrink-0 transition-transform group-hover:scale-125"></div>
                  <span className="text-slate-700 font-bold text-[13px] sm:text-[14px] uppercase tracking-wider whitespace-nowrap">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
