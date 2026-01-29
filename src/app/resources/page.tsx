"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/common/PageHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import { sectionVariants, viewportOnce, sectionTransition } from "@/lib/motion";

const resourceLinks = [
  { label: "How It Works", href: "/how-it-works", description: "One portal. One team. Everything handled." },
  { label: "About VACEI", href: "/about", description: "Our story and approach." },
  { label: "FAQs", href: "/faq", description: "Frequently asked questions." },
  { label: "Security & Compliance", href: "/security-compliance", description: "How we keep your data safe." },
  { label: "Get Instant Quote", href: "/quote", description: "Request a clear quote for your business." },
  { label: "CPE & Podcast", href: "/cpe", description: "Continuing education and insights." },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Resources"
        breadcrumbs={[{ label: "Resources" }]}
      />
      <AnimatedSection>
        <section className="w-full py-16 lg:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourceLinks.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={sectionVariants}
                  transition={{ ...sectionTransition, delay: index * 0.05 }}
                >
                <Link
                  href={item.href}
                  className="block p-6 rounded-2xl bg-background-secondary border border-input hover:border-primary-blue hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-heading font-semibold text-lg group-hover:text-primary-blue transition-colors">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-gray">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-primary-blue text-sm font-medium group-hover:gap-2 transition-all">
                    Visit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
