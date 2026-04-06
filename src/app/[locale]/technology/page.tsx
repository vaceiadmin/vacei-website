"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import TechnologyOverview from "@/components/technology/TechnologyOverview";
import TechnologyComponent from "@/components/technology/TechnologyComponent";
import TechnologyRegulated from "@/components/technology/TechnologyRegulated";
import PortalFeature from "@/components/services/PortalFeature";
import { FadeInUp } from "@/components/common/Animations";
import { usePagesTranslation } from "@/hooks/usePagesTranslation";

const TechnologyPage = () => {
  const { t } = usePagesTranslation("technology");

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader title={t("pageHeader.title")} breadcrumbs={[{ label: t("pageHeader.breadcrumbs.0.label") }]} />
      </div>

      <FadeInUp>
        <TechnologyOverview />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <PortalFeature
          variant="technology"
          portalImage="/assets/images/Frame 1618872736.png"
          sectionLabel={t("portalFeature.sectionLabel")}
          heading={t("portalFeature.heading")}
          description={t("portalFeature.description")}
          bulletIntro={t("portalFeature.bulletIntro")}
          bulletItems={[
            t("portalFeature.bulletItems.0"),
            t("portalFeature.bulletItems.1"),
            t("portalFeature.bulletItems.2"),
            t("portalFeature.bulletItems.3"),
          ]}
          closingText={t("portalFeature.closingText")}
          bottomTitle={t("portalFeature.bottomTitle")}
          bottomDescription={t("portalFeature.bottomDescription")}
          quoteText={t("portalFeature.quoteText")}
        />
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <TechnologyComponent />
      </FadeInUp>
      <FadeInUp delay={0.6}>
        <TechnologyRegulated />
      </FadeInUp>
    </main>
  );
};

export default TechnologyPage;
