import { GlowCard } from "./GlowCard";

interface InfoCardProps {
  title: string;
  items: string[];
  color?: string;
  icon?: string;
  delay?: number;
}

export function InfoCard({ title, items, color = "#00E5FF", icon, delay = 0 }: InfoCardProps) {
  return (
    <GlowCard className="p-4" delay={delay}>
      <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color }}>
        {icon && <span className="text-xs">{icon}</span>}
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
            <span style={{ color }} className="mt-0.5 text-xs flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </GlowCard>
  );
}
