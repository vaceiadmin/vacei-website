import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GradientContainer from "@/components/common/GradientContainer";

const HeroSection = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <section className="w-full relative">
      <GradientContainer 
        backgroundColor="bg-black" 
        className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-24 !rounded-none"
        radialOpacity={0.6}
        leftPositionClass="-top-[5%] -left-[5%]"
        rightPositionClass="-bottom-[5%] -right-[5%]"
      >
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Content Area */}
        <div className="w-full lg:w-[48%] flex flex-col items-start text-left relative z-20">
          <div className="relative mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight">
              Receive Proposals. <br />
              Choose Your Advisors. <br />
              <span className="text-primary-blue">Manage Everything.</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-xl mt-4">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-balance font-medium">
              Submit one request — receive proposals from verified firms, and manage compliance, documents, and workflows in one platform.
            </p>
          </div>

          <div className="mt-8 border-l-2 border-primary-blue/40 pl-5 py-2">
            <p className="text-sm sm:text-[15px] text-gray-500 italic leading-relaxed font-medium">
              From onboarding to compliance — everything in one workspace
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-12 mb-8">
            <Link
              href="/quote"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-white to-gray-200 text-slate-900 px-8 py-3.5 text-[15px] font-bold shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all hover:scale-105"
            >
              <span>Get Proposals Now</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-[#0A0A0F]/50 text-white px-8 py-3.5 text-[15px] font-medium transition-all hover:bg-white/5 hover:border-gray-500 hover:scale-105"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 ml-1 text-primary-blue transition-transform group-hover:translate-x-1" />
            </Link>
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

            {/* Video */}
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <img
                src="/assets/videos/Main%20Render.gif"
                alt="VACEI platform preview fallback"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isVideoReady && !hasVideoError ? "opacity-0" : "opacity-100"
                }`}
              />
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/assets/videos/Main%20Render.gif"
                onPlaying={() => setIsVideoReady(true)}
                onError={() => setHasVideoError(true)}
                aria-label="VACEI platform preview video"
              >
                <source src="/assets/videos/hero-banner-v1.mp4?v=20260323" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
    </section>
  );
};

export default HeroSection;
