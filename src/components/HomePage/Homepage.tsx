"use client";

import React from "react";
import HeroSection from "@/components/HomePage/HeroSection";
import WhyVaceiSection from "@/components/HomePage/WhyVaceiSection";
import ProcessStepsSectionDark from "@/components/HomePage/ProcessStepsSectionDark";
import BeforeAndAfterSection from "@/components/HomePage/BeforeAndAfterSection";
import MarketplaceSection from "@/components/HomePage/MarketplaceSection";
import InviteAdvisorsSection from "@/components/HomePage/InviteAdvisorsSection";
import AuditPlatform from "@/components/HomePage/AuditPlatform/AuditPlatform";
import TrustSection from "@/components/HomePage/TrustSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import InsightsAndResourcesSection from "@/components/HomePage/InsightsAndResourcesSection";
import FaqSection from "@/components/HomePage/FaqSection";

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyVaceiSection />
      <ProcessStepsSectionDark />
      <BeforeAndAfterSection />
      <MarketplaceSection />
      <InviteAdvisorsSection />
      <AuditPlatform />
      <TrustSection />
      <ServicesSection />
      <InsightsAndResourcesSection />
      <FaqSection />
    </div>
  );
}
