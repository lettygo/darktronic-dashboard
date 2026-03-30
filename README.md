# 🎯 Darktronic Dashboard — Painel Estratégico de E-commerce

**Darktronic Dashboard** é um painel estratégico completo para análise de mercado, gestão operacional e tomada de decisão em e-commerce de eletrônicos. Desenvolvido com a estética **"Command Center"** — inspirada em painéis de controle futuristas com design Sci-Fi HUD.

---

## 🚀 Características Principais

### 📊 Análise de Mercado
- **Panorama do Mercado:** Indicadores macroeconômicos do e-commerce brasileiro
- **Ranking de Tráfego:** Top 10 e-commerces com análise de variação anual
- **Engajamento:** Páginas por visita, taxa de bounce, tempo médio
- **Posicionamento:** Análise competitiva com SWOT e benchmarks

### 🛍️ Gestão Operacional
- **Produtos em Alta:** Catálogo com filtros, busca e análise de margens
- **Estoque e Armazém:** Visualização de capacidade, status de estoque, gestão de ERPs
- **Precificação:** Calculadora dinâmica com análise competitiva
- **Marketplaces:** Distribuição de vendas por canal
- **Custos e Taxas:** Estrutura de custos por marketplace e frete

### 📈 KPIs e Métricas
- **Vendas:** Total, crescimento e meta
- **Conversão:** Taxa, benchmark e crescimento
- **Ticket Médio:** Evolução e comparação
- **Retenção:** Taxa de retenção de clientes
- **Gráficos de Evolução:** Análise temporal de métricas

