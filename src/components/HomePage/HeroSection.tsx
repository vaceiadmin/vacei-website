"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextAnimation from "../common/TextAnimation";
import GlassyEffect from "../common/GlassyEffect";
import GradientContainer from "../common/GradientContainer";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
      <GradientContainer
        backgroundColor="bg-hero"
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

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center text-center mt-6 sm:mt-8 lg:mt-10">
          <TextAnimation
            text="Accounting, Audit & Corporate Services Delivered Through One Portal"
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl  font-bold text-white mb-6 leading-tight max-w-4xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-sm md:text-base max-w-2xl mb-10"
          >
            VACEI is a professional firm that does the work for you. You get a
            dedicated team, full visibility, and one place for documents,
            deadlines, and communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:flex-row flex-col gap-4 mb-20"
          >
            <Link
              href="/quote"
              className="px-6 py-2.5 text-sm sm:text-base sm:px-8 sm:py-3 bg-primary-blue hover:bg-primary-blue-hover text-white rounded-full font-medium transition-all shadow-primary-blue"
            >
              Get Instant Quote &rarr;
            </Link>
            <Link href="/services/accounting-finance" className="group">
              <GlassyEffect
                className="px-6 py-2.5 text-sm sm:text-base sm:px-8 sm:py-3 text-white rounded-full font-medium transition-all hover:bg-white/10 active:bg-white/20 border-white/20 flex items-center gap-2"
                intensity="high"
              >
                Request a Service &rarr;
              </GlassyEffect>
            </Link>
          </motion.div>

          {/* Dashboard Image with side shadows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[904px]"
          >
            {/* Center left shadow */}
            <div className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-40 xl:w-48">
              <Image
                src="/assets/images/SHadow (1).png"
                alt="Hero glow left"
                width={320}
                height={640}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Center right shadow */}
            <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-40 xl:w-48 ">
              <Image
                src="/assets/images/SHadow (1).png"
                alt="Hero glow right"
                width={320}
                height={640}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="aspect-[904/582] relative rounded-t-xl overflow-hidden shadow-2xl border border-white/10 bg-hero-dark">
              <Image
                src="/assets/images/Frame 1618872628 1.png"
                alt="VACEI Portal Dashboard"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Glow effect under the image */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-40" />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 left-12 flex flex-col items-center gap-4 animate-bounce hidden md:flex">
          <div className="text-white/50 text-xs tracking-widest uppercase -rotate-90 origin-bottom translate-y-8 absolute bottom-12 whitespace-nowrap">
            Scroll Down
          </div>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>

        {/* Gradient overlay for bottom fade if needed */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hero to-transparent z-20" />
      </GradientContainer>
    </section>
  );
};

export default HeroSection;
