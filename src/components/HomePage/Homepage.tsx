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
    <div className="relative">
      <HeroSection />
      <AuditPlatform />
      <HowItWorks />
      <ProcessStepsSection />
      {/* <PortalFeature /> */}
      <ReadyToSimplifySection />
      <ServicesSection />
      <CompanySetupSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
