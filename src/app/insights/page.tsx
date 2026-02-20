"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import InsightsClient from "@/components/insights/InsightsClient";
import { usePerformance } from "@/contexts/ReduceMotionContext";

export default function InsightsPage() {
  const { isIPhone, isLowPerformance } = usePerformance();
  const breadcrumbs = [{ label: "Insights" }];

  return (
    <main className="bg-background-secondary min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Insights"
          breadcrumbs={breadcrumbs}
        />
      </div>
      
      {/* Background decoration - Disabled on iPhone for performance */}
      {!isIPhone && !isLowPerformance && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-bg/5 rounded-full blur-[80px]" />
        </div>
      )}

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-4 max-w-[1400px]">
          <p className="text-center text-text-gray text-lg max-w-2xl mx-auto mb-4">
            Structured thinking on accounting, audit, compliance, business and professional growth.
          </p>
        </div>
        <InsightsClient />
      </div>
    </main>
  );
}
