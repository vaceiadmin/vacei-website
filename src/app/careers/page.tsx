import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import ContactHRForm from "@/components/careers/ContactHRForm";
import BenefitsSection from "@/components/careers/BenefitsSection";

export const metadata: Metadata = {
  title: "Careers | VACEI",
  description: "Join the VACEI team. Explore exciting career opportunities in accounting, audit, tax, and technology.",
};

const CareersPage = () => {
  return (
    <main>
        <PageHeader 
            title="Careers" 
            breadcrumbs={[
                { label: "Careers" },
            ]} 
        />
        <BenefitsSection />
        <ContactHRForm />
    </main>
  );
};

export default CareersPage;
