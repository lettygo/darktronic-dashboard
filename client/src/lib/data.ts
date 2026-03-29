// ============================================================
// DADOS CENTRALIZADOS — Painel Estratégico Darktronic
// Fonte: SimilarWeb, Semrush, Conversion.com.br, ElectroShop
// Referência: Janeiro–Março 2026
// ============================================================

export const MARKET_OVERVIEW = {
  faturamento2025: "R$ 235,5 bi",
  crescimentoAnual: "+15,3%",
  totalAcessos12m: "33,6 bi",
  marketSize2026: "US$ 69,21 bi",
  cagrProjetado: "16,87%",
  penetracaoAdultos: "90%",
  globalMarket: "US$ 1,13 tri",
  globalGrowth: "7,52%",
};

export interface Competitor {
  name: string;
  domain: string;
  visits: number; // milhões
  desktop: number; // %
  mobile: number; // %
  varAnual: number; // %
  bounceRate?: number;
  pagesPerVisit?: number;
  avgDuration?: string;
  isHighlight?: boolean;
  isBenchmark?: boolean;
  isTarget?: boolean;
}

export const COMPETITORS: Competitor[] = [
  { name: "Mercado Livre", domain: "mercadolivre.com.br", visits: 155.61, desktop: 63.6, mobile: 36.4, varAnual: -1.4, bounceRate: 36.98, pagesPerVisit: 7.86, avgDuration: "7:25" },
  { name: "Shopee", domain: "shopee.com.br", visits: 106.41, desktop: 42.6, mobile: 57.5, varAnual: 16.8, isHighlight: true },
  { name: "Amazon BR", domain: "amazon.com.br", visits: 102.31, desktop: 40.7, mobile: 59.3, varAnual: -17.4, bounceRate: 35.50, pagesPerVisit: 5.57, avgDuration: "2:42" },
  { name: "OLX", domain: "olx.com.br", visits: 45.97, desktop: 44.1, mobile: 55.9, varAnual: -16.8 },
  { name: "AliExpress", domain: "aliexpress.com", visits: 34.67, desktop: 55.6, mobile: 44.4, varAnual: -28.8 },
  { name: "Magazine Luiza", domain: "magazineluiza.com.br", visits: 31.77, desktop: 31.9, mobile: 68.2, varAnual: -25.1 },
  { name: "KaBuM", domain: "kabum.com.br", visits: 15.16, desktop: 42.9, mobile: 57.1, varAnual: -25.1, bounceRate: 37.56, pagesPerVisit: 3.88, avgDuration: "2:56" },
  { name: "Casas Bahia", domain: "casasbahia.com.br", visits: 12.28, desktop: 33.8, mobile: 66.2, varAnual: -16.9 },
  { name: "Pichau", domain: "pichau.com.br", visits: 9.67, desktop: 34.5, mobile: 65.5, varAnual: -30.7 },
  { name: "Terabyte Shop", domain: "terabyteshop.com.br", visits: 7.78, desktop: 31.0, mobile: 69.1, varAnual: -25.1, bounceRate: 38.87, pagesPerVisit: 4.19, avgDuration: "3:53" },
];

export const ELECTROSHOP_BENCHMARK = {
  name: "ElectroShop",
  visits: 5.0,
  bounceRate: 32.0,
  pagesPerVisit: 6.2,
  avgDuration: "5:45",
  strengths: [
    "IA Generativa para recomendação (+35% conversão)",
    "Realidade Aumentada reduz hesitação em 40%",
    "Conteúdo rico: vídeos 360°, reviews verificados",
    "Economia Circular: eletrônicos recondicionados",
  ],
  strategies: [
    "Social Commerce via TikTok e Instagram",
    "Personalização com algoritmos de ML",
    "Programa de fidelidade gamificado",
    "Logística reversa sustentável",
  ],
};

export const DARKTRONIC_META = {
  name: "Darktronic",
  location: "Rio de Janeiro, RJ",
  metaAno1: {
    visitas: "5.000–20.000/mês",
    bounceRate: "< 55%",
    pagesPerVisit: "> 3,0",
    avgDuration: "> 2:00",
    conversao: "1,0–2,0%",
    ticketMedio: "R$ 300–600",
  },
  metaAno2: {
    visitas: "50.000–200.000/mês",
    bounceRate: "< 45%",
    pagesPerVisit: "> 4,0",
    avgDuration: "> 3:00",
    conversao: "1,5–3,0%",
    ticketMedio: "R$ 400–800",
  },
};

export const MARKET_SHARE = [
  { name: "Mercado Livre", value: 16.0, color: "#00B8D4" },
  { name: "Shopee", value: 12.5, color: "#0091EA" },
  { name: "Amazon BR", value: 9.7, color: "#2962FF" },
  { name: "Magazine Luiza", value: 2.7, color: "#6200EA" },
  { name: "KaBuM", value: 1.3, color: "#00E5FF" },
  { name: "Outros", value: 57.8, color: "#263238" },
];

