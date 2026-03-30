import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { PACKAGING_DATA } from "@/lib/operational-data";

export default function Embalagens() {
  return (
    <Layout>
      <PageHeader
        icon="□"
        title="Embalagens"
        subtitle="Tipos, custos, fornecedores e unboxing experience para eletrônicos"
        recommendation={PACKAGING_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{PACKAGING_DATA.summary}</p>
        </GlowCard>

        <DataTable
          title="Tipos de Embalagem e Custos"
          columns={[
            { key: "tipo", label: "Tipo" },
            { key: "tamanho", label: "Tamanho" },
            { key: "custo", label: "Custo/Un", highlight: true },
            { key: "uso", label: "Uso Recomendado" },
          ]}
          data={PACKAGING_DATA.tipos}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard
            title="Fornecedores no RJ e Online"
            items={PACKAGING_DATA.fornecedoresRJ}
            color="#00E5FF"
            icon="◐"
          />
          <InfoCard
            title="Unboxing Experience — Branding de Baixo Custo"
            items={PACKAGING_DATA.unboxingExperience}
            color="#FFB300"
            icon="★"
          />
        </div>

        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-2">Custo Total de Embalagem por Pedido</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="text-center p-3 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.1)]">
              <p className="text-[10px] text-[#5A7A8A] uppercase">Acessório Pequeno</p>
              <p className="text-lg font-mono font-bold text-[#00E5FF]">~R$ 2,50</p>
              <p className="text-[10px] text-[#5A7A8A]">Envelope + bolha + fita</p>
            </div>
            <div className="text-center p-3 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.1)]">
              <p className="text-[10px] text-[#5A7A8A] uppercase">Periférico Médio</p>
              <p className="text-lg font-mono font-bold text-[#FFB300]">~R$ 4,00</p>
              <p className="text-[10px] text-[#5A7A8A]">Caixa + bolha + fita + cartão</p>
            </div>
            <div className="text-center p-3 rounded bg-[rgba(124,77,255,0.04)] border border-[rgba(124,77,255,0.1)]">
              <p className="text-[10px] text-[#5A7A8A] uppercase">Notebook/Monitor</p>
              <p className="text-lg font-mono font-bold text-[#7C4DFF]">~R$ 8,00</p>
              <p className="text-[10px] text-[#5A7A8A]">Caixa grande + espuma + fita</p>
            </div>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
