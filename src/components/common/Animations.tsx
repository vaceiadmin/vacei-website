"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  once?: boolean;
  as?: keyof typeof motion;
}

// 1. Fade In Up (Most common)
export const FadeInUp = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportMargin = "-100px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 2. Fade In Left
export const FadeInLeft = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportMargin = "-100px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 3. Fade In Right
export const FadeInRight = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportMargin = "-100px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// 4. Zoom In (Scale Up)
export const ZoomIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  viewportMargin = "-100px",
  once = true,
  as = "div",
  ...props
}: AnimationProps) => {
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
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

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  viewportMargin = "-100px",
  once = true,
  as = "div",
  ...props
}: StaggerProps) => {
  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
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
