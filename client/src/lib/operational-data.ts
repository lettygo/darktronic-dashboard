// ============================================================
// DADOS OPERACIONAIS — Pesquisa Noturna Darktronic
// 12 tópicos pesquisados em paralelo · Mar/2026
// ============================================================

// ===== 1. PRODUTOS EM ALTA =====
export const TRENDING_PRODUCTS = {
  summary: "O mercado de eletrônicos no Brasil projeta faturamento de R$ 259,8 bi em 2026. Periféricos gamer e acessórios de áudio oferecem as melhores margens (20-30%) para iniciantes.",
  recommendation: "Foque inicialmente em periféricos gamer e acessórios de áudio no Mercado Livre e Shopee, pois oferecem alta margem e demanda crescente.",
  categories: [
    {
      name: "Smartphones",
      ticketMedio: "R$ 1.200–3.500",
      margem: "10–20%",
      tendencia: "Estável",
      destaque: "Xiaomi, Samsung Galaxy A/M, iPhone recondicionado",
      demandaRJ: "Alta",
    },
    {
      name: "Periféricos Gamer",
      ticketMedio: "R$ 80–600",
      margem: "25–40%",
      tendencia: "Crescimento forte",
      destaque: "Mouses, teclados mecânicos, headsets, mousepads RGB",
      demandaRJ: "Muito Alta",
    },
    {
      name: "Fones e Áudio",
      ticketMedio: "R$ 50–500",
      margem: "30–50%",
      tendencia: "Crescimento",
      destaque: "TWS (earbuds), headphones over-ear, caixas bluetooth",
      demandaRJ: "Alta",
    },
    {
      name: "Smart Home / IoT",
      ticketMedio: "R$ 80–400",
      margem: "20–35%",
      tendencia: "Crescimento acelerado",
      destaque: "Lâmpadas smart, tomadas, câmeras, assistentes de voz",
      demandaRJ: "Média-Alta",
    },
    {
      name: "Notebooks",
      ticketMedio: "R$ 2.500–6.000",
      margem: "8–15%",
      tendencia: "Estável",
      destaque: "Notebooks para estudo/trabalho, Chromebooks",
      demandaRJ: "Alta",
    },
    {
      name: "Wearables",
      ticketMedio: "R$ 150–800",
      margem: "20–30%",
      tendencia: "Crescimento",
      destaque: "Smartwatches, smartbands, rastreadores fitness",
      demandaRJ: "Média",
    },
    {
      name: "Acessórios para Celular",
      ticketMedio: "R$ 20–150",
      margem: "50–200%",
      tendencia: "Estável-Alto",
      destaque: "Capas, películas, carregadores, cabos, suportes",
      demandaRJ: "Muito Alta",
    },
    {
      name: "Câmeras e Drones",
      ticketMedio: "R$ 500–5.000",
      margem: "15–25%",
      tendencia: "Nicho crescente",
      destaque: "Action cameras, drones DJI Mini, webcams HD",
      demandaRJ: "Média",
    },
  ],
  sazonalidade: [
    { mes: "Janeiro", evento: "Volta às aulas", produtos: "Notebooks, tablets, mochilas tech" },
    { mes: "Março", evento: "Dia do Consumidor", produtos: "Promoções gerais, smartphones" },
    { mes: "Maio", evento: "Dia das Mães", produtos: "Smartphones, fones, smartwatches" },
    { mes: "Junho", evento: "Dia dos Namorados", produtos: "Fones premium, wearables, caixas BT" },
    { mes: "Agosto", evento: "Dia dos Pais", produtos: "Gadgets, drones, periféricos" },
    { mes: "Outubro", evento: "Dia das Crianças", produtos: "Tablets, consoles, headsets gamer" },
    { mes: "Novembro", evento: "Black Friday", produtos: "TUDO — maior pico do ano" },
    { mes: "Dezembro", evento: "Natal", produtos: "Presentes tech, kits, bundles" },
  ],
};

