"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextAnimation from "../common/TextAnimation";
import GlassyEffect from "../common/GlassyEffect";
import GradientContainer from "../common/GradientContainer";
import GetInstantQuoteButton from "../common/GetInstantQuoteButton";

const HERO_VIDEO_SRC = "/assets/videos/Vacei (2) X2V2.mp4";
const HERO_VIDEO_POSTER = "/assets/videos/Main%20Render.gif";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isInViewRef = useRef(true);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  const tryPlay = () => {
    const video = videoRef.current;
    if (!video || !isInViewRef.current) return;
    video.play().catch(() => {});
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(container);

    const onCanPlay = () => tryPlay();
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    if (video.readyState >= 3) tryPlay();

    const retryPlay = () => {
      if (isInViewRef.current) video.play().catch(() => {});
    };
    const retryTimer = setTimeout(retryPlay, 4200);

    return () => {
      clearTimeout(retryTimer);
      video.removeEventListener("loadeddata", onCanPlay);
      observer.disconnect();
      video.removeEventListener("canplay", onCanPlay);
      video.pause();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
      <GradientContainer
        backgroundColor="bg-primary"
        showRadials
        leftPositionClass="bottom-0 left-0"
        rightPositionClass="bottom-0 right-0"
        topLeftRotation="rotate-180"
        bottomRightRotation="rotate-90"
        className="min-h-screen flex flex-col items-center"
      >
        {/* Sharp shadow images – top corners and beside portal image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top left shadow */}
          <div className="hidden md:block absolute -top-12 left-0 lg:-top-16 lg:left-4 xl:top-0 xl:left-0 w-40 sm:w-48 lg:w-56 -rotate-90">
            <Image
              src="/assets/images/SHadow.png"
              alt="Hero glow top left"
              width={320}
              height={320}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Top right shadow */}
          <div className="hidden md:block absolute -top-12 right-0 lg:-top-16 lg:right-4 xl:-top-0 xl:right-0 w-40 sm:w-48 lg:w-56 rotate-360">
            <Image
              src="/assets/images/SHadow.png"
              alt="Hero glow top right"
              width={320}
              height={320}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-20 flex flex-col items-center mx-auto">
          <div className="w-full max-w-4xl flex flex-col items-center">
            {/* Text & CTAs Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full text-center"
            >
              {/* Glassy Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-white/90 mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mx-auto"
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-primary-blue"
                  animate={{
                    boxShadow: [
                      "0_0_12px_rgba(59,130,246,0.8)",
                      "0_0_20px_rgba(59,130,246,1)",
                      "0_0_12px_rgba(59,130,246,0.8)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                Accounting • Audit • Corporate
              </motion.div>

              {/* Headlines with Glassy Effect */}
              <div className="space-y-3 mb-6">
                <TextAnimation
                  text="Accounting, Audit & Corporate Services"
                  as="h1"
                  className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl text-white/90 font-bold leading-[1.1]"
                >
                  Delivered Through One Portal
                </motion.h2>
              </div>

              {/* Description with Glassy Background */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 -z-10" />
                <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  VACEI is a professional firm that does the work for you. You get a
                  dedicated team, full visibility, and one place for documents,
                  deadlines, and communication.
                </p>
              </motion.div>

              {/* CTA Buttons with Enhanced Glassy Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <GetInstantQuoteButton className="px-8 py-3.5 text-base font-medium shadow-[0_8px_32px_rgba(59,130,246,0.4)]" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
                    href="/portal/client-portal"
                    className="group flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white text-base px-8 py-3.5 font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                  >
                    Try the Client Portal
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </motion.svg>
            </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Video at Bottom with max-width 5xl */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-5xl mx-auto mt-16"
          >
            <div ref={videoContainerRef} className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 backdrop-blur-2xl">
              <div className="aspect-video relative bg-slate-950">
                <video
                  ref={videoRef}
                  src={HERO_VIDEO_SRC}
                  poster={HERO_VIDEO_POSTER}
                  preload="auto"
                  // muted={muted}
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl pointer-events-none" />
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition hover:bg-white/30"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                      <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06Z" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-primary-blue/20 blur-3xl -z-10 rounded-full"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-12 left-12 flex flex-col items-center gap-4 hidden md:flex z-30"
        >
          <div className="text-white/50 text-xs tracking-widest uppercase -rotate-90 origin-bottom translate-y-8 absolute bottom-12 whitespace-nowrap">
            Scroll Down
          </div>
          <motion.div
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-white/5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        </motion.div>

        {/* Gradient overlay for bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-20 pointer-events-none" />
      </GradientContainer>
    </section>
  );
};

export default HeroSection;
