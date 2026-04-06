import type { Metadata } from "next";
import { Libre_Bodoni, Montserrat, Nunito } from "next/font/google";
import "@fontsource/mona-sans";
import "./globals.css";
import { headers } from "next/headers";
import { LOCALE_HEADER } from "@/lib/i18n-config";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const lang = h.get(LOCALE_HEADER) ?? "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`antialiased ${bodoni.variable} ${montserrat.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
