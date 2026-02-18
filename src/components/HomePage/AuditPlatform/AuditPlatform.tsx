"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { features } from "./AuditPlatformData";
import { useMobile } from "@/hooks/use-mobile";
import AuditPlatformBeam from "./AuditPlatformBeam";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import TextAnimation from "../../common/TextAnimation";

// Animation Variants – visible render, smooth and not laggy
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    // Keep transition simple to satisfy framer-motion's DOM typings
    transition: { duration: 0.5 },
  },
};

function AnimatedOrbit() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative flex justify-center items-center flex-1">
      {/* Central Logo */}
      <div className="relative z-10 flex items-center justify-center ">
        <img
          src="/sec-2/Vector Smart Object.png"
          alt="Platform Logo"
          className="max-sm:w-[280px] lg:w-auto"
        />
      </div>

      {/* Popup Features */}
      <div className="absolute w-[90%] h-[90%] flex justify-center items-center z-50">
        {/* Feature Items */}
        {features.map(({ src, alt, Text, className, imgClass }, index) => (
          <motion.div
            key={index}
            className={`absolute flex items-center gap-2 p-2 z-20 rounded-lg  ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            {src && <img src={src} alt={alt} className={`${imgClass}`} />}
            {Text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AuditPlatform() {
  const [isMobile] = useMobile(700);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.07,
        }}
      ></div>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Left Section */}
          <motion.div
            className="md:text-center lg:text-left max-w-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs sm:text-sm font-montserrat uppercase tracking-[0.2em] text-primary">
                Audit Platform
                <span className="h-1 w-1 rounded-full bg-primary" />
                All-in-one workspace
              </p>
            </motion.div>

            <motion.h1 variants={itemVariants} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              <span className="text-primary inline-block mr-2 sm:mr-3">
                One Platform.
              </span>
              <span className="inline-block">Structured Delivery.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 text-sm sm:text-base font-nunito text-gray-500 leading-relaxed">
              VACEI brings structure to professional services through a unified digital workspace designed for clarity and control. Engagements are organised through defined workflows, tracked documentation, review layers, and secure client interaction. Every task, file, and approval sits within a controlled framework rather than across disconnected tools. The platform supports disciplined delivery across engagements, ensuring visibility, accountability, and consistency without replacing professional judgment.
            </motion.p>

           

            {/* Mobile Orbit */}
            {isMobile && (
              <motion.div variants={itemVariants} className="mt-10 md:mt-12 mx-auto md:max-w-md max-w-sm w-full">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-md p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                  <AnimatedOrbit />
                </div>
              </motion.div>
            )}

            {/* Principle blocks */}
            <motion.div variants={containerVariants} className="mt-10 sm:mt-12 space-y-6">
              {[
                {
                  title: "Structured Workflows",
                  desc: "Clear engagement stages, responsibilities, and progress tracking.",
                },
                {
                  title: "Controlled Documentation",
                  desc: "Centralised files, version visibility, and organised working papers.",
                },
                {
                  title: "Review and Approval Layers",
                  desc: "Defined review flows with tracked comments and sign-off history.",
                },
                {
                  title: "Secure Client Interaction",
                  desc: "Document exchange, queries, and approvals within a controlled environment.",
                },
              ].map((block) => (
                <motion.div key={block.title} variants={itemVariants} className="flex gap-3">
                  <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-blue" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-montserrat">
                      {block.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-nunito text-gray-500 leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className="mt-8 text-sm sm:text-base font-nunito font-semibold text-gray-700 italic">
              Professional services require discipline. The platform ensures it.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center relative z-20">
              <GetInstantQuoteButton
                className="h-[46px]"
              />
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97, y: 0 }}>
                <Link
                  href="/portal/client-portal"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary-blue/80 text-text-dark font-normal text-[15px] hover:bg-white/40 transition-all px-6 h-[44px] backdrop-blur-sm bg-white/60 shadow-sm hover:shadow-md"
                >
                <span>Try The Client Portal</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
            {!isMobile && (
            <motion.div
              className="w-full max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-[32px] border border-white/20 bg-linear-to-br from-white/10 to-white/5 shadow-[0_30px_90px_rgba(15,23,42,0.65)] backdrop-blur-3xl overflow-hidden aspect-square flex items-center justify-center">
                 {/* Glassy Background Elements from previous design if needed, or simplified for Beam */}
                 <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/25 z-20" />
                 
                 <AuditPlatformBeam className="w-full h-full" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
