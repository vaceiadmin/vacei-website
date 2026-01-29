"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GetInstantQuoteButton from "./GetInstantQuoteButton";
import { servicesData } from "@/data/servicesData";

// Logo path from assets
const Logo = "/assets/images/Logo.png";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hamburgerHover, setHamburgerHover] = useState(false);

  // Check if mobile screen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navLinks = [
    { label: "AI Review", href: "/ai-review" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      isOpen: servicesOpen,
      setIsOpen: setServicesOpen,
    },
    { label: "How It Works", href: "/how-it-works" },
    {
      label: "Portals",
      href: "/portal/client-portal",
      hasDropdown: true,
      isOpen: portalsOpen,
      setIsOpen: setPortalsOpen,
    },
    { label: "Pricing", href: "/pricing" },
    {
      label: "Resources",
      href: "/resources",
      hasDropdown: true,
      isOpen: resourcesOpen,
      setIsOpen: setResourcesOpen,
    },
  ];

  const productLinks = [
    { label: "AI Review", href: "/ai-review" },
    { label: "Our Technology", href: "/technology" },
    { label: "Pricing", href: "/pricing" },
    { label: "CPE & Podcast", href: "/cpe" },
  ];

  const portalLinks = [
    { label: "Client Portal", href: "/portal/client-portal" },
    { label: "Accounting Portal", href: "/portal/accounting-portal" },
    { label: "Audit Portal", href: "/portal/audit-portal" },
  ];

  const resourceLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "About VACEI", href: "/about" },
    { label: "FAQs", href: "/faq" },
    { label: "Security & Compliance", href: "/security-compliance" },
    { label: "Get Instant Quote", href: "/quote" },
    { label: "CPE & Podcast", href: "/cpe" },
  ];

  return (
    <>
      <nav className="w-full sticky top-0 z-60 py-3 px-4 sm:py-4 sm:px-6 lg:px-8">
        {/* Navbar Container – full width, rounded corners, responsive horizontal padding */}
        <div className="w-full rounded-2xl bg-background-secondary/95 backdrop-blur-md shadow-lg border border-input px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[72px] py-3 lg:min-h-[80px] lg:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className=" flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="VACEI Logo"
                  width={100}
                  height={70}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links - Tight spacing with responsive font */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center px-4">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() =>
                    link.hasDropdown && link.setIsOpen?.(true)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && link.setIsOpen?.(false)
                  }
                >
                  <Link
                    href={link.href}
                    className={`text-text-dark font-normal text-[15px] hover:text-primary-blue transition-colors flex items-center gap-1 ${link.isOpen ? "text-primary-blue" : ""}`}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault(); // Optional: prevent navigation on parent click if it just opens dropdown
                      }
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${link.isOpen ? "rotate-180" : ""}`}
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
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-max z-50 transform transition-all duration-200 ease-out origin-top"
                      style={{
                        animation: "fadeIn 0.2s ease-out",
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden min-w-[260px]">
                        {link.label === "Services" ? (
                          <div className="grid grid-cols-1 gap-1 p-1">
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                onClick={() => link.setIsOpen?.(false)}
                              >
                                <div className="text-[15px] font-medium text-text-dark group-hover/item:text-primary-blue transition-colors">
                                  {service.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : link.label === "Portals" ? (
                          <div className="grid grid-cols-1 gap-1 p-1">
                            {portalLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                                onClick={() => link.setIsOpen?.(false)}
                              >
                                <div className="text-[15px] font-medium text-text-dark hover:text-primary-blue transition-colors">
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : link.label === "Products" ? (
                          <div className="grid grid-cols-1 gap-1 p-1">
                            {productLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                                onClick={() => link.setIsOpen?.(false)}
                              >
                                <div className="text-[15px] font-medium text-text-dark hover:text-primary-blue transition-colors">
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : link.label === "Resources" ? (
                          <div className="grid grid-cols-1 gap-1 p-1">
                            {resourceLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                                onClick={() => link.setIsOpen?.(false)}
                              >
                                <div className="text-[15px] font-medium text-text-dark hover:text-primary-blue transition-colors">
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="p-4 text-sm text-gray-500 text-center">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions - Tight spacing */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <div className="hidden lg:flex items-center gap-3">
                {/* Try The Client Portal Button */}
                <Link
                  href="/portal/client-portal"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary-blue text-text-dark font-normal text-[15px] hover:bg-gray-50 transition-all px-6 h-[44px]"
                >
                  <span>Try The Client Portal</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>

                {/* Get Instant Quote Button */}
                <GetInstantQuoteButton hasShadow={false} />
              </div>

              {/* Mobile: hamburger opens mobile menu. Desktop: hamburger opens sidebar. Single button. */}
              <button
                className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 relative lg:w-10 lg:gap-1.5"
                onClick={() => {
                  if (isMobile) {
                    setMobileMenuOpen(!mobileMenuOpen);
                    setSidebarOpen(false);
                  } else {
                    setSidebarOpen(!sidebarOpen);
                    setMobileMenuOpen(false);
                  }
                }}
                onMouseEnter={() => !isMobile && setHamburgerHover(true)}
                onMouseLeave={() => !isMobile && setHamburgerHover(false)}
                aria-label="Menu"
              >
                <div className="h-0.5 bg-text-dark transition-all duration-300 w-6" />
                <div className="relative w-6 h-0.5">
                  <div
                    className="absolute left-0 h-full bg-text-dark transition-all duration-300 ease-out"
                    style={{ width: !isMobile && hamburgerHover ? 24 : 16.8 }}
                  />
                </div>
                <div className="h-0.5 bg-text-dark transition-all duration-300 w-6" />
              </button>
            </div>

            {/* Mobile dropdown: full-width panel below navbar (Image 1); single hamburger only */}
          </div>

          {/* Mobile Menu - inline version */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-input mt-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-text-dark font-normal text-[17px] leading-6 hover:text-primary-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                <GetInstantQuoteButton
                  hasShadow={false}
                  className="w-full justify-center"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar Overlay & Panel - Only for desktop */}
      {sidebarOpen && !isMobile && (
        <>
          {/* Overlay with blur effect */}
          <div
            className="fixed inset-0 z-60 transition-opacity duration-300 backdrop-blur-md"
            onClick={() => setSidebarOpen(false)}
            style={{
              animation: "fadeIn 0.3s ease-out",
              backgroundColor: "var(--overlay-bg)",
            }}
          />

          {/* Sidebar Panel with smooth slide animation */}
          <div
            className="fixed top-4 bottom-4 right-0 w-full lg:w-[450px] z-70 overflow-hidden"
            style={{
              animation: "slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Sidebar Container with gradient background, border radius, and hidden scrollbar */}
            <div
              className="h-full w-full rounded-l-3xl overflow-y-auto hide-scrollbar"
              style={{
                background:
                  "linear-gradient(135deg, var(--sidebar-bg-start) 0%, var(--sidebar-bg-end) 100%)",
              }}
            >
              <div className="p-6 lg:p-8 space-y-8 h-full">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className=" flex items-center justify-center">
                      <Image
                        src={Logo}
                        alt="VACEI Logo"
                        width={150}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close sidebar"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Description Text */}
                <div className="text-white text-sm leading-relaxed opacity-90">
                  <p>
                    VACEI is a modern accounting, audit and corporate services
                    firm built around one structured digital platform. We handle
                    accounting, compliance, corporate and audit work end to end,
                    using our own technology to deliver clarity, speed and
                    visibility.
                  </p>
                </div>

                {/* Search Section */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-lg">Search Now!</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search here.."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pr-12 bg-white rounded-lg text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-text-dark transition-colors"
                      aria-label="Search"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Contact Info Section */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-lg">Contact Info</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white text-sm mb-1 opacity-80">
                        Phone
                      </p>
                      <a
                        href="tel:+35677142418"
                        className="text-white text-base hover:text-primary-blue transition-colors"
                      >
                        +356 77142418
                      </a>
                    </div>
                    <div>
                      <p className="text-white text-sm mb-1 opacity-80">
                        Email
                      </p>
                      <a
                        href="mailto:info@vacei.com"
                        className="text-white text-base hover:text-primary-blue transition-colors"
                      >
                        info@vacei.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Follow Us Section */}
                <div className="space-y-4 pb-8">
                  <h3 className="text-white font-bold text-lg">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary-blue rounded-full text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary-blue rounded-full text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary-blue rounded-full text-white transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary-blue rounded-full text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
