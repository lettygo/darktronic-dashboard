import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { OPERATIONAL_COSTS } from "@/lib/operational-data";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
      <p className="font-semibold text-[#00E5FF]">{payload[0].name}</p>
      <p className="text-xs text-[#AAB8C2]">Valor: <span className="font-mono font-bold">{payload[0].value}</span></p>
    </div>
  );
}

const custoColors = ["#00E5FF", "#FFB300", "#00C853", "#7C4DFF", "#FF6D00", "#2962FF", "#FF5252", "#0091EA"];

export default function Custos() {
  const custoFixoChart = OPERATIONAL_COSTS.custosFixos
    .filter(c => c.custoMensal !== "R$ 0" && c.custoMensal !== "R$ 0–25")
    .map((c, i) => {
      const val = parseInt(c.custoMensal.replace(/[^0-9]/g, "")) || 50;
      return { name: c.item, value: val, color: custoColors[i % custoColors.length] };
    });

  return (
    <Layout>
      <PageHeader
        icon="◉"
        title="Custos e Taxas"
        subtitle="Regime tributário, custos fixos, gateways de pagamento e precificação"
        recommendation={OPERATIONAL_COSTS.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{OPERATIONAL_COSTS.summary}</p>
        </GlowCard>

        {/* Regimes tributários */}
        <div className="grid md:grid-cols-3 gap-4">
          {OPERATIONAL_COSTS.regimesTributarios.map((r, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.1} glowColor={i === 0 ? "amber" : "cyan"}>
              <h3 className="text-sm font-bold text-[#00E5FF] mb-1">{r.regime}</h3>
              <p className="text-[10px] uppercase tracking-wider text-[#5A7A8A] mb-3">{r.ideal}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Limite</span>
                  <span className="font-mono font-bold text-[#FFB300]">{r.limite}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Imposto</span>
                  <span className="font-mono text-[#00E5FF]">{r.imposto}</span>
                </div>
                <p className="text-[11px] text-[#00C853] mt-2">+ {r.pros}</p>
                <p className="text-[11px] text-[#FF5252]">− {r.contras}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Custos fixos */}
        <div className="grid md:grid-cols-2 gap-4">
          <DataTable
            title="Custos Fixos Mensais"
            columns={[
              { key: "item", label: "Item" },
              { key: "custoMensal", label: "Custo/Mês", highlight: true },
              { key: "detalhe", label: "Detalhe" },
            ]}
            data={OPERATIONAL_COSTS.custosFixos}
          />
          <GlowCard className="p-4">
            <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Distribuição de Custos Fixos</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={custoFixoChart} cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={2} dataKey="value" nameKey="name" stroke="none">
                  {custoFixoChart.map((entry, i) => <Cell key={i} fill={entry.color} fillOpacity={0.8} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "#8899AA" }} />
              </PieChart>
            </ResponsiveContainer>
          </GlowCard>
        </div>

        {/* Gateways */}
        <DataTable
          title="Gateways de Pagamento — Comparativo"
          columns={[
            { key: "nome", label: "Gateway" },
            { key: "taxaCartao", label: "Cartão", highlight: true },
            { key: "taxaPix", label: "Pix", highlight: true },
            { key: "taxaBoleto", label: "Boleto" },
            { key: "antecipacao", label: "Antecipação" },
            { key: "destaque", label: "Destaque" },
          ]}
          data={OPERATIONAL_COSTS.gateways}
        />

        {/* Precificação */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-3">Como Precificar seus Produtos</h3>
          <div className="p-3 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.1)] mb-3">
            <p className="text-xs text-[#5A7A8A] mb-1">Fórmula de Precificação</p>
            <p className="text-lg font-mono font-bold text-[#00E5FF]">{OPERATIONAL_COSTS.precificacao.formula}</p>
          </div>
          <div className="p-3 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.1)] mb-3">
            <p className="text-xs text-[#5A7A8A] mb-1">Exemplo Prático</p>
            <p className="text-sm text-[#AAB8C2]">{OPERATIONAL_COSTS.precificacao.exemplo}</p>
          </div>
          <div className="p-3 rounded bg-[rgba(255,82,82,0.04)] border border-[rgba(255,82,82,0.1)] mb-3">
            <p className="text-xs text-[#FF5252] font-semibold mb-1">Margem Mínima Recomendada</p>
            <p className="text-sm text-[#AAB8C2]">{OPERATIONAL_COSTS.precificacao.margemMinima}</p>
          </div>
          <p className="text-xs text-[#AAB8C2] mt-2 p-2 rounded bg-[rgba(0,229,255,0.03)]">{OPERATIONAL_COSTS.precificacao.dica}</p>
        </GlowCard>
      </div>
    </Layout>
  );
}
