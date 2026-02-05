import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import ContentSection from "@/components/partners/ContentSection";

export const metadata: Metadata = {
  title: "Reseller Program | VACEI",
  description: "Sell VACEI. We Deliver the Platform. You Earn. Join our reseller program.",
};

const ResellerProgramPage = () => {
  const sections = [
    {
      title: "What VACEI Is",
      content: [
        "VACEI is a delivery platform for accounting and audit workflows. It provides the infrastructure that sits behind professional accounting and audit services.",
         "VACEI combines structured workflows, secure client interaction, audit-grade documentation, internal controls, and technology-assisted review support.",
         "VACEI does not act as a firm and does not hold client mandates directly. It operates solely as a technology platform that supports compliant service delivery."
      ]
    },
    {
      title: "What VACEI Is Not",
      content: [
         "To avoid ambiguity, VACEI is not a mass-market SaaS product, not a self-service bookkeeping tool, and not a replacement for accountants, auditors, or corporate service providers.",
         "The platform does not remove professional responsibility or judgment. It is designed for controlled, professional use rather than consumer automation."
      ]
    },
    {
        title: "Who the Reseller Program Is For",
        content: [ "The Reseller Program is designed for professionals who regularly work with businesses that require structured accounting, audit, or compliance support." ],
        list: [
            "Business and management consultants",
            "Corporate service providers and fiduciaries",
            "Advisory firms and boutique consultancies",
            "Industry specialists working with regulated or growing companies",
            "Independent professionals with strong referral networks"
        ]
    },
    {
        title: "What Resellers Do",
        content: [
            "Resellers identify suitable clients, introduce them to the VACEI platform, support the initial commercial conversation, and hand over delivery to VACEI or an approved partner.",
            "Resellers do not perform accounting or audit work, do not access client data beyond commercial onboarding, and do not assume regulatory or professional responsibility."
        ]
    },
    {
        title: "How the Reseller Process Works",
        content: [ "The process follows a clear and structured flow." ],
        list: [
            "First, the reseller introduces a potential client to VACEI through an agreed referral process.",
            "Second, VACEI assesses fit, scope, and jurisdiction, and onboards the client onto the platform.",
            "Third, services are delivered using VACEI workflows by VACEI or by an approved delivery partner.",
            "Finally, once the engagement is successfully established, reseller commission is triggered according to the agreed terms."
        ]
    },
    {
        title: "What Can Be Resold Through VACEI",
        content: [
            "Resellers may introduce clients who require accounting and bookkeeping workflows, periodic reporting, structured document handling, audit and assurance workflows, planning and execution support, working papers, review trails, client queries and sign-off processes, compliance and deadline tracking, task visibility, secure client portals, document exchange, and real-time status updates.",
            "VACEI also supports technology-enabled review through AI-assisted document checks, consistency and completeness support, and risk indicators that assist professionals without replacing judgment."
        ]
    },
    {
        title: "Commercial Structure",
        content: [
            "The Reseller Program is designed to be transparent, performance-based, and suitable for long-term collaboration.",
            "Commission is earned on successful introductions and active client engagements. Specific commercial terms are agreed privately and are not publicly listed."
        ]
    },
    {
        title: "Why Professionals Choose to Resell VACEI",
        content: [
            "Resellers benefit from a clear role separation, no delivery or staffing burden, no regulatory exposure, and a platform-backed structure that supports credibility and long-term client relationships.",
            "VACEI manages operational complexity, while resellers focus on relationships and growth."
        ]
    },
    {
        title: "Governance and Quality Control",
        content: [
            "All reseller relationships are subject to an assessment of alignment with professional standards, jurisdictional requirements, operational readiness, and long-term fit.",
             "This ensures consistency, accountability, and trust across all engagements introduced through the platform."
        ]
    }
  ];

  return (
    <main>
      <PageHeader
        title="Reseller Program"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Reseller Program" }
        ]}
      />
      
      <ContentSection 
        title="Sell VACEI. We Deliver the Platform. You Earn." 
        description="The Reseller Program allows qualified professionals to introduce clients to VACEI and earn commission on successful engagements, without delivering regulated services or managing operational execution."
        sections={sections}
      >
        <div className="flex justify-center pt-8">
            <Link 
                href="/quote" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary-blue transition-all"
            >
                Apply to Become a Reseller
            </Link>
        </div>
      </ContentSection>
    </main>
  );
};

export default ResellerProgramPage;
