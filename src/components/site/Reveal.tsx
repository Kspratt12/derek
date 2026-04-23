"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "clip";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul";
  direction?: Direction;
};

function getInitial(direction: Direction, y: number) {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -48 };
    case "right":
      return { opacity: 0, x: 48 };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "clip":
      return { opacity: 0, clipPath: "inset(0 100% 0 0)" };
    case "up":
    default:
      return { opacity: 0, y };
  }
}

function getAnimate(direction: Direction) {
  switch (direction) {
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "scale":
      return { opacity: 1, scale: 1 };
    case "clip":
      return { opacity: 1, clipPath: "inset(0 0% 0 0)" };
    case "up":
    default:
      return { opacity: 1, y: 0 };
  }
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : getInitial(direction, y)}
      whileInView={getAnimate(direction)}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: direction === "clip" ? 0.9 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  stagger = 0.08,
  className,
  direction = "up",
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
  direction?: "up" | "scale";
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      data-stagger-direction={direction}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 20,
  className,
  direction = "up",
}: {
  children: ReactNode;
  y?: number;
  className?: string;
  direction?: "up" | "scale";
}) {
  const hidden =
    direction === "scale"
      ? { opacity: 0, scale: 0.9 }
      : { opacity: 0, y };
  const visible =
    direction === "scale"
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
