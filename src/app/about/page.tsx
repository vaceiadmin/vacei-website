"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import FeatureSection from "@/components/common/FeatureSection";
import MissionVisionSection from "@/components/common/MissionVisionSection";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import { FadeInUp } from "@/components/common/Animations";

const aboutFeatures = [
  {
    title: "A modern accounting, audit and corporate services firm",
    description:
      "VACEI is a professional accounting, audit and corporate services firm built around a structured digital platform.",
    paragraph:
      "We deliver accounting, compliance, corporate and audit services end to end by combining experienced professionals with disciplined workflows and purpose-built technology.\n\nVACEI is not a software product and not a marketplace. We are a firm that does the work for you, supported by a secure and structured client portal.",
    reverseLayout: false,
  },
  {
    title: "Why VACEI was built",
    description:
      "Traditional professional services rely heavily on emails, spreadsheets and fragmented tools. This often results in inefficiencies, limited visibility and unnecessary operational risk.",
    paragraph:
      "VACEI was built to modernise how accounting and audit services are delivered, without compromising professional responsibility or quality.\n\nOur approach focuses on structure, visibility and accountability, supported by technology that enables better delivery rather than replacing professional judgement.",
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
        "Founder-led and owner-managed businesses that want a structured finance function",
        "Groups with multiple entities that need consolidated visibility and governance support",
        "International teams coordinating filings, advisors and deadlines across jurisdictions",
        "Businesses preparing for audit, fundraising, acquisition or expansion",
      ],
    },
    {
      title: "What You Get",
      items: [
        "A secure workspace for documents, requests, deliverables and communications",
        "Clear scopes, timelines and accountability across each engagement",
        "Structured reporting and periodic updates aligned to your cadence",
        "A single point of coordination across accounting, corporate and audit work",
      ],
    },
    {
      title: "Outcomes",
      items: [
        "Less back-and-forth and fewer missing items through disciplined workflows",
        "Improved visibility over status, deadlines and next actions",
        "Better audit readiness with organised records and traceable history",
        "More confident decisions with timely, structured financial insight",
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

      <FadeInUp>
        <FeatureSection features={aboutFeatures} />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <MissionVisionSection />
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <ServiceFeatures
          title={aboutServiceFeatures.title}
          subtitle={aboutServiceFeatures.subtitle}
          features={aboutServiceFeatures.features}
        />
      </FadeInUp>
    </main>
  );
};

export default AboutPage;
