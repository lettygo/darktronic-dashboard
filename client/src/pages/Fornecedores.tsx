import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { DataTable } from "@/components/DataTable";
import { InfoCard } from "@/components/InfoCard";
import { SUPPLIERS_DATA } from "@/lib/operational-data";

export default function Fornecedores() {
  return (
    <Layout>
      <PageHeader
        icon="◐"
        title="Fornecedores"
        subtitle="Distribuidores, atacadistas, importação e dropshipping para eletrônicos"
        recommendation={SUPPLIERS_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{SUPPLIERS_DATA.summary}</p>
        </GlowCard>

        {/* Distribuidores oficiais */}
        <DataTable
          title="Distribuidores Oficiais"
          columns={[
            { key: "nome", label: "Distribuidor" },
            { key: "marcas", label: "Marcas Principais" },
            { key: "pedidoMinimo", label: "Pedido Mín.", highlight: true },
            { key: "prazo", label: "Prazo" },
            { key: "contato", label: "Contato" },
          ]}
          data={SUPPLIERS_DATA.distribuidores}
        />

        {/* Atacadistas */}
        <div className="grid md:grid-cols-3 gap-4">
          {SUPPLIERS_DATA.atacadistas.map((a, i) => (
            <GlowCard key={i} className="p-4" delay={i * 0.1} glowColor={i === 0 ? "amber" : "cyan"}>
              <h3 className="text-sm font-bold text-[#00E5FF] mb-2">{a.nome}</h3>
              <p className="text-[10px] uppercase tracking-wider text-[#5A7A8A] mb-2">{a.tipo}</p>
              <div className="space-y-1.5 text-xs">
                <p className="text-[#AAB8C2]"><strong className="text-[#7A8A9A]">Produtos:</strong> {a.produtos}</p>
                <p className="text-[#AAB8C2]"><strong className="text-[#7A8A9A]">Margem:</strong> <span className="text-[#00C853] font-mono font-bold">{a.margem}</span></p>
                <p className="text-[#FFB300] text-[11px] mt-2 p-2 rounded bg-[rgba(255,179,0,0.05)] border border-[rgba(255,179,0,0.1)]">{a.dica}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Importação */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-3">Importação Direta</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#5A7A8A] uppercase tracking-wider mb-2">Fontes</p>
              <ul className="space-y-1.5">
                {SUPPLIERS_DATA.importacao.fontes.map((f, i) => (
                  <li key={i} className="text-sm text-[#AAB8C2] flex items-center gap-2">
                    <span className="text-[#FFB300] text-xs">▸</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="p-2 rounded bg-[rgba(255,82,82,0.05)] border border-[rgba(255,82,82,0.1)]">
                <p className="text-xs text-[#FF5252] font-semibold">Impostos</p>
                <p className="text-sm text-[#AAB8C2] font-mono">{SUPPLIERS_DATA.importacao.impostos}</p>
              </div>
              <div className="p-2 rounded bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.1)]">
                <p className="text-xs text-[#00E5FF] font-semibold">Remessa Conforme</p>
                <p className="text-sm text-[#AAB8C2]">{SUPPLIERS_DATA.importacao.remessaConforme}</p>
              </div>
              <div className="p-2 rounded bg-[rgba(255,179,0,0.05)] border border-[rgba(255,179,0,0.1)]">
                <p className="text-xs text-[#FFB300] font-semibold">Prazo Médio</p>
                <p className="text-sm text-[#AAB8C2] font-mono">{SUPPLIERS_DATA.importacao.prazoMedio}</p>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* Dropshipping */}
        <DataTable
          title="Plataformas de Dropshipping"
          columns={[
            { key: "plataforma", label: "Plataforma" },
            { key: "tipo", label: "Tipo" },
            { key: "margem", label: "Margem", highlight: true },
            { key: "prazo", label: "Prazo Entrega" },
            { key: "custo", label: "Custo Mensal", highlight: true },
          ]}
          data={SUPPLIERS_DATA.dropshipping}
        />

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Roteiro para a Darktronic</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#FFB300]">Mês 1-3:</strong> Compre acessórios no Saara (RJ) com pagamento à vista. Teste demanda via ML e Shopee.</p>
            <p>2. <strong className="text-[#FFB300]">Mês 4-6:</strong> Cadastre-se nos distribuidores (Alcateia para gamer, Officer para periféricos). Pedido mínimo ~R$ 800.</p>
            <p>3. <strong className="text-[#FFB300]">Mês 7-12:</strong> Avalie importação direta para itens com margem alta. Use Remessa Conforme para pedidos pequenos.</p>
            <p>4. <strong className="text-[#FFB300]">12+ meses:</strong> Negocie condições especiais com distribuidores baseado no volume. Busque autorização de revenda de marcas.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
