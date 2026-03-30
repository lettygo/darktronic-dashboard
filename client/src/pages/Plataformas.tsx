import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { ECOMMERCE_PLATFORMS } from "@/lib/operational-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
      <p className="font-semibold text-[#00E5FF]">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || "#ccc" }} className="text-xs mt-0.5">
          {p.name}: <span className="font-mono font-bold">{p.value}/10</span>
        </p>
      ))}
    </div>
  );
}

const platColors = ["#00E5FF", "#7C4DFF", "#FFB300", "#00C853", "#FF6D00"];

export default function Plataformas() {
  const notaData = ECOMMERCE_PLATFORMS.plataformas.map((p, i) => ({
    name: p.nome, nota: p.nota, fill: platColors[i % platColors.length],
  }));

  return (
    <Layout>
      <PageHeader
        icon="⬡"
        title="Plataformas de E-commerce"
        subtitle="Comparativo completo de plataformas para criar sua loja virtual"
        recommendation={ECOMMERCE_PLATFORMS.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{ECOMMERCE_PLATFORMS.summary}</p>
        </GlowCard>

        {/* Nota geral */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Nota Geral (para iniciantes no Brasil)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={notaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
              <XAxis dataKey="name" tick={{ fill: "#AAB8C2", fontSize: 11 }} />
              <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} domain={[0, 10]} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="nota" name="Nota" radius={[4, 4, 0, 0]} barSize={35}>
                {notaData.map((entry, i) => <Cell key={i} fill={entry.fill} fillOpacity={0.85} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlowCard>

        {/* Cards de plataformas */}
        <div className="space-y-4">
          {ECOMMERCE_PLATFORMS.plataformas.map((p, i) => {
            const color = platColors[i % platColors.length];
            return (
              <GlowCard key={i} className="p-4" delay={i * 0.06} glowColor={i === 0 ? "cyan" : "none"}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-56 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-bold" style={{ color }}>{p.nome}</h3>
                      <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: `${color}15`, color }}>{p.nota}/10</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                        <span className="text-[#5A7A8A]">Custo</span>
                        <span className="font-mono text-[#FFB300]">{p.custoMensal}</span>
                      </div>
                      <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                        <span className="text-[#5A7A8A]">Taxa/Venda</span>
                        <span className="font-mono text-[#00E5FF]">{p.taxaVenda}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-[11px] text-[#00C853]"><strong>+</strong> {p.pros}</p>
                    <p className="text-[11px] text-[#FF5252]"><strong>−</strong> {p.contras}</p>
                    <p className="text-[11px] text-[#7A8A9A]"><strong>Integrações:</strong> {p.integracoes}</p>
                    <p className="text-[11px] text-[#7C4DFF]"><strong>Ideal:</strong> {p.ideal}</p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Recomendação final */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-2">Recomendação Final para a Darktronic</h3>
          <p className="text-sm text-[#AAB8C2]">{ECOMMERCE_PLATFORMS.recomendacaoFinal}</p>
        </GlowCard>
      </div>
    </Layout>
  );
}
