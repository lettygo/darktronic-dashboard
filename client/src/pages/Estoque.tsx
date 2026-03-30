import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { PRODUCT_LOGISTICS } from "@/lib/operational-data";
import { useApi } from "@/hooks/useApi";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

interface InventoryData {
  totalItems: number;
  lowStock: number;
  outOfStock: number;
  warehouseA: { capacity: number; used: number; percentage: number };
  warehouseB: { capacity: number; used: number; percentage: number };
  warehouseC: { capacity: number; used: number; percentage: number };
}

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

export default function Estoque() {
  const { data: inventory, loading } = useApi<InventoryData>("/api/inventory");

  // Dados para gráfico de armazéns
  const warehouseData = inventory ? [
    { name: "Armazém A", used: inventory.warehouseA.used, capacity: inventory.warehouseA.capacity, percentage: inventory.warehouseA.percentage },
    { name: "Armazém B", used: inventory.warehouseB.used, capacity: inventory.warehouseB.capacity, percentage: inventory.warehouseB.percentage },
    { name: "Armazém C", used: inventory.warehouseC.used, capacity: inventory.warehouseC.capacity, percentage: inventory.warehouseC.percentage },
  ] : [];

  // Dados para gráfico de pizza
  const statusData = inventory ? [
    { name: "Em Estoque", value: inventory.totalItems - inventory.lowStock - inventory.outOfStock, fill: "#00C853" },
    { name: "Baixo Estoque", value: inventory.lowStock, fill: "#FFB300" },
    { name: "Fora de Estoque", value: inventory.outOfStock, fill: "#FF5252" },
  ] : [];

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

        {/* KPIs de Estoque */}
        {!loading && inventory && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Total de Itens", value: inventory.totalItems, color: "cyan" },
              { label: "Baixo Estoque", value: inventory.lowStock, color: "amber", isAlert: true },
              { label: "Fora de Estoque", value: inventory.outOfStock, color: "amber", isAlert: true },
              { label: "Taxa de Ocupação", value: ((inventory.warehouseA.used + inventory.warehouseB.used + inventory.warehouseC.used) / (inventory.warehouseA.capacity + inventory.warehouseB.capacity + inventory.warehouseC.capacity) * 100), suffix: "%", color: "cyan" },
            ].map((item, i) => (
              <GlowCard key={i} delay={i * 0.1} glowColor={item.color as any} isAlert={item.isAlert}>
                <p className="text-[10px] uppercase tracking-widest text-[#5A7A8A] mb-1">{item.label}</p>
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix || ""}
                  decimals={item.suffix ? 1 : 0}
                  className={`text-2xl font-bold ${item.color === "cyan" ? "text-[#00E5FF]" : "text-[#FFB300]"}`}
                />
              </GlowCard>
            ))}
          </div>
        )}

        {/* Gráfico de Armazéns */}
        {!loading && warehouseData.length > 0 && (
          <GlowCard className="p-4">
            <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Capacidade de Armazéns</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={warehouseData} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="used" name="Utilizado" fill="#00E5FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="capacity" name="Capacidade Total" fill="rgba(0,229,255,0.2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlowCard>
        )}

        {/* Gráfico de Status */}
        {!loading && statusData.length > 0 && (
          <GlowCard className="p-4" glowColor="amber">
            <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Distribuição de Status do Estoque</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </GlowCard>
        )}

        {/* Detalhes de Armazéns */}
        {!loading && inventory && (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Armazém A", data: inventory.warehouseA },
              { name: "Armazém B", data: inventory.warehouseB },
              { name: "Armazém C", data: inventory.warehouseC },
            ].map((warehouse, i) => (
              <motion.div
                key={warehouse.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlowCard className="p-4">
                  <h3 className="text-sm font-bold text-[#00E5FF] mb-3">{warehouse.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#7A8A9A]">Ocupação</span>
                      <span className="font-mono text-[#FFB300]">{warehouse.data.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[rgba(0,229,255,0.1)] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FFB300] rounded-full transition-all"
                        style={{ width: `${warehouse.data.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-[#5A7A8A] mt-2">
                      <span className="font-mono">{warehouse.data.used} / {warehouse.data.capacity} unidades</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        )}

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
