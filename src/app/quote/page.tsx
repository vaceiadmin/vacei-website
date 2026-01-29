"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/quote/ContactForm";
import QuoteProcess from "@/components/quote/QuoteProcess";
import QuoteFormSection from "@/components/quote/QuoteFormSection";
import AnimatedSection from "@/components/common/AnimatedSection";

const QuotePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Get a Quote"
          breadcrumbs={[{ label: "Get a Quote" }]}
        />
      </div>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
      <AnimatedSection delay>
        <QuoteProcess />
      </AnimatedSection>
      <AnimatedSection>
        <QuoteFormSection />
      </AnimatedSection>
    </main>
  );
};

export default QuotePage;
