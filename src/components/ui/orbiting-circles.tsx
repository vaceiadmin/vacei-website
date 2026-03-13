"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { HTMLAttributes, ReactNode } from "react";

export interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  iconSize = 30,
  ...props
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/5 stroke-1 dark:stroke-white/5"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const totalChildren = React.Children.count(children);
        const angle = (360 / totalChildren) * index;
        
        return (
          <div
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--angle": angle,
                "--size": iconSize,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex transform-gpu animate-orbit items-center justify-center",
              { "[animation-direction:reverse]": reverse },
              className,
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
