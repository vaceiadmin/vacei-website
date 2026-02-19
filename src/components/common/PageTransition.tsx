"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // After route change, trigger resize so IntersectionObserver (whileInView) re-evaluates and content isn't stuck hidden
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 80);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        style={{ minHeight: "100vh", isolation: "isolate" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
