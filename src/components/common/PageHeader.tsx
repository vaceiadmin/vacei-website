"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import GradientContainer from "./GradientContainer";
import { servicesData } from "@/data/servicesData";
import TextAnimation from "./TextAnimation";
import { FadeInUp } from "./Animations";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <GradientContainer backgroundColor="bg-primary" className="my-6">
      <FadeInUp className="flex flex-col items-center justify-center py-20 md:py-32 lg:py-40 px-4 text-center">
        {/* Title */}
        <TextAnimation
          text={title}
          as="h1"
          className="text-2xl md:text-5xl font-medium text-white mb-10"
        />

        {/* Breadcrumbs */}
        <div className="flex items-center gap-4 rounded-full px-6 md:py-2.5 py-1 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 relative z-100">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-sm font-normal">Home</span>
          </Link>

          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {/* Separator - Always show separator as we have Home icon first */}
              <span className={`text-white/20 text-[10px] ${item.label === "Services" ? "" : "hidden md:inline"}`}>●</span>

              <div
                className={`relative ${item.label === "Services" ? "" : "hidden md:block"}`}
                onMouseEnter={() => item.label === "Services" && setDropdownOpen(true)}
                onMouseLeave={() => item.label === "Services" && setDropdownOpen(false)}
              >
                {item.label === "Services" ? (
                  <div className="relative">
                    <div className="flex items-center gap-1.5 text-sm font-normal">
                      <Link
                        href="/services"
                        className={`text-white/80 transition-colors ${dropdownOpen ? "text-white" : "hover:text-white"}`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-label="Toggle services menu"
                        className={`text-white/80 transition-colors ${dropdownOpen ? "text-white" : "hover:text-white"}`}
                      >
                        <motion.svg
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-2 w-[280px] z-50 origin-top"
                        >
                          <div className="bg-white/95 backdrop-blur-2xl rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 p-2 overflow-hidden">
                            <div className="grid grid-cols-1 gap-1">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  className="block px-4 py-3 rounded-xl hover:bg-primary-blue/5 transition-all group/item text-left"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <div className="text-[14px] font-medium text-text-dark group-hover/item:text-primary-blue transition-colors">
                                    {service.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-normal"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white text-sm font-normal">
                    {item.label}
                  </span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </FadeInUp>
    </GradientContainer>
  );
};

export default PageHeader;
