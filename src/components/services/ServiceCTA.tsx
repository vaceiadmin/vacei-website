"use client";

import React from "react";
import Link from "next/link";
import { FadeInUp } from "../common/Animations";

const ServiceCTA = () => {
  return (
    <section className="w-full py-16 bg-[#F0F8FF] border-y border-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeInUp className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-4">
              Ready to streamline your workflow?
            </h2>
            <p className="text-text-gray text-lg">
              Get started with VACEI today and experience the difference of a structured delivery platform.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/quote#quote-section-2"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-medium rounded-full shadow-lg hover:bg-primary-blue hover:shadow-primary-blue/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ServiceCTA;
