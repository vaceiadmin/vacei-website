"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/quote/ContactForm";
import QuoteProcess from "@/components/quote/QuoteProcess";
import QuoteFormSection from "@/components/quote/QuoteFormSection";
import { FadeInUp } from "@/components/common/Animations";

const QuotePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Get a Quote"
          breadcrumbs={[{ label: "Get a Quote" }]}
        />
      </div>
      <FadeInUp>
        <ContactForm />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <QuoteProcess />
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <QuoteFormSection />
      </FadeInUp>
    </main>
  );
};

export default QuotePage;
