import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import ContentSection from "@/components/partners/ContentSection";

export const metadata: Metadata = {
  title: "White Label & Technology Access | VACEI",
  description: "Offer a branded client experience using VACEI's portals. Structured platforms under your brand.",
};

const WhiteLabelPage = () => {
    
  return (
    <main>
      <PageHeader
        title="White Label & Technology Access"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "White Label Solutions" }
        ]}
      />

       <ContentSection 
        title="Structured Platforms Under Your Brand" 
        description="VACEI offers white label and technology access arrangements for professional firms that wish to use structured accounting and audit delivery platforms under their own brand."
        sections={[
            {
                title: "Purpose of White Label and Technology Access",
                content: [
                    "The purpose of this partnership model is to provide firms with a ready-to-use delivery platform without the need to design, build, or maintain complex systems internally.",
                    "VACEI supplies the underlying infrastructure and workflow logic. Partner firms apply their own branding, operate under their own name, and deliver services independently.",
                    "This model is designed for firms that want consistency, visibility, and control across their engagements."
                ]
            },
            {
                title: "Who This Partnership Is For",
                content: [ "Partners must have the appropriate licensing, qualifications, and internal governance structures relevant to their jurisdiction." ],
                list: [
                    "Accounting firms",
                    "Audit firms",
                    "Advisory firms with internal delivery teams",
                    "Professional service organisations operating in regulated environments"
                ]
            }
        ]}
      />
      
      {/* Client Portal Section with CTA */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
         <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h3 className="text-2xl font-bold text-text-heading mb-4">White Label Client Experience</h3>
            <p className="text-text-gray mb-6 leading-relaxed">
                Under a white label arrangement, all client-facing interfaces operate under the partner’s brand. Clients access a secure portal that reflects the firm’s identity, including branding elements and communication tone. There is no visible reference to VACEI.
            </p>
            <Link 
                href="/partners/white-label/client-portal"
                className="inline-flex items-center font-medium text-white bg-primary hover:bg-primary-blue px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-primary-blue/30"
            >
                Explore Client Portal Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
         </div>
      </section>

      {/* Audit Portal Section with CTA */}
      <section className="py-16 bg-white">
         <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h3 className="text-2xl font-bold text-text-heading mb-4">Audit and Internal Delivery Portals</h3>
            <p className="text-text-gray mb-6 leading-relaxed">
                In addition to the client portal, partners gain access to internal delivery portals used by their teams. These portals support planning, working papers, client queries, review processes, and sign-off workflows.
            </p>
            <Link 
                href="/partners/white-label/audit-portal"
                className="inline-flex items-center font-medium text-white bg-primary hover:bg-primary-blue px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-primary-blue/30"
            >
                Explore Audit Portal Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
         </div>
      </section>
      
      <ContentSection 
        title="Technology Access and Governance"
        sections={[
           {
               title: "Technology Access and Deployment",
               content: [
                   "Technology access may include selected components of the VACEI platform deployed for internal use.",
                   "Partners maintain operational control and are responsible for how the technology is used within their organisation. VACEI does not intervene in service delivery decisions unless otherwise agreed.",
                   "The deployment model depends on the scope of access, jurisdiction, and partnership structure."
               ]
           },
           {
               title: "Data Ownership and Control",
               content: [
                   "Under white label and technology access arrangements, partners retain control over their client data and engagements.",
                   "VACEI provides the infrastructure but does not assume ownership of client relationships or professional responsibility.",
                   "Data handling and access are governed by agreed terms and applicable regulatory requirements."
               ]
           },
           {
               title: "Commercial and Operational Structure",
               content: [
                   "White label and technology access partnerships are governed by agreed commercial and operational terms.",
                   "These terms define access scope, usage rights, support arrangements, and service boundaries. Commercial details are agreed privately and vary depending on deployment and scale."
               ]
           },
           {
               title: "Partnership Assessment",
               content: [
                   "All white label and technology access partnerships are subject to an assessment process.",
                   "This assessment considers professional standards, operational readiness, jurisdictional requirements, and long-term alignment.",
                   "The objective is to ensure consistent quality and responsible use of the platform."
               ]
           }
        ]}
      >
        <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-bold text-text-heading mb-4">Working With VACEI</h3>
            <p className="text-text-gray mb-6">
                White label and technology access partnerships are designed for firms that value structured delivery, controlled workflows, and operational clarity. If you are interested in using VACEI technology under your own brand, we invite you to discuss your requirements with our team.
            </p>
             <Link 
                href="/quote#process-steps" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary-blue transition-all"
            >
                Discuss Partnership
            </Link>
        </div>
      </ContentSection>

    </main>
  );
};

export default WhiteLabelPage;
