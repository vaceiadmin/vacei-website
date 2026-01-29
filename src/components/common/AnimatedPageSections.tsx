"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

/**
 * Wraps each non-null child in AnimatedSection for use in server-rendered pages
 * (e.g. Services [slug]) where we cannot use "use client" on the page itself.
 */
export default function AnimatedPageSections({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <>
      {items.map((child, index) => (
        <AnimatedSection key={index} delay={index > 0}>
          {child}
        </AnimatedSection>
      ))}
    </>
  );
}
