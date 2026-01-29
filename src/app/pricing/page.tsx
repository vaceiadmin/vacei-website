"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import PricingOverviewSection from "@/components/pricing/PricingOverviewSection";
import AnimatedSection from "@/components/common/AnimatedSection";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Pricing"
          breadcrumbs={[{ label: "Pricing" }]}
        />
      </div>

      <AnimatedSection>
        <PricingOverviewSection />
      </AnimatedSection>
    </main>
  );
};

export default PricingPage;
