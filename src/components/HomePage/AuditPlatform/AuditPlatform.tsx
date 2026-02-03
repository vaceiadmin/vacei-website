"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { features } from "./AuditPlatformData";
import { useMobile } from "@/hooks/use-mobile";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import TextAnimation from "../../common/TextAnimation";

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
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
    <section className="relative py-16 sm:py-24 overflow-hidden">
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
          <div className="md:text-center lg:text-left max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs sm:text-sm font-montserrat uppercase tracking-[0.2em] text-primary">
              Audit Platform
              <span className="h-1 w-1 rounded-full bg-primary" />
              All-in-one workspace
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold  ">
              <TextAnimation
                text="One Platform"
                as="span"
                className="text-primary inline-block mr-2 sm:mr-3"
              />
              <TextAnimation
                text="for all your audit needs"
                as="span"
                className="inline-block"
              />
            </h1>

            <p className="mt-4 text-sm sm:text-base font-nunito text-gray-500">
              Designed for modern audit teams who need structure, visibility and
              control across every engagement.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 justify-center md:justify-center lg:justify-start">
              <span className="rounded-full bg-white shadow-sm border border-gray-100 px-4 py-1.5 text-xs sm:text-sm text-gray-800 font-montserrat">
                Starting at <span className="font-semibold">€120 / user / mo</span>
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-nunito">
                No setup fees. Cancel anytime.
              </span>
            </div>

            {/* Mobile Orbit */}
            {isMobile && (
              <div className="mt-10 md:mt-12 mx-auto md:max-w-md max-w-sm w-full">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-md p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                  <AnimatedOrbit />
                </div>
              </div>
            )}

            <h2 className="mt-10 sm:mt-12 text-2xl sm:text-3xl font-montserrat font-bold text-gray-800">
              An Audit Organizational Management Tool
            </h2>
            <p className="mt-4 text-sm sm:text-base font-nunito leading-relaxed text-gray-500 max-w-md mx-auto lg:mx-0">
              Meticulously researched and thoughtfully designed so every auditor has
              the right tools, workflows and documentation in a single, unified portal.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center relative z-20">
              <GetInstantQuoteButton
                className="h-[46px]"
              />
              <Link
                href="/portal/client-portal"
                className="flex items-center justify-center gap-2 rounded-full border border-primary-blue/80 text-text-dark font-normal text-[15px] hover:bg-white/40 transition-all px-6 h-[44px] backdrop-blur-sm bg-white/60"
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
            </div>
          </div>

          {/* Right Section */}
          {!isMobile && (
            <motion.div
              className="w-full max-w-md lg:max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="relative rounded-[32px] border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(15,23,42,0.65)] backdrop-blur-2xl px-4 py-6 sm:px-8 sm:py-10 overflow-hidden"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/25" />
                <div className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-primary-blue/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#111827]/40 blur-3xl" />
                <AnimatedOrbit />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
