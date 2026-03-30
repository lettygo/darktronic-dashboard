import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { KPIS_DATA } from "@/lib/operational-data";
import { useApi } from "@/hooks/useApi";
import { motion } from "framer-motion";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface KPIData {
  vendas: { total: number; crescimento: number; meta: number };
  conversao: { taxa: number; crescimento: number; benchmark: number };
  ticket: { medio: number; crescimento: number; anterior: number };
  retencao: { taxa: number; crescimento: number; benchmark: number };
}

const kpiColors = ["#00E5FF", "#FFB300", "#FF5252", "#00C853", "#7C4DFF", "#FF6D00", "#2962FF", "#E1306C", "#0091EA", "#00B8D4"];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
      <p className="font-semibold text-[#00E5FF]">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || "#ccc" }} className="text-xs mt-0.5">
          {p.name}: <span className="font-mono font-bold">{typeof p.value === "number" ? p.value.toFixed(2) : p.value}</span>
        </p>
      ))}
    </div>
  );
}

// Dados simulados para gráfico de evolução
const evolutionData = [
  { mes: "Jan", vendas: 350000, meta: 400000, conversao: 2.8, retencao: 62 },
  { mes: "Fev", vendas: 420000, meta: 450000, conversao: 3.0, retencao: 64 },
  { mes: "Mar", vendas: 487500, meta: 500000, conversao: 3.2, retencao: 68.5 },
];

