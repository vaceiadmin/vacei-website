"use client";

import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion } from "framer-motion";
import { 
  FileText, 
  FileSpreadsheet, 
  FileDown, 
  Calculator, 
  Landmark, 
  ShieldCheck, 
  User
} from "lucide-react";
import { useIsSafari } from "@/hooks/use-safari";


import { useDirectionalInView } from "@/hooks/use-directional-in-view";

// Reusable Circle Component with Label and Animation
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; delay?: number }
>(({ className, children, label, delay = 0 }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useDirectionalInView(innerRef);
  const isSafari = useIsSafari();
  
  // Expose both refs (internal for observation, passed for external linking)
  useImperativeHandle(ref, () => innerRef.current!);

  return (
    <motion.div 
      ref={innerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: isSafari ? 0 : delay * 0.1 }}
      className="flex flex-col items-center gap-1 sm:gap-1.5 min-w-[50px] sm:min-w-[70px]"
    >

      <motion.div
        animate={isInView && !isSafari ? {
          y: [0, -6, 0],
        } : { y: 0 }}
        transition={{
          duration: 4,
          repeat: 0, 
          ease: "easeInOut",
          delay: delay,
        }}

        className={cn(
          "z-10 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary-blue/10 hover:border-primary-blue/30 hardware-accelerated",
          className
        )}
      >

        <div className="scale-75 sm:scale-100">
          {children}
        </div>
      </motion.div>
      {label && (
        <span className="text-[7px] sm:text-[9px] font-bold text-gray-500 uppercase tracking-tight sm:tracking-wider text-center max-w-[55px] sm:max-w-[80px] leading-tight">
          {label}
        </span>
      )}
    </motion.div>
  );
});

Circle.displayName = "Circle";

export default function AuditPlatformBeam({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSafari = useIsSafari();
  
  // Refs for logic flow

  // Column 1: Docs
  const doc1Ref = useRef<HTMLDivElement>(null);
  const doc2Ref = useRef<HTMLDivElement>(null);
  const doc3Ref = useRef<HTMLDivElement>(null);
  
  // Column 2: Services
  const service1Ref = useRef<HTMLDivElement>(null);
  const service2Ref = useRef<HTMLDivElement>(null);
  const service3Ref = useRef<HTMLDivElement>(null);
  
  // Column 3: Portal (Center)
  const portalRef = useRef<HTMLDivElement>(null);
  
  // Column 4: Client
  const clientRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-center justify-between gap-1 sm:gap-2 px-1 sm:px-8">
        
        {/* Column 1: Docs */}
        <div className="flex flex-col justify-around h-full py-4 sm:py-8">
          <Circle ref={doc1Ref} label="PDF" delay={0.1}>
            <FileDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
          </Circle>
          <Circle ref={doc2Ref} label="Excel" delay={0.3}>
            <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </Circle>
          <Circle ref={doc3Ref} label="Word" delay={0.5}>
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </Circle>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col justify-around h-full py-6 sm:py-12">
          <Circle ref={service1Ref} label="Accounting" delay={0.7}>
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </Circle>
          <Circle ref={service2Ref} label="Tax" delay={0.9}>
            <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </Circle>
          <Circle ref={service3Ref} label="Audit" delay={1.1}>
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </Circle>
        </div>

        {/* Column 3: Portal (Vacei) */}
        <div className="flex flex-col justify-center h-full">
          <Circle 
            ref={portalRef} 
            label="Portal"
            delay={1.5}
            className="h-14 w-14 sm:h-20 sm:w-20 border-primary-blue/30 p-2 sm:p-3 bg-white shadow-2xl z-20"
          >
            <Image 
              src="/assets/images/Logo.png" 
              alt="VACEI" 
              width={60} 
              height={60} 
              className="object-contain" 
            />
          </Circle>
        </div>

        {/* Column 4: Client */}
        <div className="flex flex-col justify-center h-full">
          <Circle ref={clientRef} label="Client" delay={2}>
            <div className="bg-primary-blue/10 rounded-full p-1 sm:p-2">
              <User className="w-5 h-5 sm:w-7 sm:h-7 text-primary-blue" />
            </div>
          </Circle>
        </div>

      </div>

      {/* Beams: Docs -> Services */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={doc1Ref}
        toRef={service1Ref}
        duration={3}
        curvature={0}
        pathColor="#94a3b8"
        pathOpacity={isSafari ? 0 : 0.2}
        gradientStartColor="#ef4444"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={doc2Ref}
        toRef={service2Ref}
        duration={3}
        delay={0.5}
        curvature={0}
        pathColor="#94a3b8"
        pathOpacity={0.2}
        gradientStartColor="#22c55e"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={doc3Ref}
        toRef={service3Ref}
        duration={3}
        delay={1}
        curvature={0}
        pathColor="#94a3b8"
        pathOpacity={isSafari ? 0 : 0.2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#3b82f6"
      />


      {/* Beams: Services -> Portal */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={service1Ref}
        toRef={portalRef}
        duration={4}
        curvature={15}
        pathColor="#94a3b8"
        pathOpacity={isSafari ? 0 : 0.2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={service2Ref}
        toRef={portalRef}
        duration={4}
        delay={0.7}
        curvature={0}
        pathColor="#94a3b8"
        pathOpacity={0.2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={service3Ref}
        toRef={portalRef}
        duration={4}
        delay={1.4}
        curvature={-15}
        pathColor="#94a3b8"
        pathOpacity={isSafari ? 0 : 0.2}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6366f1"
      />


      {/* Beam: Portal -> Client */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={portalRef}
        toRef={clientRef}
        duration={3}
        curvature={0}
        pathColor="#94a3b8"
        pathOpacity={0.3}
        pathWidth={3}
        gradientStartColor="#6366f1"
        gradientStopColor="#3b82f6"
      />

    </div>
  );
}
