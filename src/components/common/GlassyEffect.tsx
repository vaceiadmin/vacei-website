import React from "react";
import { cn } from "@/lib/utils";

interface GlassyEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high" | "premium";
  animated?: boolean;
}

const GlassyEffect = ({
  children,
  className,
  intensity = "premium",
  animated = false,
}: GlassyEffectProps) => {
  const intensityClasses = {
    low: `
      bg-primary/5
      backdrop-blur-sm
      border border-primary/10
    `,
    medium: `
      bg-primary/10
      backdrop-blur-md
      border border-primary/20
      shadow-lg shadow-primary/10
    `,
    high: `
      bg-primary/15
      backdrop-blur-lg
      border border-primary/30
      shadow-xl shadow-primary/20
    `,
    premium: `
      bg-primary/10
      backdrop-blur-xl
      border border-primary/20
      shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]
    `,
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        intensityClasses[intensity],
        animated &&
          "transition-all duration-300 hover:shadow-primary/40 hover:border-primary/40",
        className
      )}
    >
      {/* Gradient tint overlay (primary-based) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Premium shimmer */}
      {intensity === "premium" && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl shadow-inner shadow-primary/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassyEffect;
