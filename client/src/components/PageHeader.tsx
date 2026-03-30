import { motion } from "framer-motion";

interface PageHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  recommendation?: string;
}

export function PageHeader({ icon, title, subtitle, recommendation }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-b border-[rgba(0,229,255,0.1)] bg-[rgba(8,12,24,0.6)] backdrop-blur-sm px-4 md:px-6 py-5"
    >
      <div className="flex items-center gap-3 mb-1">
        <span className="text-xl">{icon}</span>
        <h1 className="text-xl md:text-2xl font-bold text-[#00E5FF]" style={{ fontFamily: "'Space Grotesk'" }}>{title}</h1>
      </div>
      <p className="text-sm text-[#7A8A9A] ml-9">{subtitle}</p>
      {recommendation && (
        <div className="mt-3 ml-9 p-3 rounded-md bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.15)] max-w-3xl">
          <p className="text-xs text-[#AAB8C2]">
            <span className="text-[#FFB300] font-semibold">Recomendação:</span> {recommendation}
          </p>
        </div>
      )}
    </motion.div>
  );
}
