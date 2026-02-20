"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AuditPlatformBeam from "./AuditPlatformBeam";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { DirectionalDiv } from "@/components/common/Animations";
import { useRef } from "react";
import { useDirectionalInView } from "@/hooks/use-directional-in-view";
import { useIsSafari } from "@/hooks/use-safari";
import { cn } from "@/lib/utils";


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
    transition: { duration: 0.5 },
  },
};

export default function AuditPlatform() {
  const sectionRef = useRef(null);
  const isInView = useDirectionalInView(sectionRef);
  const isSafari = useIsSafari();


  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden isolate">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.07,
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Section */}
          <DirectionalDiv
            className="md:text-center lg:text-left max-w-xl lg:flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <DirectionalDiv variants={itemVariants}>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs sm:text-sm font-montserrat uppercase tracking-[0.2em] text-primary">
              
                All-in-one workspace
              </p>
            </DirectionalDiv>

            <DirectionalDiv variants={itemVariants} as="h1" className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold">
              <span className="text-primary inline-block mr-2 sm:mr-3">
                One Platform.
              </span>
              <span className="inline-block">Structured Delivery.</span>
            </DirectionalDiv>

            <DirectionalDiv variants={itemVariants} as="p" className="mt-4 text-sm sm:text-base font-nunito text-gray-500 leading-relaxed">
              VACEI brings structure to professional services through a unified digital workspace designed for clarity and control. Engagements are organised through defined workflows, tracked documentation, review layers, and secure client interaction. Every task, file, and approval sits within a controlled framework rather than across disconnected tools. The platform supports disciplined delivery across engagements, ensuring visibility, accountability, and consistency without replacing professional judgment.
            </DirectionalDiv>

            {/* Principle blocks */}
            <DirectionalDiv variants={containerVariants} className="mt-10 sm:mt-12 space-y-6">
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
                <DirectionalDiv key={block.title} variants={itemVariants} className="flex gap-3">
                  <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-blue" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-montserrat">
                      {block.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-nunito text-gray-500 leading-relaxed break-words">
                      {block.desc}
                    </p>
                  </div>
                </DirectionalDiv>
              ))}
            </DirectionalDiv>

            <DirectionalDiv variants={itemVariants} as="p" className="mt-8 text-sm sm:text-base font-nunito font-semibold text-gray-700 italic">
              Professional services require discipline. The platform ensures it.
            </DirectionalDiv>

            <DirectionalDiv variants={itemVariants} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center relative z-20">
              <GetInstantQuoteButton
                className="h-[46px]"
              />
              <motion.div whileHover={isSafari ? {} : { scale: 1.03, y: -2 }} whileTap={isSafari ? {} : { scale: 0.97, y: 0 }}>
                <Link
                  href="/portal/client-portal"
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-full border border-primary-blue/80 text-text-dark font-normal text-[15px] transition-all px-6 h-[44px] shadow-sm",
                    isSafari ? "bg-white/80" : "bg-white/60 backdrop-blur-sm hover:bg-white/40 hover:shadow-md"
                  )}
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
            </DirectionalDiv>
          </DirectionalDiv>

          {/* Right Section - Same on desktop and mobile */}
           <DirectionalDiv
            className="w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0 lg:flex-1 mt-8 lg:mt-0"
            initial={isSafari ? { opacity: 0, y: 30 } : { opacity: 0, scale: 0.95, y: 40 }}
            whileInView={isSafari ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className={cn(
                "relative rounded-[32px] border border-white/20 shadow-[0_30px_90px_rgba(15,23,42,0.65)] overflow-hidden aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center p-4 hardware-accelerated",
                isSafari ? "bg-white/20" : "bg-linear-to-br from-white/10 to-white/5 backdrop-blur-3xl"
              )}
              style={{ WebkitBackdropFilter: isSafari ? 'none' : 'blur(40px)', transform: 'translateZ(0)' }}
            >


              <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/25 z-20" />
              <AuditPlatformBeam className="w-full h-full" />
            </div>
          </DirectionalDiv>
        </div>
      </div>
    </section>
  );
}