// ===== 2. TAXAS DE MARKETPLACES =====
export const MARKETPLACE_FEES = {
  summary: "As comissões variam de 10% a 20% dependendo do marketplace e categoria. O Mercado Livre é o mais caro mas tem maior volume. Amazon FBA oferece logística integrada.",
  recommendation: "Aproveite a taxa promocional de 9,9% do Magalu para novos vendedores e utilize a Amazon Brasil (FBA) para logística eficiente.",
  marketplaces: [
    {
      name: "Mercado Livre",
      comissao: "10–19%",
      taxaFixa: "R$ 6 (itens < R$ 79)",
      frete: "Mercado Envios (obrigatório)",
      pagamento: "Mercado Pago (4,99% + taxa fixa)",
      prazoRecebimento: "14 dias (pode antecipar)",
      pros: "Maior audiência do Brasil, 155M visitas/mês, Mercado Envios Full",
      contras: "Comissões altas, concorrência intensa, regras rígidas",
      idealPara: "Volume e visibilidade",
    },
    {
      name: "Shopee",
      comissao: "14–20%",
      taxaFixa: "R$ 3 por venda",
      frete: "Shopee Envios (subsidiado)",
      pagamento: "Integrado (sem taxa extra)",
      prazoRecebimento: "8–10 dias",
      pros: "Crescimento de 16,8%, público jovem, frete grátis subsidiado",
      contras: "Ticket médio baixo, guerra de preços, fim do teto de R$100",
      idealPara: "Acessórios e itens de baixo ticket",
    },
    {
      name: "Amazon Brasil",
      comissao: "10–12%",
      taxaFixa: "R$ 2 (plano individual) ou R$ 19/mês (profissional)",
      frete: "FBA disponível (Amazon cuida da logística)",
      pagamento: "Amazon Pay",
      prazoRecebimento: "14 dias",
      pros: "FBA (logística completa), Prime, confiança da marca, taxas menores",
      contras: "Menor volume que ML, FBA tem custos de armazenagem",
      idealPara: "Produtos com boa margem, escala com FBA",
    },
    {
      name: "KaBuM Marketplace",
      comissao: "~18%",
      taxaFixa: "Variável",
      frete: "KaBuM Envios",
      pagamento: "Integrado",
      prazoRecebimento: "15–20 dias",
      pros: "Público tech qualificado, alto ticket médio",
      contras: "Comissão alta, exigências de qualidade rigorosas",
      idealPara: "Hardware e periféricos premium",
    },
    {
      name: "Magazine Luiza",
      comissao: "9,9–16%",
      taxaFixa: "Sem taxa fixa",
      frete: "Magalu Entregas",
      pagamento: "Integrado",
      prazoRecebimento: "14 dias",
      pros: "Taxa promocional 9,9% para novos, boa logística, marca forte",
      contras: "Menor tráfego que ML e Shopee, burocracia no cadastro",
      idealPara: "Eletrônicos com boa margem, início com taxas baixas",
    },
  ],
  comparativoR500: [
    { marketplace: "Mercado Livre", comissao: "R$ 75 (15%)", taxas: "R$ 6", frete: "~R$ 20", liquido: "~R$ 399" },
    { marketplace: "Shopee", comissao: "R$ 70 (14%)", taxas: "R$ 3", frete: "Subsidiado", liquido: "~R$ 427" },
    { marketplace: "Amazon BR", comissao: "R$ 55 (11%)", taxas: "R$ 2", frete: "FBA ~R$ 15", liquido: "~R$ 428" },
    { marketplace: "Magazine Luiza", comissao: "R$ 50 (9,9%)", taxas: "R$ 0", frete: "~R$ 18", liquido: "~R$ 432" },
  ],
};

// ===== 3. MARKETING DIGITAL =====
export const MARKETING_DATA = {
  summary: "O CPC médio para eletrônicos no Google Ads varia de R$ 2,50 a R$ 25. Meta Ads teve aumento de 12,15% nos custos. TikTok e Reels são os canais com melhor custo-benefício para novos e-commerces.",
  recommendation: "Concentre o orçamento inicial no Google Shopping para capturar demanda de fundo de funil e utilize marketing de conteúdo orgânico em Reels/TikTok.",
  channels: [
    {
      name: "Google Ads (Shopping)",
      custoMedio: "CPC R$ 2,50–25,00",
      orcamentoMinimo: "R$ 500/mês",
      roiEsperado: "ROAS 3x–8x",
      dificuldade: "Média",
      melhorPara: "Capturar demanda existente, fundo de funil",
      dica: "Use Google Shopping com feed de produtos otimizado. Foque em long-tail keywords.",
    },
    {
      name: "Meta Ads (Instagram/Facebook)",
      custoMedio: "CPM R$ 51,30",
      orcamentoMinimo: "R$ 300/mês",
      roiEsperado: "ROAS 2x–5x",
      dificuldade: "Média-Alta",
      melhorPara: "Awareness, remarketing, público lookalike",
      dica: "Use Reels Ads para maior alcance. Remarketing com catálogo de produtos.",
    },
    {
      name: "TikTok Ads",
      custoMedio: "CPM US$ 3,20–10,00",
      orcamentoMinimo: "R$ 200/mês",
      roiEsperado: "ROAS 2x–6x",
      dificuldade: "Baixa-Média",
      melhorPara: "Público jovem, viralização, awareness",
      dica: "Conteúdo nativo (não parecer anúncio). Reviews e unboxing performam melhor.",
    },
    {
      name: "SEO / Orgânico",
      custoMedio: "R$ 0 (tempo)",
      orcamentoMinimo: "R$ 0",
      roiEsperado: "ROI altíssimo (longo prazo)",
      dificuldade: "Alta (tempo)",
      melhorPara: "Tráfego sustentável, autoridade, reduzir CAC",
      dica: "Blog com reviews, comparativos, 'melhor X para Y'. Fichas técnicas completas.",
    },
    {
      name: "E-mail Marketing",
      custoMedio: "R$ 50–300/mês (ferramenta)",
      orcamentoMinimo: "R$ 50/mês",
      roiEsperado: "ROI 36:1 (média do setor)",
      dificuldade: "Baixa",
      melhorPara: "Retenção, carrinho abandonado, promoções",
      dica: "Use Mailchimp ou RD Station. Automação de carrinho abandonado recupera 5-15% das vendas.",
    },
    {
      name: "Influenciadores Tech",
      custoMedio: "R$ 200–5.000/post",
      orcamentoMinimo: "R$ 500/mês",
      roiEsperado: "Variável (awareness)",
      dificuldade: "Média",
      melhorPara: "Credibilidade, reviews autênticos, público nichado",
      dica: "Micro-influenciadores (10k-100k) do RJ. Envie produtos para review em troca de conteúdo.",
    },
  ],
  orcamentoSugerido: {
    fase1: { total: "R$ 1.000–2.000/mês", google: "40%", meta: "25%", tiktok: "15%", email: "10%", influencers: "10%" },
    fase2: { total: "R$ 3.000–5.000/mês", google: "35%", meta: "25%", tiktok: "15%", email: "10%", influencers: "15%" },
  },
};

