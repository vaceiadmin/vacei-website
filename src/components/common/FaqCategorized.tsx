"use client";

import { useState } from "react";
import TextAnimation from "./TextAnimation";

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  titleHighlight?: string; // The word to highlight in purple
  questions: FaqQuestion[];
}

interface FaqCategorizedProps {
  categories: FaqCategory[];
  showLabel?: boolean;
  labelText?: string;
}

const FaqCategorized = ({
  categories,
  showLabel = true,
  labelText = "COMMON QUESTIONS",
}: FaqCategorizedProps) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>(
    {},
  );

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: prev[key] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <section className="w-full py-5 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Label */}
        {showLabel && (
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-black text-xs font-medium uppercase tracking-wider px-4 py-2 rounded border-4 border-dashed border-black">
              {labelText}
            </span>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-12 lg:space-y-16">
          {categories.map((category, categoryIndex) => {
            const titleParts = category.titleHighlight
              ? category.title.split(category.titleHighlight)
              : [category.title];

            // First category (Services & Delivery) gets larger text, others are one size smaller
            const isFirstCategory = categoryIndex === 0;
            const titleSize = isFirstCategory
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-2xl md:text-3xl lg:text-4xl";

            return (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Heading */}
                <TextAnimation
                  text={category.title}
                  as="h2"
                  className={`${titleSize} font-medium text-heading text-center`}
                />

                {/* Questions */}
                <div className="space-y-4 lg:space-y-5">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key] === questionIndex;

                    return (
                      <div
                        key={questionIndex}
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className={`overflow-hidden rounded-[18px] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                          isOpen
                            ? "bg-purple-bg text-white"
                            : "bg-white text-heading"
                        }`}
                      >
                        <div className="flex items-center justify-between px-6 lg:px-8 py-5 lg:py-6">
                          <h3
                            className={`text-base lg:text-[18px] font-semibold tracking-tight pr-4 ${
                              isOpen ? "text-white" : "text-heading"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <button
                            type="button"
                            className={`flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border transition-colors duration-300 flex-shrink-0 ${
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
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* White border after Services & Delivery section */}
                {isFirstCategory && (
                  <div className="border-t-4 border-white mt-12"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqCategorized;
