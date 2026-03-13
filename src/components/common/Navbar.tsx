"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import GetInstantQuoteButton from "./GetInstantQuoteButton";
import { useReduceMotion, usePerformance } from "@/contexts/ReduceMotionContext";
import { servicesData } from "@/data/servicesData";

// Logo path from assets
const Logo = "/assets/images/Logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hamburgerHover, setHamburgerHover] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false); // Default to light background
  const { isIPhone, isLowPerformance } = usePerformance();

  // Check if mobile screen
  const [isMobile, setIsMobile] = useState(false);

  // Detect when the browser is at 100% zoom or above on laptop/desktop
  // and switch to a "compact" nav where some items move under Resources.
  const [useCompactNav, setUseCompactNav] = useState(false);

  const hideChromeRoutes = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
  ];
  const shouldHideChrome = hideChromeRoutes.includes(pathname);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Detect zoom level & viewport width to switch nav layout.
  // We treat "100% zoom and above" as compact mode on typical laptops,
  // keeping the original layout for 90% zoom users.
  useEffect(() => {
    const updateNavMode = () => {
      // Heuristic: compare outerWidth to innerWidth to infer zoom percentage.
      // This is not perfect across all browsers, but works well for Chrome-like setups.
      const zoomApprox =
        typeof window !== "undefined" && window.innerWidth
          ? (window.outerWidth / window.innerWidth) * 100
          : 100;

      const isZoomedOrDefault = zoomApprox >= 100;
      const isLaptopWidth = window.innerWidth >= 1024 && window.innerWidth <= 1536;

      setUseCompactNav(isZoomedOrDefault && isLaptopWidth);
    };

    updateNavMode();
    window.addEventListener("resize", updateNavMode);

    return () => window.removeEventListener("resize", updateNavMode);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Detect dark/light background behind navbar on scroll
  useEffect(() => {
    const getClassName = (element: HTMLElement): string => {
      // Safely convert className to string (handles DOMTokenList, SVGAnimatedString, etc.)
      if (typeof element.className === 'string') {
        return element.className;
      }
      if (element.className && typeof element.className === 'object') {
        const classNameObj = element.className as any;
        // Handle DOMTokenList
        if ('value' in classNameObj) {
          return String(classNameObj.value);
        }
        // Handle SVGAnimatedString
        if ('baseVal' in classNameObj) {
          return String(classNameObj.baseVal);
        }
      }
      // Fallback to getAttribute
      return element.getAttribute('class') || '';
    };

    const checkBackground = (element: HTMLElement | null): boolean => {
      if (!element || element === document.body) return false;

      const bgColor = window.getComputedStyle(element).backgroundColor;
      const bgClass = getClassName(element);

      // Check for dark background classes first
      const isDarkClass = bgClass.includes('bg-hero') ||
        bgClass.includes('bg-[#111235]') ||
        bgClass.includes('bg-card') ||
        bgClass.includes('bg-gradient-container') ||
        bgClass.includes('bg-hero-dark') ||
        bgClass.includes('bg-[#1e2040]') ||
        bgClass.includes('bg-[#2a2d55]') ||
        bgClass.includes('bg-[#1e1e2f]');

      if (isDarkClass) return true;

      // Check for light background classes
      const isLightClass = bgClass.includes('bg-background') ||
        bgClass.includes('bg-white') ||
        bgClass.includes('bg-section-light') ||
        bgClass.includes('bg-[#ecf0f0]') ||
        bgClass.includes('bg-[#d8e5e5]');

      if (isLightClass) return false;

      // Check background color luminance
      const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        if (luminance < 0.5) return true; // Dark
        if (luminance > 0.7) return false; // Light
      }

      // Recursively check parent
      return checkBackground(element.parentElement);
    };

    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (!navbar) {
        setIsDarkBackground(false);
        return;
      }

      // PERFORMANCE: Skip expensive background detection on iPhone/low-performance devices
      if (isIPhone || isLowPerformance) {
        const scrollY = window.scrollY || window.pageYOffset;
        // On iPhone, we simplify: if scrolled more than a bit, we usually want a solid look or specific theme
        // For VACEI, most pages start with a dark hero, so we can often default to darkBackground=true if at top
        // or just use a fixed threshold. Let's use 50px as a threshold for "scrolled" state.
        setIsDarkBackground(scrollY < 50);
        return;
      }

      const navbarRect = navbar.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const isAtTop = scrollY < 10; // Consider "at top" if scrolled less than 10px

      // At the top of the page, check navbar's own background and body background
      if (isAtTop) {
        // Check navbar's own background first
        const navElement = navbar as HTMLElement;
        const navBgColor = window.getComputedStyle(navElement).backgroundColor;
        const navBgClass = getClassName(navElement);

        // Check if navbar has explicit light background classes
        const hasLightClass = navBgClass.includes('bg-white') ||
          navBgClass.includes('bg-background') ||
          navBgClass.includes('bg-white/');

        if (hasLightClass) {
          setIsDarkBackground(false);
          return;
        }

        // Check navbar background color luminance
        const rgbMatch = navBgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          // If navbar background is light, use dark text
          if (luminance > 0.6) {
            setIsDarkBackground(false);
            return;
          }
        }

        // Check body background as fallback
        const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
        const bodyRgbMatch = bodyBgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (bodyRgbMatch) {
          const r = parseInt(bodyRgbMatch[1]);
          const g = parseInt(bodyRgbMatch[2]);
          const b = parseInt(bodyRgbMatch[3]);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          if (luminance > 0.6) {
            setIsDarkBackground(false);
            return;
          }
        }

        // Default to light background (dark text) at top
        setIsDarkBackground(false);
        return;
      }

      // When scrolled, check what's below the navbar
      const checkY = navbarRect.bottom + 20;

      // Check multiple points for better accuracy
      const checkPoints = [
        window.innerWidth / 2, // Center
        window.innerWidth * 0.25, // Left quarter
        window.innerWidth * 0.75, // Right quarter
      ];

      let darkCount = 0;
      let lightCount = 0;

      for (const checkX of checkPoints) {
        const elementAtPoint = document.elementFromPoint(checkX, checkY);

        if (!elementAtPoint) {
          lightCount++;
          continue;
        }

        // Skip navbar elements
        if ((elementAtPoint as HTMLElement).closest('nav')) {
          continue;
        }

        const isDark = checkBackground(elementAtPoint as HTMLElement);
        if (isDark) {
          darkCount++;
        } else {
          lightCount++;
        }
      }

      // Use majority vote, default to light if uncertain
      setIsDarkBackground(darkCount > lightCount);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check - run immediately and also after a short delay to ensure DOM is ready
    handleScroll(); // Immediate check
    const initialCheck = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Desktop nav links – updated labels aligned across modes.
  const navLinks = useCompactNav
    ? [
      { label: "Home", href: "/" },
      {
        label: "Platform",
        href: "/#platform",
        hasDropdown: true,
        isOpen: portalsOpen,
        setIsOpen: setPortalsOpen,
      },
      {
        label: "Services",
        href: "/#services",
        hasDropdown: true,
        isOpen: servicesOpen,
        setIsOpen: setServicesOpen,
      },
      { label: "Partners", href: "/partners" },
      { label: "Pricing", href: "/pricing" },
      {
        label: "Resources",
        href: "/resources",
        hasDropdown: true,
        isOpen: resourcesOpen,
        setIsOpen: setResourcesOpen,
      },
    ]
    : [
      { label: "Home", href: "/" },
      {
        label: "Platform",
        href: "/#platform",
        hasDropdown: true,
        isOpen: portalsOpen,
        setIsOpen: setPortalsOpen,
      },
      {
        label: "Services",
        href: "/#services",
        hasDropdown: true,
        isOpen: servicesOpen,
        setIsOpen: setServicesOpen,
      },
      { label: "Partners", href: "/partners" },
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

  const resourceLinks = useCompactNav
    ? [
      // Compact: move AI Review + How It Works under Resources
      { label: "Insights", href: "/insights" },
      // { label: "AI Review", href: "/ai-review" },
      // { label: "How It Works", href: "/how-it-works" },
      { label: "About VACEI", href: "/about" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Security & Compliance", href: "/security-compliance" },
      { label: "Get Instant Quote", href: "/quote#process-steps" },
      { label: "CPE & Podcast", href: "/cpe" },
    ]
    : [
      // Original Resources content
      { label: "Insights", href: "/insights" },
      { label: "AI Review", href: "/ai-review" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "About VACEI", href: "/about" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Security & Compliance", href: "/security-compliance" },
      { label: "Get Instant Quote", href: "/quote" },
      { label: "CPE & Podcast", href: "/cpe" },
    ];

  if (shouldHideChrome) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center w-full relative z-[60]">
        <nav className="fixed top-2 sm:top-4 w-full max-w-7xl px-3 sm:px-4 lg:px-8 pointer-events-none">
          {/* Navbar Container – sleek floating pill layout */}
          <motion.div
            initial={false}
            className={`relative pointer-events-auto w-full mx-auto rounded-full ${isDarkBackground
                ? `bg-white/10 ${isIPhone || isLowPerformance ? "" : "backdrop-blur-xl"} border border-white/20 text-white`
                : `bg-white/80 ${isIPhone || isLowPerformance ? "" : "backdrop-blur-xl"} border border-gray-200/60 text-text-dark`
              } shadow-lg shadow-black/5 px-4  sm:px-6 lg:px-8 transition-all duration-300`}
          >
            <div className="flex items-center justify-between min-h-[56px] sm:min-h-[64px] lg:min-h-[80px]">
              {/* Logo - smaller on mobile */}
              <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center justify-center">
                  <Image
                    src={Logo}
                    alt="VACEI Logo"
                    width={100}
                    height={70}
                    className="object-contain w-20 h-12 sm:w-24 sm:h-14 lg:w-[100px] lg:h-[70px]"
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links - Tight spacing with responsive font */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center px-4">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="group h-full flex items-center static"
                    onMouseEnter={() =>
                      link.hasDropdown && link.setIsOpen?.(true)
                    }
                    onMouseLeave={() =>
                      link.hasDropdown && link.setIsOpen?.(false)
                    }
                  >
                    <Link
                      href={link.href}
                      className={`${isDarkBackground ? "text-white" : "text-text-dark"} font-normal text-[15px] ${isDarkBackground ? "hover:text-primary-blue/80" : "hover:text-primary-blue"} transition-colors flex items-center gap-1 ${link.isOpen ? (isDarkBackground ? "text-primary-blue/80" : "text-primary-blue") : ""}`}
                      onClick={(e) => {
                        if (link.hasDropdown) {
                          e.preventDefault();
                          link.setIsOpen?.(!link.isOpen);
                        }
                      }}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <motion.svg
                          animate={{ rotate: link.isOpen ? 180 : 0 }}
                          className="w-3.5 h-3.5"
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
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {link.hasDropdown && link.isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 origin-top pointer-events-auto"
                        >
                          <div className={`bg-white/95 ${isIPhone || isLowPerformance ? "" : "backdrop-blur-xl"} rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/60 p-6 overflow-hidden min-w-[650px] w-max max-w-[90vw] flex gap-8`}>
                            {link.label === "Services" ? (
                              <>
                                <div className="flex-1 min-w-[280px]">
                                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 pl-3">Our Services</h3>
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    {servicesData.map((service) => (
                                      <Link
                                        key={service.id}
                                        href={`/services/${service.slug}`}
                                        className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                        onClick={() => link.setIsOpen?.(false)}
                                      >
                                        <div className="text-[14px] font-medium text-text-dark group-hover/item:text-primary-blue transition-colors">
                                          {service.title}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                <div className="w-[240px] shrink-0 rounded-2xl overflow-hidden relative">
                                  <Image src="/assets/images/Accounting.jpg" alt="Services" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-700" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                                    <span className="text-white font-medium">Explore all our expert services</span>
                                  </div>
                                </div>
                              </>
                            ) : link.label === "Platform" ? (
                              <>
                                <div className="flex-1 min-w-[240px]">
                                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 pl-3">Portals</h3>
                                  <div className="grid grid-cols-1 gap-1">
                                    {portalLinks.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                        onClick={() => link.setIsOpen?.(false)}
                                      >
                                        <div className="text-[15px] font-medium text-text-dark group-hover/item:text-primary-blue transition-colors">
                                          {item.label}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                <div className="w-[240px] shrink-0 rounded-2xl overflow-hidden relative">
                                  <Image src="/assets/images/portal.png" alt="Portal" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-700" />
                                </div>
                              </>
                            ) : link.label === "Resources" ? (
                              <>
                                <div className="flex-1 min-w-[280px]">
                                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 pl-3">Resources & Company</h3>
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    {resourceLinks.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                        onClick={() => link.setIsOpen?.(false)}
                                      >
                                        <div className="text-[14px] font-medium text-text-dark group-hover/item:text-primary-blue transition-colors">
                                          {item.label}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                <div className="w-[240px] shrink-0 rounded-2xl overflow-hidden relative">
                                  <Image src="/assets/images/Audit.jpg" alt="Resources" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-700" />
                                </div>
                              </>
                            ) : null}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Right Side Actions - Tight spacing */}
              <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                <div className="hidden lg:flex items-center gap-3">
                  {/* Login Button */}
                  <Link
                    href="/portal/client-portal"
                    className={`flex items-center justify-center ${isDarkBackground
                        ? "text-white/90 hover:text-white"
                        : "text-text-dark/80 hover:text-primary-blue"
                      } font-medium text-[15px] transition-colors px-2`}
                  >
                    <span>Login</span>
                  </Link>

                  {/* Get Instant Quote Button */}
                  <GetInstantQuoteButton hasShadow={false} />
                </div>

                {/* Mobile: hamburger opens full-screen menu. Desktop: hamburger opens sidebar. */}
                <button
                  className="w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 relative lg:w-10 lg:gap-1.5 rounded-lg active:bg-black/5 lg:active:bg-transparent -m-1 lg:m-0"
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
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                    className={`h-0.5 ${isDarkBackground ? "bg-white" : "bg-text-dark"} w-6`}
                  />
                  <motion.div
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    className="relative w-6 h-0.5"
                  >
                    <div
                      className={`absolute left-0 h-full ${isDarkBackground ? "bg-white" : "bg-text-dark"} transition-all duration-300 ease-out`}
                      style={{ width: !isMobile && hamburgerHover ? 24 : 16.8 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                    className={`h-0.5 ${isDarkBackground ? "bg-white" : "bg-text-dark"} w-6`}
                  />
                </button>
              </div>
            </div>

          </motion.div>
        </nav>
      </div>

      {/* Mobile full-screen overlay menu: slides in from right, over homepage, with close option */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[65] bg-black/30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 z-[70] w-full h-full lg:hidden flex flex-col bg-white shadow-2xl"
            >
              {/* Header: logo + close */}
              <div className="flex items-center justify-between shrink-0 px-4 py-4 sm:px-6 border-b border-gray-200/80">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src={Logo}
                    alt="VACEI Logo"
                    width={120}
                    height={56}
                    className="object-contain h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Scrollable menu links */}
              <div className="flex-1 overflow-y-auto py-4 px-4 sm:px-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-primary-blue/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-gray-100 last:border-none">
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={link.href}
                        className="text-text-dark font-medium text-base hover:text-primary-blue transition-colors flex-1"
                        onClick={(e) => {
                          if (link.hasDropdown) {
                            e.preventDefault();
                            link.setIsOpen?.(!link.isOpen);
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          type="button"
                          onClick={() => link.setIsOpen?.(!link.isOpen)}
                          className="p-2 -mr-2 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                          aria-expanded={link.isOpen}
                        >
                          <motion.svg
                            animate={{ rotate: link.isOpen ? 180 : 0 }}
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.hasDropdown && link.isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-3 pb-3 overflow-hidden"
                        >
                          <div className="rounded-xl bg-gray-50 border border-gray-200/80 p-2.5 space-y-0.5">
                            {link.label === "Services" &&
                              servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  className="block py-2.5 text-sm font-medium text-text-dark hover:text-primary-blue rounded-lg pl-3 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            {link.label === "Platform" &&
                              portalLinks.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block py-2.5 text-sm font-medium text-text-dark hover:text-primary-blue rounded-lg pl-3 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            {link.label === "Resources" &&
                              resourceLinks.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block py-2.5 text-sm font-medium text-text-dark hover:text-primary-blue rounded-lg pl-3 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-gray-200" onClick={() => setMobileMenuOpen(false)}>
                  <GetInstantQuoteButton hasShadow={false} className="w-full justify-center" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar Overlay & Panel - Only for desktop */}
      {sidebarOpen && !isMobile && (
        <>
          {/* Overlay with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-60 ${isIPhone || isLowPerformance ? "" : "backdrop-blur-md"} bg-black/20`}
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar Panel with smooth slide animation */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-4 bottom-4 right-0 w-full lg:w-[450px] z-70 overflow-hidden"
          >
            {/* Sidebar Container with gradient background, border radius, and hidden scrollbar */}
            <div
              className="h-full w-full rounded-l-3xl overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
              style={{
                background:
                  "linear-gradient(135deg, var(--sidebar-bg-start) 0%, var(--sidebar-bg-end) 100%)",
              }}
            >
              <div className="p-6 lg:p-8 space-y-8 h-full relative">
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

                {/* Sidebar Quick Links Section (static) */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-lg">Quick actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Request a quote
                        </p>
                        <p className="text-xs text-white/70">
                          Share your requirements in a few steps.
                        </p>
                      </div>
                      <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-blue">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>

                    <Link
                      href="/#services"
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/15 transition-all"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Explore services
                        </p>
                        <p className="text-xs text-white/70">
                          View accounting, audit and corporate offerings.
                        </p>
                      </div>
                      <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
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

                {/* Download Brochure PDF Icon - Matches provided screenshot */}
                <div className="absolute bottom-6 right-6 z-20">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                    aria-label="Download PDF"
                  >
                    <svg className="w-6 h-6 text-[#E52828]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.293 1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L13 4.414V14a1 1 0 1 1-2 0V4.414L6.707 8.707a1 1 0 0 1-1.414-1.414l6-6zM5 16a1 1 0 0 1 1 1v4h12v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