export const TRAFFIC_SOURCES = {
  mercadoLivre: [
    { name: "Direto", value: 41.89, color: "#00E5FF" },
    { name: "Orgânico", value: 30.0, color: "#00B8D4" },
    { name: "Pago", value: 12.0, color: "#FFB300" },
    { name: "Social", value: 8.0, color: "#7C4DFF" },
    { name: "Referência", value: 6.0, color: "#00C853" },
    { name: "E-mail", value: 2.11, color: "#FF6D00" },
  ],
  amazonBR: [
    { name: "Direto", value: 43.81, color: "#00E5FF" },
    { name: "Orgânico", value: 28.0, color: "#00B8D4" },
    { name: "Pago", value: 14.0, color: "#FFB300" },
    { name: "Social", value: 7.0, color: "#7C4DFF" },
    { name: "Referência", value: 5.0, color: "#00C853" },
    { name: "E-mail", value: 2.19, color: "#FF6D00" },
  ],
};

export const EVOLUTION_DATA = [
  { month: "Out/25", mercadoLivre: 393.6, shopee: 298.6, amazon: 233.8, magalu: 57.1, casasBahia: 37.1 },
  { month: "Nov/25", mercadoLivre: 420.6, shopee: 317.4, amazon: 286.4, magalu: 75.0, casasBahia: 44.0 },
  { month: "Dez/25", mercadoLivre: 416.1, shopee: 325.1, amazon: 252.9, magalu: 68.9, casasBahia: 39.0 },
];

export const SWOT = {
  strengths: [
    "Especialização em eletrônicos (curadoria técnica)",
    "Atendimento humanizado e personalizado",
    "Foco geográfico no RJ (logística ágil)",
    "Agilidade de PME para adaptar mix",
  ],
  weaknesses: [
    "Brand awareness = zero (marca nova)",
    "Capital limitado para estoque e marketing",
    "Sem histórico de avaliações online",
    "Dependência inicial de tráfego pago",
  ],
  opportunities: [
    "Mercado de R$ 235,5 bi em crescimento",
    "Queda de tráfego dos grandes players",
    "Segmento gamer/tech em expansão",
    "IA e AR como diferenciais competitivos",
  ],
  threats: [
    "Domínio do ML (155M visitas/mês)",
    "Pressão de preço de plataformas asiáticas",
    "Investimento contínuo em marketing digital",
    "Logística complexa em algumas regiões do RJ",
  ],
};

export const ACTION_PLAN = [
  {
    phase: "Fase 1 — Fundação",
    period: "Meses 1–6",
    color: "#00E5FF",
    items: [
      "Loja virtual mobile-first com UX otimizado",
      "Perfis nas redes sociais (Instagram, TikTok, YouTube)",
      "SEO desde o início — blog com reviews e comparativos",
      "Cadastro no Mercado Livre e Shopee como canal adicional",
      "Foco em nicho: gamer, home office ou automação",
    ],
  },
  {
    phase: "Fase 2 — Crescimento",
    period: "Meses 7–18",
    color: "#FFB300",
    items: [
      "Google Ads e Meta Ads (R$ 500–2.000/mês)",
      "Programa de fidelidade simples",
      "Parcerias com micro-influenciadores tech do RJ",
      "Expandir mix com base em dados de busca",
      "Implementar chatbot com IA para conversão",
    ],
  },
  {
    phase: "Fase 3 — Consolidação",
    period: "18+ meses",
    color: "#00C853",
    items: [
      "Canal YouTube e newsletter técnica",
      "Atendimento pós-venda como diferencial (NPS)",
      "Analytics avançado com GA4 + BI",
      "Realidade Aumentada para visualização de produtos",
      "Economia circular: eletrônicos recondicionados",
    ],
  },
];

export const POSITIONING_DATA = [
  { name: "Mercado Livre", x: 155.61, y: 7.86, size: 3000, color: "#00B8D4" },
  { name: "Amazon BR", x: 102.31, y: 5.57, size: 1500, color: "#2962FF" },
  { name: "Shopee", x: 106.41, y: 3.5, size: 1800, color: "#0091EA" },
  { name: "Magazine Luiza", x: 31.77, y: 4.0, size: 600, color: "#6200EA" },
  { name: "KaBuM", x: 15.16, y: 3.88, size: 300, color: "#00E5FF" },
  { name: "Casas Bahia", x: 12.28, y: 3.2, size: 250, color: "#546E7A" },
  { name: "Pichau", x: 9.67, y: 4.5, size: 200, color: "#00C853" },
  { name: "Terabyte Shop", x: 7.78, y: 4.19, size: 150, color: "#FFB300" },
  { name: "ElectroShop", x: 5.0, y: 6.2, size: 120, color: "#7C4DFF" },
  { name: "Darktronic (Meta)", x: 2.0, y: 5.5, size: 80, color: "#FF6D00" },
];
