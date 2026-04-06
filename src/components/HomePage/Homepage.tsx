"use client";

import React, { useEffect } from "react";
// import ReadyToSimplifySection from "./ReadyToSimplifySection";
import ServicesSection from "./ServicesSection";
import ProcessStepsSectionDark from "./ProcessStepsSectionDark";
import CompanySetupSection from "./CompanySetupSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
// import PortalFeature from "./PortalFeature";
import HowItWorks from "./HowItWorks";
import TwoWaysToStartSection from "./TwoWaysToStartSection";
import BeforeAndAfterSection from "./BeforeAndAfterSection";
import AuditPlatform from "./AuditPlatform/AuditPlatform";
import WorkspaceEntrySection from "./WorkspaceEntrySection";
import ComplianceDashboardSection from "./ComplianceDashboardSection";
import ActiveEUSection from "./ActiveEUSection";
import PlatformPowerSection from "./PlatformPowerSection";

import MultiCompanySection from "./MultiCompanySection";
import WhyVaceiSection from "./WhyVaceiSection";
import TrustSection from "./TrustSection";
import InsightsAndResourcesSection from "./InsightsAndResourcesSection";

const HomePage = () => {
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
    <div className="relative bg-neutral-950">
      {/* Odd sections (1,3,5,…) = dark; even (2,4,6,…) = light — each block below follows this stripe */}
      <HeroSection />
      <AuditPlatform />
      <WorkspaceEntrySection />
      <HowItWorks />
      <TwoWaysToStartSection />
      <ProcessStepsSectionDark />
      <BeforeAndAfterSection />
      {/* <PlatformPowerSection /> */}
      <ServicesSection />

      <CompanySetupSection />
      <ComplianceDashboardSection />
      <MultiCompanySection />
      <ActiveEUSection />
      <WhyVaceiSection />
      <TrustSection />
      <InsightsAndResourcesSection />
      {/* <ReadyToSimplifySection /> */}
      {/* <FaqSection /> */}
    </div>
  );
};



export default HomePage;
