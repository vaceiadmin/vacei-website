
import React from "react";
import PageHeader from "@/components/common/PageHeader";
import InsightsClient from "@/components/insights/InsightsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | VACEI",
  description:
    "Structured thinking on accounting, audit, compliance, business and professional growth.",
};

export default function InsightsPage() {
  const breadcrumbs = [{ label: "Insights" }];

  return (
    <main className="bg-background-secondary min-h-screen">
      <PageHeader
        title="Insights"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-bg/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        <InsightsClient />
      </div>
    </main>
  );
}
