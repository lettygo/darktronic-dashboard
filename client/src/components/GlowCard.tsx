import { motion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: "cyan" | "amber" | "none";
  style?: CSSProperties;
}

export function GlowCard({ children, className = "", delay = 0, glowColor = "cyan", style }: GlowCardProps) {
  const glowClass = glowColor === "cyan" ? "glow-cyan" : glowColor === "amber" ? "glow-amber" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`
        relative rounded-lg border border-[rgba(0,229,255,0.15)] 
        bg-[rgba(15,20,40,0.8)] backdrop-blur-sm
        ${glowClass} ${className}
      `}
      style={style}
    >
      {children}
    </motion.div>
  );
}
