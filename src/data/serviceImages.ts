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
  "liquidation-wind-down": "/assets/images/services/liquidation.jpeg",
  "company-structure-corporate-changes":
    "/assets/images/services/company_structure_and_corporate_changes.jpeg",
  "advisory-growth": "/assets/images/services/advisory_and_growth.jpeg",
  "regulated-licensing": "/assets/images/services/regulating_and_license.jpeg",
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
