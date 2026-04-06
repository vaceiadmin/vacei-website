import type { Metadata } from "next";
import { locales, isLocale } from "@/lib/i18n-config";
import { getSiteUrl } from "@/lib/site-url";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: loc } = await params;
  const locale = isLocale(loc) ? loc : "en";
  const base = getSiteUrl();
  const path = "/partners-platform";
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${base}/${l}${path}`]),
  ) as Record<string, string>;

  const title = "VACEI Partner Platform | Get Clients & Manage Engagements";
  const description =
    "Join the VACEI partner platform: receive client requests, manage engagements in one workspace, transparent pricing with no commissions. Book a demo.";

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${base}/${locale}${path}`,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function PartnersPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
