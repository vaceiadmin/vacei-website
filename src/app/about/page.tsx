"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import FeatureSection from "@/components/common/FeatureSection";
import MissionVisionSection from "@/components/common/MissionVisionSection";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import AnimatedSection from "@/components/common/AnimatedSection";

const aboutFeatures = [
  {
    title: "A modern accounting, audit and corporate services firm",
    description:
      "VACEI is a professional accounting, audit and corporate services firm built around a structured digital platform.",
    paragraph:
      "We deliver accounting, compliance, corporate and audit services end to end by combining experienced professionals with disciplined workflows and purpose-built technology.\n\nVACEI is not a software product and not a marketplace. We are a firm that does the work for you, supported by a secure and structured client portal.",
    useImageBackground: true,
    backgroundImage: "/assets/images/Frame 1618872596.png",
    reverseLayout: false,
  },
  {
    title: "Why VACEI was built",
    description:
      "Traditional professional services rely heavily on emails, spreadsheets and fragmented tools. This often results in inefficiencies, limited visibility and unnecessary operational risk.",
    paragraph:
      "VACEI was built to modernise how accounting and audit services are delivered, without compromising professional responsibility or quality.\n\nOur approach focuses on structure, visibility and accountability, supported by technology that enables better delivery rather than replacing professional judgement.",
    useImageBackground: true,
    backgroundImage: "/assets/images/Frame 1618872603.png",
    reverseLayout: true,
  },
];

const aboutServiceFeatures = {
  title: "What makes VACEI different",
  subtitle: "Request a clear quote based on your business.",
  features: [
    {
      title: "Who It's For",
      items: [
        "Operating companies that need ongoing bookkeeping and accounting",
        "Growing businesses that require structured financial reporting",
        "Management teams that need visibility over performance and cash flow",
        "Businesses preparing for audit, investment or expansion",
      ],
    },
    {
      title: "Who It's For",
      items: [
        "Operating companies that need ongoing bookkeeping and accounting",
        "Growing businesses that require structured financial reporting",
        "Management teams that need visibility over performance and cash flow",
        "Businesses preparing for audit, investment or expansion",
      ],
    },
    {
      title: "Who It's For",
      items: [
        "Operating companies that need ongoing bookkeeping and accounting",
        "Growing businesses that require structured financial reporting",
        "Management teams that need visibility over performance and cash flow",
        "Businesses preparing for audit, investment or expansion",
      ],
    },
  ],
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader title="About Us" breadcrumbs={[{ label: "About Us" }]} />
      </div>

      <AnimatedSection>
        <FeatureSection features={aboutFeatures} />
      </AnimatedSection>
      <AnimatedSection delay>
        <MissionVisionSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceFeatures
          title={aboutServiceFeatures.title}
          subtitle={aboutServiceFeatures.subtitle}
          features={aboutServiceFeatures.features}
        />
      </AnimatedSection>
    </main>
  );
};

export default AboutPage;
