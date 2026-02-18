"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextAnimation from "../common/TextAnimation";
import GradientContainer from "../common/GradientContainer";
import GetInstantQuoteButton from "../common/GetInstantQuoteButton";

const HERO_YOUTUBE_ID = "ja8vHdyu6Qs";

const HeroSection = () => {

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
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Top right shadow */}
          <div className="hidden md:block absolute -top-12 right-0 lg:-top-16 lg:right-4 xl:-top-0 xl:right-0 w-40 sm:w-48 lg:w-56 rotate-360">
            <Image
              src="/assets/images/SHadow.png"
              alt="Hero glow top right"
              width={320}
              height={320}
              loading="lazy"
              className="w-full h-auto object-contain"
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
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full text-center"
            >
              {/* Glassy Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl text-white/90 font-bold leading-[1.1]"
                >
                  Delivered Through One Portal
                </motion.h2>
              </div>

              {/* Description with Glassy Background */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
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
                transition={{ duration: 0.55, delay: 0.4 }}
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

          {/* YouTube video - autoplay, loop, muted */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-5xl mx-auto mt-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 backdrop-blur-2xl">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&rel=0&modestbranding=1`}
                  title="VACEI platform overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl pointer-events-none" />
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
          transition={{ duration: 0.5, delay: 0.65 }}
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
