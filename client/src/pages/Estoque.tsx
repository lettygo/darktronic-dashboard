import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { PRODUCT_LOGISTICS } from "@/lib/operational-data";

export default function Estoque() {
  return (
    <Layout>
      <PageHeader
        icon="▤"
        title="Estoque e Armazém"
        subtitle="Armazenamento, gestão de estoque, ERPs e cuidados com eletrônicos"
        recommendation={PRODUCT_LOGISTICS.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{PRODUCT_LOGISTICS.summary}</p>
        </GlowCard>

        {/* Armazenamento */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-3">Condições de Armazenamento para Eletrônicos</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.1)] text-center">
              <p className="text-[10px] text-[#5A7A8A] uppercase">Temperatura</p>
              <p className="text-lg font-mono font-bold text-[#00E5FF]">{PRODUCT_LOGISTICS.armazenamento.temperatura}</p>
            </div>
            <div className="p-3 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.1)] text-center">
              <p className="text-[10px] text-[#5A7A8A] uppercase">Umidade</p>
              <p className="text-lg font-mono font-bold text-[#FFB300]">{PRODUCT_LOGISTICS.armazenamento.umidade}</p>
            </div>
          </div>
          <ul className="space-y-1.5">
            {PRODUCT_LOGISTICS.armazenamento.cuidados.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
                <span className="text-[#FFB300] text-xs mt-0.5">▸</span> {c}
              </li>
            ))}
          </ul>
        </GlowCard>

        {/* Métodos de gestão */}
        <div className="grid md:grid-cols-2 gap-4">
          {PRODUCT_LOGISTICS.gestaoEstoque.map((m, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.08} glowColor={m.recomendado ? "cyan" : "none"}>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-bold text-[#00E5FF]">{m.metodo}</h3>
                {m.recomendado && <span className="text-[9px] px-1.5 py-0.5 rounded bg-[rgba(0,200,83,0.15)] text-[#00C853] font-semibold">RECOMENDADO</span>}
              </div>
              <p className="text-sm text-[#AAB8C2]">{m.descricao}</p>
            </GlowCard>
          ))}
        </div>

        {/* ERPs */}
        <DataTable
          title="Sistemas de Gestão (ERP)"
          columns={[
            { key: "nome", label: "ERP" },
            { key: "custo", label: "Custo/Mês", highlight: true },
            { key: "destaque", label: "Destaque" },
            { key: "recomendado", label: "Rec.", render: (v: boolean) => v ? <span className="text-[#00C853] font-bold">SIM</span> : <span className="text-[#5A7A8A]">—</span> },
          ]}
          data={PRODUCT_LOGISTICS.erps}
        />

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Plano de Estoque para a Darktronic</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#FFB300]">Início (0-3 meses):</strong> 3-5 SKUs de alto giro. Compre 10-20 unidades de cada. Estoque em casa ou sala comercial pequena.</p>
            <p>2. <strong className="text-[#FFB300]">Crescimento (3-6 meses):</strong> Expanda para 15-20 SKUs. Use Bling ou Tiny para controle. Considere Curva ABC.</p>
            <p>3. <strong className="text-[#FFB300]">Escala (6-12 meses):</strong> Fulfillment (ML Full ou Amazon FBA) para os mais vendidos. Estoque próprio para itens de nicho.</p>
            <p>4. <strong className="text-[#FFB300]">Consolidação (12+ meses):</strong> Sala comercial dedicada. WMS simples. Código EAN (GS1) para todos os produtos.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
