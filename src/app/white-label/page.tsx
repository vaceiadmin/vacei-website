"use client";

import React from "react";
import WLHero from "@/components/white-label/WLHero";
import WLBentoGrid from "@/components/white-label/WLBentoGrid";
import WLProcess from "@/components/white-label/WLProcess";
import WLInteractiveCards from "@/components/white-label/WLInteractiveCards";
import WLUseCaseDisplay from "@/components/white-label/WLUseCaseDisplay";
import WLPricing from "@/components/white-label/WLPricing";
import WLCTASection from "@/components/white-label/WLCTASection";
import FallBeamBackground from "@/components/common/FallBeam";
import { 
  Layout, 
  Users, 
  Workflow, 
  FileText, 
  Calendar, 
  Blocks,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  Briefcase
} from "lucide-react";

const WhiteLabelPage = () => {
  const whatYouGet = [
    { id: 1, title: "Fully branded platform", description: "Logo, colors, and your own domain for a seamless experience.", icon: Layout, className: "md:col-span-3 lg:col-span-4 lg:row-span-2" },
    { id: 2, title: "Client portals", description: "Dedicated secure portals for each of your client companies.", icon: Users, className: "md:col-span-3 lg:col-span-8" },
    { id: 3, title: "Engagement management", description: "Comprehensive workflows to manage professional services.", icon: Briefcase, className: "md:col-span-3 lg:col-span-4" },
    { id: 4, title: "Document requests", description: "Streamlined tracking and collection of client documents.", icon: FileText, className: "md:col-span-3 lg:col-span-4" },
    { id: 5, title: "Compliance calendar", description: "Stay on top of all filings and regulatory deadlines.", icon: Calendar, className: "md:col-span-3 lg:col-span-4" },
  ];

  const howItWorks = [
    { id: 1, title: "Launch your branded platform", description: "We set up your custom domain and apply your firm's branding." },
    { id: 2, title: "Onboard your clients", description: "Invite clients to their dedicated and secure digital workspaces." },
    { id: 3, title: "Manage services", description: "Deliver accounting, audit, legal, and compliance services efficiently." },
  ];

  const whyChoose = [
    { id: 1, title: "Scalability", description: "Expand your service offerings without adding operational chaos.", icon: Zap },
    { id: 2, title: "Brand Identity", description: "Own the relationship under your own firm's brand and colors.", icon: CheckCircle2 },
    { id: 3, title: "Efficiency", description: "Streamlined workflows designed specifically for professional services.", icon: Workflow },
  ];

  const useCases = [
    { id: 1, title: "Accounting Firms", description: "Manage bookkeeping and tax filings under your own portal.", icon: ShieldCheck },
    { id: 2, title: "Audit Practices", description: "Structured audit delivery and document management for clients.", icon: ShieldCheck },
    { id: 3, title: "Legal Firms", description: "Securely share legal documents and manage client engagements.", icon: ShieldCheck },
    { id: 4, title: "Compliance Providers", description: "Automate regulatory tracking and filings for multiple entities.", icon: ShieldCheck },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <WLHero
        title="VACEI White-Label Platform"
        subtitle="Launch Your Own Branded Client Platform"
        overview="Offer your clients a fully branded digital workspace to manage accounting, audit, legal, and compliance services under your firm. Control the experience. Own the relationship. Scale without operational chaos."
        ctaText="Request a Demo"
        onCtaClick={() => window.location.href = "/contact"}
      />

      {/* Main Content Sections with Falling Beams Background */}
      <div className="relative">
        <FallBeamBackground beamColorClass="primary-blue" lineCount={25} className="z-0" />
        
        <div className="relative z-10">
          {/* What You Get Section - Bento Grid */}
          <WLBentoGrid
            sectionSubtitle="Everything you need"
            sectionTitle="What You Get"
            items={whatYouGet}
          />

          {/* How It Works Section - Vertical Timeline */}
          <WLProcess
            sectionTitle="How It Works"
            steps={howItWorks}
          />

          {/* Why Choose White-Label Section - Interactive Cards */}
          <WLInteractiveCards
            sectionSubtitle="The VACEI Advantage"
            sectionTitle="Why Firms Choose White-Label"
            items={whyChoose}
          />

          {/* Use Cases Section - Use Case Display */}
          <WLUseCaseDisplay
            sectionSubtitle="Versatile and Scalable"
            sectionTitle="Use Cases"
            items={useCases}
          />

          {/* Pricing Section */}
          <WLPricing
            title="Pricing Model"
            price="Custom"
            period="/ solution"
            description="Flexible pricing based on scale and usage. Designed for firms looking to grow and operate under their own brand."
            features={[
              "Unlimited Client Portals",
              "Custom Domain Support",
              "Brand Customization",
              "Ongoing Technical Support"
            ]}
            ctaText="Request Quote"
            onCtaClick={() => window.location.href = "/contact"}
          />
        </div>
      </div>

      {/* Final CTA Section */}
      <WLCTASection
        title="Get Started"
        subtitle="VACEI White-Label transforms your firm into a fully digital, scalable service platform — without building technology from scratch. Request a white-label demo and launch your platform today."
        ctaText="Schedule Demo"
        onCtaClick={() => window.location.href = "/contact"}
      />
    </main>
  );
};

// Missing these in previous pass, but needed by WhiteLabelPage
import { Zap, CheckCircle2 } from "lucide-react";

export default WhiteLabelPage;
