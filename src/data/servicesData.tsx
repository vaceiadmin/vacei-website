import { ReactNode } from "react";

export interface ServiceData {
  id: string; // The specific ID/Key for the service
  slug: string; // URL slug
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  description?: ReactNode; // Rich content for the description
  image: string; // Path to the image
  portalImage?: string; // Image for the Portal Feature section (optional)
  portalVariant?: "default" | "technology";
  featuresSection?: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      items: string[];
    }[];
  };
}

// Unique feature items for each service
const accountingFeatures = [
  {
    title: "Core Services",
    items: [
      "Monthly bookkeeping and transaction processing",
      "Financial statement preparation (P&L, Balance Sheet, Cash Flow)",
      "Management reporting and KPI dashboards",
      "Chart of accounts setup and maintenance",
    ],
  },
  {
    title: "Advanced Features",
    items: [
      "Multi-currency accounting and consolidation",
      "Intercompany reconciliation and eliminations",
      "Budgeting, forecasting, and variance analysis",
      "Integration with banking and payment systems",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Operating companies requiring ongoing bookkeeping",
      "Growing businesses needing structured financial reporting",
      "Management teams seeking performance visibility",
      "Businesses preparing for audit or investment",
    ],
  },
  {
    title: "Benefits",
    items: [
      "Real-time financial visibility through client portal",
      "Automated workflows reducing manual errors",
      "Structured processes ensuring consistency",
      "Full audit trail of all transactions and changes",
    ],
  },
];

const taxComplianceFeatures = [
  {
    title: "VAT Services",
    items: [
      "VAT registration and deregistration",
      "Monthly/quarterly VAT return preparation",
      "VAT compliance reviews and optimization",
      "EC Sales List and Intrastat reporting",
    ],
  },
  {
    title: "Payroll & Employment",
    items: [
      "Payroll processing and payslip generation",
      "PAYE and social security contributions",
      "Employment contract compliance",
      "Annual FS3 and FS7 submissions",
    ],
  },
  {
    title: "Regulatory Filings",
    items: [
      "Annual return submissions to Registry of Companies",
      "Tax return preparation and submission",
      "Deadline tracking and compliance monitoring",
      "Authority correspondence management",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Companies with ongoing tax obligations",
      "Businesses requiring payroll management",
      "Organizations needing compliance support",
      "Companies seeking deadline management",
    ],
  },
];

const auditAssuranceFeatures = [
  {
    title: "Audit Services",
    items: [
      "Statutory audit of financial statements",
      "Independent review engagements",
      "Agreed-upon procedures",
      "Special purpose audits",
    ],
  },
  {
    title: "Assurance Work",
    items: [
      "Financial statement reviews",
      "Due diligence support",
      "Internal control assessments",
      "Compliance audits",
    ],
  },
  {
    title: "Process & Workflow",
    items: [
      "Structured audit workflows through platform",
      "Document management and evidence gathering",
      "Real-time progress tracking",
      "Automated testing and validation",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Companies requiring statutory audits",
      "Businesses preparing for investment",
      "Organizations needing assurance",
      "Entities with regulatory audit requirements",
    ],
  },
];

const corporateCSPFeatures = [
  {
    title: "Company Formation",
    items: [
      "New company incorporation",
      "Company name reservation",
      "Memorandum and Articles preparation",
      "Registered office and secretary services",
    ],
  },
  {
    title: "Ongoing Administration",
    items: [
      "Annual return filing and maintenance",
      "Share register management",
      "Board meeting minutes and resolutions",
      "Statutory register maintenance",
    ],
  },
  {
    title: "Corporate Changes",
    items: [
      "Director and secretary appointments/resignations",
      "Share transfers and allotments",
      "Capital structure changes",
      "Registered office changes",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "New companies requiring formation services",
      "Existing companies needing ongoing administration",
      "Businesses requiring corporate secretarial support",
      "Companies seeking compliance management",
    ],
  },
];

const regulatedLicensingFeatures = [
  {
    title: "Licensing Services",
    items: [
      "License application preparation and submission",
      "Renewal management and tracking",
      "Compliance monitoring and reporting",
      "Authority correspondence coordination",
    ],
  },
  {
    title: "Regulatory Support",
    items: [
      "Regulatory framework analysis",
      "Compliance gap assessments",
      "Ongoing compliance monitoring",
      "Regulatory change management",
    ],
  },
  {
    title: "Industries Served",
    items: [
      "Financial services and investment firms",
      "Gaming and gambling operators",
      "Real estate and property developers",
      "Professional services requiring licenses",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Businesses operating in regulated sectors",
      "Companies requiring formal authorizations",
      "Organizations needing license management",
      "Entities with ongoing regulatory obligations",
    ],
  },
];

