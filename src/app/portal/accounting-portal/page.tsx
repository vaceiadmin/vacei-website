"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ClientPortalOverviewSection from "@/components/client-portal/ClientPortalOverviewSection";
import PortalFeature from "@/components/services/PortalFeature";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import RiskAuditSection from "@/components/accounting/RiskAuditSection";

const AccountingPortalPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Accounting Portal"
          breadcrumbs={[{ label: "Accounting Portal" }]}
        />
      </div>

      <ClientPortalOverviewSection
              variant="accounting"
              heading="How VACEI delivers structured, reliable accounting services"
              paragraphs={[
                  'The VACEI Accounting Portal is the environment our accounting teams use to deliver bookkeeping, reporting, VAT, and payroll services in a structured and controlled way.',
                  'It brings monthly workflows, documents, reviews, and integrations into one system, allowing our teams to work efficiently while maintaining accuracy, consistency, and accountability.',
                  'Clients interact through the Client Portal. All accounting execution and internal controls are managed through the Accounting Portal.',
              ]}
      />

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
              workflowDetail={{
                heading: "Monthly Accounting Workflow",
                description: "Bookkeeping, reconciliations, VAT, and payroll are managed through controlled processes, ensuring tasks are completed in correct sequence."
              }}
      />


      <RiskAuditSection variant="accounting" />
      <ServiceFeatures
              title={
                  <>
                      Excellence in 
                      <br />
                      Digital Accounting.
                  </>
              }
              description="A structured approach to monthly bookkeeping, reconciliations, and financial management for growing businesses."

              bulletIconSrc="/assets/images/bullet2.png"
              bulletIconAlt="Bullet"
              features={[

                  {
                      title: "Document management",
                      items: [
                          'All accounting-related information is centralised',
                          'Documents stored in one place & linked to specific tasks',
                          'Reduced reliance on emails and scattered files',
                          'Improves continuity across months and teams',
                      ],
                  },
                  {
                      title: "Reviews & internal controls",
                      items: [
                          'Quality control built into the accounting process',
                          'Internal reviews performed before delivery',
                          'Clear sign-off stages',
                          'Documented audit trail for accounting work',
                      ],
                  },
                  {
                      title: "Visibility & reporting",
                      items: [
                          'Real-time visibility over financial position',
                          'Up-to-date records throughout the month',
                          'Clear view of key balances and activity',
                          'Reduced reliance on end-of-month catch-ups',
                      ],
                  },
              ]}
      />


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
                          'Partner with VACEI for accounting delivery',
                          'Deploy the portal within their own operations to support internal teams',
                      ],
                      footer:
                          'Built for firms who value efficiency and transparency.',
                  },
              ]}
              bulletIconSrc="/assets/images/bullet.png"
      />

    </main>
  );
};

export default AccountingPortalPage;