export default function Kpis() {
  const { data: kpis, loading } = useApi<KPIData>("/api/kpis");

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

        {/* KPIs Principais */}
        {!loading && kpis && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Vendas */}
              <GlowCard className="p-4" glowColor="cyan" delay={0}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A]">Vendas Totais</p>
                    <h3 className="text-xl font-bold text-[#00E5FF] mt-1">
                      <AnimatedCounter
                        end={kpis.vendas.total}
                        prefix="R$ "
                        suffix=" "
                        decimals={0}
                        className="font-mono"
                      />
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#5A7A8A] mb-1">Crescimento</p>
                    <p className="text-lg font-bold text-[#00C853]">
                      <AnimatedCounter
                        end={kpis.vendas.crescimento}
                        suffix="%"
                        decimals={1}
                        className="font-mono"
                      />
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgba(0,229,255,0.1)]">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#7A8A9A]">Meta</span>
                    <span className="font-mono text-[#FFB300]">R$ {kpis.vendas.meta.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[rgba(0,229,255,0.1)] mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00C853]"
                      style={{ width: `${Math.min((kpis.vendas.total / kpis.vendas.meta) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-[#5A7A8A] mt-1">
                    {((kpis.vendas.total / kpis.vendas.meta) * 100).toFixed(1)}% da meta
                  </p>
                </div>
              </GlowCard>

              {/* Conversão */}
              <GlowCard className="p-4" glowColor="amber" delay={0.1}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A]">Taxa de Conversão</p>
                    <h3 className="text-xl font-bold text-[#FFB300] mt-1">
                      <AnimatedCounter
                        end={kpis.conversao.taxa}
                        suffix="%"
                        decimals={2}
                        className="font-mono"
                      />
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#5A7A8A] mb-1">Crescimento</p>
                    <p className="text-lg font-bold text-[#00C853]">
                      <AnimatedCounter
                        end={kpis.conversao.crescimento}
                        suffix="%"
                        decimals={2}
                        className="font-mono"
                      />
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgba(255,179,0,0.1)]">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#7A8A9A]">Benchmark</span>
                    <span className="font-mono text-[#00E5FF]">{kpis.conversao.benchmark}%</span>
                  </div>
                  <p className="text-[10px] text-[#5A7A8A] mt-2">
                    {kpis.conversao.taxa > kpis.conversao.benchmark ? "✓ Acima do benchmark" : "✗ Abaixo do benchmark"}
                  </p>
                </div>
              </GlowCard>

              {/* Ticket Médio */}
              <GlowCard className="p-4" glowColor="cyan" delay={0.2}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A]">Ticket Médio</p>
                    <h3 className="text-xl font-bold text-[#00E5FF] mt-1">
                      <AnimatedCounter
                        end={kpis.ticket.medio}
                        prefix="R$ "
                        decimals={2}
                        className="font-mono"
                      />
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#5A7A8A] mb-1">Crescimento</p>
                    <p className="text-lg font-bold text-[#00C853]">
                      <AnimatedCounter
                        end={kpis.ticket.crescimento}
                        suffix="%"
                        decimals={1}
                        className="font-mono"
                      />
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgba(0,229,255,0.1)]">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#7A8A9A]">Anterior</span>
                    <span className="font-mono text-[#FFB300]">R$ {kpis.ticket.anterior.toFixed(2)}</span>
                  </div>
                </div>
              </GlowCard>

              {/* Retenção */}
              <GlowCard className="p-4" glowColor="amber" delay={0.3}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A]">Taxa de Retenção</p>
                    <h3 className="text-xl font-bold text-[#FFB300] mt-1">
                      <AnimatedCounter
                        end={kpis.retencao.taxa}
                        suffix="%"
                        decimals={1}
                        className="font-mono"
                      />
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#5A7A8A] mb-1">Crescimento</p>
                    <p className="text-lg font-bold text-[#00C853]">
                      <AnimatedCounter
                        end={kpis.retencao.crescimento}
                        suffix="%"
                        decimals={1}
                        className="font-mono"
                      />
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgba(255,179,0,0.1)]">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#7A8A9A]">Benchmark</span>
                    <span className="font-mono text-[#00E5FF]">{kpis.retencao.benchmark}%</span>
                  </div>
                </div>
              </GlowCard>
            </div>

            {/* Gráfico de Evolução */}
            <GlowCard className="p-4">
              <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Evolução de Vendas vs Meta</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={evolutionData}>
                  <defs>
                    <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFB300" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FFB300" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                  <XAxis dataKey="mes" tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="vendas" stroke="#00E5FF" fillOpacity={1} fill="url(#colorVendas)" name="Vendas (R$)" />
                  <Area type="monotone" dataKey="meta" stroke="#FFB300" fillOpacity={1} fill="url(#colorMeta)" name="Meta (R$)" />
                </AreaChart>
              </ResponsiveContainer>
            </GlowCard>

            {/* Gráfico de Métricas */}
            <GlowCard className="p-4" glowColor="amber">
              <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Evolução de Conversão e Retenção</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                  <XAxis dataKey="mes" tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="conversao" stroke="#00E5FF" strokeWidth={2} name="Conversão (%)" />
                  <Line type="monotone" dataKey="retencao" stroke="#FFB300" strokeWidth={2} name="Retenção (%)" />
                </LineChart>
              </ResponsiveContainer>
            </GlowCard>
          </>
        )}

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {KPIS_DATA.kpis.map((kpi, i) => {
            const color = kpiColors[i % kpiColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlowCard className="p-4" delay={i * 0.05}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: color }} />
                    <div>
                      <h3 className="text-sm font-bold" style={{ color }}>
                        {kpi.nome}
                      </h3>
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
              </motion.div>
            );
          })}
        </div>

        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-2">Dashboard de KPIs Recomendado</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>
              1. <strong className="text-[#00E5FF]">Google Analytics 4 (GA4)</strong> — Gratuito. Instale no dia 1. Monitore: sessões, conversão, origem do tráfego, comportamento.
            </p>
            <p>
              2. <strong className="text-[#FFB300]">Hotjar</strong> — Plano grátis. Mapas de calor e gravações de sessão. Entenda onde os clientes travam.
            </p>
            <p>
              3. <strong className="text-[#00C853]">Planilha de KPIs</strong> — Atualize semanalmente: vendas, CAC, ticket médio, margem. Simples mas essencial.
            </p>
            <p>
              4. <strong className="text-[#7C4DFF]">ERP (Bling/Tiny)</strong> — Relatórios de estoque, faturamento, NF-e. Integra com marketplaces.
            </p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
