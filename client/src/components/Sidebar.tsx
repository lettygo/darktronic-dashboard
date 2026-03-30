/*
 * Sidebar — Navegação global do Painel Estratégico Darktronic
 * Design: Command Center HUD · Ciano (#00E5FF) + Âmbar (#FFB300)
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/darktronic-logo-glow-gr4JhEAU6yPLDfSJ8NHnH8.webp";

const NAV_SECTIONS = [
  {
    label: "ANÁLISE DE MERCADO",
    items: [
      { path: "/", label: "Panorama Geral", icon: "◈" },
    ],
  },
  {
    label: "OPERACIONAL",
    items: [
      { path: "/produtos", label: "Produtos em Alta", icon: "▣" },
      { path: "/marketplaces", label: "Marketplaces", icon: "▦" },
      { path: "/fornecedores", label: "Fornecedores", icon: "◐" },
      { path: "/custos", label: "Custos e Taxas", icon: "◉" },
      { path: "/precificacao", label: "Precificação", icon: "◈" },
    ],
  },
  {
    label: "LOGÍSTICA",
    items: [
      { path: "/frete", label: "Frete e Envio", icon: "◇" },
      { path: "/embalagens", label: "Embalagens", icon: "□" },
      { path: "/estoque", label: "Estoque e Armazém", icon: "▤" },
    ],
  },
  {
    label: "MARKETING & VENDAS",
    items: [
      { path: "/marketing", label: "Marketing Digital", icon: "◎" },
      { path: "/redes-sociais", label: "Redes Sociais", icon: "◉" },
      { path: "/vendedor", label: "Estrutura Vendedor", icon: "▸" },
    ],
  },
  {
    label: "FERRAMENTAS",
    items: [
      { path: "/kpis", label: "KPIs e Métricas", icon: "◆" },
      { path: "/plataformas", label: "Plataformas", icon: "⬡" },
    ],
  },
];

export function Sidebar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden rounded-md border border-[rgba(0,229,255,0.3)] bg-[rgba(10,14,26,0.95)] p-2.5 text-[#00E5FF] text-lg"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Overlay mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-60 border-r border-[rgba(0,229,255,0.1)] bg-[rgba(8,12,24,0.97)] backdrop-blur-md flex-col py-5 px-3 overflow-y-auto transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-2.5 px-2 mb-6 cursor-pointer">
            <img src={LOGO_IMG} alt="Darktronic" className="w-9 h-9 object-contain" />
            <div>
              <h1 className="text-sm font-bold text-[#00E5FF] tracking-wide" style={{ fontFamily: "'Space Grotesk'" }}>DARKTRONIC</h1>
              <p className="text-[9px] text-[#5A7A8A] tracking-[0.2em] uppercase">Painel Estratégico</p>
            </div>
          </div>
        </Link>

        {/* Nav sections */}
        <nav className="flex-1 space-y-4">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#3A5060] uppercase px-3 mb-1.5">{section.label}</p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = location === item.path;
                  return (
                    <Link key={item.path} href={item.path} onClick={() => setMobileOpen(false)}>
                      <div
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "text-[#00E5FF] bg-[rgba(0,229,255,0.08)] border-l-2 border-[#00E5FF]"
                            : "text-[#7A8A9A] hover:text-[#AAC0D0] hover:bg-[rgba(0,229,255,0.03)]"
                        }`}
                      >
                        <span className="text-xs opacity-70 w-4 text-center">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-4 px-3 pt-3 border-t border-[rgba(0,229,255,0.06)]">
          <p className="text-[9px] text-[#3A4A5A]">Dados: Mar/2026</p>
          <p className="text-[9px] text-[#3A4A5A]">SimilarWeb · Semrush · Pesquisa</p>
        </div>
      </aside>
    </>
  );
}
