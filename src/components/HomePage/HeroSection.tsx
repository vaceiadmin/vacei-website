"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "../common/TextAnimation";
import GradientContainer from "../common/GradientContainer";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { useDirectionalInView } from "@/hooks/use-directional-in-view";
import { useIsSafari } from "@/hooks/use-safari";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, Play, Sparkles, X, Focus } from "lucide-react";

const HeroSection = () => {
  const { reduceMotion, isIPhone, isLowPerformance } = usePerformance();
  const isSafari = useIsSafari();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const sectionRef = useRef(null);
  const isInViewGlobal = useDirectionalInView(sectionRef);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  const badgeContent = (
    <>
      <motion.span
        className="h-2 w-2 rounded-full bg-primary-blue"
        animate={!reduceMotion && isInViewGlobal && !isIPhone && !isLowPerformance ? { 
          boxShadow: ["0_0_12px_rgba(59,130,246,0.8)", "0_0_20px_rgba(59,130,246,1)", "0_0_12px_rgba(59,130,246,0.8)"] 
        } : {}}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      />
      <span className="tracking-[0.2em] font-medium text-white">Accounting • Audit • Corporate</span>
    </>
  );

  const mainContent = (
    <div className="w-full lg:w-[55%] flex flex-col justify-center text-left items-start z-10 pt-16 lg:pt-0">
      <motion.div 
        initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
        animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase text-white mb-6 shadow-lg shadow-black/20",
          isSafari || isIPhone || isLowPerformance ? "bg-slate-900/50" : "bg-slate-900/40 backdrop-blur-xl"
        )}
      >
        {badgeContent}
      </motion.div>

      <div className="space-y-4 mb-6 w-full">
        <TextAnimation
          text="One Workspace for Your Business"
          as="h1"
          className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
        />
        <motion.h2 
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-blue-100/90 font-bold leading-[1.1]"
        >
          And All Your Advisors
        </motion.h2>
      </div>

      <motion.p 
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-slate-300 text-base sm:text-lg lg:text-base xl:text-lg max-w-xl leading-relaxed mb-8"
      >
        Manage accounting, audit, legal, and corporate services through one secure platform. Invite your existing advisors or connect with trusted VACEI partner firms.
      </motion.p>

      <motion.div 
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="space-y-4 mb-10"
      >
        {[
          "Full visibility over documents, deadlines, filings, and engagements",
          "One structured workspace—no scattered emails, no uncertainty"
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <CheckCircle2 className="w-3 h-3 text-primary-blue" />
            </div>
            <span className="text-sm sm:text-base text-slate-200/90 font-medium">{item}</span>
          </div>
        ))}
      </motion.div>

      <motion.div 
        initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
      >
        <Link
          href="#existing-company"
          className={cn(
            "group flex items-center justify-center gap-2 rounded-full bg-white text-primary-blue text-base px-8 py-3.5 font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.25)]",
            !isIPhone && !isLowPerformance && "hover:shadow-[0_14px_40px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
          )}
        >
          I Have a Company
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="#start-company"
          className={cn(
            "group flex items-center justify-center gap-2 rounded-full border border-white/20 text-white text-base px-8 py-3.5 font-medium transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
            isSafari || isIPhone || isLowPerformance ? "bg-white/5 hover:bg-white/10" : "bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/40"
          )}
        >
          <Sparkles className="w-4 h-4 text-primary-blue" />
          Start a New Company
        </Link>
      </motion.div>

      <motion.p 
        initial={reduceMotion ? {} : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-6 text-xs sm:text-sm text-slate-400 max-w-xl flex gap-2"
      >
        Already working with an accountant, auditor or lawyer?{" "}
        <span className="text-blue-200 font-medium border-b border-blue-500/50 pb-0.5 hover:text-white hover:border-blue-400 transition-colors" style={{ cursor: "pointer" }}>
          Invite them to your workspace.
        </span>
      </motion.p>
    </div>
  );

  const visualContent = (
    <div className="w-full lg:w-[45%] flex flex-col justify-center relative mt-16 lg:mt-0 z-10" style={{ perspective: "2000px" }}>
      <motion.div
        initial={reduceMotion ? {} : { opacity: 0, scale: 0.95, y: 30, rotateY: -15, rotateX: 10 }}
        animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0, rotateY: -5, rotateX: 5 }}
        whileHover={reduceMotion ? {} : { rotateY: 0, rotateX: 0, scale: 1.02 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full group cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setShowVideoModal(true)}
      >
        <div className={cn(
          "relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-700",
          !isIPhone && !isLowPerformance && "group-hover:border-primary-blue/40 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]",
          isSafari || isIPhone || isLowPerformance ? "bg-[#0b0c20]" : "bg-[#0b0c20] backdrop-blur-2xl"
        )}>
          {/* Top Browser Bar Mockup */}
          <div className="w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 absolute top-0 left-0 z-20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="mx-auto bg-white/5 h-4 w-1/3 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white/30 uppercase tracking-widest font-mono">vacei.com/workspace</span>
            </div>
          </div>
          
          <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/5] xl:aspect-[4/3] relative pt-8">
            <img 
              src="/assets/videos/Main Render.gif" 
              alt="VACEI platform overview" 
              className="absolute inset-0 w-full h-full object-cover rounded-b-[2rem] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" 
            />
            {/* Ambient gradients */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050510]/95 via-[#050510]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 z-30">
               <motion.div className="w-20 h-20 rounded-full bg-primary-blue/90 backdrop-blur-xl border-2 border-white/20 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)] shadow-primary-blue/50 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-shadow duration-500">
                  <Play className="w-8 h-8 text-white ml-2 fill-white" />
               </motion.div>
            </div>
            
            {/* Interactive Badge Bottom */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 z-30">
               <div className="bg-[#0f1025]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Focus className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm tracking-wide">Interactive Demo</h3>
                      <p className="text-blue-200/60 text-xs mt-0.5">Watch exactly how it works</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-primary-blue/20 text-primary-blue text-xs font-semibold uppercase tracking-wider border border-primary-blue/30">
                    Play
                  </div>
               </div>
            </div>

            {/* Inner Ring */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-b-[2rem] pointer-events-none z-30" />
          </div>
        </div>
        
        {/* Abstract Blur Behind Card */}
        {!isIPhone && !isLowPerformance && (
          <div className="absolute -inset-10 bg-gradient-to-br from-primary-blue/20 to-purple-600/20 blur-[80px] -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        )}
      </motion.div>
    </div>
  );

  return (
    <>
      <section ref={sectionRef} className="relative w-full overflow-hidden hardware-accelerated contain-paint bg-[#050510]">
        <GradientContainer
          backgroundColor="bg-[#050510]"
          showRadials={false} // Explicitly turn off the background radial glow images
          className="min-h-screen flex flex-col items-center pt-24 pb-16"
        >
          <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mx-auto">
            {mainContent}
            {visualContent}
          </div>

          <div className="absolute bottom-12 left-12 flex-col items-center gap-4 hidden lg:flex z-30 pointer-events-none">
            <div className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase -rotate-90 origin-bottom translate-y-8 absolute bottom-12 whitespace-nowrap">
              Scroll Down
            </div>
            <motion.div 
              className={cn(
                "w-5 h-8 border border-white/10 rounded-full flex justify-center pt-2 shadow-inner",
                isSafari || isIPhone || isLowPerformance ? "bg-white/5" : "backdrop-blur-sm bg-white/5"
              )} 
              animate={!reduceMotion && isInViewGlobal ? { y: [0, 8, 0] } : {}} 
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="w-1 h-1 bg-white/50 rounded-full" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050510] to-transparent z-20 pointer-events-none" />
        </GradientContainer>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10 bg-slate-950/90 backdrop-blur-2xl"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-6xl flex flex-col rounded-[2rem] overflow-hidden bg-[#0a0a1a] shadow-[0_0_120px_rgba(59,130,246,0.15)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex items-center justify-between z-50 bg-gradient-to-b from-[#0a0a1a]/90 to-transparent">
                <h3 className="hidden md:block text-xl font-semibold text-white tracking-tight flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary-blue" />
                  See how VACEI workspace works
                </h3>
                <div className="md:hidden" />
                <button 
                  onClick={() => setShowVideoModal(false)}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ring-1 ring-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[4/3] md:aspect-video w-full h-full bg-[#050510] mt-16 md:mt-0 p-4 md:p-12">
                 <div className="w-full h-full relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                    {/* Simulated Browser Bar for Video Player */}
                    <div className="w-full h-8 bg-[#1a1b33] border-b border-white/5 flex items-center px-4 gap-2 absolute top-0 left-0 z-20">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                    </div>
                    {/* Fallback image/gif playing while full video implementation logic can be replaced here */}
                    <img 
                      src="/assets/videos/Main Render.gif" 
                      alt="VACEI platform overview modal" 
                      className="w-full h-full object-cover pt-8"
                    />
                 </div>
              </div>

              {/* Mobile Bottom Title */}
              <div className="md:hidden p-6 bg-[#0a0a1a]/90 backdrop-blur-md border-t border-white/5 flex justify-center">
                <h3 className="text-base font-medium text-white text-center flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-primary-blue" />
                   VACEI Interactive Demo
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
