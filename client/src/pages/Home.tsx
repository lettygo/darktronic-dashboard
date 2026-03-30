/*
 * Design: "Command Center" — Sci-fi HUD
 * Fundo escuro (#0A0E1A), acentos ciano (#00E5FF) e âmbar (#FFB300)
 * Tipografia: Space Grotesk (títulos) + JetBrains Mono (dados)
 * Layout: Sidebar fixa + grid assimétrico de painéis
 */

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GlowCard } from "@/components/GlowCard";
import { SectionTitle } from "@/components/SectionTitle";
import {
  MARKET_OVERVIEW, COMPETITORS, ELECTROSHOP_BENCHMARK, DARKTRONIC_META,
  MARKET_SHARE, SWOT, ACTION_PLAN, POSITIONING_DATA, EVOLUTION_DATA,
  TRAFFIC_SOURCES,
} from "@/lib/data";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, ScatterChart, Scatter,
  ZAxis, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";



const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/hero-command-center-NNVxchPaToGjskaCRTm9UY.webp";
const LOGO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/darktronic-logo-glow-gr4JhEAU6yPLDfSJ8NHnH8.webp";
const MARKET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/market-analysis-illustration-fWnRxbvLbetAKFtB8zD5y5.webp";
const SWOT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/swot-strategic-bg-Kv5i2SiG24sUZRUmncw9BA.webp";


function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NAV_ITEMS_INTERNAL = [
  { id: "overview", label: "Panorama", icon: "◈" },
  { id: "ranking", label: "Ranking", icon: "▦" },
  { id: "engagement", label: "Engajamento", icon: "◉" },
  { id: "sources", label: "Fontes", icon: "◎" },
  { id: "evolution", label: "Evolução", icon: "◇" },
  { id: "positioning", label: "Posição", icon: "⬡" },
  { id: "electroshop", label: "ElectroShop", icon: "★" },
  { id: "swot", label: "SWOT", icon: "✦" },
  { id: "plan", label: "Plano", icon: "▸" },
  { id: "benchmarks", label: "Metas", icon: "◆" },
];

// Custom tooltip for charts
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
      <p className="font-semibold text-[#00E5FF]">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color || "#ccc" }} className="text-xs mt-0.5">
          {p.name}: <span className="font-mono font-bold">{typeof p.value === "number" ? p.value.toLocaleString("pt-BR") : p.value}</span>
        </p>
      ))}
    </div>
  );
}

