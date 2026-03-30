import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { TRENDING_PRODUCTS } from "@/lib/operational-data";
import { useApi } from "@/hooks/useApi";
import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from "recharts";
import { motion } from "framer-motion";

const marginColors: Record<string, string> = {
  "50–200%": "#00C853", "30–50%": "#00E5FF", "25–40%": "#00B8D4",
  "20–35%": "#0091EA", "20–30%": "#2962FF", "15–25%": "#6200EA",
  "10–20%": "#FFB300", "8–15%": "#FF6D00",
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  trend: "up" | "down" | "stable";
  variance: number;
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

export default function Produtos() {
  const { data: products, loading } = useApi<Product[]>("/api/products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // Dados para gráfico de preços
  const priceChartData = useMemo(() => {
    if (!products) return [];
    return products.map((p) => ({
      name: p.name.substring(0, 12),
      price: p.price,
      stock: p.stock,
      trend: p.trend === "up" ? "↑" : p.trend === "down" ? "↓" : "→",
    }));
  }, [products]);

  // Categorias únicas
  const categories = useMemo(() => {
    if (!products) return [];
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  const chartData = TRENDING_PRODUCTS.categories.map((c) => {
    const margemNum = parseInt(c.margem.split("–")[1] || c.margem);
    return { name: c.name, margem: margemNum, fill: marginColors[c.margem] || "#00E5FF" };
  });

  return (
    <Layout>
      <PageHeader
        icon="▣"
        title="Produtos em Alta"
        subtitle="Eletrônicos mais vendidos e com maior potencial de lucro — 2025/2026"
        recommendation={TRENDING_PRODUCTS.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        {/* Summary */}
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{TRENDING_PRODUCTS.summary}</p>
        </GlowCard>

        {/* Filtros */}
        <GlowCard className="p-4">
          <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Filtros e Busca</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Busca */}
            <div>
              <label className="text-xs text-[#7A8A9A] mb-2 block">Buscar Produto</label>
              <input
                type="text"
                placeholder="Ex: Notebook, Monitor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-[#AAB8C2] placeholder-[#5A7A8A] focus:outline-none focus:border-[#00E5FF] transition-all"
              />
            </div>

            {/* Categoria */}
            <div>
              <label className="text-xs text-[#7A8A9A] mb-2 block">Categoria</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-[#AAB8C2] focus:outline-none focus:border-[#00E5FF] transition-all"
              >
                <option value="all">Todas as categorias</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-xs text-[#5A7A8A] mt-3">
            Mostrando <span className="text-[#00E5FF] font-mono">{filteredProducts.length}</span> de{" "}
            <span className="text-[#FFB300] font-mono">{products?.length || 0}</span> produtos
          </p>
        </GlowCard>

        {/* Gráfico de Preços */}
        {!loading && priceChartData.length > 0 && (
          <GlowCard className="p-4">
            <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Análise de Preços e Estoque</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
                <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 10 }} />
                <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#00E5FF" strokeWidth={2} name="Preço (R$)" />
                <Line type="monotone" dataKey="stock" stroke="#FFB300" strokeWidth={2} name="Estoque (un)" />
              </LineChart>
            </ResponsiveContainer>
          </GlowCard>
        )}

        {/* Margem por categoria chart */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-semibold text-[#FFB300] mb-3">Margem de Lucro Máxima por Categoria (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,229,255,0.06)" />
              <XAxis dataKey="name" tick={{ fill: "#5A7A8A", fontSize: 10 }} angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fill: "#5A7A8A", fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="margem" name="Margem (%)" radius={[4, 4, 0, 0]} barSize={30}>
                {chartData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} fillOpacity={0.85} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlowCard>

        {/* Tabela de produtos filtrados */}
        {!loading && filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <GlowCard className="p-4">
              <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">Produtos Filtrados</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[rgba(0,229,255,0.1)]">
                      <th className="text-left py-2 px-3 text-[#7A8A9A] font-semibold">Produto</th>
                      <th className="text-left py-2 px-3 text-[#7A8A9A] font-semibold">Categoria</th>
                      <th className="text-right py-2 px-3 text-[#7A8A9A] font-semibold">Preço</th>
                      <th className="text-right py-2 px-3 text-[#7A8A9A] font-semibold">Estoque</th>
                      <th className="text-center py-2 px-3 text-[#7A8A9A] font-semibold">Tendência</th>
                      <th className="text-right py-2 px-3 text-[#7A8A9A] font-semibold">Variação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, i) => (
                      <motion.tr
                        key={product.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-[rgba(0,229,255,0.05)] hover:bg-[rgba(0,229,255,0.03)] transition-colors"
                      >
                        <td className="py-2 px-3 text-[#AAB8C2]">{product.name}</td>
                        <td className="py-2 px-3 text-[#7A8A9A]">{product.category}</td>
                        <td className="py-2 px-3 text-right font-mono text-[#00E5FF]">R$ {product.price.toLocaleString("pt-BR")}</td>
                        <td className="py-2 px-3 text-right font-mono text-[#FFB300]">{product.stock}</td>
                        <td className="py-2 px-3 text-center">
                          <span
                            className={`text-lg ${
                              product.trend === "up"
                                ? "text-[#00C853]"
                                : product.trend === "down"
                                ? "text-[#FF5252]"
                                : "text-[#FFB300]"
                            }`}
                          >
                            {product.trend === "up" ? "↑" : product.trend === "down" ? "↓" : "→"}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-right font-mono">
                          <span
                            className={
                              product.variance > 0
                                ? "text-[#00C853]"
                                : product.variance < 0
                                ? "text-[#FF5252]"
                                : "text-[#AAB8C2]"
                            }
                          >
                            {product.variance > 0 ? "+" : ""}{product.variance.toFixed(1)}%
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlowCard>
          </motion.div>
        )}

        {/* Estado de carregamento */}
        {loading && (
          <GlowCard className="p-8 text-center">
            <div className="inline-block">
              <div className="w-8 h-8 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-[#7A8A9A] mt-2">Carregando produtos...</p>
          </GlowCard>
        )}

        {/* Tabela de categorias */}
        <DataTable
          title="Categorias de Produtos — Análise Completa"
          columns={[
            { key: "name", label: "Categoria" },
            { key: "ticketMedio", label: "Ticket Médio", highlight: true },
            { key: "margem", label: "Margem", highlight: true },
            { key: "tendencia", label: "Tendência" },
            { key: "demandaRJ", label: "Demanda RJ" },
            { key: "destaque", label: "Produtos Destaque" },
          ]}
          data={TRENDING_PRODUCTS.categories}
        />
      </div>
    </Layout>
  );
}
