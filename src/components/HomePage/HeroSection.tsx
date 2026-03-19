import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextAnimation from "../common/TextAnimation";
import GradientContainer from "../common/GradientContainer";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { useDirectionalInView } from "@/hooks/use-directional-in-view";
import { useIsSafari } from "@/hooks/use-safari";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";

const HeroSection = () => {
  const { reduceMotion, isIPhone, isLowPerformance } = usePerformance();
  const isSafari = useIsSafari();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useDirectionalInView(sectionRef);

  const handleMouseMove = (e: React.MouseEvent) => {
    // No-op for static rendering
  };

  const handleMouseLeave = () => {
    // No-op for static rendering
  };


  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-[#050510] min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-38"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/IMG_3843.PNG"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"

        />
        {/* Subtle Overlay to blend the top and bottom */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 via-transparent to-[#050510]/80 pointer-events-none" /> */}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Content Area */}
        <div className="w-full lg:w-[52%] flex flex-col items-start text-left relative z-20">
          {/* Tagline/Metadata */}


          {/* Headline */}
          <div className="relative mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              One Workspace for Your Business and
            </h1>
            <span className="block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary-blue via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-[1.2]">
              All Your Advisors
            </span>
          </div>

          {/* Subheadline & Description */}
          <div className="space-y-6 max-w-xl">
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed text-balance">
              Manage accounting, audit, legal, and corporate services on one secure platform. Invite your advisors or connect with trusted VACEI partner firms. Get full visibility of documents, deadlines, filings, and engagements.
            </p>
          </div>

          {/* Supporting Text */}
          <div className="mt-8 border-l-2 border-primary-blue/30 pl-5 py-1">
            <p className="text-sm sm:text-base text-slate-300/80 italic leading-relaxed">
              Everything happens in one structured workspace — no scattered emails, no lost documents, no uncertainty.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-12 mb-8">
            <Link
              href="/portal/client-portal"
              className="group relative flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-base font-bold shadow-xl transition-all duration-300 hover:shadow-primary-blue/40 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 font-bold">I Have a Company</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/quote"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:scale-95 backdrop-blur-sm shadow-lg hover:shadow-primary-blue/10"
            >
              <span>Start a New Company</span>
              <MoveRight className="w-4 h-4 text-primary-blue transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bottom mini-line */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500">
            <p>Already working with an accountant, auditor or lawyer?</p>
            <Link href="/contact" className="text-primary-blue font-medium hover:text-white transition-colors border-b border-primary-blue/30 hover:border-white">
              Invite them to your workspace.
            </Link>
          </div>
        </div>

        {/* Right Visual Area */}
        <div
          className="w-full lg:w-[42%] relative flex justify-center items-center"
        >
          {/* Backdrop Glows */}
          <div className="absolute -inset-10 bg-primary-blue/10 blur-[100px] rounded-full opacity-40 animate-pulse pointer-events-none" />

          <div
            className="relative w-full aspect-[16/11.5] rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] border border-white/10 group bg-[#0a0a1a]"
          >
            <div className="relative h-full w-full">
              {/* Browser Bar Mockup */}
              <div className="h-8 w-full bg-[#15162d] border-b border-white/5 flex items-center px-4 gap-2 absolute top-0 left-0 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto bg-white/5 h-4 w-1/3 rounded-full hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/40 mr-2" />
                  <span className="text-[7px] text-white/30 uppercase tracking-[0.2em] font-mono">vacei.com</span>
                </div>
              </div>

              {/* Main Visual Asset */}
              <div className="absolute inset-0 pt-8 mt-[-1px]">
                <Image
                  src="/assets/images/WhatsApp Image 2026-03-19 at 8.42.56 PM.jpeg"
                  alt="VACEI platform interface"
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-[2s] group-hover:scale-105"
                  unoptimized
                />
                {/* Glass overlay and lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Interactive Decoration */}
              {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between transform translate-y-0 opacity-100 transition-all duration-700 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-blue" />
                  </div>
                  <span className="text-white text-xs font-medium tracking-wide">Interactive Platform Overview</span>
                </div>
                <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-primary-blue" />
                </div>
              </div> */}
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div
            className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-[#15162d]/80 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl z-30 hidden lg:flex"
          >
            <div className="w-8 h-8 rounded-full border-2 border-primary-blue border-t-transparent animate-spin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
