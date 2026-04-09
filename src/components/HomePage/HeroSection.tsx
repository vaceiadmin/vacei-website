"use client";

import React, { useState } from "react";
import LocalizedLink from "@/components/common/LocalizedLink";
import { ArrowRight } from "lucide-react";
import GradientContainer from "@/components/common/GradientContainer";
import { useTranslation } from "react-i18next";
import { useLazyMedia } from "@/hooks/use-lazy-media";
import { lazyImgProps } from "@/lib/lazy-media-props";

const HeroSection = () => {
  const { t } = useTranslation("home");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const { ref: lazyMediaRef, shouldLoad: loadHeroVideo } = useLazyMedia();
  const titleLine2 = t("hero.titleLine2").trim();
  const titleHighlight = t("hero.titleHighlight").trim();
  const multiLineHeadline = Boolean(titleLine2 || titleHighlight);

  return (
    <section className="w-full relative">
      <GradientContainer
        backgroundColor="bg-black"
        className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-24 rounded-b-[48px] overflow-hidden"
        radialOpacity={0.6}
        leftPositionClass="-top-[5%] -left-[5%]"
        rightPositionClass="-bottom-[5%] -right-[5%]"
      >
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Content Area */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left relative z-20">
            <div className="relative mb-6">
              <h1 className="leading-[1.1] tracking-tight flex flex-col gap-2">
                {multiLineHeadline ? (
                  <>
                    <span className="text-4xl sm:text-5xl font-bodoni text-white">
                      {t("hero.titleLine1")}
                    </span>
                    {titleLine2 ? (
                      <span className="text-4xl sm:text-5xl font-sans font-extrabold text-white">
                        {titleLine2}
                      </span>
                    ) : null}
                    {titleHighlight ? (
                      <span className="text-4xl sm:text-5xl font-bodoni italic text-primary-blue">
                        {titleHighlight}
                      </span>
                    ) : null}
                  </>
                ) : (
                  <span className="text-4xl sm:text-5xl font-sans font-extrabold text-white">
                    {t("hero.titleLine1")}
                  </span>
                )}
              </h1>
            </div>

            <div className="max-w-xl mt-6 space-y-4">
              <p className="text-gray-400 text-base sm:text-[17px] leading-relaxed text-balance font-medium">
                {t("hero.body")}
              </p>
              {t("hero.body2").trim() ? (
                <p className="text-gray-300 text-base sm:text-[17px] leading-relaxed text-balance font-medium">
                  {t("hero.body2")}
                </p>
              ) : null}
            </div>




            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 mb-6">
              <LocalizedLink
                href="/quote"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white to-gray-200 text-slate-900 px-8 py-3.5 text-[15px] font-bold shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all hover:scale-105"
              >
                <span>{t("hero.quoteCta")}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </LocalizedLink>

              <LocalizedLink
                href="/contact"
                className="group flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-[#0A0A0F]/50 text-white px-8 py-3.5 text-[15px] font-medium transition-all hover:bg-white/5 hover:border-gray-500 hover:scale-105"
              >
                <span>{t("hero.demoCta")}</span>
                <ArrowRight className="w-4 h-4 ml-1 text-primary-blue transition-transform group-hover:translate-x-1" />
              </LocalizedLink>
            </div>


            <div className="flex flex-row items-center gap-x-6 sm:gap-x-10  w-full overflow-x-auto hide-scrollbar pb-2 sm:pb-0">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                </div>
                <span className="text-gray-400 text-[14px] font-medium leading-none">{t("hero.benefit1")}</span>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                </div>
                <span className="text-gray-400 text-[14px] font-medium leading-none">{t("hero.benefit2")}</span>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                </div>
                <span className="text-gray-400 text-[14px] font-medium leading-none">{t("hero.benefit3")}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="w-full lg:w-[50%] relative flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[650px] mx-auto">

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

      {/* Bottom Services Strip (Marquee) */}
      <div className="w-full bg-white relative py-6 sm:py-8 border-b border-gray-100 overflow-hidden">
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

      {/* Trust / positioning strip */}
      {t("hero.trustStrip").trim() ? (
        <div className="w-full bg-[#FAFBFF] border-b border-slate-100 py-5 sm:py-6">
          <p className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-sm sm:text-[15px] font-medium leading-relaxed">
            {t("hero.trustStrip")}
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
