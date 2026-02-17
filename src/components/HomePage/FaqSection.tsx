"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GradientContainer from "../common/GradientContainer";

import GlassyEffect from "../common/GlassyEffect";
import TextAnimation from "../common/TextAnimation";
import { FadeInUp, StaggerContainer as StaggerEffect } from "../common/Animations";

const fadeInUp = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.55, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
} as any;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    }
  }
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Clarity",
      desc: "Clear pricing, structured workflows and full visibility",
    },
    { title: "Speed", desc: "Fast turnaround times and quick communication." },
    {
      title: "Accountability",
      desc: "We take ownership of our work and results.",
    },
    { title: "Structure", desc: "Organized processes for maximum efficiency." },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto px-4 md:px-0">
        <GradientContainer
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative"
          showRadials={false}
        >
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div 
              animate={{ 
                x: [0, 40, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary-blue/15 blur-[100px] lg:blur-[150px] rounded-full"
            />
            <motion.div 
              animate={{ 
                x: [0, -30, 0],
                y: [0, -40, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-500/10 blur-[100px] lg:blur-[150px] rounded-full"
            />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-10">
            {/* Section Header */}
            <FadeInUp duration={0.6} delay={0} className="text-center mb-12 lg:mb-20 max-w-3xl mx-auto">
              <TextAnimation
                text="Why Choose VACEI?"
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              />
              <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
                We combine industry-leading expertise with a cutting-edge digital platform 
                to simplify your corporate and financial operations in Malta.
              </p>
            </FadeInUp>

            <StaggerEffect staggerDelay={0.1} className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-start" viewportMargin="-100px">
            {/* Left: Interactive Image Area */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative flex-1 py-8 lg:py-10 flex justify-center lg:block"
            >
              {/* Main square background container */}
              <div className="relative h-[380px] sm:h-[500px] w-full max-w-[340px] sm:max-w-[460px] rounded-[32px] sm:rounded-[48px] scale-95 sm:scale-100 origin-center">
                {/* Man Image - Increased size and breaking out of container */}
                <div className="absolute bottom-0 left-1/2 flex w-[140%] -translate-x-1/2 justify-center items-end z-30 pointer-events-none">
                  <Image
                    src="/assets/images/man 2.png"
                    alt="Professional"
                    width={600}
                    height={750}
                    className="w-[360px] sm:w-[480px] max-w-none object-contain translate-y-4"
                    priority
                  />
                </div>

                {/* Floating Cards Layer */}
                <div className="absolute inset-0  pointer-events-none">
                  {/* Financial Overview - Moved left to clear face */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 top-10 w-[240px] z-20 rounded-[24px] bg-white p-5 shadow-xl pointer-events-auto transition-transform hover:scale-105"
                  >
                    <div className="mb-4 text-[12px] font-bold text-primary">
                      Financial Overview
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
                          <svg
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-primary">
                            Total Asset
                          </p>
                          <p className="text-[9px] text-light-gray">
                            Jan 2026 (Balance Sheet)
                          </p>
                          <p className="mt-0.5 text-[11px] font-extrabold text-primary">
                            € 23,691.29{" "}
                            <span className="ml-1 text-[9px] font-medium text-green-500">
                              0% vs last month
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
                          <svg
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-primary">
                            Cash at End of Perio..
                          </p>
                          <p className="text-[9px] text-light-gray">
                            Jan 2026 (Cash Flow)
                          </p>
                          <p className="mt-0.5 text-[11px] font-extrabold text-primary">
                            € 8,232.61{" "}
                            <span className="ml-1 text-[9px] font-medium text-green-500">
                              0% vs last month
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Get Started Card */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-8 max-sm:bottom-0 max-sm:left-0 w-[200px] z-40 rounded-[24px] bg-purple-bg p-6 text-white shadow-2xl pointer-events-auto transition-transform hover:scale-105"
                  >
                    <p className="text-[16px] font-bold leading-tight tracking-wide">
                      Get Started
                      <br />
                      Free Call?
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-[14px] font-semibold tracking-wide">
                        +356 77142418
                      </span>
                    </div>
                  </motion.div>

                  {/* Authorized Share Card - Custom Layout */}
                  <motion.div 
                    animate={{ 
                        y: [0, -12, 0],
                        rotate: [0, 1, 0, -1, 0]
                    }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-16 -right-10 max-sm:right-0 pointer-events-auto z-20 sm:z-40 transition-transform hover:scale-105"
                  >
                    <div className="relative w-[160px] rounded-[24px] bg-white p-5 shadow-xl">
                      <p className="mb-4 text-[11px] font-bold text-primary">
                        Authorized Share
                      </p>
                      <div className="flex flex-col items-center gap-5">
                        {/* Pie Chart */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="relative h-16 w-16 shadow-inner rounded-full"
                        >
                          <div className="h-full w-full rounded-full bg-progress-purple" />
                          <div className="absolute bottom-0 left-0 h-[50%] w-full rounded-b-full bg-purple-bg" />
                        </motion.div>

                        {/* Lines */}
                        <div className="flex w-full flex-col gap-1.5 px-1">
                          <div className="h-1.5 w-full rounded-full bg-neutral-200"></div>
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                            className="h-1.5 rounded-full bg-purple-bg"
                          ></motion.div>
                        </div>
                      </div>

                      {/* Floating Legend / Tooltip */}
                      <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-6 -top-10 bg-white rounded-[14px] px-3 py-2 shadow-lg border border-input min-w-[100px]"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-bold text-success tracking-wide">
                            Issued Share 50%
                          </span>
                          <span className="text-[9px] font-bold text-error tracking-wide">
                            Left Share 50%
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right: FAQ accordion list */}
            <div className="flex-1 lg:pl-12 w-full lg:mt-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-4 lg:space-y-5"
              >
                {items.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <motion.div key={index} variants={fadeInUp}>
                    <GlassyEffect
                      intensity="premium"
                      className={`overflow-hidden rounded-[18px] transition-all duration-300 cursor-pointer group mx-5 border-none shadow-none hover:bg-white/10 ${isOpen ? "bg-white/10" : "bg-white/5"}`}
                    >
                      <div 
                        className="flex items-center justify-between px-6 lg:px-8 py-5 lg:py-6"
                        onClick={() => toggleItem(index)}
                      >
                        <span className="text-base lg:text-[18px] font-semibold tracking-tight text-white/90">
                          {item.title}
                        </span>
                        <motion.button
                          type="button"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className={`flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isOpen 
                              ? "border-white/40 text-white bg-white/20" 
                              : "border-white/20 text-white/60 group-hover:bg-white/10 group-hover:text-white"
                          }`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {isOpen ? (
                              <path d="M5 12h14" />
                            ) : (
                              <path d="M12 5v14M5 12h14" />
                            )}
                          </svg>
                        </motion.button>
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                                {/* Dashed line */}
                                <div className="mb-5 border-t border-dashed border-white/20" />
                                <p className="text-sm lg:text-[15px] text-white/80 leading-[1.6] font-medium">
                                    {item.desc}
                                </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlassyEffect>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </StaggerEffect>
          </div>
        </GradientContainer>
      </div>
    </section>
  );
};

export default FaqSection;
