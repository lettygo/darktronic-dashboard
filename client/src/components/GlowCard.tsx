import { motion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: "cyan" | "amber" | "none";
  style?: CSSProperties;
  isAlert?: boolean;
}

export function GlowCard({ children, className = "", delay = 0, glowColor = "cyan", style, isAlert = false }: GlowCardProps) {
  const glowClass = glowColor === "cyan" ? "glow-cyan" : glowColor === "amber" ? "glow-amber" : "";
  const alertClass = isAlert ? "pulse-alert" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={`
        relative rounded-lg 
        bg-[rgba(15,20,40,0.8)] backdrop-blur-sm
        ${glowClass} ${alertClass} ${className}
      `}
      style={style}
    >
      {children}
    </motion.div>
  );
}
