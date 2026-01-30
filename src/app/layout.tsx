import type { Metadata } from "next";
import "@fontsource/mona-sans";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageTransition from "@/components/common/PageTransition";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import IntroAnimation from "@/components/common/IntroAnimation";

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
      <body className="antialiased">
        <IntroAnimation />
        <SmoothScroll>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
