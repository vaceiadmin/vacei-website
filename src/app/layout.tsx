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
import { TopLoader } from "@/components/common/TopLoader";
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
  title: "VACEI – Accounting, Audit & Corporate Services",
  description:
    "VACEI is a professional firm delivering accounting, audit and corporate services through one structured digital platform. Get a dedicated team, full visibility, and one place for documents, deadlines, and communication.",
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
          <IntroAnimationGate />
          <SmoothScroll>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <ScrollToTopButton />
            <SupportChat />
            <CookieConsentBanner />
          </SmoothScroll>
        </ReduceMotionProvider>
      </body>
    </html>
  );
}
