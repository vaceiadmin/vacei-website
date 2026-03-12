"use client";

import React, { useEffect } from "react";
import ReadyToSimplifySection from "./ReadyToSimplifySection";
import ServicesSection from "./ServicesSection";
import ProcessStepsSection from "./ProcessStepsSection";
import CompanySetupSection from "./CompanySetupSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
// import PortalFeature from "./PortalFeature";
import HowItWorks from "./HowItWorks";
import AuditPlatform from "./AuditPlatform/AuditPlatform";
import WorkspaceEntrySection from "./WorkspaceEntrySection";
import ComplianceDashboardSection from "./ComplianceDashboardSection";
import ActiveEUSection from "./ActiveEUSection";

import { MotionConfig } from "framer-motion";
import { useReduceMotion } from "@/contexts/ReduceMotionContext";
import { isIPhone } from "@/lib/utils";

const HomePage = () => {
  const reduceMotion = useReduceMotion();
  const iPhone = typeof window !== 'undefined' ? isIPhone() : false;

  // Scroll to hash section on load (e.g. /#process-steps or /#services from navbar)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <MotionConfig transition={reduceMotion ? { duration: 0 } : undefined}>
      <div className="relative">
        <HeroSection />
        <AuditPlatform />
        <WorkspaceEntrySection />
        <HowItWorks />
        <ProcessStepsSection />
        {/* <PortalFeature /> */}
        <ReadyToSimplifySection />
        <ServicesSection />
        <CompanySetupSection />
        <ComplianceDashboardSection />
        <ActiveEUSection />
        <FaqSection />
      </div>
    </MotionConfig>
  );
};



export default HomePage;
