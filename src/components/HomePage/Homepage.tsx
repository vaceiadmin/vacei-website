"use client";

import React from "react";
import { motion } from "framer-motion";
import ReadyToSimplifySection from "./ReadyToSimplifySection";
import ServicesSection from "./ServicesSection";
import ProcessStepsSection from "./ProcessStepsSection";
import CompanySetupSection from "./CompanySetupSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import PortalFeature from "./PortalFeature";
import HowItWorks from "./HowItWorks";
import {
  sectionVariants,
  viewportOnce,
  sectionTransition,
  sectionTransitionDelayed,
} from "@/lib/motion";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <HowItWorks />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransitionDelayed}
      >
        <ProcessStepsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransitionDelayed}
      >
        <PortalFeature />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <ReadyToSimplifySection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransitionDelayed}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <CompanySetupSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        transition={sectionTransitionDelayed}
      >
        <FaqSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
