import type { Metadata } from "next";
import { Libre_Bodoni, Montserrat, Nunito } from "next/font/google";
import "@fontsource/mona-sans";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageTransition from "@/components/common/PageTransition";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import IntroAnimationGate from "@/components/common/IntroAnimationGate";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import CookieConsentBanner from "@/components/common/CookieConsentBanner";
import SupportChat from "@/components/support-chat/SupportChat";
import { ReduceMotionProvider } from "@/contexts/ReduceMotionContext";
import { ScrollProvider } from "@/contexts/ScrollContext";
import { TopLoader } from "@/components/common/TopLoader";
import CustomCursor from "@/components/common/CustomCursor";
import { Suspense } from "react";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VACEI – Accounting, Audit, Legal & Corporate Services Platform",
  description:
    "VACEI is a structured digital platform for accounting, audit, legal and corporate services. Get a dedicated team, full visibility, and one place for documents, deadlines, and communication.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${bodoni.variable} ${montserrat.variable} ${nunito.variable}`}>
        <Suspense fallback={null}>
          <TopLoader />
        </Suspense>
        <ReduceMotionProvider>
          <ScrollProvider>
            <IntroAnimationGate />
            <SmoothScroll>
              <Navbar />
              <PageTransition>{children}</PageTransition>
              <Footer />
              <ScrollToTopButton />
              <SupportChat />
              <CustomCursor />
              <CookieConsentBanner />
            </SmoothScroll>
          </ScrollProvider>
        </ReduceMotionProvider>
      </body>
    </html>
  );
}
