import { ReactNode } from "react";

export interface ServiceData {
  id: string; // The specific ID/Key for the service
  slug: string; // URL slug
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  description?: ReactNode; // Rich content for the description
  image: string; // Path to the image
  portalImage?: string; // Image for the Portal Feature section (optional)
  featuresSection?: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      items: string[];
    }[];
  };
}

const commonFeatureItems = [
  "Operating companies that need ongoing bookkeeping and accounting",
  "Growing businesses that require structured financial reporting",
  "Management teams that need visibility over performance and cash flow",
  "Businesses preparing for audit, investment or expansion",
];

const createFeatures = () =>
  Array(4).fill({
    title: "Who It's For",
    items: commonFeatureItems,
  });

export const servicesData: ServiceData[] = [
  {
    id: "accounting-finance",
    slug: "accounting-finance",
    title: "Accounting & Finance",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Accounting & Finance" },
    ],
    image: "/assets/images/Frame 1618872606.png",
    description: (
      <>
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
          client portal.
        </p>
      </>
    ),
    featuresSection: {
      title: "All activity is visible and traceable in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "tax-compliance",
    slug: "tax-compliance",
    title: "Tax & Compliance",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Tax & Compliance" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
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
          client portal.
        </p>
      </>
    ),
    featuresSection: {
      title: "All compliance is visible and organized in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "audit-assurance",
    slug: "audit-assurance",
    title: "Audit & Assurance",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Audit & Assurance" },
    ],
    image: "/assets/images/Frame 1618872609.png",
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
          workflows through the platform.
        </p>
      </>
    ),
    featuresSection: {
      title: "All audit activity is organized and traceable in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "corporate-csp-services",
    slug: "corporate-csp-services",
    title: "Corporate & CSP Services",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Corporate & CSP Services" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
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
          structured system.
        </p>
      </>
    ),
    featuresSection: {
      title: "All corporate activity is recorded and accessible in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "regulated-licensing",
    slug: "regulated-licensing",
    title: "Regulated & Licensing",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Regulated & Licensing" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
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
          workflows.
        </p>
      </>
    ),
    featuresSection: {
      title: "All regulated activity is recorded and accessible in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "advisory-growth",
    slug: "advisory-growth",
    title: "Advisory & Growth",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Advisory & Growth" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
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
          and audit work.
        </p>
      </>
    ),
    featuresSection: {
      title: "All advisory activity is organized and accessible in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "company-structure-corporate-changes",
    slug: "company-structure-corporate-changes",
    title: "Company Structure & Corporate Changes",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Company Structure & Corporate Changes" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Frame 1618872799.png",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          {" "}
          What It Is{" "}
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Company Structure and Corporate Changes cover non - recurring, event -
          based changes to a company’s legal and ownership structure.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages these changes as defined projects, preparing
          documentation, coordinating filings, and ensuring compliance with
          applicable requirements.
        </p>
        <p className="mb-6 text-gray leading-[26px]">
          These services are provided separately from ongoing Corporate(CSP)
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
            Groups undertaking cross - border or complex structural
            projects{" "}
          </li>
        </ul>
      </>
    ),
    featuresSection: {
      title: "All advisory activity is organized and accessible in one place",
      subtitle: "Request a clear quote based on your business",
      features: createFeatures(),
    },
  },
  {
    id: "liquidation-wind-down",
    slug: "liquidation-wind-down",
    title: "Liquidation & Wind-Down",
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: "Liquidation & Wind-Down" },
    ],
    image: "/assets/images/placeholder.png", // Placeholder
    portalImage: "/assets/images/Liquidation Dashboard.png",
    description: (
      <>
        <h3 className="text-sm font-semibold text-heading uppercase tracking-wide mb-3">
          {" "}
          What It Is{" "}
        </h3>
        <p className="mb-4 text-gray leading-[26px]">
          Liquidation and Wind - Down services support companies that are
          closing, restructuring, or no longer operating.
        </p>
        <p className="mb-4 text-gray leading-[26px]">
          VACEI manages the process from planning through execution, ensuring
          statutory requirements are met and filings are completed
          correctly.These services are provided on a project basis.
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
      title: "What We Cover",
      subtitle:
        "Request a quote based on the type of liquadation or wind-down required.",
      features: createFeatures(),
    },
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};
