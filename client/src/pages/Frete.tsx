import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { SHIPPING_DATA } from "@/lib/operational-data";

export default function Frete() {
  return (
    <Layout>
      <PageHeader
        icon="◇"
        title="Frete e Envio"
        subtitle="Correios, transportadoras, fulfillment e dicas de logística para o RJ"
        recommendation={SHIPPING_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{SHIPPING_DATA.summary}</p>
        </GlowCard>

        {/* Opções de frete */}
        <div className="grid md:grid-cols-2 gap-4">
          {SHIPPING_DATA.opcoes.map((op, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.06}>
              <h3 className="text-sm font-bold text-[#00E5FF] mb-2">{op.nome}</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.08)]">
                  <p className="text-[9px] uppercase text-[#5A7A8A]">Prazo</p>
                  <p className="text-xs font-mono font-bold text-[#00E5FF]">{op.prazo}</p>
                </div>
                <div className="p-2 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.08)]">
                  <p className="text-[9px] uppercase text-[#5A7A8A]">Custo Médio</p>
                  <p className="text-xs font-mono font-bold text-[#FFB300]">{op.custoMedio}</p>
                </div>
              </div>
              <p className="text-[10px] text-[#5A7A8A] mb-1">Limites: <span className="text-[#AAB8C2]">{op.limites}</span></p>
              <p className="text-[11px] text-[#00C853] mt-1.5">+ {op.pros}</p>
              <p className="text-[11px] text-[#FF5252] mt-1">− {op.contras}</p>
            </GlowCard>
          ))}
        </div>

        {/* Dicas RJ */}
        <InfoCard
          title="Dicas de Frete para o Rio de Janeiro"
          items={SHIPPING_DATA.dicasRJ}
          color="#FFB300"
          icon="★"
        />

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Estratégia de Frete Recomendada</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#00E5FF]">Melhor Envio</strong> como ferramenta principal — compara preços em tempo real entre Correios, Jadlog, Loggi e outras.</p>
            <p>2. <strong className="text-[#FFB300]">Frete grátis acima de R$ 299</strong> — aumenta conversão em 30-40%. Embuta parte do frete no preço do produto.</p>
            <p>3. <strong className="text-[#00C853]">Mercado Envios Full</strong> para os produtos mais vendidos no ML — entrega em 1-2 dias, selo Full, mais visibilidade.</p>
            <p>4. <strong className="text-[#7C4DFF]">Jadlog</strong> para itens pesados (notebooks, monitores) — mais barato que SEDEX para peso acima de 5kg.</p>
            <p>5. <strong className="text-[#FF6D00]">Seguro obrigatório</strong> para eletrônicos acima de R$ 200 — protege contra extravio e danos.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
