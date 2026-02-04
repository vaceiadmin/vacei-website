"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { features } from "./AuditPlatformData";

// Reusable Circle Component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AuditPlatformBeam({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  
  // Refs for surrounding feature icons
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null); // New
  const div7Ref = useRef<HTMLDivElement>(null); // New

  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-6 p-6">
        {/* Top Row */}
        <div className="flex flex-row items-center justify-between px-4">
          <Circle ref={div1Ref}>
             <Image src="/sec-2/magic-wand_3672676.png" alt="Auto" width={24} height={24} className="object-contain" />
          </Circle>
          <Circle ref={div7Ref}>
             <Image src="/sec-2/pdf_4726010.png" alt="PDF" width={24} height={24} className="object-contain" />
          </Circle>
          <Circle ref={div5Ref}>
             <Image src="/sec-2/text-editor_8099665.png" alt="Extraction" width={24} height={24} className="object-contain" />
          </Circle>
        </div>

        {/* Middle Row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image src="/sec-2/bookmark_12318485 (1).png" alt="Cross Ref" width={24} height={24} className="object-contain" />
          </Circle>
          
          {/* CENTER VACEI LOGO */}
          <Circle ref={centerRef} className="h-24 w-24 border-primary-blue/30 p-4 bg-white shadow-2xl z-20">
             <Image src="/assets/images/Logo.png" alt="VACEI" width={80} height={80} className="object-contain w-full h-full" />
          </Circle>

          <Circle ref={div4Ref}>
            <Image src="/sec-2/artificial-intelligence_3315017.png" alt="AI" width={24} height={24} className="object-contain" />
          </Circle>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row items-center justify-center gap-12">
          <Circle ref={div6Ref}>
             <Image src="/sec-2/word_4726038.png" alt="Doc" width={24} height={24} className="object-contain" />
          </Circle>
          <Circle ref={div3Ref}>
            <Image src="/sec-2/chat_769236.png" alt="Chat" width={24} height={24} className="object-contain" />
          </Circle>
        </div>
      </div>

      {/* Beams: Features -> Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerRef}
        duration={4}
        curvature={-40}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={centerRef}
        duration={4}
        delay={0.2}
        curvature={-20}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
       gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={centerRef}
        duration={4}
        delay={0.4}
        curvature={-40}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
       gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerRef}
        duration={4}
        delay={0.6}
        curvature={-20}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
       gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={centerRef}
        duration={4}
        delay={0.8}
        curvature={20}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
       gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={centerRef}
        duration={4}
        delay={1.0}
        curvature={20}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
       gradientStopColor="#6860faff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerRef}
        duration={4}
        delay={1.2}
        curvature={20}
        pathColor="#959595ff"
        pathOpacity={0.3}
        pathWidth={2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6860faff"
      />
    </div>
  );
}