export default function Home() {
  const visitData = COMPETITORS.map((c) => ({
    name: c.name.length > 12 ? c.name.slice(0, 10) + "…" : c.name,
    fullName: c.name,
    visits: c.visits,
    fill: c.isHighlight ? "#FFB300" : "#00E5FF",
  }));

  const varAnualData = COMPETITORS.map((c) => ({
    name: c.name.length > 12 ? c.name.slice(0, 10) + "…" : c.name,
    fullName: c.name,
    var: c.varAnual,
    fill: c.varAnual > 0 ? "#00C853" : "#FF5252",
  }));

  const engagementSites = COMPETITORS.filter((c) => c.pagesPerVisit);

  const desktopMobileData = COMPETITORS.map((c) => ({
    name: c.name.length > 10 ? c.name.slice(0, 8) + "…" : c.name,
    desktop: c.desktop,
    mobile: c.mobile,
  }));

  return (
    <Layout>
      <div>
        {/* Sub-nav para seções internas */}
        <div className="sticky top-0 z-20 bg-[rgba(8,12,24,0.9)] backdrop-blur-md border-b border-[rgba(0,229,255,0.08)] px-4 py-2 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {NAV_ITEMS_INTERNAL.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-[#7A8A9A] hover:text-[#00E5FF] hover:bg-[rgba(0,229,255,0.05)] transition-all whitespace-nowrap"
              >
                <span className="opacity-60">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[340px] overflow-hidden">
          <img src={HERO_IMG} alt="Painel de comando futurista com gráficos e dados de análise de mercado de eletrônicos" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,14,26,0.6)] to-background" />
          <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-8 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs tracking-[0.3em] text-[#FFB300] uppercase mb-2 font-mono">Centro de Comando</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Space Grotesk'" }}>
                Painel Estratégico <span className="text-glow-cyan text-[#00E5FF]">Darktronic</span>
              </h1>
              <p className="text-sm text-[#8899AA] mt-2 max-w-xl">
                Análise competitiva completa do mercado de e-commerce de eletrônicos no Brasil. Dados atualizados de Jan–Mar 2026.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="px-4 md:px-6 pb-20 space-y-10 max-w-[1200px]">

          {/* ===== PANORAMA DO MERCADO ===== */}
          <section className="pt-8">
            <SectionTitle id="overview" icon="◈" title="Panorama do Mercado" subtitle="Indicadores macroeconômicos do e-commerce brasileiro" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Faturamento 2025", value: 235.5, prefix: "R$ ", suffix: " bi", decimals: 1, color: "cyan" },
                { label: "Crescimento Anual", value: 15.3, suffix: "%", decimals: 1, color: "cyan" },
                { label: "Market Global", value: 1.13, prefix: "US$ ", suffix: " tri", decimals: 2, color: "amber" },
                { label: "CAGR Projetado", value: 16.87, suffix: "%", decimals: 2, color: "amber" },
              ].map((item, i) => (
                <GlowCard key={i} delay={i * 0.1} glowColor={item.color as any} className="p-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A] mb-1">{item.label}</p>
                  <AnimatedCounter
                    end={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    className={`text-2xl font-bold ${item.color === "cyan" ? "text-[#00E5FF]" : "text-[#FFB300]"}`}
                  />
                </GlowCard>
              ))}
            </div>

            <GlowCard delay={0.3} className="mt-4 p-4 flex flex-col md:flex-row gap-4 items-center">
              <img src={MARKET_IMG} alt="Mercado brasileiro" className="w-full md:w-72 h-40 object-cover rounded-md opacity-80" />
              <div className="flex-1">
                <p className="text-sm text-[#AAB8C2] leading-relaxed">
                  O segmento de <strong className="text-[#00E5FF]">eletrônicos e tecnologia</strong> representa entre 50% e 57% do volume transacionado no e-commerce brasileiro, sendo a categoria mais relevante do setor. A combinação de alta demanda, ticket médio elevado e crescente digitalização do consumidor carioca cria uma <strong className="text-[#FFB300]">janela de oportunidade real</strong> para novos entrantes focados em nicho.
                </p>
                <div className="flex gap-4 mt-3">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#00E5FF] font-mono">33,6 bi</p>
                    <p className="text-[10px] text-[#5A7A8A]">Acessos 12m</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#FFB300] font-mono">90%</p>
                    <p className="text-[10px] text-[#5A7A8A]">Penetração</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#00C853] font-mono">US$ 69 bi</p>
                    <p className="text-[10px] text-[#5A7A8A]">Market 2026</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </section>

          {/* ===== RANKING DE TRÁFEGO ===== */}
          <section>
            <SectionTitle id="ranking" icon="▦" title="Ranking de Tráfego" subtitle="Top 10 e-commerces — Semrush Jan/2026 (milhões de visitas)" />

            <GlowCard className="p-4">
              <ResponsiveContainer width="100%" height={380}>
                <BarChart data={visitData} layout="vertical" margin={{ left: 10, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#5A7A8A", fontSize: 11 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#AAB8C2", fontSize: 11 }} width={100} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="visits" name="Visitas (M)" radius={[0, 4, 4, 0]} barSize={20}>
                    {visitData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} fillOpacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-[#4A5A6A] text-right mt-2 font-mono">Fonte: Semrush Traffic Analytics · Jan/2026</p>
            </GlowCard>

            {/* Variação anual */}
            <GlowCard className="p-4 mt-4" glowColor="amber">
              <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Variação Anual de Tráfego (Jan/2026 vs Jan/2025)</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={varAnualData} margin={{ bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                  <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 10 }} angle={-30} textAnchor="end" height={60} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                  <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="var" name="Variação (%)" radius={[4, 4, 0, 0]} barSize={28}>
                    {varAnualData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-2 p-3 rounded-md bg-[rgba(255,179,0,0.05)] border border-[rgba(255,179,0,0.15)]">
                <p className="text-xs text-[#AAB8C2]">
                  <strong className="text-[#00C853]">Shopee (+16,8%)</strong> é o único player com crescimento. Todos os demais registram queda, indicando <strong className="text-[#FFB300]">redistribuição de audiência</strong> — oportunidade para novos entrantes.
                </p>
              </div>
            </GlowCard>
          </section>

          {/* ===== ENGAJAMENTO ===== */}
          <section>
            <SectionTitle id="engagement" icon="◉" title="Métricas de Engajamento" subtitle="Qualidade do tráfego — SimilarWeb Fev/2026" />

            <div className="grid md:grid-cols-2 gap-4">
              {/* Tabela de engajamento */}
              <GlowCard className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[rgba(0,229,255,0.1)]">
                        <th className="text-left py-2 text-[#5A7A8A] text-xs font-normal">Plataforma</th>
                        <th className="text-right py-2 text-[#5A7A8A] text-xs font-normal">Rejeição</th>
                        <th className="text-right py-2 text-[#5A7A8A] text-xs font-normal">Pág/Visita</th>
                        <th className="text-right py-2 text-[#5A7A8A] text-xs font-normal">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      {engagementSites.map((site, i) => (
                        <tr key={i} className="border-b border-[rgba(0,229,255,0.05)] hover:bg-[rgba(0,229,255,0.03)] transition-colors">
                          <td className="py-2.5 text-[#E0E8EE] font-medium">{site.name}</td>
                          <td className="py-2.5 text-right font-mono text-[#AAB8C2]">{site.bounceRate}%</td>
                          <td className="py-2.5 text-right font-mono text-[#00E5FF] font-semibold">{site.pagesPerVisit}</td>
                          <td className="py-2.5 text-right font-mono text-[#AAB8C2]">{site.avgDuration}</td>
                        </tr>
                      ))}
                      <tr className="border-b border-[rgba(0,229,255,0.05)] bg-[rgba(124,77,255,0.05)]">
                        <td className="py-2.5 text-[#7C4DFF] font-medium">ElectroShop ★</td>
                        <td className="py-2.5 text-right font-mono text-[#AAB8C2]">~32%</td>
                        <td className="py-2.5 text-right font-mono text-[#7C4DFF] font-semibold">6.20</td>
                        <td className="py-2.5 text-right font-mono text-[#AAB8C2]">5:45</td>
                      </tr>
                      <tr className="bg-[rgba(255,109,0,0.05)]">
                        <td className="py-2.5 text-[#FF6D00] font-medium">Darktronic (Meta)</td>
                        <td className="py-2.5 text-right font-mono text-[#AAB8C2]">&lt;40%</td>
                        <td className="py-2.5 text-right font-mono text-[#FF6D00] font-semibold">5.50</td>
                        <td className="py-2.5 text-right font-mono text-[#AAB8C2]">4:30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GlowCard>

              {/* Desktop vs Mobile */}
              <GlowCard className="p-4">
                <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Desktop vs Mobile</h3>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={desktopMobileData} margin={{ bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                    <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 9 }} angle={-25} textAnchor="end" height={50} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                    <YAxis tick={{ fill: "#5A7A8A", fontSize: 10 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, color: "#8899AA" }} />
                    <Bar dataKey="desktop" name="Desktop" fill="#00E5FF" fillOpacity={0.7} radius={[2, 2, 0, 0]} barSize={14} />
                    <Bar dataKey="mobile" name="Mobile" fill="#FFB300" fillOpacity={0.7} radius={[2, 2, 0, 0]} barSize={14} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-2 p-2 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.1)]">
                  <p className="text-[11px] text-[#8899AA]">57–68% do tráfego tech é mobile. A Darktronic deve ser <strong className="text-[#00E5FF]">mobile-first</strong>.</p>
                </div>
              </GlowCard>
            </div>
          </section>

          {/* ===== FONTES DE TRÁFEGO ===== */}
          <section>
            <SectionTitle id="sources" icon="◎" title="Fontes de Tráfego" subtitle="Distribuição por canal — SimilarWeb Fev/2026" />

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Mercado Livre", data: TRAFFIC_SOURCES.mercadoLivre },
                { title: "Amazon Brasil", data: TRAFFIC_SOURCES.amazonBR },
              ].map((source, si) => (
                <GlowCard key={si} className="p-4" delay={si * 0.15}>
                  <h3 className="text-sm font-semibold text-[#00E5FF] mb-2">{source.title}</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie
                        data={source.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={85}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                        stroke="none"
                      >
                        {source.data.map((entry, i) => (
                          <Cell key={i} fill={entry.color} fillOpacity={0.85} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 10, color: "#8899AA" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </GlowCard>
              ))}
            </div>

            <GlowCard className="mt-4 p-4" glowColor="amber">
              <p className="text-xs text-[#AAB8C2]">
                Para a <strong className="text-[#FF6D00]">Darktronic</strong>, o tráfego direto será inicialmente ~0%. Priorize: <strong className="text-[#00E5FF]">SEO</strong> (ROI 70% maior), <strong className="text-[#7C4DFF]">Redes Sociais</strong> (Instagram/TikTok) e <strong className="text-[#FFB300]">Ads</strong> para tração inicial.
              </p>
            </GlowCard>
          </section>

          {/* ===== EVOLUÇÃO ===== */}
          <section>
            <SectionTitle id="evolution" icon="◇" title="Evolução de Visitas" subtitle="Out–Dez 2025 (web + app) — Conversion.com.br" />

            <GlowCard className="p-4">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={EVOLUTION_DATA} margin={{ right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                  <XAxis dataKey="month" tick={{ fill: "#AAB8C2", fontSize: 12 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                  <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11, color: "#8899AA" }} />
                  <Line type="monotone" dataKey="mercadoLivre" name="Mercado Livre" stroke="#00B8D4" strokeWidth={2} dot={{ r: 4, fill: "#00B8D4" }} />
                  <Line type="monotone" dataKey="shopee" name="Shopee" stroke="#0091EA" strokeWidth={2} dot={{ r: 4, fill: "#0091EA" }} />
                  <Line type="monotone" dataKey="amazon" name="Amazon BR" stroke="#2962FF" strokeWidth={2} dot={{ r: 4, fill: "#2962FF" }} />
                  <Line type="monotone" dataKey="magalu" name="Magazine Luiza" stroke="#6200EA" strokeWidth={2} dot={{ r: 4, fill: "#6200EA" }} />
                  <Line type="monotone" dataKey="casasBahia" name="Casas Bahia" stroke="#546E7A" strokeWidth={2} dot={{ r: 4, fill: "#546E7A" }} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 p-2 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.1)]">
                <p className="text-[11px] text-[#8899AA]">Novembro concentra o pico (Black Friday). <strong className="text-[#FFB300]">Prepare campanhas e estoque com antecedência.</strong></p>
              </div>
            </GlowCard>
          </section>

          {/* ===== POSICIONAMENTO ===== */}
          <section>
            <SectionTitle id="positioning" icon="⬡" title="Mapa de Posicionamento" subtitle="Tráfego vs Engajamento — Zona de Oportunidade" />

            <GlowCard className="p-4" glowColor="amber">
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ bottom: 20, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                  <XAxis type="number" dataKey="x" name="Visitas (M)" tick={{ fill: "#5A7A8A", fontSize: 11 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} label={{ value: "Visitas Mensais (Milhões)", position: "bottom", fill: "#5A7A8A", fontSize: 11 }} />
                  <YAxis type="number" dataKey="y" name="Pág/Visita" tick={{ fill: "#5A7A8A", fontSize: 11 }} axisLine={{ stroke: "rgba(0,229,255,0.1)" }} label={{ value: "Páginas por Visita", angle: -90, position: "insideLeft", fill: "#5A7A8A", fontSize: 11 }} />
                  <ZAxis type="number" dataKey="size" range={[40, 400]} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div className="rounded-md border border-[rgba(0,229,255,0.2)] bg-[rgba(10,14,26,0.95)] px-3 py-2 text-sm shadow-lg backdrop-blur-sm">
                          <p className="font-semibold" style={{ color: d.color }}>{d.name}</p>
                          <p className="text-xs text-[#AAB8C2] mt-0.5">Visitas: <span className="font-mono font-bold text-[#00E5FF]">{d.x}M</span></p>
                          <p className="text-xs text-[#AAB8C2]">Pág/Visita: <span className="font-mono font-bold text-[#FFB300]">{d.y}</span></p>
                        </div>
                      );
                    }}
                  />
                  <Scatter data={POSITIONING_DATA} shape="circle">
                    {POSITIONING_DATA.map((entry, i) => (
                      <Cell key={i} fill={entry.color} fillOpacity={0.8} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                {POSITIONING_DATA.map((p, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                    <span className="text-[#8899AA] truncate">{p.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 p-3 rounded-md bg-[rgba(255,109,0,0.05)] border border-[rgba(255,109,0,0.15)]">
                <p className="text-xs text-[#AAB8C2]">
                  A <strong className="text-[#FF6D00]">Zona de Oportunidade</strong> (alto engajamento + nicho) é onde a Darktronic deve se posicionar. Não competir em volume com o Mercado Livre, mas em <strong className="text-[#00E5FF]">profundidade e autoridade técnica</strong>.
                </p>
              </div>
            </GlowCard>
          </section>

          {/* ===== ELECTROSHOP BENCHMARK ===== */}
          <section>
            <SectionTitle id="electroshop" icon="★" title="Benchmark: ElectroShop" subtitle="Análise estratégica do e-commerce de referência" />

            <div className="grid md:grid-cols-2 gap-4">
              <GlowCard className="p-5" glowColor="cyan">
                <h3 className="text-sm font-bold text-[#7C4DFF] mb-3">Diferenciais Estratégicos</h3>
                <ul className="space-y-2.5">
                  {ELECTROSHOP_BENCHMARK.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
                      <span className="text-[#00E5FF] mt-0.5 text-xs">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </GlowCard>

              <GlowCard className="p-5" glowColor="amber">
                <h3 className="text-sm font-bold text-[#FFB300] mb-3">Estratégias Aplicáveis</h3>
                <ul className="space-y-2.5">
                  {ELECTROSHOP_BENCHMARK.strategies.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
                      <span className="text-[#FFB300] mt-0.5 text-xs">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Engajamento", value: "6.2 pág/visita", color: "#7C4DFF" },
                { label: "Duração Média", value: "5:45 min", color: "#00E5FF" },
                { label: "Rejeição", value: "~32%", color: "#00C853" },
              ].map((m, i) => (
                <GlowCard key={i} className="p-3 text-center" delay={i * 0.1}>
                  <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A]">{m.label}</p>
                  <p className="text-lg font-bold font-mono mt-1" style={{ color: m.color }}>{m.value}</p>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* ===== SWOT ===== */}
          <section>
            <SectionTitle id="swot" icon="✦" title="Análise SWOT" subtitle="Forças, Fraquezas, Oportunidades e Ameaças" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Forças", items: SWOT.strengths, color: "#00C853", borderColor: "rgba(0,200,83,0.2)", bgColor: "rgba(0,200,83,0.03)" },
                { title: "Oportunidades", items: SWOT.opportunities, color: "#00E5FF", borderColor: "rgba(0,229,255,0.2)", bgColor: "rgba(0,229,255,0.03)" },
                { title: "Fraquezas", items: SWOT.weaknesses, color: "#FFB300", borderColor: "rgba(255,179,0,0.2)", bgColor: "rgba(255,179,0,0.03)" },
                { title: "Ameaças", items: SWOT.threats, color: "#FF5252", borderColor: "rgba(255,82,82,0.2)", bgColor: "rgba(255,82,82,0.03)" },
              ].map((quad, qi) => (
                <GlowCard key={qi} delay={qi * 0.1} glowColor="none" className="p-4" style={{ borderColor: quad.borderColor, backgroundColor: quad.bgColor }}>
                  <h3 className="text-sm font-bold mb-3" style={{ color: quad.color }}>{quad.title}</h3>
                  <ul className="space-y-2">
                    {quad.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
                        <span style={{ color: quad.color }} className="mt-0.5 text-xs">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* ===== PLANO DE AÇÃO ===== */}
          <section>
            <SectionTitle id="plan" icon="▸" title="Plano de Ação" subtitle="Roadmap estratégico em 3 fases" />

            <div className="space-y-4">
              {ACTION_PLAN.map((phase, pi) => (
                <GlowCard key={pi} delay={pi * 0.15} glowColor="none" className="p-5 border-l-2" style={{ borderLeftColor: phase.color }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: `${phase.color}20`, color: phase.color }}>
                      {phase.period}
                    </span>
                    <h3 className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#AAB8C2]">
                        <span style={{ color: phase.color }} className="mt-0.5 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* ===== BENCHMARKS / METAS ===== */}
          <section>
            <SectionTitle id="benchmarks" icon="◆" title="Metas da Darktronic" subtitle="Benchmarks realistas para os primeiros 24 meses" />

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Meta Ano 1", data: DARKTRONIC_META.metaAno1, color: "#00E5FF" },
                { title: "Meta Ano 2", data: DARKTRONIC_META.metaAno2, color: "#FFB300" },
              ].map((meta, mi) => (
                <GlowCard key={mi} delay={mi * 0.15} className="p-5">
                  <h3 className="text-sm font-bold mb-4" style={{ color: meta.color }}>{meta.title}</h3>
                  <div className="space-y-3">
                    {Object.entries(meta.data).map(([key, value], i) => {
                      const labels: Record<string, string> = {
                        visitas: "Visitas Mensais",
                        bounceRate: "Taxa de Rejeição",
                        pagesPerVisit: "Páginas/Visita",
                        avgDuration: "Duração Média",
                        conversao: "Taxa de Conversão",
                        ticketMedio: "Ticket Médio",
                      };
                      return (
                        <div key={i} className="flex justify-between items-center border-b border-[rgba(0,229,255,0.05)] pb-2">
                          <span className="text-xs text-[#5A7A8A]">{labels[key] || key}</span>
                          <span className="text-sm font-mono font-semibold" style={{ color: meta.color }}>{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Referência KaBuM */}
            <GlowCard className="mt-4 p-4" glowColor="cyan">
              <h3 className="text-sm font-semibold text-[#00E5FF] mb-2">Referência: KaBuM (benchmark do setor)</h3>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Visitas/mês", value: "15,16M" },
                  { label: "Rejeição", value: "37,56%" },
                  { label: "Pág/Visita", value: "3,88" },
                  { label: "Duração", value: "2:56" },
                  { label: "Conversão (setor)", value: "~2–3%" },
                ].map((ref, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-bold font-mono text-[#00E5FF]">{ref.value}</p>
                    <p className="text-[10px] text-[#5A7A8A]">{ref.label}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </section>

          {/* Footer */}
          <footer className="pt-10 pb-6 border-t border-[rgba(0,229,255,0.08)]">
            <div className="flex items-center gap-3 mb-3">
              <img src={LOGO_IMG} alt="Darktronic" className="w-7 h-7 object-contain opacity-60" />
              <div>
                <p className="text-xs text-[#5A7A8A]">Darktronic Eletrônicos — Painel Estratégico Central</p>
                <p className="text-[10px] text-[#3A4A5A]">Dados: SimilarWeb, Semrush, Conversion.com.br, ElectroShop · Mar/2026</p>
              </div>
            </div>
            <p className="text-[10px] text-[#3A4A5A]">Este painel é atualizado conforme novas pesquisas são adicionadas ao projeto.</p>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