const advisoryGrowthFeatures = [
  {
    title: "Strategic Planning",
    items: [
      "Business planning and strategy development",
      "Financial modeling and projections",
      "Growth planning and scaling strategies",
      "Market analysis and competitive positioning",
    ],
  },
  {
    title: "Financial Advisory",
    items: [
      "Cash flow management and optimization",
      "Funding strategy and capital raising",
      "Investment analysis and due diligence",
      "M&A support and transaction advisory",
    ],
  },
  {
    title: "Operational Excellence",
    items: [
      "Process improvement and optimization",
      "System implementation and integration",
      "Performance measurement and KPIs",
      "Risk management and mitigation",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Growing businesses seeking strategic guidance",
      "Companies planning expansion or scaling",
      "Organizations requiring financial advisory",
      "Businesses preparing for major transactions",
    ],
  },
];

const companyStructureFeatures = [
  {
    title: "Ownership Changes",
    items: [
      "Share transfer documentation and execution",
      "Share purchase agreements",
      "Shareholder agreements",
      "Equity restructuring",
    ],
  },
  {
    title: "Corporate Restructuring",
    items: [
      "Group reorganization planning",
      "Cross-border structure optimization",
      "Entity consolidation or separation",
      "Holding company structures",
    ],
  },
  {
    title: "Complex Transactions",
    items: [
      "Merger and acquisition support",
      "Demerger and spin-off transactions",
      "Capital reduction and restructuring",
      "Scheme of arrangement support",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Companies changing ownership structure",
      "Businesses restructuring group entities",
      "Organizations making material corporate changes",
      "Groups undertaking complex structural projects",
    ],
  },
];

const liquidationFeatures = [
  {
    title: "Voluntary Liquidation",
    items: [
      "Members' voluntary liquidation (MVL)",
      "Creditors' voluntary liquidation (CVL)",
      "Liquidation planning and execution",
      "Asset realization and distribution",
    ],
  },
  {
    title: "Strike-Off & Dissolution",
    items: [
      "Dormant company strike-off",
      "Voluntary dissolution procedures",
      "Final accounts preparation",
      "Registrar of Companies filings",
    ],
  },
  {
    title: "Wind-Down Services",
    items: [
      "Business closure planning",
      "Employee termination support",
      "Contract termination management",
      "Final compliance and filings",
    ],
  },
  {
    title: "Who It's For",
    items: [
      "Companies ceasing operations",
      "Dormant or inactive companies",
      "Businesses requiring formal liquidation",
      "Groups restructuring or exiting entities",
    ],
  },
];

