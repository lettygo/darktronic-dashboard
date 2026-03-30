import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { TRENDING_PRODUCTS } from "@/lib/operational-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const marginColors: Record<string, string> = {
  "50–200%": "#00C853", "30–50%": "#00E5FF", "25–40%": "#00B8D4",
  "20–35%": "#0091EA", "20–30%": "#2962FF", "15–25%": "#6200EA",
  "10–20%": "#FFB300", "8–15%": "#FF6D00",
};

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

export default function Produtos() {
  const chartData = TRENDING_PRODUCTS.categories.map((c) => {
    const margemNum = parseInt(c.margem.split("–")[1] || c.margem);
    return { name: c.name, margem: margemNum, fill: marginColors[c.margem] || "#00E5FF" };
  });

  return (
    <Layout>
      <PageHeader
        icon="▣"
        title="Produtos em Alta"
        subtitle="Eletrônicos mais vendidos e com maior potencial de lucro — 2025/2026"
        recommendation={TRENDING_PRODUCTS.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        {/* Summary */}
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{TRENDING_PRODUCTS.summary}</p>
        </GlowCard>

        {/* Margem por categoria chart */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Margem de Lucro Máxima por Categoria (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
              <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 10 }} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="margem" name="Margem (%)" radius={[4, 4, 0, 0]} barSize={30}>
                {chartData.map((entry, i) => <Cell key={i} fill={entry.fill} fillOpacity={0.85} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlowCard>

        {/* Tabela de categorias */}
        <DataTable
          title="Categorias de Produtos — Análise Completa"
          columns={[
            { key: "name", label: "Categoria" },
            { key: "ticketMedio", label: "Ticket Médio", highlight: true },
            { key: "margem", label: "Margem", highlight: true },
            { key: "tendencia", label: "Tendência" },
            { key: "demandaRJ", label: "Demanda RJ" },
            { key: "destaque", label: "Produtos Destaque" },
          ]}
          data={TRENDING_PRODUCTS.categories}
        />

        {/* Sazonalidade */}
        <GlowCard className="p-4">
          <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Calendário de Sazonalidade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {TRENDING_PRODUCTS.sazonalidade.map((s, i) => (
              <div key={i} className="p-3 rounded-md border border-[rgba(0,229,255,0.08)] bg-[rgba(0,229,255,0.02)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#FFB300] font-bold">{s.mes}</span>
                </div>
                <p className="text-xs text-[#00E5FF] font-semibold">{s.evento}</p>
                <p className="text-[11px] text-[#7A8A9A] mt-1">{s.produtos}</p>
              </div>
            ))}
          </div>
        </GlowCard>

        {/* Dica estratégica */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-2">Estratégia Recomendada para a Darktronic</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#00E5FF]">Comece com Periféricos Gamer</strong> — margem de 25-40%, alta demanda no RJ, ticket acessível (R$ 80-600), fácil de estocar e enviar.</p>
            <p>2. <strong className="text-[#00E5FF]">Acessórios para Celular</strong> como segundo pilar — margem de 50-200%, altíssimo giro, baixo investimento inicial.</p>
            <p>3. <strong className="text-[#00E5FF]">Fones e Áudio</strong> como terceiro pilar — margem de 30-50%, crescimento constante, bom para conteúdo (reviews/unboxing).</p>
            <p>4. Prepare estoque extra para <strong className="text-[#FFB300]">Black Friday (novembro)</strong> — é o maior pico de vendas do ano.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
