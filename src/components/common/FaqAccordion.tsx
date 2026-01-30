"use client";

import { useState } from "react";
import Image from "next/image";
import GradientContainer from "./GradientContainer";
import { Phone } from "lucide-react";
import TextAnimation from "./TextAnimation";

interface FaqItem {
  title: string;
  content: string;
}

interface FaqAccordionProps {
  faqItems: FaqItem[];
  logoImage?: string;
  companyName?: string;
  phoneNumber?: string;
  callToActionText?: string;
  backgroundColor?: string;
  showRadials?: boolean;
}

const FaqAccordion = ({
  faqItems,
  logoImage = "/assets/images/Logo.png",
  companyName = "VACEI",
  phoneNumber = "+356 77142418",
  callToActionText = "Get Started Free Call?",
  backgroundColor = "bg-primary",
  showRadials = false,
}: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20">
      <div className="mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row lg:items-center max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Left: Logo Card */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-2xl overflow-hidden bg-primary shadow-xl">
              {/* Pattern Background - Logo image in grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(/assets/images/imgi_1_Logo-2.0 8.png)`,
                    backgroundSize: "40px 40px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "0 0",
                  }}
                ></div>
              </div>

              {/* Logo and Company Name */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full pb-40">
                <div className="mb-6">
                  <Image
                    src={logoImage}
                    alt={companyName}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <TextAnimation
                  text={companyName}
                  as="h2"
                  className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider"
                />
              </div>

              {/* Get Started Call Card with Curve */}
              <div className="absolute bottom-6 left-6 z-10 max-w-[280px]">
                {/* Curve above the card */}
                <div className="relative w-full h-6 -mb-1">
                  <svg
                    className="w-full h-full text-purple-bg"
                    viewBox="0 0 280 24"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,24 Q140,0 280,24 L280,24 L0,24 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Card */}
                <div className="bg-purple-bg rounded-t-2xl rounded-b-xl p-6 text-white shadow-lg">
                  <p className="text-lg font-bold leading-tight mb-4">
                    {callToActionText}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white border-2 border-white/30">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="text-base font-semibold">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ accordion list */}
          <div className="flex-1 lg:pl-6 w-full">
            <div className="space-y-4 lg:space-y-5">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => toggleItem(index)}
                    className={`overflow-hidden rounded-[18px] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                      isOpen
                        ? "bg-purple-bg text-white"
                        : "bg-white text-heading"
                    }`}
                  >
                    <div className="flex items-center justify-between px-6 lg:px-8 py-5 lg:py-6">
                      <span
                        className={`text-base lg:text-[18px] font-semibold tracking-tight ${
                          isOpen ? "text-white" : "text-heading"
                        }`}
                      >
                        {item.title}
                      </span>
                      <button
                        type="button"
                        className={`flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-white text-white"
                            : "border-purple-bg text-purple-bg group-hover:bg-purple-bg/10"
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {isOpen ? (
                            <path d="M5 12h14" />
                          ) : (
                            <path d="M12 5v14M5 12h14" />
                          )}
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                        {/* Dashed line */}
                        <div className="mb-5 border-t border-dashed border-white/30" />
                        <p className="text-sm lg:text-[15px] text-white/90 leading-[1.6] font-medium">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
