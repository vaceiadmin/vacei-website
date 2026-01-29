/**
 * Shared Framer Motion variants and config for section reveal animations.
 * Reused across Home page and all other content pages.
 */
export const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const viewportOnce = { once: true, margin: "-64px" } as const;

export const sectionTransition = { duration: 0.5 };
export const sectionTransitionDelayed = { duration: 0.5, delay: 0.1 };

/** Page-level enter/exit for route transitions */
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3 },
};
