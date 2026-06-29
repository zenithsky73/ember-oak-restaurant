"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}