// ===== 4. FRETES E LOGÍSTICA =====
export const SHIPPING_DATA = {
  summary: "Correios reajustaram 9,6% em 2025. Melhor Envio oferece descontos de até 80%. Fulfillment (ML Full, Amazon FBA) é ideal para escalar mas tem custos de armazenagem.",
  recommendation: "Utilize o Melhor Envio para diversificar entregas entre Correios e Jadlog, e adote embalagens discretas para eletrônicos.",
  opcoes: [
    {
      nome: "Correios — PAC",
      prazo: "5–12 dias úteis",
      custoMedio: "R$ 18–45 (RJ → SP)",
      limites: "30kg, 200cm (C+L+A)",
      pros: "Cobertura nacional, rastreamento, contrato comercial com desconto",
      contras: "Greves, atrasos, limite de peso, reajustes anuais",
    },
    {
      nome: "Correios — SEDEX",
      prazo: "1–3 dias úteis",
      custoMedio: "R$ 25–70 (RJ → SP)",
      limites: "30kg, 200cm (C+L+A)",
      pros: "Rápido, confiável, rastreamento completo",
      contras: "Caro para itens pesados, reajustes frequentes",
    },
    {
      nome: "Jadlog — .Package",
      prazo: "3–7 dias úteis",
      custoMedio: "R$ 15–35 (RJ → SP)",
      limites: "Até 150kg",
      pros: "Mais barato que Correios para itens pesados, sem limite de 30kg",
      contras: "Cobertura menor em cidades pequenas",
    },
    {
      nome: "Loggi",
      prazo: "1–5 dias úteis",
      custoMedio: "R$ 12–30",
      limites: "Variável",
      pros: "Coleta no endereço, bom para RJ/SP, preços competitivos",
      contras: "Cobertura limitada fora dos grandes centros",
    },
    {
      nome: "Melhor Envio (agregador)",
      prazo: "Variável (compara opções)",
      custoMedio: "Até 80% de desconto",
      limites: "Depende da transportadora",
      pros: "Compara preços, desconto em volume, integra com plataformas",
      contras: "Precisa gerar etiqueta, sem contrato direto",
    },
    {
      nome: "Mercado Envios Full",
      prazo: "1–2 dias úteis",
      custoMedio: "Incluso na comissão ML",
      limites: "Produtos no CD do ML",
      pros: "Entrega ultrarrápida, selo Full, mais visibilidade no ML",
      contras: "Custo de armazenagem (aumento de 7,6% em 2026), só para ML",
    },
    {
      nome: "Amazon FBA",
      prazo: "1–2 dias úteis (Prime)",
      custoMedio: "R$ 5–15 por unidade",
      limites: "Depende do tamanho",
      pros: "Logística completa, selo Prime, devoluções gerenciadas",
      contras: "Custos de armazenagem, só para Amazon",
    },
  ],
  dicasRJ: [
    "Negocie contrato comercial com os Correios após 50+ envios/mês",
    "Use Jadlog para envios pesados (notebooks, monitores) — mais barato que SEDEX",
    "Melhor Envio é essencial para comparar preços em tempo real",
    "Ofereça frete grátis acima de R$ 299 — aumenta conversão em 30-40%",
    "Embalagens discretas (sem marca do produto) reduzem furtos no transporte",
    "Seguro de transporte é obrigatório para eletrônicos acima de R$ 200",
  ],
};

