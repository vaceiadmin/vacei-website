"use client";

import React, { useEffect } from "react";
import PageHeader from "@/components/common/PageHeader";
import ProcessStepsSection from "@/components/HomePage/ProcessStepsSection";
import QuoteProcess from "@/components/quote/QuoteProcess";
import { FadeInUp } from "@/components/common/Animations";

const QuotePage = () => {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash !== "process-steps" && hash !== "contact-form") return;
    
    // We handle both IDs for backward compatibility if needed, 
    // but the target is now process-steps
    const targetId = hash === "contact-form" ? "process-steps" : hash;
    const el = document.getElementById(targetId);
    
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <PageHeader
          title="Get a Quote"
          breadcrumbs={[{ label: "Get a Quote" }]}
        />
      </div>
      
      <div id="process-steps">
        <ProcessStepsSection />
      </div>

      <FadeInUp delay={0.2}>
        <QuoteProcess />
      </FadeInUp>
      {/* <FadeInUp delay={0.4}>
        <QuoteFormSection />
      </FadeInUp> */}
    </main>
  );
};

export default QuotePage;
