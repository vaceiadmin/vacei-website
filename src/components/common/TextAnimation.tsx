"use client";
import { motion, Variants } from "framer-motion";

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

/**
 * TextAnimation component that reveals text word-by-word when scrolled into view.
 * Uses Framer Motion's whileInView for the trigger.
 */
export const TextAnimation = ({ 
  text, 
  className, 
  delay = 0, 
  as = "h2",
  once = true
}: TextAnimationProps) => {
  const words = text.split(" ");
  
  // Dynamic component type (h1, h2, etc.)
  const MotionComponent = (motion as any)[as];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.055, 
        delayChildren: delay 
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 22,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px" }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden whitespace-nowrap">
          <motion.span
            variants={wordVariants}
            className="inline-block mr-[0.25em] leading-tight"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
};

export default TextAnimation;
