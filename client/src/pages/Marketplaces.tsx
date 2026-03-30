import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { MARKETPLACE_FEES } from "@/lib/operational-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

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

const mpColors = ["#00E5FF", "#FFB300", "#2962FF", "#00C853", "#7C4DFF"];

export default function Marketplaces() {
  const liquidoData = MARKETPLACE_FEES.comparativoR500.map((c, i) => ({
    name: c.marketplace,
    liquido: parseFloat(c.liquido.replace(/[^0-9.]/g, "")),
    fill: mpColors[i % mpColors.length],
  }));

  return (
    <Layout>
      <PageHeader
        icon="▦"
        title="Taxas de Marketplaces"
        subtitle="Comissões, taxas e comparativo de custos por plataforma — 2026"
        recommendation={MARKETPLACE_FEES.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{MARKETPLACE_FEES.summary}</p>
        </GlowCard>

        {/* Cards de cada marketplace */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MARKETPLACE_FEES.marketplaces.map((mp, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.08} glowColor={i === 0 ? "cyan" : i === 1 ? "amber" : "none"}>
              <h3 className="text-sm font-bold text-[#00E5FF] mb-3">{mp.name}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Comissão</span>
                  <span className="font-mono font-bold text-[#FFB300]">{mp.comissao}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Taxa Fixa</span>
                  <span className="font-mono text-[#AAB8C2]">{mp.taxaFixa}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Frete</span>
                  <span className="text-[#AAB8C2]">{mp.frete}</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(0,229,255,0.05)] pb-1.5">
                  <span className="text-[#5A7A8A]">Recebimento</span>
                  <span className="font-mono text-[#AAB8C2]">{mp.prazoRecebimento}</span>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                <p className="text-[11px] text-[#00C853]"><strong>+</strong> {mp.pros}</p>
                <p className="text-[11px] text-[#FF5252]"><strong>−</strong> {mp.contras}</p>
                <p className="text-[11px] text-[#7C4DFF]"><strong>Ideal:</strong> {mp.idealPara}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Comparativo produto R$500 */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Quanto você recebe vendendo um produto de R$ 500?</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={liquidoData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
              <XAxis dataKey="name" tick={{ fill: "#AAB8C2", fontSize: 11 }} />
              <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} domain={[380, 450]} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="liquido" name="Líquido (R$)" radius={[4, 4, 0, 0]} barSize={40}>
                {liquidoData.map((entry, i) => <Cell key={i} fill={entry.fill} fillOpacity={0.85} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlowCard>

        <DataTable
          title="Comparativo Detalhado — Venda de R$ 500"
          columns={[
            { key: "marketplace", label: "Marketplace" },
            { key: "comissao", label: "Comissão", highlight: true },
            { key: "taxas", label: "Taxas" },
            { key: "frete", label: "Frete" },
            { key: "liquido", label: "Líquido", highlight: true },
          ]}
          data={MARKETPLACE_FEES.comparativoR500}
        />

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Estratégia Multi-Marketplace</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#00C853]">Magazine Luiza</strong> — Melhor líquido (R$ 432) com taxa promocional de 9,9% para novos vendedores.</p>
            <p>2. <strong className="text-[#2962FF]">Amazon FBA</strong> — Segundo melhor líquido + logística completa (envio, devolução, atendimento).</p>
            <p>3. <strong className="text-[#00E5FF]">Mercado Livre</strong> — Maior audiência do Brasil. Comissão alta, mas volume compensa.</p>
            <p>4. <strong className="text-[#FFB300]">Shopee</strong> — Bom para acessórios de baixo ticket. Frete subsidiado atrai compradores.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
