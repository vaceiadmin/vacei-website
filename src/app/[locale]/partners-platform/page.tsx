"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { withLocale } from "@/lib/localized-path";
import WLHero from "@/components/white-label/WLHero";
import WLBentoGrid from "@/components/white-label/WLBentoGrid";
import WLProcess from "@/components/white-label/WLProcess";
import WLInteractiveCards from "@/components/white-label/WLInteractiveCards";
import WLUseCaseDisplay from "@/components/white-label/WLUseCaseDisplay";
import WLPricing from "@/components/white-label/WLPricing";
import WLCTASection from "@/components/white-label/WLCTASection";
import FallBeamBackground from "@/components/common/FallBeam";
import WLLiveRequests from "@/components/white-label/WLLiveRequests";
import { 
  Users, 
  Workflow, 
  FileText, 
  Calendar, 
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  Layout,
  Briefcase,
  Search,
  MessageSquare,
  FileSearch,
  Clock
} from "lucide-react";

const PartnersPlatformPage = () => {
  const router = useRouter();
  const locale = useLocale();
  const goContact = () => router.push(withLocale(locale, "/contact"));

  const liveRequests = [
    { id: 1, company: "Company in Malta", location: "Malta", service: "Audit Services", deadline: "14 days", type: "Urgent request" },
    { id: 2, company: "Startup (EU)", location: "European Union", service: "Bookkeeping Support", type: "Monthly engagement" },
    { id: 3, company: "Group Company", location: "Multi-country", service: "VAT Compliance Required", type: "Cross-border compliance" },
    { id: 4, company: "International Client", location: "Global", service: "Legal Structuring Support", type: "Cross-border advisory" },
  ];

  const howItWorks = [
    { id: 1, title: "Join the platform", description: "Quick onboarding to set up your firm profile and service areas." },
    { id: 2, title: "Add your existing clients", description: "Bring your current portfolio into a structured, unified workspace." },
    { id: 3, title: "Receive new service requests", description: "Get matched with real client requests looking for your expertise." },
    { id: 4, title: "Deliver and manage", description: "Use professional workflows to deliver services and manage engagements." },
  ];

  const whyJoin = [
    { id: 1, title: "Get New Clients", description: "Receive targeted requests across accounting, audit, tax, and legal service lines.", icon: Search },
    { id: 2, title: "Manage All Clients", description: "A centralised digital workspace for all documents, communication, and filings.", icon: Layout },
    { id: 3, title: "Deliver Efficiently", description: "Handle multiple service lines and complex engagements in one unified platform.", icon: TrendingUp },
  ];

  const capabilities = [
    { id: 1, title: "Client workspaces", description: "Secure environments for every client with dedicated portals." },
    { id: 2, title: "Document tracking", description: "Automated requests and status tracking for all client files." },
    { id: 3, title: "Engagement workflows", description: "Standardised steps for accounting, audit, and legal delivery." },
    { id: 4, title: "Compliance calendar", description: "Never miss a deadline with automated filing alerts." },
    { id: 5, title: "Proposal system", description: "Professional quoting and onboarding for new client requests." },
    { id: 6, title: "Unified platform", description: "One login for all your service lines and client relationships." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <WLHero
        title="VACEI Partner Platform"
        subtitle="Get Clients and Manage Them — All in One Platform"
        overview="Receive real client requests. Manage accounting, audit, legal, and compliance engagements in one structured workspace. No commissions. No complexity. Just growth."
        ctaText="Book a Demo"
        highlightWords={["Get", "Clients", "All", "One"]}
        onCtaClick={goContact}
      />

      <div className="relative">
        <FallBeamBackground beamColorClass="primary-blue" lineCount={25} className="z-0" />
        
        <div className="relative z-10">
          {/* Live Requests Section */}
          <WLLiveRequests
            sectionTitle="Live Client Requests"
            requests={liveRequests}
          />

          {/* Why Firms Join Section */}
          <WLInteractiveCards
            sectionSubtitle="Why Firms Join VACEI"
            sectionTitle="The Professional Firm OS"
            items={whyJoin}
          />

          {/* How It Works Section */}
          <WLProcess
            sectionTitle="How It Works"
            tagline="Streamlined Participation"
            description="Our platform connects professional firms with client needs through a simple, structured 4-step process."
            steps={howItWorks}
          />

          {/* Capabilities Section - Using Bento Grid for 6 items */}
          <WLBentoGrid
             sectionTitle="Platform Capabilities"
             sectionSubtitle="Full Suite of Tools"
             items={capabilities.map(c => ({...c, icon: ShieldCheck}))}
          />

          {/* Pricing Section */}
          <WLPricing
            title="Professional Pricing"
            price="150"
            period="– 350 / month"
            description="Simple, transparent subscription. We don't take a cut of your growth."
            features={[
              "100% Revenue Retention",
              "No Commissions",
              "Unlimited Client Capacity",
              "All Platform Modules Included",
              "Dedicated Account Support"
            ]}
            ctaText="Start Now"
            onCtaClick={goContact}
          />
        </div>
      </div>

      {/* Final CTA Section */}
      <WLCTASection
        badge="Partner Network"
        title="Start Receiving Clients"
        subtitle="VACEI is the operating system for professional services — combining accounting, audit, tax, legal, and compliance into one unified platform. Book your demo today."
        ctaText="Book a Demo"
        onCtaClick={goContact}
      />
    </main>
  );
};

export default PartnersPlatformPage;
