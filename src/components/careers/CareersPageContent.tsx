"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ContactHRForm from "@/components/careers/ContactHRForm";
import BenefitsSection from "@/components/careers/BenefitsSection";
import { usePagesTranslation } from "@/hooks/usePagesTranslation";

const CareersPageContent = () => {
  const { t } = usePagesTranslation("careers");

  return (
    <main>
      <PageHeader title={t("pageHeader.title")} breadcrumbs={[{ label: t("pageHeader.breadcrumbs.0.label") }]} />
      <BenefitsSection />
      <ContactHRForm />
    </main>
  );
};

export default CareersPageContent;