// ===== 5. KPIs =====
export const KPIS_DATA = {
  summary: "Taxa de conversão média do e-commerce brasileiro é 0,5-1,1%. Abandono de carrinho chega a 82%. O ticket médio de eletrônicos supera R$ 1.200.",
  recommendation: "Foque na otimização do checkout e na retenção de clientes para maximizar o LTV, dado o alto ticket médio de eletrônicos.",
  kpis: [
    { nome: "Taxa de Conversão", formula: "(Vendas / Visitas) × 100", benchmark: "0,5% – 1,1%", meta: "1,5% (ano 1)", ferramenta: "Google Analytics 4", explicacao: "Percentual de visitantes que compram. Eletrônicos tendem a ter conversão menor pelo alto ticket." },
    { nome: "Ticket Médio", formula: "Faturamento / Nº de Pedidos", benchmark: "R$ 614 (eletrônicos)", meta: "R$ 400–600", ferramenta: "ERP / Plataforma", explicacao: "Valor médio por pedido. Estratégias de cross-sell e bundles aumentam o ticket." },
    { nome: "CAC", formula: "Investimento Marketing / Novos Clientes", benchmark: "R$ 50–150", meta: "< R$ 80", ferramenta: "Google Ads + GA4", explicacao: "Custo para adquirir cada cliente. Deve ser menor que a margem do primeiro pedido." },
    { nome: "LTV", formula: "Ticket Médio × Frequência × Tempo", benchmark: "3–5x o CAC", meta: "R$ 800+", ferramenta: "CRM / Planilha", explicacao: "Valor total que um cliente gera ao longo do tempo. Retenção é mais barata que aquisição." },
    { nome: "Taxa de Rejeição", formula: "Sessões de 1 página / Total", benchmark: "35–55%", meta: "< 45%", ferramenta: "Google Analytics 4", explicacao: "Visitantes que saem sem interagir. Alta rejeição indica problemas de UX ou tráfego desqualificado." },
    { nome: "Abandono de Carrinho", formula: "(Carrinhos criados - Compras) / Carrinhos", benchmark: "70% – 82%", meta: "< 70%", ferramenta: "Plataforma + Hotjar", explicacao: "Altíssimo no Brasil. E-mail de recuperação e checkout simplificado são essenciais." },
    { nome: "ROAS", formula: "Receita de Ads / Investimento em Ads", benchmark: "3x – 8x", meta: "> 4x", ferramenta: "Google Ads / Meta Ads", explicacao: "Retorno sobre investimento em anúncios. Abaixo de 3x geralmente não é sustentável." },
    { nome: "NPS", formula: "% Promotores - % Detratores", benchmark: "50+ (bom)", meta: "> 60", ferramenta: "Pesquisa pós-venda", explicacao: "Mede satisfação e lealdade. Acima de 70 é excelente." },
    { nome: "Taxa de Devolução", formula: "Devoluções / Vendas × 100", benchmark: "15% – 20%", meta: "< 10%", ferramenta: "ERP / Plataforma", explicacao: "Eletrônicos têm taxa alta. Descrições detalhadas e fotos reais reduzem devoluções." },
    { nome: "Giro de Estoque", formula: "CMV / Estoque Médio", benchmark: "6–12x/ano", meta: "> 8x", ferramenta: "ERP", explicacao: "Quantas vezes o estoque é renovado. Alto giro = menos capital parado." },
  ],
};

// ===== 6. LOGÍSTICA DE PRODUTOS =====
export const PRODUCT_LOGISTICS = {
  summary: "Eletrônicos exigem armazenamento em 15-25°C e 30-60% umidade. ERP de baixo custo (Bling/Tiny) custa R$ 60-150/mês. Código EAN (GS1) custa R$ 600-1000/ano.",
  recommendation: "Inicie com estoque próprio mínimo (3-5 SKUs de alto giro) usando um ERP de baixo custo (Bling/Tiny) e evolua para fulfillment conforme escalar.",
  armazenamento: {
    temperatura: "15–25°C (ideal)",
    umidade: "30–60% (com desumidificador se necessário)",
    cuidados: [
      "Proteção antiestática (ESD) para componentes sensíveis",
      "Prateleiras organizadas por categoria e SKU",
      "Área seca, ventilada, sem incidência solar direta",
      "Controle de pragas (roedores podem danificar cabos)",
      "Câmeras de segurança no estoque",
    ],
  },
  gestaoEstoque: [
    { metodo: "FIFO (First In, First Out)", descricao: "Primeiro que entra, primeiro que sai. Ideal para eletrônicos com ciclo de vida curto.", recomendado: true },
    { metodo: "Curva ABC", descricao: "A (20% dos SKUs = 80% do faturamento), B (30% = 15%), C (50% = 5%). Foque no A.", recomendado: true },
    { metodo: "Dropshipping", descricao: "Sem estoque próprio. Fornecedor envia direto ao cliente. Menor risco, menor margem.", recomendado: false },
    { metodo: "Consignação", descricao: "Fornecedor cede produtos, você paga após vender. Difícil de conseguir no início.", recomendado: false },
  ],
  erps: [
    { nome: "Bling", custo: "R$ 30–199/mês", destaque: "Mais popular entre PMEs, integra com ML/Shopee/Amazon", recomendado: true },
    { nome: "Tiny (Olist)", custo: "R$ 60–250/mês", destaque: "Excelente para multi-marketplace, NF-e automática", recomendado: true },
    { nome: "Omie", custo: "R$ 99–299/mês", destaque: "ERP completo com financeiro, bom para escalar", recomendado: false },
    { nome: "Mercos", custo: "R$ 80–200/mês", destaque: "Foco em vendas B2B, bom se vender para revendedores", recomendado: false },
  ],
};

