"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import PricingHero from "@/components/pricing/PricingHero";
import PricingFactors from "@/components/pricing/PricingFactors";
import PricingOverviewSection from "@/components/pricing/PricingOverviewSection";
import QuoteProcess from "@/components/pricing/QuoteProcess";
import WhatToExpect from "@/components/pricing/WhatToExpect";
import PricingCTA from "@/components/pricing/PricingCTA";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Pricing"
          breadcrumbs={[{ label: "Pricing" }]}
        />
      </div>

      {/* Hero Section - Introduction to VACEI's pricing approach */}
      <PricingHero />

      {/* Pricing Factors - How pricing is determined */}
      <PricingFactors />

      {/* Service Categories - Overview of service types and pricing models */}
      <PricingOverviewSection />

      {/* Quote Process - How quotes work */}
      <QuoteProcess />

      {/* What to Expect - Client expectations and commitments */}
      <WhatToExpect />

      {/* CTA - Ready to discuss pricing */}
      <PricingCTA />
    </main>
  );
};

export default PricingPage;
