import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ===== API ROUTES =====

  // Dados de mercado
  app.get("/api/market-overview", (_req, res) => {
    res.json({
      faturamento2025: 235.5,
      crescimentoAnual: 15.3,
      marketGlobal: 1.13,
      cagrProjetado: 16.87,
      timestamp: new Date().toISOString(),
    });
  });

  // Dados de competidores
  app.get("/api/competitors", (_req, res) => {
    res.json([
      { id: 1, name: "Amazon", visits: 89.2, varAnual: 12.5, desktop: 45, mobile: 55, pagesPerVisit: 4.2 },
      { id: 2, name: "Mercado Livre", visits: 72.5, varAnual: 8.3, desktop: 40, mobile: 60, pagesPerVisit: 3.8 },
      { id: 3, name: "B2Brazil", visits: 45.8, varAnual: 22.1, desktop: 50, mobile: 50, pagesPerVisit: 5.1 },
      { id: 4, name: "Shopee", visits: 38.2, varAnual: 35.7, desktop: 35, mobile: 65, pagesPerVisit: 3.2 },
      { id: 5, name: "Darktronic", visits: 12.4, varAnual: 0, desktop: 48, mobile: 52, pagesPerVisit: 4.5, isHighlight: true },
    ]);
  });

  // Dados de produtos
  app.get("/api/products", (_req, res) => {
    res.json([
      { id: 1, name: "Notebook Gamer", category: "Computadores", price: 5500, stock: 45, trend: "up", variance: 23.5 },
      { id: 2, name: "Monitor 4K", category: "Periféricos", price: 1800, stock: 78, trend: "up", variance: 18.2 },
      { id: 3, name: "Teclado Mecânico", category: "Periféricos", price: 450, stock: 120, trend: "stable", variance: 2.1 },
      { id: 4, name: "Mouse Wireless", category: "Periféricos", price: 120, stock: 200, trend: "down", variance: -5.3 },
      { id: 5, name: "Headset Gamer", category: "Áudio", price: 350, stock: 89, trend: "up", variance: 15.8 },
    ]);
  });

  // Dados de estoque
  app.get("/api/inventory", (_req, res) => {
    res.json({
      totalItems: 2847,
      lowStock: 45,
      outOfStock: 12,
      warehouseA: { capacity: 1000, used: 850, percentage: 85 },
      warehouseB: { capacity: 800, used: 620, percentage: 77.5 },
      warehouseC: { capacity: 600, used: 380, percentage: 63.3 },
    });
  });

  // Dados de precificação
  app.get("/api/pricing", (_req, res) => {
    res.json([
      { product: "Notebook Gamer", cost: 3200, sellPrice: 5500, margin: 71.9, competitors: [5400, 5600, 5450] },
      { product: "Monitor 4K", cost: 900, sellPrice: 1800, margin: 100, competitors: [1750, 1850, 1800] },
      { product: "Teclado Mecânico", cost: 200, sellPrice: 450, margin: 125, competitors: [440, 460, 455] },
      { product: "Mouse Wireless", cost: 50, sellPrice: 120, margin: 140, competitors: [115, 125, 120] },
      { product: "Headset Gamer", cost: 150, sellPrice: 350, margin: 133.3, competitors: [340, 360, 350] },
    ]);
  });

  // Dados de KPIs
  app.get("/api/kpis", (_req, res) => {
    res.json({
      vendas: {
        total: 487500,
        crescimento: 23.5,
        meta: 500000,
      },
      conversao: {
        taxa: 3.2,
        crescimento: 1.2,
        benchmark: 2.8,
      },
      ticket: {
        medio: 487.5,
        crescimento: 8.3,
        anterior: 450,
      },
      retencao: {
        taxa: 68.5,
        crescimento: 5.2,
        benchmark: 65,
      },
    });
  });

  // Dados de marketplaces
  app.get("/api/marketplaces", (_req, res) => {
    res.json([
      { name: "Amazon", sales: 125000, percentage: 35, trend: "up", growth: 12.5 },
      { name: "Mercado Livre", sales: 98000, percentage: 27.5, trend: "up", growth: 8.3 },
      { name: "Shopee", sales: 67500, percentage: 19, trend: "up", growth: 22.1 },
      { name: "B2Brazil", sales: 45000, percentage: 12.6, trend: "stable", growth: 2.1 },
      { name: "Loja Própria", sales: 52000, percentage: 14.6, trend: "up", growth: 18.7 },
    ]);
  });

  // Dados de custos
  app.get("/api/costs", (_req, res) => {
    res.json({
      marketplace: { amazon: 15, mercadoLivre: 12, shopee: 8, b2brazil: 10 },
      shipping: { economico: 25, padrao: 40, expresso: 80 },
      taxes: { icms: 18, pis: 1.65, cofins: 7.6 },
      operational: { warehouse: 5000, staff: 15000, utilities: 3000 },
    });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`API available at http://localhost:${port}/api/*`);
  });
}

startServer().catch(console.error);