### 🎨 Design Command Center
- **Estética Sci-Fi HUD:** Fundo escuro com acentos em ciano (#00E5FF) e âmbar (#FFB300)
- **Efeitos de Glow:** Bordas luminosas e animações de pulso
- **Tipografia Técnica:** JetBrains Mono para dados, Space Grotesk para títulos
- **Animações Suaves:** Transições com Framer Motion
- **Responsivo:** Totalmente adaptado para desktop, tablet e mobile

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **Radix UI** — Accessible components
- **Framer Motion** — Animations
- **Recharts** — Data visualization
- **Wouter** — Lightweight router

### Backend
- **Express.js** — HTTP server
- **Node.js** — Runtime
- **TypeScript** — Type safety

### DevTools
- **pnpm** — Package manager
- **Prettier** — Code formatter
- **ESBuild** — Bundler

---

## 📦 Instalação e Setup

### Pré-requisitos
- Node.js 18+
- pnpm 10+

### Instalação
```bash
# Clonar repositório
git clone https://github.com/lettygo/darktronic-dashboard.git
cd darktronic-dashboard

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente (opcional)
cp .env.example .env.local
```

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento (Vite + Express)
pnpm dev

# Acessar em http://localhost:5173
```

### Build e Deploy
```bash
# Build para produção
pnpm build

# Iniciar servidor em produção
pnpm start

# Acessar em http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
darktronic-dashboard/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── Layout.tsx           # Shell principal
│   │   │   ├── Sidebar.tsx          # Navegação global
│   │   │   ├── GlowCard.tsx         # Card com efeito glow
│   │   │   ├── AnimatedCounter.tsx  # Contador animado
│   │   │   ├── SectionTitle.tsx     # Título de seção
│   │   │   └── ...
│   │   ├── pages/                   # Páginas do dashboard
│   │   │   ├── Home.tsx             # Panorama geral
│   │   │   ├── Produtos.tsx         # Catálogo de produtos
│   │   │   ├── Estoque.tsx          # Gestão de estoque
│   │   │   ├── Precificacao.tsx     # Calculadora de preços
│   │   │   ├── Kpis.tsx             # Indicadores principais
│   │   │   ├── Marketplaces.tsx     # Análise de canais
│   │   │   └── ...
│   │   ├── hooks/                   # Custom hooks
│   │   │   └── useApi.ts            # Hook para consumir APIs
│   │   ├── lib/                     # Utilitários e dados
│   │   │   ├── data.ts              # Dados estáticos
│   │   │   └── operational-data.ts  # Dados operacionais
│   │   ├── App.tsx                  # Router principal
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globais
│   ├── index.html
│   └── vite.config.ts
├── server/                          # Backend (Express)
│   └── index.ts                     # Servidor e APIs
├── shared/                          # Código compartilhado
│   └── const.ts                     # Constantes
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔌 APIs Disponíveis

### Market Overview
```
GET /api/market-overview
```
Retorna indicadores macroeconômicos do e-commerce brasileiro.

### Competidores
```
GET /api/competitors
```
Retorna dados de tráfego, engajamento e variação de competidores.

### Produtos
```
GET /api/products
```
Retorna catálogo de produtos com preços, estoque e tendências.

### Estoque
```
GET /api/inventory
```
Retorna dados de estoque, capacidade de armazéns e status.

### Precificação
```
GET /api/pricing
```
Retorna análise de margens e preços competitivos.

### KPIs
```
GET /api/kpis
```
Retorna indicadores principais: vendas, conversão, ticket, retenção.

### Marketplaces
```
GET /api/marketplaces
```
Retorna distribuição de vendas por canal.

### Custos
```
GET /api/costs
```
Retorna estrutura de custos: marketplace, frete, impostos, operacional.

---

## 🎨 Design System

### Paleta de Cores
| Cor | Código | Uso |
|-----|--------|-----|
| Ciano | `#00E5FF` | Primária, destaque |
| Âmbar | `#FFB300` | Alerta, secundária |
| Verde | `#00C853` | Sucesso, crescimento |
| Vermelho | `#FF5252` | Erro, queda |
| Fundo | `#0A0E1A` | Background principal |
| Card | `#16202A` | Background cards |

### Tipografia
- **Títulos:** Space Grotesk (bold)
- **Dados:** JetBrains Mono (semibold)
- **Corpo:** Space Grotesk (regular)

### Componentes
- **GlowCard:** Card com efeito de brilho ciano/âmbar
- **AnimatedCounter:** Número com animação de contagem
- **SectionTitle:** Título com barra lateral animada
- **DataTable:** Tabela com sorting e filtros

---

## 🚀 Desenvolvimento

### Adicionar Nova Página
1. Criar arquivo em `client/src/pages/NovaPage.tsx`
2. Importar `Layout` e componentes necessários
3. Usar `useApi` para consumir dados
4. Adicionar rota em `App.tsx`
5. Adicionar item no `Sidebar.tsx`

### Adicionar Nova API
1. Criar rota em `server/index.ts`
2. Retornar JSON com dados
3. Consumir com `useApi` no frontend

### Customizar Estilos
1. Editar `client/src/index.css` para estilos globais
2. Usar classes Tailwind nos componentes
3. Usar variáveis CSS para cores

---

## 📊 Dados e Integração

### Dados Estáticos
Atualmente, o dashboard usa dados simulados. Para integrar com dados reais:

1. **Substituir APIs:** Conectar endpoints Express com banco de dados
2. **Adicionar Autenticação:** JWT ou OAuth2
3. **Implementar Cache:** Redis para performance
4. **Adicionar WebSockets:** Para atualizações em tempo real

### Exemplo de Integração com Banco
```typescript
// server/index.ts
app.get("/api/products", async (req, res) => {
  const products = await db.products.findAll();
  res.json(products);
});
```

---

## 🧪 Testes

### Testes Unitários
```bash
pnpm test
```

### Testes E2E
```bash
pnpm test:e2e
```

### Verificação de Tipos
```bash
pnpm check
```

---

## 📱 Responsividade

O dashboard é totalmente responsivo:
- **Desktop:** Layout completo com sidebar fixa
- **Tablet:** Sidebar colapsável, grid adaptado
- **Mobile:** Menu hambúrguer, cards em coluna única

---

## 🔐 Segurança

- **CORS:** Configurado para produção
- **Helmet:** Headers de segurança
- **Rate Limiting:** Proteção contra abuso
- **Validação:** Input validation em todas as APIs

---

## 📈 Performance

- **Code Splitting:** Lazy loading de páginas
- **Image Optimization:** Compressão automática
- **Caching:** Headers de cache configurados
- **Minification:** Build otimizado com Vite

---

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a MIT License — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Lettygo** — Desenvolvedor e Empreendedor

---

## 🎯 Roadmap

- [ ] Integração com Google Analytics
- [ ] Dashboard customizável
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Alertas e notificações
- [ ] Integração com Marketplaces (API)
- [ ] Previsões com IA
- [ ] Mobile app (React Native)
- [ ] Dark/Light mode toggle

---

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do email.

---

**Desenvolvido com ❤️ por Manus AI**
