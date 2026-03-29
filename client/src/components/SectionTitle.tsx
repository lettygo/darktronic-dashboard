import { motion } from "framer-motion";

interface SectionTitleProps {
  icon?: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionTitle({ icon, title, subtitle, id }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6 flex items-center gap-3"
    >
      <div className="h-8 w-1 rounded-full bg-[#00E5FF]" />
      <div>
        <h2 className="text-xl font-bold tracking-tight text-[#00E5FF] flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {icon && <span className="text-lg">{icon}</span>}
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#8899AA] mt-0.5">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
