"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: ReactNode;
}

// Use native scroll on mobile/touch (e.g. iPhone) to avoid lag; Lenis only on desktop
function usePreferNativeScroll() {
  const [preferNative, setPreferNative] = useState(true);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const isNarrow = typeof window !== "undefined" && window.innerWidth < 1024;
    setPreferNative(isTouch || isNarrow);

    const onResize = () => {
      const touch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setPreferNative(touch || window.innerWidth < 1024);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return preferNative;
}

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const preferNativeScroll = usePreferNativeScroll();

  return preferNativeScroll ? (
    <>{children}</>
  ) : (
    <ReactLenis root options={{ lerp: 0.14, duration: 1.0, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
