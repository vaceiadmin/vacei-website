"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import TeamGrid from "@/components/our-team/TeamGrid";
import ValuesSection from "@/components/our-team/ValuesSection";
import { usePagesTranslation } from "@/hooks/usePagesTranslation";

const OurTeamPageContent = () => {
  const { t } = usePagesTranslation("our-team");

  return (
    <main>
      <PageHeader title={t("pageHeader.title")} breadcrumbs={[{ label: t("pageHeader.breadcrumbs.0.label") }]} />
      <TeamGrid />
      <ValuesSection />
    </main>
  );
};

export default OurTeamPageContent;
