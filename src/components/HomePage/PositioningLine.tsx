"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const PositioningLine = ({ isDark = false }: { isDark?: boolean }) => {
  const { t } = useTranslation("home");
  const phrase = t("positioningLine.text");

  const strip = (halfKey: number) => (
    <div className="flex w-max items-center gap-3 px-2 sm:gap-4 sm:px-3 my-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={`${halfKey}-${i}`}
          className={cn(
            "inline-flex shrink-0 items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold tracking-tight shadow-sm sm:text-base",
            isDark
              ? "border-white/10 bg-white/[0.04] text-slate-200 shadow-black/40"
              : "border-slate-200/90 bg-white text-slate-800 shadow-slate-200/40"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full",
              isDark
                ? "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                : "bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.45)]"
            )}
          />
          {phrase}
        </span>
      ))}
    </div>
  );

  return (
    <section
      className={cn(
        "relative mt-0 w-full overflow-hidden border-y py-5 sm:py-6",
        isDark
          ? "border-white/[0.08] bg-[linear-gradient(105deg,#050816_0%,#0a1020_45%,#050816_100%)]"
          : "border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-slate-50"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-28",
          isDark
            ? "bg-gradient-to-r from-[#020617] to-transparent"
            : "bg-gradient-to-r from-white to-transparent"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-28",
          isDark
            ? "bg-gradient-to-l from-[#020617] to-transparent"
            : "bg-gradient-to-l from-white to-transparent"
        )}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          isDark
            ? "bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"
            : "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px",
          isDark
            ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"
        )}
      />

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-positioning-marquee items-center">
          {strip(0)}
          {strip(1)}
        </div>
      </div>

      <style jsx global>{`
        @keyframes positioning-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-positioning-marquee {
          animation: positioning-marquee 36s linear infinite;
        }
        .animate-positioning-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PositioningLine;
