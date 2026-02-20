"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReduceMotion } from "@/contexts/ReduceMotionContext";
import { useDirectionalInView } from "@/hooks/use-directional-in-view";
import { useRef } from "react";

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  once?: boolean;
  as?: keyof typeof motion;
}

// Premium easing curve for smooth "hero-like" feel
const PREMIUM_EASE = [0.16, 1, 0.3, 1];

// 1. Fade In Up (Most common). On mobile/reduced-motion: no animation to avoid scroll lag.
export const FadeInUp = ({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  viewportMargin = "0px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const reduceMotion = useReduceMotion();
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = motion[as as keyof typeof motion] as any;

  if (reduceMotion) {
    const Tag = (as || "div") as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 2. Fade In Left. On mobile/reduced-motion: no animation.
export const FadeInLeft = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  viewportMargin = "0px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const reduceMotion = useReduceMotion();
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = motion[as as keyof typeof motion] as any;

  if (reduceMotion) {
    const Tag = (as || "div") as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 3. Fade In Right. On mobile/reduced-motion: no animation.
export const FadeInRight = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  viewportMargin = "0px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const reduceMotion = useReduceMotion();
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = motion[as as keyof typeof motion] as any;

  if (reduceMotion) {
    const Tag = (as || "div") as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 4. Zoom In (Scale Up). On mobile/reduced-motion: no animation.
export const ZoomIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportMargin = "0px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const reduceMotion = useReduceMotion();
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = motion[as as keyof typeof motion] as any;

  if (reduceMotion) {
    const Tag = (as || "div") as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 5. Stagger Container (Parent for staggered children)
interface StaggerProps extends AnimationProps {
  staggerDelay?: number;
}

// On mobile/reduced-motion: no stagger animation to avoid scroll lag.
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  viewportMargin = "0px",
  once = true,
  as = "div",
  ...props
}: StaggerProps) => {
  const reduceMotion = useReduceMotion();
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = motion[as as keyof typeof motion] as any;

  if (reduceMotion) {
    const Tag = (as || "div") as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 6. Generic Directional Component
interface DirectionalProps extends HTMLMotionProps<"div"> {
  as?: any;
  viewportMargin?: string;
}

export const DirectionalDiv = ({
  children,
  initial,
  animate,
  whileInView,
  viewportMargin = "0px",
  as = "div",
  ...props
}: DirectionalProps) => {
  const ref = useRef(null);
  const isInView = useDirectionalInView(ref, { margin: viewportMargin as any });
  const Component = (motion as any)[as] || motion.div;

  // Use whileInView as the target state if provided, otherwise use animate
  const targetState = whileInView || animate;

  return (
    <Component
      ref={ref}
      initial={initial}
      animate={isInView ? targetState : initial}
      {...props}
    >
      {children}
    </Component>
  );
};
