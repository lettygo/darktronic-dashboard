import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { useState } from "react";

export default function Precificacao() {
  const [custo, setCusto] = useState(100);
  const [comissao, setComissao] = useState(15);
  const [frete, setFrete] = useState(20);
  const [imposto, setImposto] = useState(4);
  const [embalagem, setEmbalagem] = useState(4);
  const [margemDesejada, setMargemDesejada] = useState(25);

  const custoTotal = custo + frete + embalagem;
  const comissaoDecimal = comissao / 100;
  const impostoDecimal = imposto / 100;
  const margemDecimal = margemDesejada / 100;
  const divisor = 1 - comissaoDecimal - impostoDecimal - margemDecimal;
  const precoVenda = divisor > 0 ? custoTotal / divisor : 0;
  const lucroLiquido = precoVenda - custoTotal - (precoVenda * comissaoDecimal) - (precoVenda * impostoDecimal);
  const margemReal = precoVenda > 0 ? (lucroLiquido / precoVenda) * 100 : 0;

  return (
    <Layout>
      <PageHeader
        icon="◈"
        title="Calculadora de Precificação"
        subtitle="Simule o preço de venda ideal para seus produtos com base em custos reais"
        recommendation="Sempre garanta margem mínima de 25-30% para cobrir imprevistos e reinvestir no negócio."
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inputs */}
          <GlowCard className="p-5">
            <h3 className="text-sm font-bold text-[#00E5FF] mb-4">Dados do Produto</h3>
            <div className="space-y-4">
              {[
                { label: "Custo do Produto (R$)", value: custo, setter: setCusto, min: 0, max: 10000 },
                { label: "Comissão Marketplace (%)", value: comissao, setter: setComissao, min: 0, max: 50 },
                { label: "Frete Médio (R$)", value: frete, setter: setFrete, min: 0, max: 200 },
                { label: "Imposto (%)", value: imposto, setter: setImposto, min: 0, max: 30 },
                { label: "Embalagem (R$)", value: embalagem, setter: setEmbalagem, min: 0, max: 50 },
                { label: "Margem Desejada (%)", value: margemDesejada, setter: setMargemDesejada, min: 5, max: 60 },
              ].map((input, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-[#7A8A9A]">{input.label}</label>
                    <span className="text-xs font-mono text-[#00E5FF]">{input.value}</span>
                  </div>
                  <input
                    type="range"
                    min={input.min}
                    max={input.max}
                    value={input.value}
                    onChange={(e) => input.setter(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-[rgba(0,229,255,0.15)] accent-[#00E5FF]"
                  />
                </div>
              ))}
            </div>
          </GlowCard>

          {/* Results */}
          <div className="space-y-4">
            <GlowCard className="p-5" glowColor="amber">
              <h3 className="text-sm font-bold text-[#FFB300] mb-4">Resultado da Precificação</h3>
              <div className="space-y-3">
                <div className="p-3 rounded bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.15)] text-center">
                  <p className="text-[10px] uppercase text-[#5A7A8A]">Preço de Venda Sugerido</p>
                  <p className="text-3xl font-mono font-bold text-[#00E5FF]">R$ {precoVenda.toFixed(2)}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-[rgba(0,200,83,0.06)] border border-[rgba(0,200,83,0.1)] text-center">
                    <p className="text-[9px] uppercase text-[#5A7A8A]">Lucro Líquido</p>
                    <p className="text-lg font-mono font-bold text-[#00C853]">R$ {lucroLiquido.toFixed(2)}</p>
                  </div>
                  <div className="p-2 rounded bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.1)] text-center">
                    <p className="text-[9px] uppercase text-[#5A7A8A]">Margem Real</p>
                    <p className="text-lg font-mono font-bold text-[#FFB300]">{margemReal.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-4">
              <h3 className="text-xs font-semibold text-[#00E5FF] mb-2">Decomposição do Preço</h3>
              <div className="space-y-1.5 text-xs">
                {[
                  { label: "Custo do produto", value: custo, color: "#AAB8C2" },
                  { label: "Frete", value: frete, color: "#AAB8C2" },
                  { label: "Embalagem", value: embalagem, color: "#AAB8C2" },
                  { label: `Comissão (${comissao}%)`, value: precoVenda * comissaoDecimal, color: "#FF5252" },
                  { label: `Imposto (${imposto}%)`, value: precoVenda * impostoDecimal, color: "#FF6D00" },
                  { label: "Lucro líquido", value: lucroLiquido, color: "#00C853" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-[rgba(0,229,255,0.04)] pb-1">
                    <span className="text-[#7A8A9A]">{item.label}</span>
                    <span className="font-mono font-semibold" style={{ color: item.color }}>R$ {item.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-1 font-semibold">
                  <span className="text-[#00E5FF]">TOTAL (Preço de Venda)</span>
                  <span className="font-mono text-[#00E5FF]">R$ {precoVenda.toFixed(2)}</span>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Cenários rápidos */}
        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-3">Cenários Rápidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { nome: "Mouse Gamer", custo: 45, comissao: 15, frete: 15, imposto: 4, embalagem: 3, margem: 30 },
              { nome: "Fone TWS", custo: 30, comissao: 14, frete: 12, imposto: 4, embalagem: 2.5, margem: 35 },
              { nome: "Teclado Mecânico", custo: 120, comissao: 15, frete: 22, imposto: 4, embalagem: 5, margem: 25 },
            ].map((c, i) => {
              const ct = c.custo + c.frete + c.embalagem;
              const d = 1 - c.comissao/100 - c.imposto/100 - c.margem/100;
              const pv = d > 0 ? ct / d : 0;
              const ll = pv - ct - (pv * c.comissao/100) - (pv * c.imposto/100);
              return (
                <div key={i} className="p-3 rounded border border-[rgba(0,229,255,0.08)] bg-[rgba(0,229,255,0.02)]">
                  <p className="text-xs font-bold text-[#00E5FF]">{c.nome}</p>
                  <p className="text-[10px] text-[#5A7A8A]">Custo: R$ {c.custo} · Comissão: {c.comissao}%</p>
                  <div className="flex justify-between mt-2">
                    <div>
                      <p className="text-[9px] text-[#5A7A8A]">Preço</p>
                      <p className="text-sm font-mono font-bold text-[#FFB300]">R$ {pv.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-[#5A7A8A]">Lucro</p>
                      <p className="text-sm font-mono font-bold text-[#00C853]">R$ {ll.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
