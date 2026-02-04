"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import HowItWorksTimeline, {
  HowItWorksStep,
} from "@/components/how-it-works/HowItWorksTimeline";
import OngoingSupportSection from "@/components/common/OngoingSupportSection";

const steps: HowItWorksStep[] = [
  {
    id: "step-1",
    number: "01.",
    title: "Tell Us About Your Business",
    description:
      "You answer a short set of questions about your business, services required and current status. This allows us to understand your needs before proposing any work.",
    image: "/assets/images/Tell Us About Your Business.png",
  },
  {
    id: "step-2",
    number: "02.",
    title: "Receive a Clear Quote",
    description:
      "Based on your information, you receive a tailored quote by email, outlining services covered, pricing or pricing ranges, indicative timelines and next steps. There is no obligation to proceed.",
    image: "/assets/images/Receive a Clear Quote.png",
  },
  {
    id: "step-3",
    number: "03.",
    title: "Onboarding and Data Migration",
    description:
      "Once accepted, we onboard you onto the VACEI platform, handling account setup, system configuration and data migration where required. You do not need to prepare systems or templates in advance.",
    image: "/assets/images/Onboarding and Data Migration.png",
  },
  {
    id: "step-4",
    number: "04.",
    title: "Dedicated VACEI Team Assigned",
    description:
      "A dedicated VACEI team is assigned to your account. Your team is responsible for delivering your services and acting as your main point of contact.",
    image: "/assets/images/Dedicated VACEI Team Assigned.png",
  },
  {
    id: "step-5",
    number: "05.",
    title: "Work Delivered via Client Portal",
    description:
      "All work is delivered through your secure client portal. You can upload documents, track tasks and deadlines, communicate with your team, and access reports and filings in one place.",
    image: "/assets/images/Work Delivered via Client Portal (1).png",
  },
];

import { FadeInUp } from "@/components/common/Animations";

// ... existing imports ...

const HowItWorksPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="How It Works"
          breadcrumbs={[{ label: "How It Works" }]}
        />
      </div>

      <FadeInUp>
        <HowItWorksTimeline steps={steps} />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <OngoingSupportSection />
      </FadeInUp>
    </main>
  );
};

export default HowItWorksPage;