// ===== 7. FORNECEDORES =====
export const SUPPLIERS_DATA = {
  summary: "Distribuidores oficiais (Ingram Micro, SND, Alcateia) exigem CNPJ e pedido mínimo. Atacadistas do Saara (RJ) oferecem acessórios com margem de 100-500%. Importação direta tem imposto de 20% + 17% ICMS.",
  recommendation: "Inicie com acessórios de alta margem via atacadistas locais (Saara RJ) e dropshipping nacional para testar demanda antes de investir em estoque.",
  distribuidores: [
    { nome: "Ingram Micro", tipo: "Distribuidor Oficial", marcas: "HP, Lenovo, Microsoft, Logitech, Samsung", pedidoMinimo: "R$ 2.000+", prazo: "3–5 dias", contato: "Portal B2B online" },
    { nome: "SND Distribuição", tipo: "Distribuidor Oficial", marcas: "Dell, Apple, Asus, TP-Link, Intelbras", pedidoMinimo: "R$ 1.500+", prazo: "3–7 dias", contato: "Cadastro via site" },
    { nome: "Alcateia", tipo: "Distribuidor Oficial", marcas: "Razer, HyperX, Corsair, Redragon, JBL", pedidoMinimo: "R$ 1.000+", prazo: "2–5 dias", contato: "Portal de revendas" },
    { nome: "Officer", tipo: "Distribuidor Oficial", marcas: "Multilaser, Positivo, Elgin, Brother", pedidoMinimo: "R$ 800+", prazo: "3–5 dias", contato: "Site + representante" },
    { nome: "Agis", tipo: "Distribuidor", marcas: "Diversos (periféricos, cabos, acessórios)", pedidoMinimo: "R$ 500+", prazo: "2–4 dias", contato: "Televendas" },
  ],
  atacadistas: [
    { nome: "Saara (RJ)", tipo: "Atacado presencial", produtos: "Acessórios, capas, cabos, fones genéricos", margem: "100–500%", dica: "Visite pessoalmente, negocie à vista para melhores preços" },
    { nome: "25 de Março (SP)", tipo: "Atacado presencial", produtos: "Eletrônicos variados, acessórios em volume", margem: "80–300%", dica: "Compre em quantidade para frete compensar a viagem" },
    { nome: "Santa Efigênia (SP)", tipo: "Atacado presencial", produtos: "Hardware, componentes, periféricos", margem: "30–100%", dica: "Melhor para hardware e componentes de PC" },
  ],
  importacao: {
    fontes: ["Alibaba (B2B, pedido mínimo)", "AliExpress Business", "DHgate", "Made-in-China"],
    impostos: "20% Imposto de Importação + 17% ICMS + PIS/COFINS",
    remessaConforme: "Programa que simplifica importação < US$ 50 (taxa de 20%)",
    prazoMedio: "15–45 dias (China → Brasil)",
    riscos: "Qualidade variável, garantia difícil, apreensão na alfândega",
  },
  dropshipping: [
    { plataforma: "Dropi", tipo: "Nacional", margem: "15–30%", prazo: "3–7 dias", custo: "R$ 30–100/mês" },
    { plataforma: "DropNacional", tipo: "Nacional", margem: "10–25%", prazo: "3–10 dias", custo: "Grátis (comissão por venda)" },
    { plataforma: "Oberlo/DSers", tipo: "Internacional", margem: "20–50%", prazo: "15–45 dias", custo: "Grátis–US$ 50/mês" },
  ],
};

