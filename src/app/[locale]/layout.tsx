import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageTransition from "@/components/common/PageTransition";
import { SmoothScroll } from "@/components/common/SmoothScroll";
// import IntroAnimationGate from "@/components/common/IntroAnimationGate";
import MainGifLoaderGate from "@/components/common/MainGifLoaderGate";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import CookieConsentBanner from "@/components/common/CookieConsentBanner";
import SupportChat from "@/components/support-chat/SupportChat";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { ReduceMotionProvider } from "@/contexts/ReduceMotionContext";
import { ScrollProvider } from "@/contexts/ScrollContext";
import { TopLoader } from "@/components/common/TopLoader";
// import CustomCursor from "@/components/common/CustomCursor";
import { Suspense } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { isLocale, locales, type Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  title: "Vacei | Accounting, Audit & Corporate Services Platform",
  description:
    "VACEI is a structured digital platform for accounting, audit, legal and corporate services. Get a dedicated team, full visibility, and one place for documents, deadlines, and communication.",
  icons: {
    icon: "/favicon.png",
  },
};


export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: loc } = await params;
  if (!isLocale(loc)) {
    notFound();
  }
  const locale = loc as Locale;

  return (
    <LocaleProvider locale={locale}>
      <I18nProvider locale={locale}>
        <Suspense fallback={null}>
          <TopLoader />
        </Suspense>
        <ReduceMotionProvider>
          <ScrollProvider>
            {/* <IntroAnimationGate /> */}
            <MainGifLoaderGate>
              <SmoothScroll>
                <Navbar />
                <PageTransition>{children}</PageTransition>
                <Footer />
                <ScrollToTopButton />
                <SupportChat />
                <LanguageSwitcher />
                {/* <CustomCursor /> */}
                <CookieConsentBanner />
              </SmoothScroll>
            </MainGifLoaderGate>
          </ScrollProvider>
        </ReduceMotionProvider>
      </I18nProvider>
    </LocaleProvider>
  );
}
