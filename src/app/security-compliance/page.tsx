"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import SecurityComplianceCards from "@/components/security-compliance/SecurityComplianceCards";

const SecurityCompliancePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Security & Compliance"
          breadcrumbs={[{ label: "Security & Compliance" }]}
        />
      </div>

      <SecurityComplianceCards />
    </main>
  );
};

export default SecurityCompliancePage;
