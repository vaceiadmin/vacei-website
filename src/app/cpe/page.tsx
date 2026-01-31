"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import CpeOverviewSection from "@/components/cpe/CpeOverviewSection";
import PodcastSection from "@/components/cpe/PodcastSection";
import { FadeInUp } from "@/components/common/Animations";

const CpePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="CPE & Podcast"
          breadcrumbs={[{ label: "CPE" }]}
        />
      </div>

      <FadeInUp>
        <CpeOverviewSection />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <PodcastSection />
      </FadeInUp>
    </main>
  );
};

export default CpePage;
