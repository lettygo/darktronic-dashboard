# 📦 Transferência do Projeto Darktronic Eletrônicos

## Como Importar em Outra Conta Manus

### Opção 1: Via GitHub (Recomendado)

1. **Faça login na sua outra conta Manus**
2. **Acesse o painel de projetos**
3. **Clique em "Novo Projeto"**
4. **Selecione "Importar do GitHub"**
5. **Conecte seu repositório GitHub que contém o código**
6. **Selecione a branch `main`**
7. **Clique em "Criar Projeto"**

### Opção 2: Via Upload de Arquivo (Alternativa)

1. **Extraia o arquivo `darktronic-dashboard-backup.zip`**
2. **Faça login na sua outra conta Manus**
3. **Acesse o painel de projetos**
4. **Clique em "Novo Projeto"**
5. **Selecione "Upload de Arquivo"**
6. **Selecione a pasta `darktronic-dashboard/` extraída**
7. **Clique em "Criar Projeto"**

---

## 📋 Conteúdo do Projeto

### Estrutura Principal
```
darktronic-dashboard/
├── client/                    # Frontend React + Tailwind
│   ├── src/
│   │   ├── pages/            # 14 páginas operacionais
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Dados operacionais (operational-data.ts)
│   │   └── index.css         # Tema Command Center
│   ├── index.html            # Meta tags SEO
│   └── public/               # Assets estáticos
├── server/                    # Backend Express (placeholder)
├── package.json              # Dependências
├── vite.config.ts            # Configuração Vite
└── tsconfig.json             # Configuração TypeScript
```

### Páginas Incluídas
- **Panorama Geral** — Análise competitiva do mercado
- **Produtos em Alta** — Categorias com maior potencial
- **Marketplaces** — Comparativo de taxas (ML, Shopee, Amazon, etc.)
- **Fornecedores** — Distribuidores, atacadistas, importação
- **Custos e Taxas** — Regimes tributários e precificação
- **Calculadora de Precificação** — Simulador interativo
- **Frete e Envio** — Transportadoras e custos
- **Embalagens** — Tipos e fornecedores
- **Estoque e Armazém** — Logística de produtos
- **Marketing Digital** — Canais e orçamento
- **Redes Sociais** — Calendário editorial
- **Estrutura de Vendedor** — Como vender em marketplaces
- **KPIs e Métricas** — Indicadores de desempenho
- **Plataformas de E-commerce** — Shopify, Nuvemshop, etc.

---

## 🎨 Design e Tema

**Estética:** Command Center (Sci-fi HUD)
- **Cores:** Ciano (#00E5FF) + Âmbar (#FFB300) + Fundo escuro (#0A0E1A)
- **Tipografia:** Space Grotesk (títulos) + JetBrains Mono (dados)
- **Componentes:** shadcn/ui + Recharts para gráficos

---

## 🚀 Primeiro Passo Após Importar

1. **Instale as dependências:**
   ```bash
   pnpm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

3. **Acesse em:** `http://localhost:3000`

---

## 📊 Dados Incluídos

Todos os dados operacionais estão em `/client/src/lib/operational-data.ts`:
- Produtos em alta (12 categorias)
- Marketplaces (taxas, comissões, payout)
- Fornecedores (distribuidores, atacadistas, importação)
- Custos operacionais e tributários
- Dados de frete e embalagem
- Estratégias de marketing e redes sociais
- KPIs e métricas de e-commerce

---

## 🔧 Customizações Recomendadas

Após importar, você pode customizar:

1. **Cores e Tema** — Edite `/client/src/index.css`
2. **Dados** — Atualize `/client/src/lib/operational-data.ts`
3. **Logo** — Substitua as URLs de imagem no `Sidebar.tsx`
4. **Textos** — Personalize títulos e descrições em cada página

---

## ❓ Dúvidas?

Se tiver problemas durante a importação, verifique:
- ✅ Node.js 18+ instalado
- ✅ pnpm instalado (`npm install -g pnpm`)
- ✅ Porta 3000 disponível
- ✅ Arquivo `package.json` presente

---

**Projeto criado em:** Mar/2026  
**Versão:** 2.0 (com todas as melhorias operacionais)  
**Status:** Pronto para produção
