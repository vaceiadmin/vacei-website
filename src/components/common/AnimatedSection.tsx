"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  sectionVariants,
  viewportOnce,
  sectionTransition,
  sectionTransitionDelayed,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: boolean;
}

/**
 * Wraps content in a motion.div with the same reveal animation as Home page sections.
 */
export default function AnimatedSection({
  children,
  className,
  delay = false,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionVariants}
      transition={delay ? sectionTransitionDelayed : sectionTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