// ===== 8. CUSTOS OPERACIONAIS =====
export const OPERATIONAL_COSTS = {
  summary: "MEI tem limite de R$ 81 mil/ano. Simples Nacional para comércio começa em 4%. ICMS no RJ é 20%. Gateway de pagamento cobra ~3,99% no cartão e 0,99% no Pix.",
  recommendation: "Inicie como MEI focando em periféricos gamer de alta margem e ofereça descontos no Pix para otimizar custos de gateway.",
  regimesTributarios: [
    { regime: "MEI", limite: "R$ 81.000/ano", imposto: "R$ 71,60/mês (fixo)", pros: "Mais simples, menor custo", contras: "Limite de faturamento, 1 funcionário", ideal: "Início (primeiros 6-12 meses)" },
    { regime: "ME (Simples Nacional)", limite: "R$ 4,8 milhões/ano", imposto: "4% a 19% (faixa)", pros: "Escala, mais funcionários, NF-e", contras: "Contabilidade obrigatória, mais burocracia", ideal: "Após ultrapassar MEI" },
    { regime: "EPP (Simples)", limite: "R$ 4,8 milhões/ano", imposto: "4% a 19%", pros: "Mesmas vantagens do ME", contras: "Mesmas desvantagens", ideal: "Escala maior" },
  ],
  custosFixos: [
    { item: "Plataforma e-commerce", custoMensal: "R$ 0–449", detalhe: "Nuvemshop grátis → Shopify R$ 150+" },
    { item: "Domínio (.com.br)", custoMensal: "~R$ 3,30", detalhe: "R$ 40/ano no Registro.br" },
    { item: "E-mail profissional", custoMensal: "R$ 0–25", detalhe: "Zoho grátis ou Google Workspace R$ 25" },
    { item: "ERP (Bling/Tiny)", custoMensal: "R$ 30–199", detalhe: "Essencial para NF-e e estoque" },
    { item: "Certificado Digital", custoMensal: "~R$ 12,50", detalhe: "R$ 150/ano (necessário para NF-e)" },
    { item: "Contador", custoMensal: "R$ 100–300", detalhe: "Obrigatório para ME/EPP" },
    { item: "Melhor Envio", custoMensal: "R$ 0", detalhe: "Grátis (cobra por etiqueta)" },
    { item: "Marketing (mínimo)", custoMensal: "R$ 500–2.000", detalhe: "Google Ads + Meta Ads" },
  ],
  gateways: [
    { nome: "Mercado Pago", taxaCartao: "4,99%", taxaPix: "0,99%", taxaBoleto: "R$ 3,49", antecipacao: "2,99%/mês", destaque: "Mais popular, integra com ML" },
    { nome: "PagSeguro", taxaCartao: "3,99–4,99%", taxaPix: "Grátis", taxaBoleto: "R$ 2,99", antecipacao: "2,49%/mês", destaque: "Pix grátis, boa para loja própria" },
    { nome: "Stripe", taxaCartao: "3,99% + R$ 0,39", taxaPix: "1,5%", taxaBoleto: "—", antecipacao: "—", destaque: "Internacional, API robusta" },
    { nome: "Pagar.me (Stone)", taxaCartao: "2,99–4,49%", taxaPix: "0,75%", taxaBoleto: "R$ 3,49", antecipacao: "1,99%/mês", destaque: "Taxas negociáveis, bom para escala" },
  ],
  precificacao: {
    formula: "Preço de Venda = Custo / (1 - Markup%)",
    exemplo: "Produto custo R$ 100, markup 50%: Preço = 100 / (1 - 0.50) = R$ 200",
    margemMinima: "30% (para cobrir comissões + frete + impostos + lucro)",
    dica: "Sempre calcule: Custo + Comissão marketplace + Frete + Imposto + Embalagem + Marketing = Custo Total. O que sobra é seu lucro.",
  },
};

// ===== 9. EMBALAGENS =====
export const PACKAGING_DATA = {
  summary: "Caixa de papelão 16x11x6 custa ~R$ 0,68. Envelope bolha ~R$ 1,60. Fita personalizada com logo é o melhor custo-benefício para branding.",
  recommendation: "Utilize caixas de papelão lisas por fora por segurança, invista em fita gomada personalizada com a logo Darktronic para branding.",
  tipos: [
    { tipo: "Caixa de Papelão (pequena)", tamanho: "16x11x6 cm", custo: "~R$ 0,68/un", uso: "Fones, cabos, acessórios pequenos" },
    { tipo: "Caixa de Papelão (média)", tamanho: "30x20x15 cm", custo: "~R$ 1,50/un", uso: "Headsets, mouses, teclados" },
    { tipo: "Caixa de Papelão (grande)", tamanho: "40x30x20 cm", custo: "~R$ 2,50/un", uso: "Notebooks, monitores pequenos" },
    { tipo: "Envelope Bolha", tamanho: "12x18 cm", custo: "~R$ 1,60/un", uso: "Películas, cabos, itens planos" },
    { tipo: "Plástico Bolha (rolo)", tamanho: "100m", custo: "~R$ 35,00", uso: "Proteção interna universal" },
    { tipo: "Espuma/Calço", tamanho: "Variável", custo: "~R$ 0,50–2,00/un", uso: "Proteção de cantos e impacto" },
    { tipo: "Fita Gomada Personalizada", tamanho: "Rolo 50m", custo: "~R$ 8–15/rolo", uso: "Branding + segurança (lacre)" },
  ],
  fornecedoresRJ: [
    "Embala Mais (embalamaisbr.com.br)",
    "Fremplast (fremplast.com.br)",
    "Papelão.com (papelao.com)",
    "Embalagens Paraná (online, entrega nacional)",
    "Mercado Livre (compra em lote de caixas)",
  ],
  unboxingExperience: [
    "Fita adesiva personalizada com logo Darktronic (custo-benefício ideal)",
    "Cartão de agradecimento com QR code para avaliação (R$ 0,10/un)",
    "Adesivo da marca dentro da caixa (R$ 0,05/un)",
    "Embalagem interna com papel de seda preto (R$ 0,30/un)",
    "Cupom de desconto para próxima compra impresso no cartão",
  ],
};

