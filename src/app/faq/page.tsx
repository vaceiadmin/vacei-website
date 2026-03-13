"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import FaqAccordion from "@/components/common/FaqAccordion";
import FaqCategorized from "@/components/common/FaqCategorized";
import { FadeInUp } from "@/components/common/Animations";

const faqItems = [
  {
    title: "Clarity",
    content:
      "VACEI is an accounting, audit, and corporate services firm that delivers its work through a structured digital platform. Clients interact through a single portal while our teams manage delivery, reviews, and compliance internally.",
  },
  {
    title: "Do I need to use any accounting or audit software?",
    content:
      "No, you don't need to use any accounting or audit software. VACEI provides a complete digital platform where all your accounting, audit, and corporate services are managed. Clients interact through our single portal, and our teams handle all the technical aspects internally.",
  },
  {
    title: "Who is VACEI for?",
    content:
      "VACEI is designed for businesses of all sizes that need professional accounting, audit, and corporate services. Whether you're a startup, growing business, or established company, our structured digital platform makes it easy to manage your financial and compliance needs efficiently.",
  },
];

const faqCategories = [
  {
    title: "Services & Delivery",
    titleHighlight: "Delivery",
    questions: [
      {
        question: "What services does VACEI provide?",
        answer:
          "VACEI provides accounting, bookkeeping, VAT, payroll, audit, and related corporate services. Services are scoped and confirmed before engagement.",
      },
      {
        question: "How does VACEI manage deadlines and deliverables?",
        answer:
          "VACEI uses structured workflows and internal portals to manage all deadlines and deliverables. Each engagement has clear timelines, and progress is visible through the Client Portal.",
      },
      {
        question: "Will I have a dedicated team?",
        answer:
          "Yes, each client is assigned a dedicated team that manages their account. You'll have direct access to your team through the Client Portal for communication and support.",
      },
    ],
  },
  {
    title: "Communication & Documents",
    titleHighlight: "Documents",
    questions: [
      {
        question: "How do I upload documents?",
        answer:
          "Documents are uploaded securely through the Client Portal, where requests and submissions are tracked in one place.",
      },
      {
        question: "How do I communicate with my VACEI team?",
        answer:
          "Communication happens through the Client Portal, where you can send messages, respond to requests, and track all interactions with your dedicated team in one centralized location.",
      },
    ],
  },
  {
    title: "Technology & Portals",
    titleHighlight: "Portals",
    questions: [
      {
        question: "Does VACEI use technology in its services?",
        answer:
          "Yes. VACEI uses internal portals and tools to manage workflows, reviews, and quality controls. This improves efficiency, consistency, and traceability.",
      },
      {
        question: "Can firms access VACEI's technology?",
        answer:
          "Selected components of our technology environment may be made available to firms through partnerships, licensing, or reseller arrangements. Contact us to learn more.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    titleHighlight: "Compliance",
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. Data is stored and managed within controlled systems with access restricted by role and permission.",
      },
      {
        question: "Where is my data hosted?",
        answer:
          "Your data is hosted in secure, controlled environments that comply with professional and regulatory standards. All systems have appropriate security measures and access controls.",
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader title="FAQ" breadcrumbs={[{ label: "FAQ" }]} />
      </div>

      <FadeInUp>
        <FaqAccordion
          faqItems={faqItems}
          backgroundColor="bg-[#020410]"
          showRadials={false}
        />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <FaqCategorized categories={faqCategories} />
      </FadeInUp>
    </main>
  );
};

export default FaqPage;
