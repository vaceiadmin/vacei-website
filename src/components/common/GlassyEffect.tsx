import React from "react";
import { cn } from "@/lib/utils";

interface GlassyEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

const GlassyEffect = ({ 
  children, 
  className,
  intensity = "medium" 
}: GlassyEffectProps) => {
  const intensityClasses = {
    low: "bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-100",
    medium: "bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-gray-100 bg-clip-padding",
    high: "bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-100",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border shadow-xl transition-all duration-300",
        intensityClasses[intensity],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassyEffect;
