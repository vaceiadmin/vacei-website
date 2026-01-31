"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { features } from "./AuditPlatformData";
import { useMobile } from "@/hooks/use-mobile";
import AuditButton from "./AuditButton";
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
    <section className="relative py-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.07,
        }}
      ></div>
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto lg:mt-0 gap-24 max-sm:mx-6 md:mt-72">
        {/* Left Section */}
        <div className="md:text-center lg:text-left max-w-lg mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-bodoni sm:leading-tight ">
            <TextAnimation 
              text="One Platform" 
              as="span" 
              className="text-primary inline-block mr-2 sm:mr-3" 
            />
            <TextAnimation 
              text="for all your audit needs" 
              as="span" 
              className="inline-block"
              delay={0.} 
            />
          </h1>
          <p className="text-gray-600 text-base sm:text-xl mt-3">
            Starting at €120 / user / mo
          </p>

          {/* //here */}
          {isMobile && (
            <div className="my-12 mx-auto md:max-w-md max-w-sm">
              <AnimatedOrbit />
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mt-12 text-gray-700">
            An Audit Organizational Management Tool
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-lg font-nunito leading-relaxed max-w-md">
            Meticulously researched and planned tools any auditor should have under his belt in one portal.
          </p>
          <div className="mt-8 flex gap-4 justify-center lg:justify-start relative z-20">
            {/* <Button type="secondary" size="lg">
              Pricing
            </Button> */}
            {/* <Link href="/solution/audit-software">
              <AuditButton variant="primary" className={'w-full h-full'}>Solutions</AuditButton>
            </Link> */}
          </div>
        </div>
        {/* Right Section */}
        {/* <AnimatedOrbit /> */}
        {!isMobile && (
          <div className="my-10  ">
            <AnimatedOrbit />
          </div>
        )}
      </div>
    </section>
  );
}
