import type { Metadata } from "next";
import "@fontsource/mona-sans";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageTransition from "@/components/common/PageTransition";

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
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
