"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useScrollDirection } from "@/contexts/ScrollContext";

interface Options {
    margin?: string;
    amount?: number | "some" | "all";
    once?: boolean;
}

/**
 * Custom hook that triggers only when the element is in view AND scrolling down.
 * Once triggered, it stays true until a page reload.
 */
export function useDirectionalInView(
    ref: React.RefObject<any>,
    options: Options = { margin: "0px", amount: 0.1 }
) {
    const isInView = useInView(ref, {
        once: false,
        margin: options.margin as any,
        amount: options.amount as any,
    });

    const scrollDirection = useScrollDirection();
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        // Lock in the triggered state only when scrolling down
        if (!hasTriggered && isInView && scrollDirection === "down") {
            setHasTriggered(true);
        }
    }, [isInView, scrollDirection, hasTriggered]);

    return hasTriggered;
}