// ===== 10. ESTRUTURA DE VENDEDOR =====
export const SELLER_STRUCTURE = {
  summary: "Mercado Livre cobra 10-19% de comissão. Hubs de integração (Bling, Tiny) centralizam estoque e pedidos. Reputação é construída com envio rápido e atendimento.",
  recommendation: "Inicie com Mercado Livre e Shopee usando o hub de integração Tiny (Olist) para centralizar o estoque e pedidos de todos os canais.",
  passosCadastro: [
    { marketplace: "Mercado Livre", passos: "1. Criar conta PF/PJ → 2. Ativar Mercado Pago → 3. Configurar endereço de envio → 4. Criar primeiro anúncio → 5. Ativar Mercado Envios", tempoMedio: "1–2 dias" },
    { marketplace: "Shopee", passos: "1. Baixar app Shopee Seller → 2. Cadastrar CNPJ → 3. Configurar loja → 4. Criar anúncios → 5. Ativar Shopee Envios", tempoMedio: "1–3 dias" },
    { marketplace: "Amazon", passos: "1. Criar conta Seller Central → 2. Escolher plano (Individual/Pro) → 3. Enviar documentos → 4. Criar listings → 5. Configurar FBA (opcional)", tempoMedio: "3–7 dias" },
  ],
  anunciosQueVendem: [
    { elemento: "Título", dica: "Use palavras-chave + marca + modelo + característica principal. Ex: 'Headset Gamer Redragon Zeus X RGB 7.1 USB'" },
    { elemento: "Fotos", dica: "Mínimo 5 fotos: fundo branco, em uso, detalhes, escala, embalagem. 1200x1200px mínimo." },
    { elemento: "Descrição", dica: "Especificações técnicas completas + benefícios + compatibilidade + conteúdo da embalagem" },
    { elemento: "Preço", dica: "Pesquise os 5 primeiros resultados e posicione-se competitivamente. Frete grátis > preço baixo." },
    { elemento: "Ficha Técnica", dica: "Preencha TODOS os campos da ficha técnica do marketplace — melhora o SEO interno." },
  ],
  hubsIntegracao: [
    { nome: "Bling", custo: "R$ 30–199/mês", integracoes: "ML, Shopee, Amazon, Magalu, NF-e, Correios", destaque: "Mais popular entre PMEs" },
    { nome: "Tiny (Olist)", custo: "R$ 60–250/mês", integracoes: "Todos os marketplaces + NF-e + transportadoras", destaque: "Melhor para multi-marketplace" },
    { nome: "Olist (full)", custo: "Comissão por venda", integracoes: "Vende por você nos marketplaces", destaque: "Ideal para quem não quer gerenciar anúncios" },
  ],
  escala: [
    { fase: "10 vendas/mês", foco: "Aprender o processo, ganhar reputação, testar produtos" },
    { fase: "50 vendas/mês", foco: "Automatizar com ERP, expandir para 2º marketplace" },
    { fase: "200 vendas/mês", foco: "Fulfillment (Full/FBA), contratar ajudante, ampliar mix" },
    { fase: "1.000 vendas/mês", foco: "Loja própria, equipe, marketing agressivo, estoque robusto" },
  ],
};

