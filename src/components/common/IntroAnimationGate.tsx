"use client";

import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";

// Shows the intro loader on every page load/refresh (no session persistence).
const IntroAnimationGate = () => {
  const [show, setShow] = useState(true);

  const handleComplete = () => setShow(false);

  if (!show) return null;

  return <IntroAnimation onComplete={handleComplete} />;
};

export default IntroAnimationGate;

