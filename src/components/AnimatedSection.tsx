"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  initial?: MotionProps["initial"]; // Framer Motion initial tipi
  animate?: MotionProps["animate"]; // Framer Motion animate tipi
  transition?: MotionProps["transition"]; // Framer Motion transition tipi
  once?: boolean; // Görünürlük kontrolü bir kez mi olmalı
};

const AnimatedSection = ({
  children,
  initial = { opacity: 0, x: -100 },
  animate = { opacity: 1, x: 0 },
  transition = { duration: 1, delay: 0.1 },
  once = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null); // Div için referans tipi
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : undefined} // Animasyon tetiklenir
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
