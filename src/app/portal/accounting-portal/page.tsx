"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ClientPortalOverviewSection from "@/components/client-portal/ClientPortalOverviewSection";
import PortalFeature from "@/components/services/PortalFeature";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import RiskAuditSection from "@/components/accounting/RiskAuditSection";
import AnimatedSection from "@/components/common/AnimatedSection";

const AccountingPortalPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Accounting Portal"
          breadcrumbs={[{ label: "Accounting Portal" }]}
        />
      </div>

      <AnimatedSection>
        <ClientPortalOverviewSection
                variant="accounting"
                heading="How VACEI delivers structured, reliable accounting services"
                paragraphs={[
                    'The VACEI Accounting Portal is the environment our accounting teams use to deliver bookkeeping, reporting, VAT, and payroll services in a structured and controlled way.',
                    'It brings monthly workflows, documents, reviews, and integrations into one system, allowing our teams to work efficiently while maintaining accuracy, consistency, and accountability.',
                    'Clients interact through the Client Portal. All accounting execution and internal controls are managed through the Accounting Portal.',
                ]}
        />
      </AnimatedSection>

      <AnimatedSection delay>
        <PortalFeature
                portalImage="/assets/images/Accounting.jpg"
                sectionLabel="Our services"
                heading="Monthly accounting works"
                description="Each client is managed through a defined monthly accounting cycle."
                bulletIntro="We carry out:"
                bulletItems={[
                    'Bookkeeping and transaction posting',
                    'Reconciliations and internal checks',
                    'VAT and payroll preparation',
                    'Review and finalisation',
                ]}
                closingText="Workflows are structured so tasks are completed in the correct sequence, responsibilities are clear, and progress is visible at every stage."
                bottomTitle="Accounting Portal"
                bottomDescription="Documents, tasks, deadlines and communication in one place."
                quoteText="Good firms rely on experience. Great firms rely on structure. VACEI exists to make that structure visible, auditable, and scalable"
        />
      </AnimatedSection>

      <AnimatedSection>
        <RiskAuditSection variant="accounting" />
      </AnimatedSection>
      <AnimatedSection delay>
        <ServiceFeatures
                title={
                    <>
                        How VACEI delivers structured,
                        <br />
                        high-quality audits.
                    </>
                }
                subtitle="Who It’s For"
                bulletIconSrc="/assets/images/bullet2.png"
                bulletIconAlt="Bullet"
                features={[
                    {
                        title: "Who It’s For",
                        items: [
                            'Operating companies that need ongoing bookkeeping and accounting',
                            'Growing businesses that require structured financial reporting',
                            'Management teams that need visibility over performance and cash flow',
                            'Businesses preparing for audit, investment or expansion',
                        ],
                    },
                    {
                        title: "Who It’s For",
                        items: [
                            'Operating companies that need ongoing bookkeeping and accounting',
                            'Growing businesses that require structured financial reporting',
                            'Management teams that need visibility over performance and cash flow',
                            'Businesses preparing for audit, investment or expansion',
                        ],
                    },
                    {
                        title: "Who It’s For",
                        items: [
                            'Operating companies that need ongoing bookkeeping and accounting',
                            'Growing businesses that require structured financial reporting',
                            'Management teams that need visibility over performance and cash flow',
                            'Businesses preparing for audit, investment or expansion',
                        ],
                    },
                    {
                        title: "Who It’s For",
                        items: [
                            'Operating companies that need ongoing bookkeeping and accounting',
                            'Growing businesses that require structured financial reporting',
                            'Management teams that need visibility over performance and cash flow',
                            'Businesses preparing for audit, investment or expansion',
                        ],
                    },
                ]}
        />
      </AnimatedSection>

      <AnimatedSection>
        <ClientPortalOverviewSection
                variant="accounting"
                bulletedSections={[
                    {
                        title: 'Integrated delivery environment',
                        intro:
                            'By managing accounting work within a single structured environment, VACEI ensures:',
                        bullets: [
                            'Consistent monthly delivery',
                            'Reduced manual work and duplication',
                            'Clear accountability across teams',
                            'Better collaboration with clients',
                        ],
                        footer:
                            'This approach allows us to scale delivery while maintaining quality and control.',
                    },
                    {
                        title: 'For firms & partners',
                        intro:
                            'The Accounting Portal is also available to firms that want to operate with the same level of structure, workflow discipline, and internal controls.',
                        bullets: [
                            'Partner with VACEI for accounting delivery, or',
                            'Deploy the portal within their own operations to support internal teams.',
                        ],
                        footer:
                            'This approach allows us to scale delivery while maintaining quality and control.',
                    },
                ]}
                bulletIconSrc="/assets/images/bullet.png"
        />
      </AnimatedSection>
    </main>
  );
};

export default AccountingPortalPage;


