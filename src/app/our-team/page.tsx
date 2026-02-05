import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import TeamGrid from "@/components/our-team/TeamGrid";
import ValuesSection from "@/components/our-team/ValuesSection";

export const metadata: Metadata = {
  title: "Our Team | VACEI",
  description: "Meet the experts behind VACEI. Our diverse team is dedicated to simplifying your business journey with professional accounting, audit, and corporate services.",
};

const OurTeamPage = () => {
  return (
    <main>
        <PageHeader 
            title="Our Team" 
            breadcrumbs={[
                { label: "Our Team" },
            ]} 
        />
        <TeamGrid />
        <ValuesSection />
    </main>
  );
};

export default OurTeamPage;
