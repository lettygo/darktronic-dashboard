import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { SELLER_STRUCTURE } from "@/lib/operational-data";

export default function Vendedor() {
  return (
    <Layout>
      <PageHeader
        icon="▸"
        title="Estrutura de Vendedor"
        subtitle="Como se cadastrar, criar anúncios, ganhar reputação e escalar vendas"
        recommendation={SELLER_STRUCTURE.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{SELLER_STRUCTURE.summary}</p>
        </GlowCard>

        {/* Cadastro por marketplace */}
        <div className="grid md:grid-cols-3 gap-4">
          {SELLER_STRUCTURE.passosCadastro.map((mp, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.1}>
              <h3 className="text-sm font-bold text-[#00E5FF] mb-1">{mp.marketplace}</h3>
              <p className="text-[10px] text-[#FFB300] font-mono mb-3">Tempo: {mp.tempoMedio}</p>
              <p className="text-xs text-[#AAB8C2] leading-relaxed">{mp.passos}</p>
            </GlowCard>
          ))}
        </div>

        {/* Anúncios que vendem */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-3">Como Criar Anúncios que Vendem</h3>
          <div className="space-y-3">
            {SELLER_STRUCTURE.anunciosQueVendem.map((a, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-xs font-mono font-bold text-[#00E5FF] bg-[rgba(0,229,255,0.08)] px-2 py-1 rounded flex-shrink-0">{a.elemento}</span>
                <p className="text-sm text-[#AAB8C2]">{a.dica}</p>
              </div>
            ))}
          </div>
        </GlowCard>

        {/* Hubs de integração */}
        <DataTable
          title="Hubs de Integração (Multi-Marketplace)"
          columns={[
            { key: "nome", label: "Hub" },
            { key: "custo", label: "Custo/Mês", highlight: true },
            { key: "integracoes", label: "Integrações" },
            { key: "destaque", label: "Destaque" },
          ]}
          data={SELLER_STRUCTURE.hubsIntegracao}
        />

        {/* Escala de vendas */}
        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-3">Roadmap de Escala de Vendas</h3>
          <div className="space-y-3">
            {SELLER_STRUCTURE.escala.map((e, i) => {
              const colors = ["#00E5FF", "#FFB300", "#00C853", "#7C4DFF"];
              return (
                <div key={i} className="flex items-start gap-3 p-3 rounded border border-[rgba(0,229,255,0.06)] bg-[rgba(0,229,255,0.02)]">
                  <span className="text-sm font-mono font-bold flex-shrink-0 px-2 py-1 rounded" style={{ color: colors[i], backgroundColor: `${colors[i]}15` }}>{e.fase}</span>
                  <p className="text-sm text-[#AAB8C2]">{e.foco}</p>
                </div>
              );
            })}
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
