import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { KPIS_DATA } from "@/lib/operational-data";

const kpiColors = ["#00E5FF", "#FFB300", "#FF5252", "#00C853", "#7C4DFF", "#FF6D00", "#2962FF", "#E1306C", "#0091EA", "#00B8D4"];

export default function Kpis() {
  return (
    <Layout>
      <PageHeader
        icon="◆"
        title="KPIs e Métricas"
        subtitle="Indicadores essenciais, fórmulas, benchmarks e ferramentas de monitoramento"
        recommendation={KPIS_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{KPIS_DATA.summary}</p>
        </GlowCard>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {KPIS_DATA.kpis.map((kpi, i) => {
            const color = kpiColors[i % kpiColors.length];
            return (
              <GlowCard key={i} className="p-4" delay={i * 0.05}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: color }} />
                  <div>
                    <h3 className="text-sm font-bold" style={{ color }}>{kpi.nome}</h3>
                    <p className="text-[10px] text-[#5A7A8A]">Ferramenta: {kpi.ferramenta}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.06)] text-center">
                    <p className="text-[8px] uppercase text-[#5A7A8A]">Benchmark</p>
                    <p className="text-xs font-mono font-bold text-[#00E5FF]">{kpi.benchmark}</p>
                  </div>
                  <div className="p-2 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.06)] text-center">
                    <p className="text-[8px] uppercase text-[#5A7A8A]">Meta</p>
                    <p className="text-xs font-mono font-bold text-[#FFB300]">{kpi.meta}</p>
                  </div>
                  <div className="p-2 rounded bg-[rgba(0,229,255,0.02)] border border-[rgba(0,229,255,0.06)] text-center">
                    <p className="text-[8px] uppercase text-[#5A7A8A]">Fórmula</p>
                    <p className="text-[10px] font-mono text-[#AAB8C2]">{kpi.formula}</p>
                  </div>
                </div>
                <p className="text-xs text-[#7A8A9A] leading-relaxed">{kpi.explicacao}</p>
              </GlowCard>
            );
          })}
        </div>

        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-2">Dashboard de KPIs Recomendado</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#00E5FF]">Google Analytics 4 (GA4)</strong> — Gratuito. Instale no dia 1. Monitore: sessões, conversão, origem do tráfego, comportamento.</p>
            <p>2. <strong className="text-[#FFB300]">Hotjar</strong> — Plano grátis. Mapas de calor e gravações de sessão. Entenda onde os clientes travam.</p>
            <p>3. <strong className="text-[#00C853]">Planilha de KPIs</strong> — Atualize semanalmente: vendas, CAC, ticket médio, margem. Simples mas essencial.</p>
            <p>4. <strong className="text-[#7C4DFF]">ERP (Bling/Tiny)</strong> — Relatórios de estoque, faturamento, NF-e. Integra com marketplaces.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
