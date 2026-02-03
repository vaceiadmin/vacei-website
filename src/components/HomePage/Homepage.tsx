"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ReadyToSimplifySection from "./ReadyToSimplifySection";
import ServicesSection from "./ServicesSection";
import ProcessStepsSection from "./ProcessStepsSection";
import CompanySetupSection from "./CompanySetupSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import PortalFeature from "./PortalFeature";
import HowItWorks from "./HowItWorks";
import AuditPlatform from "./AuditPlatform/AuditPlatform";

// Enhanced Parallax Section with multiple layers
const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = "",
  direction = "up",
  intensity = "medium"
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
  intensity?: "low" | "medium" | "high";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  const directionMultiplier = direction === "up" ? -1 : 1;
  
  // Intensity multipliers for different effect strengths
  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5
  }[intensity];

  // Multiple parallax layers with different speeds
  const y = useTransform(smoothProgress, [0, 1], [0, directionMultiplier * 150 * speed * intensityMultiplier]);
  const yFast = useTransform(smoothProgress, [0, 1], [0, directionMultiplier * 200 * speed * intensityMultiplier]);
  const ySlow = useTransform(smoothProgress, [0, 1], [0, directionMultiplier * 80 * speed * intensityMultiplier]);
  
  // Enhanced opacity with smoother transitions
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.3, 0.7, 0.9, 1], [0.3, 0.8, 1, 1, 0.8, 0.3]);
  
  // Scale effect with more range
  const scale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.94, 0.98, 1, 0.98, 0.94]);
  
  // Rotation for extra depth (subtle 3D effect)
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [1, 0, -1]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-0.5, 0, 0.5]);
  const innerScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.01, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        opacity, 
        scale,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {/* Main content with enhanced parallax */}
      <motion.div
        style={{ 
          y: ySlow,
          scale: innerScale
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Parallax Background Element - for additional depth
const ParallaxBackground = ({ 
  children,
  speed = 0.3,
  className = ""
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Global parallax effects
  const globalY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const globalOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: globalY, opacity: globalOpacity }}
      className="relative"
    >
      {/* Hero Section - Strong parallax effect */}
      <ParallaxSection speed={0.6} direction="up" intensity="high">
        <HeroSection />
      </ParallaxSection>

      {/* Audit Platform - Medium parallax effect */}
      <ParallaxSection speed={0.8} direction="up" intensity="high">
        <AuditPlatform />
      </ParallaxSection>

      {/* How It Works - Fast parallax effect */}
      <ParallaxSection speed={1.0} direction="up" intensity="high">
        <HowItWorks />
      </ParallaxSection>

      {/* Additional sections with lighter parallax */}
      <ParallaxSection speed={0.4} direction="up" intensity="medium">
        <ProcessStepsSection />
      </ParallaxSection>

      <ParallaxSection speed={0.5} direction="up" intensity="medium">
        <PortalFeature />
      </ParallaxSection>

      <ParallaxSection speed={0.3} direction="up" intensity="low">
        <ReadyToSimplifySection />
      </ParallaxSection>

      <ParallaxSection speed={0.4} direction="up" intensity="medium">
        <ServicesSection />
      </ParallaxSection>

      <ParallaxSection speed={0.3} direction="up" intensity="low">
        <CompanySetupSection />
      </ParallaxSection>

      <ParallaxSection speed={0.2} direction="up" intensity="low">
        <FaqSection />
      </ParallaxSection>
    </motion.div>
  );
};

export default HomePage;
