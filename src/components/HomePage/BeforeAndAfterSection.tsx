"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const HoverPlayGif = ({ src, alt, className, isDark = false, playDesktop, playMobile }: { src: string, alt: string, className?: string, isDark?: boolean, playDesktop: string, playMobile: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [firstFrameUrl, setFirstFrameUrl] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Dynamically draw the first frame of the GIF to a canvas to use as a static placeholder
    const img = document.createElement("img");
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        try {
          setFirstFrameUrl(canvas.toDataURL("image/jpeg", 0.9));
        } catch (e) {
          console.error("Could not capture GIF frame", e);
        }
      }
    };
  }, [src]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={cn("relative w-full h-full cursor-pointer overflow-hidden group", className)}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered((prev) => !prev)}
    >
      <div className={cn("absolute inset-0 z-0", isDark ? "bg-[#0a0d1d]" : "bg-white")} />

      {/* The Active GIF */}
      <div className={cn("absolute inset-0 transition-opacity duration-500 z-10", isHovered ? "opacity-100" : "opacity-0")}>
        {isHovered && (
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-b-lg"
            unoptimized
          />
        )}
      </div>

      {/* The Static Placeholder */}
      <div className={cn("absolute inset-0 transition-opacity duration-500 z-0", isHovered ? "opacity-0" : "opacity-100")}>
        {firstFrameUrl ? (
          <img src={firstFrameUrl} alt={alt} className="w-full h-full object-contain filter rounded-b-lg" />
        ) : (
          <div className="w-full h-full animate-pulse bg-slate-200/20" />
        )}

        {/* Play Overlay Indicator */}
        <div className={cn("absolute inset-0 flex items-center justify-center backdrop-blur-[2px] transition-all duration-500", !isMobile && "group-hover:opacity-0", isDark ? "bg-black/40" : "bg-white/40")}>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-125", isDark ? "bg-blue-600 text-white shadow-blue-500/30" : "bg-white text-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)]")}>
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span className={cn("text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg", isDark ? "bg-[#0e1222]/80 border border-white/10 text-white" : "bg-white/80 border border-slate-200 text-slate-800")}>
              {isMobile ? playMobile : playDesktop}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAndAfterSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className="pt-32 pb-24 sm:pt-24 lg:py-32 bg-black relative overflow-hidden isolate z-0 rounded-[48px]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest">{t('beforeAfter.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {t('beforeAfter.titleLine1')}<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">{t('beforeAfter.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-full h-auto lg:h-[600px] xl:h-[650px] items-stretch">
          
          {/* Card 1: Before */}
          <div className="relative z-10 flex flex-col group/card h-full w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[2.5rem] blur-xl opacity-50 group-hover/card:opacity-70 transition duration-500 pointer-events-none" />
            
            <div className="relative w-full h-full flex flex-col bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50 shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">&times;</span>
                    <h4 className="text-2xl font-black text-slate-900">{t('beforeAfter.beforeTitle')}</h4>
                  </div>
                  <ul className="space-y-2">
                    {(t('beforeAfter.beforeItems', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-slate-100/50 flex-1 flex flex-col justify-center items-center w-full">
                <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm w-full">
                  <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="relative w-full aspect-video bg-white overflow-hidden p-[2px]">
                    <HoverPlayGif
                      src="/assets/videos/Before.gif"
                      alt={t('beforeAfter.beforeGifAlt')}
                      playDesktop={t('beforeAfter.hoverPlayDesktop')}
                      playMobile={t('beforeAfter.hoverPlayMobile')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: After */}
          <div className="relative z-10 flex flex-col group/card h-full w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] blur-xl opacity-40 group-hover/card:opacity-60 transition duration-500 animate-pulse-slow pointer-events-none" />
            
            <div className="relative w-full h-full flex flex-col bg-[#020410] rounded-[2rem] border border-blue-500/30 overflow-hidden shadow-2xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="p-8 border-b border-white/10 flex items-start justify-between relative z-10 bg-white/5 backdrop-blur-sm shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">&#10003;</span>
                    <h4 className="text-2xl font-black text-white">{t('beforeAfter.afterTitle')}</h4>
                  </div>
                  <ul className="space-y-2">
                    {(t('beforeAfter.afterItems', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-blue-300/80">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-black/20 flex-1 flex flex-col justify-center items-center w-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="rounded-xl overflow-hidden bg-[#0e1222] border border-white/10 shadow-xl relative z-10 w-full">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="relative w-full aspect-video bg-[#0a0d1d] overflow-hidden p-[2px]">
                    <HoverPlayGif
                      src="/assets/videos/After.gif"
                      alt={t('beforeAfter.afterGifAlt')}
                      isDark={true}
                      playDesktop={t('beforeAfter.hoverPlayDesktop')}
                      playMobile={t('beforeAfter.hoverPlayMobile')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-16 text-center">
            <p className="text-lg font-bold text-slate-300">
              {t('beforeAfter.footerLine')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfterSection;
