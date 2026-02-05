"use client";

import React from "react";
import ServiceFeatures from "../services/ServiceFeatures";

const BenefitsSection = () => {
  const benefitsFeatures = [
    {
      title: "Work-Life Balance",
      items: [
        "Flexible working hours and remote options.",
        "Generous paid time off and holidays.",
        "Wellness programs and mental health support.",
      ],
    },
    {
      title: "Growth & Development",
      items: [
        "Annual learning stipend for courses and conferences.",
        "Internal mentorship programs.",
        "Clear career progression paths.",
      ],
    },
    {
       title: "Culture & Perks",
       items: [
           "Regular team retreats and social events.",
           "Comprehensive health insurance for you and your family.",
           "Performance-based bonuses and stock options.",
       ]
    }
  ];

  return (
    <div className="">
        <ServiceFeatures
        title="Why VACEI?"
        subtitle="We build more than just software; we build careers. Join a team where your work matters and your growth is prioritized."
        features={benefitsFeatures}
        theme="light"
        backgroundColor="bg-[#F3F5F7]"
        showRadials={false}
        />
    </div>
  );
};

export default BenefitsSection;
