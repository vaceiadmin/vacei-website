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
  videoUrl?: string; // Optional service video URL
  featuresSection?: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      items: string[];
    }[];
  };
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

// Unique feature items for each service
const accountingFeatures = [
  {
    title: "Accounting & reporting",
    items: [
      "Online bookkeeping",
      "Accounting and financial management",
      "Management accounts",
      "Financial reporting and analysis",
    ],
  },
  {
    title: "Financial planning & oversight",
    items: [
      "Cash flow monitoring and forecasting",
      "Budgeting and performance tracking",
    ],
  },
  {
    title: "CFO & fractional CFO",
    items: [
      "Financial oversight and guidance",
      "Support for management decision-making",
      "Financial readiness for audit, banking, or investment",
      "Ongoing coordination with accounting and compliance functions",
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
    title: "CSP core services",
    items: [
      "Registered Office (mandatory) and annual renewal",
      "Company Secretary services (appointment and renewal)",
      "Director services (natural person / corporate director where applicable)",
      "Nominee director / nominee shareholder services (where applicable)",
    ],
  },
  {
    title: "Governance & statutory maintenance",
    items: [
      "Statutory registers maintenance (directors, shareholders, charges)",
      "Beneficial Ownership (UBO) monitoring and updates",
      "MBR filings support (Annual Return A1 and statutory forms)",
      "Company documentation maintenance (resolutions, share certificates, core statutory documents)",
    ],
  },
  {
    title: "Substance & compliance",
    items: [
      "Substance coordination and documentation support",
      "Compliance oversight and readiness support",
      "CSP compliance reviews (as required)",
    ],
  },
  {
    title: "Optional add-ons",
    items: [
      "Registered Office mail handling (scan / forward)",
      "Certified true copies and apostille coordination",
      "Bank liaison support (KYC coordination and confirmations)",
      "Director / officer confirmations and declarations",
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
    title: "Business planning & strategy",
    items: [
      "Business plans for bank financing",
      "Business plans for grant applications",
      "Business plans for investor presentations",
      "Internal planning and forecasting",
    ],
  },
  {
    title: "Grants & funding",
    items: [
      "AI grants",
      "Business development grants",
      "Employment and incentive schemes",
      "Grant eligibility assessment and application support",
    ],
  },
  {
    title: "Projects & transactions support",
    items: [
      "Transaction support and coordination",
      "Project-based advisory engagements",
      "Structuring support aligned with regulatory and financial requirements (with external legal advisors where required)",
    ],
  },
];

const companyStructureFeatures = [
  {
    title: "Ownership & capital changes",
    items: [
      "Share transfers",
      "Share capital increases, reductions, and reclassifications",
      "Shareholder changes and updates",
    ],
  },
  {
    title: "Management & company details",
    items: [
      "Director appointments and resignations",
      "Company name changes",
      "Amendments to company objects or memorandum",
    ],
  },
  {
    title: "Restructuring & complex projects",
    items: [
      "Group restructuring",
      "Pre-merger structuring",
      "Re-domiciliation (where applicable)",
      "Cross-border mergers (project-based, multi-stage)",
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

const internationalStructuringFeatures = [
  {
    title: "Group & holding structures",
    items: [
      "Group and holding company structuring",
      "Shareholding and ownership optimisation",
      "Profit flow and dividend planning within legal frameworks",
      "Substance and governance alignment",
      "Clear documentation and defensible rationale for all structures",
    ],
  },
  {
    title: "International incorporation & expansion",
    items: [
      "Company incorporation in Malta",
      "EU operating companies and subsidiaries",
      "Expansion planning for international operations",
      "Coordination with local advisors where required",
      "Central management of new entities within the wider group structure",
    ],
  },
  {
    title: "Banking & payments support",
    items: [
      "Introductions to EU and international banks",
      "EMI and fintech onboarding",
      "Multi-currency account setup",
      "Support for complex or previously rejected banking applications",
      "Banking support integrated with group structure and compliance",
    ],
  },
  {
    title: "Cross-border tax & compliance",
    items: [
      "International tax coordination across group entities",
      "VAT registrations and ongoing VAT compliance",
      "Payroll and employment structuring",
      "Audit coordination across group entities",
      "Holistic planning so tax, operations and reporting stay aligned",
    ],
  },
  {
    title: "Ongoing group management",
    items: [
      "Group accounting oversight",
      "Intercompany tracking and reconciliation",
      "Consolidated visibility across entities",
      "Continuous compliance monitoring",
      "Structures kept manageable, transparent, and compliant as you grow",
    ],
  },
];

const cryptoDigitalAssetsFeatures = [
  {
    title: "Crypto structuring & wealth",
    items: [
      "Review how crypto assets are currently held",
      "Assess personal, company, and group-level structuring",
      "Separate trading, investment, and operational activities",
      "Design structures for lawful tax efficiency and risk management",
      "Align crypto holdings with residence, substance, and governance requirements",
    ],
  },
  {
    title: "Crypto–fiat banking & cash-out",
    items: [
      "Assess crypto activity, transaction history, and risk profile",
      "Prepare clients for bank or EMI onboarding",
      "Support documentation, explanations, and compliance readiness",
      "Introduce suitable EU and international banks or EMIs",
      "Assist with structuring crypto to fiat conversion flows and ongoing banking support",
    ],
  },
  {
    title: "Accounting, tax & compliance",
    items: [
      "Accounting treatment of crypto assets and transactions",
      "Tax reporting aligned with applicable rules and classifications",
      "VAT considerations where applicable",
      "Audit coordination where crypto exposure exists",
      "Documentation and record keeping suitable for future review",
    ],
  },
];

const auditReadinessFeatures = [
  {
    title: "Financial records",
    items: [
      "Review of bookkeeping and accounting records",
      "Assessment of period-end adjustments and balances",
      "Identification of gaps, inconsistencies, or unsupported figures",
      "Alignment between trial balance, management accounts, and statutory formats",
      "Financial data made complete, consistent, and ready for audit review",
    ],
  },
  {
    title: "Documentation & evidence",
    items: [
      "Review of supporting documentation for key balances",
      "Structuring of audit-ready document files",
      "Mapping of evidence to financial statement line items",
      "Identification of missing or weak support",
      "Reduced time spent responding to audit queries and follow‑ups",
    ],
  },
  {
    title: "Corporate & compliance alignment",
    items: [
      "Review of statutory and corporate records",
      "Alignment of share capital, ownership, and governance documentation",
      "Confirmation of consistency between corporate records and financial statements",
      "Compliance readiness checks where applicable",
      "Early resolution of common corporate vs financial misalignments",
    ],
  },
  {
    title: "Internal controls & process",
    items: [
      "High-level review of accounting and approval processes",
      "Identification of control gaps affecting audit risk",
      "Practical recommendations to strengthen documentation and approval trails",
      "Focus on changes that reduce audit issues, not theoretical controls",
    ],
  },
  {
    title: "Pre-audit issue resolution",
    items: [
      "Identification of potential audit findings in advance",
      "Support in resolving issues before audit fieldwork",
      "Coordination with management on corrective actions",
      "Documentation of resolutions for audit reference",
    ],
  },
];

const groupConsolidationFeatures = [
  {
    title: "Group structure & reporting",
    items: [
      "Review of group structure and entity relationships",
      "Definition of group reporting requirements",
      "Alignment of accounting policies across entities",
      "Establishment of consolidation methodology",
      "Consistent, repeatable approach to group reporting",
    ],
  },
  {
    title: "Intercompany accounting",
    items: [
      "Identification of intercompany transactions and balances",
      "Coordination of intercompany agreements and flows",
      "Reconciliation of intercompany balances across entities",
      "Resolution of mismatches and inconsistencies",
      "Clear intercompany tracking to support audits and lenders",
    ],
  },
  {
    title: "Group consolidation",
    items: [
      "Preparation of consolidated financial information",
      "Elimination of intercompany balances and transactions",
      "Consolidation across multiple currencies where applicable",
      "Support for group management reporting",
      "Consolidation outputs aligned with underlying entity data",
    ],
  },
  {
    title: "Ongoing group oversight",
    items: [
      "Periodic group-level review of entity reporting",
      "Monitoring of changes affecting consolidation",
      "Coordination with local accounting teams or advisors",
      "Continuous improvement of group reporting processes",
    ],
  },
];

const bankingPaymentsFeatures = [
  {
    title: "Banking readiness",
    items: [
      "Review of business activity, structure, and risk profile",
      "Assessment of banking challenges or prior rejections",
      "Identification of suitable banking or payment routes",
      "Alignment of business model with banking expectations",
      "Realistic positioning before any applications are made",
    ],
  },
  {
    title: "Bank & EMI introductions",
    items: [
      "Introductions to EU and international banks",
      "Introductions to electronic money institutions and fintech providers",
      "Coordination of onboarding processes",
      "Support throughout the application lifecycle",
      "Introductions based on suitability and jurisdiction (approvals remain at bank discretion)",
    ],
  },
  {
    title: "Documentation & compliance",
    items: [
      "Preparation of KYC and onboarding documentation",
      "Coordination of business explanations and supporting narratives",
      "Alignment of corporate, accounting, and tax documentation",
      "Support for responding to follow-up queries from institutions",
      "Well‑prepared documentation to improve onboarding efficiency",
    ],
  },
  {
    title: "Payment flows & operations",
    items: [
      "Structuring of incoming and outgoing payment flows",
      "Support for multi-currency account setups",
      "Coordination of payment processing solutions",
      "Ongoing support for operational banking requirements",
    ],
  },
  {
    title: "Banking compliance support",
    items: [
      "Support with periodic bank reviews and updates",
      "Coordination of information requests",
      "Assistance with changes to activity or structure",
      "Ongoing documentation maintenance to reduce account risk",
    ],
  },
];

const corporateTransactionsFeatures = [
  {
    title: "Ownership & shareholding",
    items: [
      "Share transfers between individuals or entities",
      "Changes to ownership percentages",
      "Entry or exit of shareholders",
      "Capital increases, reductions, and reclassifications",
      "All ownership changes documented, filed, and aligned with records",
    ],
  },
  {
    title: "Corporate changes & amendments",
    items: [
      "Director appointments and resignations",
      "Changes to company name or registered details",
      "Amendments to company objects or memorandum",
      "Updates to governance and control structures",
      "Consistency maintained across statutory, accounting, and compliance records",
    ],
  },
  {
    title: "Restructuring & strategic transactions",
    items: [
      "Group restructurings",
      "Pre-transaction structuring support",
      "Preparation for mergers, acquisitions, or disposals",
      "Cross-border transaction coordination",
      "Coordination alongside external legal and tax advisors where required",
    ],
  },
  {
    title: "Transaction coordination",
    items: [
      "Preparation and review of corporate documentation",
      "Coordination of filings with authorities",
      "Liaison with advisors, shareholders, and counterparties",
      "Tracking of transaction milestones and completion steps",
      "Efficient, well‑documented transaction execution",
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
          Accounting &amp; Finance services cover the ongoing financial management of your business,
          from day-to-day bookkeeping to senior financial oversight.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI delivers structured accounting, reporting, and CFO support to provide accuracy,
          visibility, and informed decision-making.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are fully managed by VACEI and delivered through your client portal.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Operating companies requiring ongoing bookkeeping and accounting</li>
          <li>Growing businesses needing structured financial reporting</li>
          <li>Management teams seeking visibility over performance and cash flow</li>
          <li>Businesses requiring CFO-level oversight without a full-time hire</li>
          <li>Companies preparing for audit, funding, or expansion</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Your accounting and finance work is handled by a dedicated VACEI team.
          We set up systems, manage postings and reviews, prepare reports, and ensure
          consistency across financial data.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          CFO support is integrated with your accounting and compliance setup to ensure continuity and clarity.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Upload invoices, receipts, and bank statements</li>
          <li>Track accounting tasks and reporting timelines</li>
          <li>Communicate directly with your VACEI team</li>
          <li>Access financial reports and supporting documents</li>
          <li>Schedule calls when needed</li>
        </ul>
        <p className="mb-6 text-gray leading-[26px]">
          All financial activity is visible and traceable in one place.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a tailored quote based on your business size and finance requirements.
        </p>
        <p className="text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in Accounting & Finance",
      subtitle: "Request a tailored quote based on your accounting, reporting, and CFO needs.",
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
          Corporate Services cover the ongoing statutory administration of a Malta company.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI acts as your corporate services provider, ensuring your company remains properly
          maintained, compliant, and supported throughout the year.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are delivered by VACEI and coordinated through a structured system and client portal.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Malta companies requiring a registered office and statutory support</li>
          <li>Businesses that want ongoing corporate compliance handled reliably</li>
          <li>Companies needing director, secretary, shareholder, and UBO administration</li>
          <li>Groups that require substance and documentation readiness for banks, auditors, or regulators</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-6 text-gray leading-[26px]">
          Your corporate administration is handled by a dedicated VACEI team.
          We prepare documentation, coordinate statutory filings, maintain required registers, and track
          recurring obligations to ensure everything remains current and documented.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Submit corporate documents and information securely</li>
          <li>Track filing status and upcoming obligations</li>
          <li>Access statutory records and confirmations</li>
          <li>Communicate directly with your VACEI team</li>
          <li>Keep a complete traceable record of corporate actions and filings</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a tailored quote based on the level of corporate administration required.
        </p>
        <p className="mb-2 text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
        <p className="text-xs text-gray mt-2">
          Related services:{" "}
          <a href="/services/company-structure-corporate-changes" className="underline hover:text-primary-blue">
            Company Structure &amp; Corporate Changes
          </a>{" "}
          ·{" "}
          <a href="/services/liquidation-wind-down" className="underline hover:text-primary-blue">
            Liquidation &amp; Wind-Down
          </a>
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in Corporate & CSP Services",
      subtitle: "Request a tailored quote based on the level of corporate administration required.",
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
          Regulated &amp; Licensing services support businesses that operate in regulated environments or require formal
          authorisations.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages licence applications, renewals, and ongoing regulatory compliance, coordinating submissions and
          correspondence with authorities.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are delivered by VACEI through structured workflows.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Businesses requiring regulatory licences</li>
          <li>Companies operating under ongoing regulatory obligations</li>
          <li>Businesses undergoing licence applications, renewals, or variations</li>
          <li>Management teams seeking clarity and control in regulated environments</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          What We Cover
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>MGA licence applications and ongoing support</li>
          <li>Other regulated licence applications</li>
          <li>Licence renewals and variations</li>
          <li>Ongoing regulatory compliance support</li>
          <li>Authority correspondence and submissions</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-6 text-gray leading-[26px]">
          Regulated work is handled by a dedicated VACEI team with experience in licensing and compliance processes.
          We prepare documentation, manage submissions, track deadlines, and liaise with authorities where required.
          All work follows a structured process to ensure accuracy, consistency, and traceability.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Submit regulatory documentation and information</li>
          <li>Track application and renewal status</li>
          <li>View correspondence and submissions</li>
          <li>Communicate directly with your VACEI team</li>
          <li>Monitor regulatory deadlines and compliance actions</li>
        </ul>
        <p className="mb-6 text-gray leading-[26px]">
          All regulated activity is recorded and accessible in one place.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a quote based on your licensing and regulatory requirements.
        </p>
        <p className="text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
      </>
    ),
    featuresSection: {
      title: "Regulated & licensing support",
      subtitle: "Request a quote based on your licensing and regulatory requirements.",
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
          Advisory &amp; Growth services support businesses beyond day-to-day compliance.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI provides structured, practical support to help businesses plan, grow, and navigate complex decisions,
          with financial and regulatory considerations aligned.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are delivered alongside your core accounting, tax, corporate, and audit work to ensure
          consistency and continuity.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Growing businesses planning expansion or restructuring</li>
          <li>Companies preparing for funding, investment, or banking</li>
          <li>Management teams requiring structured planning and financial clarity</li>
          <li>Businesses entering new markets or regulated environments</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Advisory work is delivered by experienced VACEI professionals with an understanding of both operational and
          regulatory considerations.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          Advice is practical, structured, and aligned with your existing financial and compliance setup.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          Engagements are defined clearly, with agreed scope, deliverables, and timelines.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-1 text-gray leading-[26px]">
          <li>Share planning documents and financial information</li>
          <li>Review advisory outputs and recommendations</li>
          <li>Communicate directly with your VACEI team</li>
          <li>Track advisory tasks and follow-ups</li>
          <li>Access related reports and supporting documentation</li>
        </ul>
        <p className="mb-6 text-gray leading-[26px]">
          All advisory activity is organised and accessible in one place.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a quote or discuss advisory and growth support for your business.
        </p>
        <p className="text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
      </>
    ),
    featuresSection: {
      title: "Advisory & growth services",
      subtitle: "Request a quote or discuss advisory and growth support for your business.",
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
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Company Structure &amp; Corporate Changes cover non-recurring, event-based changes to a company’s
          legal and ownership structure.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages these changes as defined projects, preparing documentation, coordinating filings,
          and ensuring compliance with applicable requirements.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are provided separately from ongoing Corporate (CSP) Services.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray leading-[26px]">
          <li>Companies changing ownership or shareholding structure</li>
          <li>Businesses restructuring or reorganising group entities</li>
          <li>Companies making material corporate changes</li>
          <li>Groups undertaking cross-border or complex structural projects</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-6 text-gray leading-[26px]">
          Each corporate change is handled as a defined engagement. VACEI prepares required documentation,
          coordinates MBR filings and authority submissions, liaises with relevant parties where needed,
          and tracks completion against agreed milestones.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray leading-[26px]">
          <li>Submit instructions and supporting documents</li>
          <li>Review and approve documentation</li>
          <li>Track progress and filing status</li>
          <li>Access completed filings and confirmations</li>
          <li>Communicate directly with the assigned team</li>
        </ul>
        <p className="mb-6 text-gray leading-[26px]">
          All actions and outcomes are recorded in one place.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a quote based on the specific corporate change or project.
        </p>
        <p className="text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in Company Structure & Corporate Changes",
      subtitle: "Request a quote based on the specific corporate change or project.",
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
          What It Is
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Liquidation &amp; Wind-Down services support companies that are closing, restructuring, or no longer operating.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          VACEI manages the process from planning through execution, ensuring statutory requirements are met and filings are
          completed correctly. These services are provided on a project basis.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Who It’s For
        </h3>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray leading-[26px]">
          <li>Companies that have ceased or plan to cease operations</li>
          <li>Dormant or inactive companies</li>
          <li>Businesses requiring a formal liquidation process</li>
          <li>Groups restructuring or exiting specific entities</li>
        </ul>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How VACEI Delivers It
        </h3>
        <p className="mb-6 text-gray leading-[26px]">
          Each wind-down or liquidation is managed as a defined engagement. VACEI prepares documentation, coordinates statutory
          filings, tracks deadlines, and ensures all steps are completed in line with applicable requirements.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          How the Client Portal Is Used
        </h3>
        <p className="mb-3 text-gray leading-[26px]">
          Through the client portal, you can:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray leading-[26px]">
          <li>Submit required information and documentation</li>
          <li>Review and approve filings</li>
          <li>Track progress and key milestones</li>
          <li>Access confirmations and closing documentation</li>
          <li>Communicate directly with the assigned team</li>
        </ul>
        <p className="mb-6 text-gray leading-[26px]">
          All activity is recorded and traceable in one place.
        </p>

        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Get Started
        </h3>
        <p className="mb-2 text-gray leading-[26px]">
          Request a quote based on the type of liquidation or wind-down required.
        </p>
        <p className="text-primary-blue font-medium text-sm">
          Get Instant Quote →
        </p>
      </>
    ),
    featuresSection: {
      title: "Complete liquidation and wind-down services",
      subtitle: "Request a quote based on the type of liquidation or wind-down required",
      features: liquidationFeatures,
    },
  },
  {
    id: "international-business-structuring-expansion",
    slug: "international-business-structuring-expansion",
    title: "International Business Structuring & Expansion",
    breadcrumbs: [
      { label: "Services" },
      { label: "International Business Structuring & Expansion" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Structured. Compliant. Tax-Efficient.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Expanding internationally requires more than company formations and bank accounts.
          It requires a well-designed, compliant structure that supports business growth,
          enables lawful tax efficiency, and remains manageable over time.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI helps businesses design, implement, and manage international structures that
          are commercially sound, tax-efficient, and fully compliant. All services are coordinated
          through one integrated digital platform, giving you visibility and control across jurisdictions.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          International structuring is about aligning business operations, taxation, governance, and
          compliance across jurisdictions in a way that is efficient, sustainable, and defensible.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Lawful tax efficiency, not aggressive planning</li>
          <li>Substance-driven structures aligned with real operations</li>
          <li>Long-term compliance, not short-term fixes</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          We act as your central coordinator, ensuring that structure, banking, accounting, tax, audit,
          and corporate services work together under one controlled framework.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports this service
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          International structures become inefficient when information is fragmented across advisors,
          emails, and jurisdictions. The VACEI portal provides a single point of control for your entire
          international structure:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Group-wide entity dashboard</li>
          <li>Centralised document library</li>
          <li>Automated compliance calendar across jurisdictions</li>
          <li>Clear status tracking for each entity and service</li>
          <li>Secure communication with VACEI and approved partners</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          You provide information once. We coordinate everything else.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Initial structuring review – we assess your current setup, operations, and growth plans.</li>
          <li>Structure design – a compliant, tax-efficient structure is proposed and explained clearly.</li>
          <li>Implementation and banking – we coordinate incorporations, banking, registrations, and portal setup.</li>
          <li>Ongoing management – accounting, tax, audit, and compliance are managed through the portal.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>International founders and business owners</li>
          <li>Groups seeking lawful tax efficiency</li>
          <li>Businesses expanding into the EU or internationally</li>
          <li>Companies facing international banking challenges</li>
          <li>Businesses managing multiple advisors and jurisdictions</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why businesses choose VACEI
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Structures designed for tax efficiency and compliance</li>
          <li>Strong international banking relationships</li>
          <li>One firm coordinating all moving parts</li>
          <li>Clear accountability and responsibility</li>
          <li>Full visibility through one digital platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Build a compliant, tax-efficient structure supported by strong international banking relationships
          and managed through one secure portal.
        </p>
      </>
    ),
    featuresSection: {
      title: "Our international structuring services",
      subtitle: "Discuss your international structure or request a quote through one controlled portal.",
      features: internationalStructuringFeatures,
    },
    primaryCtaText: "Discuss My International Structure",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
  {
    id: "crypto-digital-assets",
    slug: "crypto-digital-assets",
    title: "Crypto & Digital Assets",
    breadcrumbs: [
      { label: "Services" },
      { label: "Crypto & Digital Assets" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Structured. Compliant. Bankable.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Holding or transacting in crypto assets introduces complexity across tax, banking, compliance,
          and risk management. Without proper structure, crypto activity can quickly become unmanageable,
          unbankable, or non-compliant.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI supports individuals and businesses with crypto exposure by designing compliant structures,
          coordinating banking and reporting, and ensuring that crypto activity aligns with regulatory, tax,
          and operational requirements. All services are coordinated through one structured digital platform,
          providing visibility and control without unnecessary risk.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Crypto and digital asset services focus on aligning crypto holdings and activity with lawful tax
          structuring, banking access, and compliance requirements.
        </p>
        <p className="mb-3 text-gray leading-[26px]">
          VACEI does not promote aggressive planning or regulatory arbitrage. Our focus is on:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Lawful tax efficiency</li>
          <li>Clear separation of activities and risk</li>
          <li>Substance and documentation aligned with real activity</li>
          <li>Bankable and defensible structures</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          We act as a central coordinator, ensuring that structuring, banking, accounting, tax, and compliance
          considerations are addressed together rather than in isolation.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports this service
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Crypto structures become risky when records, wallets, advisors, and explanations are fragmented.
          The VACEI portal provides a controlled environment for managing crypto-related activity:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Centralised documentation and explanations</li>
          <li>Structured record keeping for compliance and banking reviews</li>
          <li>Clear separation between entities and activities</li>
          <li>Secure communication with VACEI and approved partners</li>
          <li>Visibility over tasks, requests, and status</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          Information is collected once and managed centrally to reduce friction and repetition.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Initial crypto review – we assess holdings, activity, transaction patterns, and objectives.</li>
          <li>Structuring and positioning – a compliant structure is proposed and explained clearly.</li>
          <li>Banking and compliance preparation – onboarding preparation, documentation, and introductions.</li>
          <li>Ongoing coordination – accounting, tax, and compliance support managed through the portal.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Individuals with significant crypto exposure</li>
          <li>Founders and entrepreneurs operating in crypto-adjacent businesses</li>
          <li>Companies receiving or holding crypto assets</li>
          <li>Groups requiring bankable and compliant crypto structures</li>
          <li>Clients facing banking or compliance challenges linked to crypto activity</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why clients choose VACEI for crypto and digital assets
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Lawful and defensible structuring approach</li>
          <li>Strong understanding of banking and compliance expectations</li>
          <li>Central coordination across tax, banking, and reporting</li>
          <li>Clear documentation and audit readiness</li>
          <li>Full visibility through one secure platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Design a compliant, bankable crypto structure supported by experienced professionals and managed through one secure portal.
        </p>
      </>
    ),
    featuresSection: {
      title: "Crypto & digital asset structuring services",
      subtitle: "Discuss your crypto structure or request a quote using the same secure process.",
      features: cryptoDigitalAssetsFeatures,
    },
    primaryCtaText: "Discuss My Crypto Structure",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
  {
    id: "audit-readiness",
    slug: "audit-readiness",
    title: "Audit Readiness",
    breadcrumbs: [
      { label: "Services" },
      { label: "Audit Readiness" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872609.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Prepared. Structured. Defensible.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Audit issues rarely start during the audit. They usually arise months earlier through incomplete records,
          unclear documentation, weak controls, or misalignment between accounting, tax, and corporate information.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI Audit Readiness services prepare businesses for audit well before the audit process begins,
          ensuring records, documentation, and processes are structured, complete, and defensible. All preparation
          is coordinated through one secure digital platform, giving full visibility and control.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-4 text-gray leading-[26px]">
          Audit readiness is the structured preparation of a company’s financial, corporate, and compliance records
          to ensure a smooth, efficient, and low-risk audit process. VACEI focuses on:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Reducing audit disruption and delays</li>
          <li>Identifying issues before auditors do</li>
          <li>Improving documentation quality and consistency</li>
          <li>Ensuring alignment across accounting, tax, and corporate records</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          Audit readiness is not an audit. It is a preparation and coordination service designed to support successful audit outcomes.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports audit readiness
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Audit preparation becomes inefficient when documents and explanations are scattered across emails and folders.
          The VACEI portal provides a structured environment for audit readiness:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Centralised document library</li>
          <li>Structured task lists and preparation requests</li>
          <li>Clear tracking of outstanding and completed items</li>
          <li>Secure communication with the VACEI team</li>
          <li>Full audit trail of preparation activity</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          All preparation work is visible, traceable, and organised in one place.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Readiness assessment – we assess the current state of records and documentation.</li>
          <li>Gap identification – key gaps and risks are identified and prioritised based on audit impact.</li>
          <li>Preparation and remediation – we support the preparation of records, documentation, and explanations.</li>
          <li>Audit handover support – records are structured and ready for efficient handover to auditors.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Companies approaching their first audit</li>
          <li>Businesses with recurring audit delays or issues</li>
          <li>Groups preparing for statutory or group audits</li>
          <li>Companies undergoing restructuring or growth</li>
          <li>Management teams seeking smoother audit processes</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why businesses choose VACEI for audit readiness
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Reduced audit disruption and delays</li>
          <li>Early identification of issues and risks</li>
          <li>Clear, structured preparation approach</li>
          <li>Coordination across accounting, tax, and corporate records</li>
          <li>Full visibility through one secure platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Prepare your records, documentation, and processes in advance and reduce audit risk, cost, and disruption.
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in audit readiness",
      subtitle: "Prepare for audit using one structured process coordinated through the VACEI portal.",
      features: auditReadinessFeatures,
    },
    primaryCtaText: "Prepare for Audit",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
  {
    id: "group-consolidation",
    slug: "group-consolidation",
    title: "Group & Consolidation",
    breadcrumbs: [
      { label: "Services" },
      { label: "Group & Consolidation" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Clear group visibility. Consistent reporting.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Managing a group of companies across jurisdictions introduces complexity in accounting, reporting,
          intercompany activity, and compliance. Without proper structure, group information becomes fragmented,
          inconsistent, and difficult to rely on.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI Group & Consolidation services provide structured oversight and coordination across group entities,
          ensuring accurate consolidation, clear reporting, and ongoing compliance alignment. All group activity is
          managed through one secure digital platform, giving management full visibility across the group.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-4 text-gray leading-[26px]">
          Group & Consolidation services focus on coordinating accounting, reporting, and compliance across multiple
          entities within a group. VACEI does not replace entity-level accounting or statutory audit work. Instead,
          we provide group-level structure, oversight, and consolidation to ensure information is consistent,
          reliable, and usable for management, banking, and audit purposes.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          Our focus is on:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Accurate group-level reporting</li>
          <li>Clear intercompany alignment</li>
          <li>Consistent accounting policies across entities</li>
          <li>Defensible consolidation outputs</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports this service
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Group reporting becomes unmanageable when data and communication are spread across entities, advisors,
          and jurisdictions. The VACEI portal provides a central control point for group management:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Group-wide entity overview</li>
          <li>Centralised document and reporting repository</li>
          <li>Structured intercompany tracking</li>
          <li>Clear task and deadline visibility across entities</li>
          <li>Secure communication with VACEI and group stakeholders</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          Group information is collected, reviewed, and managed in one place.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Group assessment – we review the group structure, entities, requirements, and current challenges.</li>
          <li>Framework setup – a group reporting and consolidation framework is defined and implemented.</li>
          <li>Consolidation preparation – intercompany activity is aligned and consolidated reporting prepared.</li>
          <li>Ongoing coordination – group oversight and consolidation support continue on a recurring basis.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Groups with multiple operating entities</li>
          <li>International groups with cross-border activity</li>
          <li>Businesses requiring consolidated reporting for management or banks</li>
          <li>Groups preparing for audit, funding, or restructuring</li>
          <li>Management teams seeking clear group-level visibility</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why businesses choose VACEI for group and consolidation support
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Clear and consistent group reporting</li>
          <li>Strong intercompany control and reconciliation</li>
          <li>Structured consolidation methodology</li>
          <li>Coordination across entities and advisors</li>
          <li>Full visibility through one secure platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Bring structure and visibility to your group reporting and consolidation through one controlled digital platform.
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in group & consolidation",
      subtitle: "Discuss group reporting or request a quote for group-level support.",
      features: groupConsolidationFeatures,
    },
    primaryCtaText: "Discuss Group Reporting",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
  {
    id: "banking-payments-support",
    slug: "banking-payments-support",
    title: "Banking & Payments Support",
    breadcrumbs: [
      { label: "Services" },
      { label: "Banking & Payments Support" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Bankable. Documented. Structured.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Accessing and maintaining reliable banking and payment solutions has become increasingly complex,
          especially for international businesses, regulated entities, and companies with non-standard activity.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI Banking & Payments Support services help businesses prepare for banking, coordinate onboarding,
          and maintain compliance with banking and payment institutions, ensuring that financial operations
          remain functional, transparent, and defensible. All support is coordinated through one structured
          digital platform.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-4 text-gray leading-[26px]">
          Banking & Payments Support focuses on preparation, coordination, and ongoing support related to
          banking and payment services. VACEI does not approve bank accounts and does not act as a bank or
          payment institution. Our role is to prepare clients, coordinate documentation, and introduce suitable
          banking or payment options where appropriate.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          Approvals remain subject to the independent discretion of banks, EMIs, and financial institutions.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports this service
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Banking relationships fail when information is inconsistent, outdated, or fragmented.
          The VACEI portal provides a structured environment for banking coordination:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Centralised banking and compliance documentation</li>
          <li>Secure storage of KYC and onboarding materials</li>
          <li>Clear tracking of applications and requests</li>
          <li>Secure communication with VACEI and approved partners</li>
          <li>Ongoing record maintenance for future reviews</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          All banking-related information remains accessible, consistent, and traceable.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Banking assessment – we review your business, structure, and banking needs.</li>
          <li>Preparation and positioning – documentation and explanations are prepared and aligned.</li>
          <li>Introductions and onboarding – we coordinate introductions and support the onboarding process.</li>
          <li>Ongoing support – we assist with ongoing banking compliance and operational needs.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>International businesses and groups</li>
          <li>Companies expanding into new jurisdictions</li>
          <li>Businesses facing banking rejections or restrictions</li>
          <li>Regulated or higher-risk activity businesses</li>
          <li>Companies requiring multi-currency or complex payment solutions</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why businesses choose VACEI for banking and payments support
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Realistic and compliant banking positioning</li>
          <li>Strong understanding of banking expectations</li>
          <li>Structured documentation and preparation</li>
          <li>Coordination across corporate, tax, and accounting records</li>
          <li>Full visibility through one secure platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Prepare your business for reliable banking and payment operations with structured support and clear coordination.
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in banking & payments support",
      subtitle: "Discuss banking support or request a quote using one structured process.",
      features: bankingPaymentsFeatures,
    },
    primaryCtaText: "Discuss Banking Support",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
  {
    id: "corporate-transactions",
    slug: "corporate-transactions",
    title: "Corporate Transactions",
    breadcrumbs: [
      { label: "Services" },
      { label: "Corporate Transactions" },
    ],
    image: "/assets/images/placeholder.png",
    portalImage: "/assets/images/Frame 1618872799.png",
    portalVariant: "default",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          Structured execution. Clear documentation.
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Corporate transactions introduce legal, financial, and compliance complexity that requires careful coordination.
          Whether a business is undergoing ownership changes, restructuring, or a strategic transaction, errors or misalignment
          can create long-term risk.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI Corporate Transactions services support businesses through defined, non-recurring corporate events, ensuring
          documentation, filings, and coordination are handled accurately and efficiently. All transaction-related activity
          is managed through one secure digital platform, providing visibility and control throughout the process.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          What this service is
        </h4>
        <p className="mb-4 text-gray leading-[26px]">
          Corporate Transactions services cover specific, event-based changes to a company’s structure, ownership, or corporate position.
          These engagements are handled as defined projects rather than ongoing administration. VACEI coordinates documentation,
          filings, and stakeholder inputs to ensure transactions are executed correctly and in line with applicable legal and regulatory requirements.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          This service is separate from ongoing Corporate and CSP Services.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How the VACEI portal supports this service
        </h4>
        <p className="mb-3 text-gray leading-[26px]">
          Corporate transactions involve multiple documents, approvals, and stakeholders. The VACEI portal provides a structured
          environment for transaction execution:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Centralised transaction documentation</li>
          <li>Secure approval and review workflows</li>
          <li>Clear tracking of outstanding and completed actions</li>
          <li>Secure communication with the VACEI team</li>
          <li>Complete audit trail of transaction activity</li>
        </ul>
        <p className="mb-4 text-gray leading-[26px]">
          All documentation and actions are recorded and accessible in one place.
        </p>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          How it works
        </h4>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Transaction assessment – we review the proposed transaction, scope, and requirements.</li>
          <li>Planning and coordination – a clear execution plan and documentation checklist are defined.</li>
          <li>Execution and filings – documentation is prepared, reviewed, and filed as required.</li>
          <li>Completion and handover – final confirmations are issued and records updated.</li>
        </ol>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Who this service is for
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Businesses undergoing ownership or structural changes</li>
          <li>Groups executing restructurings or strategic transactions</li>
          <li>Companies preparing for investment, sale, or reorganisation</li>
          <li>Shareholders requiring structured transaction support</li>
          <li>Businesses managing complex or multi-party transactions</li>
        </ul>
        <h4 className="text-sm font-semibold text-heading uppercase tracking-wide mb-2 mt-6">
          Why businesses choose VACEI for corporate transactions
        </h4>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-gray leading-[26px]">
          <li>Clear and structured transaction execution</li>
          <li>Accurate documentation and filings</li>
          <li>Coordination across corporate, accounting, and compliance records</li>
          <li>Reduced execution risk</li>
          <li>Full visibility through one secure platform</li>
        </ul>
        <p className="mt-4 text-gray leading-[26px]">
          Manage complex corporate transactions through a structured, transparent process supported by experienced professionals.
        </p>
      </>
    ),
    featuresSection: {
      title: "What we cover in corporate transactions",
      subtitle: "Discuss a corporate transaction or request a quote for a defined project.",
      features: corporateTransactionsFeatures,
    },
    primaryCtaText: "Discuss a Corporate Transaction",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Request a Quote",
    secondaryCtaHref: "/quote",
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};
