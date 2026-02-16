/**
 * Single source of truth for service overview/card images.
 * Used by: Homepage ServicesSection, service detail page (ServiceOverview).
 * - Override map: services with custom images in /assets/images/services/
 * - Else: use image from servicesData (service.image)
 * - Else: fallback placeholder
 */

export const FALLBACK_SERVICE_IMAGE = "/assets/images/placeholder.png";

/** Service id -> image path (only for services that have a dedicated image in assets/images/services) */
export const SERVICE_IMAGE_MAP: Record<string, string> = {
  // Core recurring services
  "accounting-finance": "/assets/images/services/Accounting.jpeg",
  "tax-compliance": "/assets/images/services/tax_and_compliance.jpeg",
  "audit-assurance": "/assets/images/services/audit_and_assurance.jpeg",
  "corporate-csp-services": "/assets/images/services/Corporate&CSPServices.jpeg",

  // Project / advisory services
  "advisory-growth": "/assets/images/services/advisory_and_growth.jpeg",
  "company-structure-corporate-changes":
    "/assets/images/services/company_structure_and_corporate_changes.jpeg",
  "liquidation-wind-down": "/assets/images/services/liquidation.jpeg",
  "corporate-transactions": "/assets/images/services/corporate_transaction.jpeg",

  // Compliance / regulatory
  "regulated-licensing": "/assets/images/services/regulating_and_license.jpeg",
  "banking-payments-support":
    "/assets/images/services/banking_and_payment_support.jpeg",
};

export function getServiceImage(
  serviceId: string,
  defaultImage?: string | null
): string {
  return (
    SERVICE_IMAGE_MAP[serviceId] ||
    defaultImage ||
    FALLBACK_SERVICE_IMAGE
  );
}
