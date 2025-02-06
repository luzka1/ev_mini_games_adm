"use client";

import { useEffect, useState } from "react";

export function Counter({ max }: { max: number }) {
  const [cont, setCont] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const animateCounter = () => {
      setCont((prev) => {
        if (prev >= max) return prev;
        return Math.min(prev + 10, max);
      });

      if (cont < max) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };
    animationFrameId = requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cont, max]);

  return <>{Math.floor(cont)}</>;
}
