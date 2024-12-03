"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



export function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      className="block text-6xl font-bold bg-gradient-to-r from-blue-950 to-blue-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.span>
  );
}