"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ReduceMotionContext = createContext(false);

export function ReduceMotionProvider({ children }: { children: React.ReactNode }) {
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(isMobile || prefersReduced);

    const onResize = () => {
      setReduce(window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    mql.addEventListener("change", onResize);
    window.addEventListener("resize", onResize);
    return () => {
      mql.removeEventListener("change", onResize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <ReduceMotionContext.Provider value={reduce}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion() {
  return useContext(ReduceMotionContext);
}