// ===== 11. REDES SOCIAIS =====
export const SOCIAL_MEDIA_DATA = {
  summary: "Instagram Reels tem taxa de engajamento de 4,3%. TikTok Shop cobra 6% de comissão. WhatsApp Business é essencial para atendimento e vendas diretas.",
  recommendation: "Concentre os esforços iniciais em Reels e TikToks autênticos de unboxing/reviews, direcionando o tráfego para WhatsApp Business.",
  plataformas: [
    {
      nome: "Instagram",
      foco: "Reels (reviews, unboxing), Stories (bastidores, ofertas), Feed (produtos)",
      frequencia: "3–5 Reels/semana + Stories diários",
      engajamento: "4,3% (média tech)",
      dica: "Reels de 15-30s com review rápido performam melhor. Use hashtags: #tech #gamer #eletronicos #darktronic",
      ferramentas: "Later, Canva, CapCut",
    },
    {
      nome: "TikTok",
      foco: "Reviews rápidos, unboxing, comparativos, trends tech",
      frequencia: "5–7 vídeos/semana",
      engajamento: "Alto (algoritmo favorece contas novas)",
      dica: "Conteúdo nativo e autêntico. Não pareça anúncio. TikTok Shop disponível (6% comissão).",
      ferramentas: "CapCut, TikTok Studio",
    },
    {
      nome: "YouTube",
      foco: "Reviews detalhados, comparativos, tutoriais, Shorts",
      frequencia: "1–2 vídeos longos/semana + Shorts diários",
      engajamento: "Médio (mas SEO forte)",
      dica: "Shorts reaproveitam Reels/TikToks. Vídeos longos geram autoridade e SEO.",
      ferramentas: "DaVinci Resolve (grátis), Canva",
    },
    {
      nome: "WhatsApp Business",
      foco: "Atendimento, catálogo de produtos, listas de transmissão",
      frequencia: "Resposta em < 1 hora",
      engajamento: "Altíssimo (98% taxa de abertura)",
      dica: "Catálogo com fotos e preços. Automação com chatbot. Listas de transmissão para promoções.",
      ferramentas: "WhatsApp Business API, Zenvia",
    },
    {
      nome: "Telegram",
      foco: "Canal de ofertas, grupo de comunidade tech",
      frequencia: "1–3 posts/dia",
      engajamento: "Alto (público engajado)",
      dica: "Crie canal 'Darktronic Ofertas' com promoções exclusivas. Grupo para dúvidas tech.",
      ferramentas: "Telegram nativo",
    },
  ],
  calendarioEditorial: [
    { dia: "Segunda", conteudo: "Review de produto (Reels + TikTok)", tipo: "Educativo" },
    { dia: "Terça", conteudo: "Dica tech rápida (Stories + Shorts)", tipo: "Valor" },
    { dia: "Quarta", conteudo: "Unboxing de novidade (Reels + TikTok)", tipo: "Entretenimento" },
    { dia: "Quinta", conteudo: "Comparativo (A vs B) (YouTube + Reels)", tipo: "Educativo" },
    { dia: "Sexta", conteudo: "Oferta da semana (Stories + WhatsApp + Telegram)", tipo: "Vendas" },
    { dia: "Sábado", conteudo: "Bastidores / Setup do dia (Stories)", tipo: "Humanização" },
    { dia: "Domingo", conteudo: "Enquete / Interação com seguidores", tipo: "Engajamento" },
  ],
};

// ===== 12. PLATAFORMAS DE E-COMMERCE =====
export const ECOMMERCE_PLATFORMS = {
  summary: "Nuvemshop oferece plano grátis ideal para começar. Shopify custa US$ 29/mês mas tem ecossistema robusto. Loja Integrada tem plano grátis com limitações.",
  recommendation: "Inicie com o plano gratuito da Nuvemshop para validar o negócio sem custos fixos, aproveitando o Nuvem Pago integrado.",
  plataformas: [
    {
      nome: "Nuvemshop",
      custoMensal: "Grátis → R$ 449/mês",
      taxaVenda: "0% (planos pagos) a 2% (grátis)",
      pros: "Plano grátis, integra com ML/Shopee, Nuvem Pago, templates brasileiros, suporte em PT",
      contras: "Templates limitados no grátis, checkout menos customizável",
      integracoes: "ML, Shopee, Instagram Shopping, Google Shopping, Bling, Tiny",
      ideal: "Melhor para começar no Brasil com zero custo",
      nota: 9,
    },
    {
      nome: "Shopify",
      custoMensal: "US$ 29–299/mês (~R$ 150–1.500)",
      taxaVenda: "0,5–2% (se não usar Shopify Payments)",
      pros: "Ecossistema gigante de apps, temas premium, checkout otimizado, escalável",
      contras: "Preço em dólar, apps pagos essenciais, suporte em inglês",
      integracoes: "Todos os marketplaces via apps, Google, Meta, TikTok",
      ideal: "Para quem quer escalar internacionalmente",
      nota: 8,
    },
    {
      nome: "Tray",
      custoMensal: "R$ 19–449/mês",
      taxaVenda: "0%",
      pros: "Brasileira, sem taxa por venda, bom suporte, integrações nativas",
      contras: "Interface menos moderna, plano básico limitado",
      integracoes: "ML, Shopee, Amazon, Bling, Correios",
      ideal: "Alternativa brasileira com bom custo-benefício",
      nota: 7,
    },
    {
      nome: "Loja Integrada",
      custoMensal: "Grátis → R$ 299/mês",
      taxaVenda: "0%",
      pros: "Plano grátis (50 produtos), fácil de usar, brasileira",
      contras: "Limitado no grátis (50 produtos, 5.000 visitas), poucos recursos avançados",
      integracoes: "ML, PagSeguro, Correios",
      ideal: "Para testar com pouquíssimos produtos",
      nota: 6,
    },
    {
      nome: "WooCommerce",
      custoMensal: "R$ 20–100 (hospedagem)",
      taxaVenda: "0%",
      pros: "Open source, totalmente customizável, sem limites, milhares de plugins",
      contras: "Requer conhecimento técnico, manutenção, segurança por conta própria",
      integracoes: "Tudo via plugins (WordPress)",
      ideal: "Para quem tem conhecimento técnico ou desenvolvedor",
      nota: 7,
    },
  ],
  recomendacaoFinal: "Para a Darktronic começar com baixo orçamento no RJ: Nuvemshop (plano grátis) + Mercado Livre + Shopee. Migre para plano pago da Nuvemshop ou Shopify quando atingir 100+ vendas/mês.",
};