export const servicesData: ServiceData[] = [
  {
    id: "accounting-finance",
    slug: "accounting-finance",
    title: "Accounting & Finance",
    breadcrumbs: [
      { label: "Services" },
      { label: "Accounting & Finance" },
    ],
    image: "/assets/images/Frame 1618872606.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "technology",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Accounting and Finance services cover the ongoing financial management
          of your business.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI handles bookkeeping, accounting and financial reporting,
          providing accurate records, clear reporting and financial visibility.
        </p>
        <p className="text-gray leading-[26px]">
          These services are fully managed by VACEI and delivered through your
          client portal, ensuring you have real-time access to your financial health.
        </p>
      </>
    ),
    featuresSection: {
      title: "Comprehensive accounting services tailored to your business",
      subtitle: "Get a clear quote based on your accounting needs and transaction volume",
      features: accountingFeatures,
    },
  },
  {
    id: "tax-compliance",
    slug: "tax-compliance",
    title: "Tax & Compliance",
    breadcrumbs: [
      { label: "Services" },
      { label: "Tax & Compliance" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "technology",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Tax and Compliance services cover the ongoing statutory and tax
          obligations of your business.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages VAT, payroll, registrations, filings and deadlines,
          ensuring obligations are met accurately and on time.
        </p>
        <p className="text-gray leading-[26px]">
          These services are fully managed by VACEI and delivered through your
          client portal, giving you peace of mind regarding regulatory requirements.
        </p>
      </>
    ),
    featuresSection: {
      title: "Complete tax and compliance management",
      subtitle: "Get a quote based on your VAT, payroll, and filing requirements",
      features: taxComplianceFeatures,
    },
  },
  {
    id: "audit-assurance",
    slug: "audit-assurance",
    title: "Audit & Assurance",
    breadcrumbs: [
      { label: "Services" },
      { label: "Audit & Assurance" },
    ],
    image: "/assets/images/Frame 1618872609.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Audit and Assurance services cover statutory audits and structured
          financial reviews.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI delivers audits through a clear, organised process that provides
          visibility, predictable timelines and documented outcomes.
        </p>
        <p className="text-gray leading-[26px]">
          Audit work is coordinated by VACEI and supported by structured
          workflows through the platform, minimizing disruption to your operations.
        </p>
      </>
    ),
    featuresSection: {
      title: "Structured audit and assurance services",
      subtitle: "Request a quote based on your audit requirements and engagement scope",
      features: auditAssuranceFeatures,
    },
  },
  {
    id: "corporate-csp-services",
    slug: "corporate-csp-services",
    title: "Corporate & CSP Services",
    breadcrumbs: [
      { label: "Services" },
      { label: "Corporate & CSP Services" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Corporate Services cover the legal and statutory administration of a
          company throughout its lifecycle.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages company formations, changes, filings, restructurings and
          exits, ensuring all corporate obligations are handled correctly and on
          time.
        </p>
        <p className="text-gray leading-[26px]">
          These services are delivered by VACEI and coordinated through one
          structured system to maintain your company's good standing.
        </p>
      </>
    ),
    featuresSection: {
      title: "Full corporate secretarial and administration services",
      subtitle: "Get a quote based on your company's formation and ongoing needs",
      features: corporateCSPFeatures,
    },
  },
  {
    id: "regulated-licensing",
    slug: "regulated-licensing",
    title: "Regulated & Licensing",
    breadcrumbs: [
      { label: "Services" },
      { label: "Regulated & Licensing" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Regulated and Licensing services support businesses operating in
          regulated environments or requiring formal authorisations.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages licence applications, renewals and ongoing compliance,
          coordinating submissions and authority correspondence.
        </p>
        <p className="text-gray leading-[26px]">
          These services are delivered by VACEI and managed through structured
          workflows to navigate complex regulatory landscapes.
        </p>
      </>
    ),
    featuresSection: {
      title: "Specialized licensing and regulatory compliance support",
      subtitle: "Request a quote based on your licensing requirements and industry",
      features: regulatedLicensingFeatures,
    },
  },
  {
    id: "advisory-growth",
    slug: "advisory-growth",
    title: "Advisory & Growth",
    breadcrumbs: [
      { label: "Services" },
      { label: "Advisory & Growth" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Advisory and Growth services support businesses beyond day to day
          compliance.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI provides structured advice to help businesses plan, scale and
          operate more effectively, with financial and regulatory considerations
          aligned.
        </p>
        <p className="text-gray leading-[26px]">
          These services are delivered by VACEI alongside core accounting, tax
          and audit work to drive your business forward.
        </p>
      </>
    ),
    featuresSection: {
      title: "Strategic advisory and growth consulting services",
      subtitle: "Get a quote based on your advisory needs and project scope",
      features: advisoryGrowthFeatures,
    },
  },
  {
    id: "company-structure-corporate-changes",
    slug: "company-structure-corporate-changes",
    title: "Company Structure & Corporate Changes",
    breadcrumbs: [
      { label: "Services" },
      { label: "Company Structure & Corporate Changes" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          {" "}
          What It Is{" "}
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Company Structure and Corporate Changes cover non-recurring, event-based
          changes to a company’s legal and ownership structure.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages these changes as defined projects, preparing
          documentation, coordinating filings, and ensuring compliance with
          applicable requirements.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are provided separately from ongoing Corporate (CSP)
          Services.
        </p>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          {" "}
          Who It’s For{" "}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray leading-[26px]">
          <li>Companies changing ownership or shareholding structure </li>
          <li> Businesses restructuring or reorganising group entities </li>
          <li> Companies making material corporate changes </li>
          <li>
            {" "}
            Groups undertaking cross-border or complex structural
            projects{" "}
          </li>
        </ul>
      </>
    ),
    featuresSection: {
      title: "Specialized corporate structure services",
      subtitle: "Get a quote based on your structural change requirements",
      features: companyStructureFeatures,
    },
  },
  {
    id: "liquidation-wind-down",
    slug: "liquidation-wind-down",
    title: "Liquidation & Wind-Down",
    breadcrumbs: [
      { label: "Services" },
      { label: "Liquidation & Wind-Down" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Liquidation Dashboard.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          {" "}
          What It Is{" "}
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Liquidation and Wind-Down services support companies that are
          closing, restructuring, or no longer operating.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages the process from planning through execution, ensuring
          statutory requirements are met and filings are completed
          correctly. These services are provided on a project basis.
        </p>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3 mt-6">
          {" "}
          Who It’s For{" "}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray leading-[26px]">
          <li>Companies that have ceased or plan to cease operations </li>
          <li> Dormant or inactive companies </li>
          <li> Businesses requiring a formal liquidation process </li>
          <li> Groups restructuring or exiting specific entities </li>
        </ul>
      </>
    ),
    featuresSection: {
      title: "Complete liquidation and wind-down services",
      subtitle: "Request a quote based on the type of liquidation or wind-down required",
      features: liquidationFeatures,
    },
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};
