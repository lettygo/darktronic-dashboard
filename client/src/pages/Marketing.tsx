import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { MARKETING_DATA } from "@/lib/operational-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
      <p className="font-semibold text-[#00E5FF]">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || "#ccc" }} className="text-xs mt-0.5">
          {p.name}: <span className="font-mono font-bold">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

const channelColors = ["#2962FF", "#7C4DFF", "#FF6D00", "#00C853", "#FFB300", "#00E5FF"];

export default function Marketing() {
  const orcF1 = MARKETING_DATA.orcamentoSugerido.fase1;
  const budgetData = [
    { name: "Google Ads", value: parseInt(orcF1.google), color: "#2962FF" },
    { name: "Meta Ads", value: parseInt(orcF1.meta), color: "#7C4DFF" },
    { name: "TikTok", value: parseInt(orcF1.tiktok), color: "#FF6D00" },
    { name: "E-mail", value: parseInt(orcF1.email), color: "#00C853" },
    { name: "Influencers", value: parseInt(orcF1.influencers), color: "#FFB300" },
  ];

  return (
    <Layout>
      <PageHeader
        icon="◎"
        title="Marketing Digital"
        subtitle="Canais, custos, ROI e orçamento sugerido para e-commerce de eletrônicos"
        recommendation={MARKETING_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{MARKETING_DATA.summary}</p>
        </GlowCard>

        {/* Canais de marketing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MARKETING_DATA.channels.map((ch, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.06}>
              <h3 className="text-sm font-bold mb-2" style={{ color: channelColors[i % channelColors.length] }}>{ch.name}</h3>
              <div className="space-y-1.5 text-xs mb-3">
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                  <span className="text-[#5A7A8A]">Custo Médio</span>
                  <span className="font-mono text-[#FFB300]">{ch.custoMedio}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                  <span className="text-[#5A7A8A]">Orçamento Mín.</span>
                  <span className="font-mono text-[#00E5FF]">{ch.orcamentoMinimo}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                  <span className="text-[#5A7A8A]">ROI Esperado</span>
                  <span className="font-mono text-[#00C853]">{ch.roiEsperado}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1">
                  <span className="text-[#5A7A8A]">Dificuldade</span>
                  <span className="text-[#AAB8C2]">{ch.dificuldade}</span>
                </div>
              </div>
              <p className="text-[11px] text-[#7A8A9A] mb-1"><strong>Melhor para:</strong> {ch.melhorPara}</p>
              <p className="text-[11px] text-[#FFB300] p-2 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.08)] mt-2">{ch.dica}</p>
            </GlowCard>
          ))}
        </div>

        {/* Orçamento sugerido */}
        <div className="grid md:grid-cols-2 gap-4">
          <GlowCard className="p-4" glowColor="amber">
            <h3 className="text-sm font-semibold text-[#FFB300] mb-2">Orçamento Fase 1 (Fundação)</h3>
            <p className="text-lg font-mono font-bold text-[#FFB300] mb-3">{orcF1.total}</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={budgetData} cx="50%" cy="50%" innerRadius={40} outerRadius={75} paddingAngle={3} dataKey="value" nameKey="name" stroke="none">
                  {budgetData.map((entry, i) => <Cell key={i} fill={entry.color} fillOpacity={0.85} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "#8899AA" }} />
              </PieChart>
            </ResponsiveContainer>
          </GlowCard>

          <GlowCard className="p-4">
            <h3 className="text-sm font-semibold text-[#00E5FF] mb-2">Orçamento Fase 2 (Crescimento)</h3>
            <p className="text-lg font-mono font-bold text-[#00E5FF] mb-3">{MARKETING_DATA.orcamentoSugerido.fase2.total}</p>
            <div className="space-y-2">
              {Object.entries(MARKETING_DATA.orcamentoSugerido.fase2).filter(([k]) => k !== "total").map(([key, val], i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-20 text-xs text-[#7A8A9A] capitalize">{key === "meta" ? "Meta Ads" : key === "google" ? "Google" : key}</div>
                  <div className="flex-1 h-4 rounded-full bg-[rgba(0,229,255,0.06)] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: val, backgroundColor: channelColors[i % channelColors.length], opacity: 0.8 }} />
                  </div>
                  <span className="text-xs font-mono text-[#AAB8C2] w-8">{val}</span>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Funil de Marketing — Prioridades</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#00C853]">Fundo de Funil (Conversão):</strong> Google Shopping + Remarketing. Capture quem já está buscando o produto.</p>
            <p>2. <strong className="text-[#FFB300]">Meio de Funil (Consideração):</strong> Reviews em vídeo, comparativos, e-mail marketing com automação de carrinho abandonado.</p>
            <p>3. <strong className="text-[#7C4DFF]">Topo de Funil (Awareness):</strong> Reels/TikTok orgânico, influenciadores micro, conteúdo educativo sobre tech.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
