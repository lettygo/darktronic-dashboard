import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GlowCard } from "@/components/GlowCard";
import { SOCIAL_MEDIA_DATA } from "@/lib/operational-data";

const platformColors: Record<string, string> = {
  Instagram: "#E1306C", TikTok: "#FF6D00", YouTube: "#FF0000",
  "WhatsApp Business": "#25D366", Telegram: "#0088CC",
};

const dayColors: Record<string, string> = {
  Educativo: "#00E5FF", Valor: "#00C853", Entretenimento: "#FFB300",
  Vendas: "#FF6D00", Humanização: "#7C4DFF", Engajamento: "#E1306C",
};

export default function RedesSociais() {
  return (
    <Layout>
      <PageHeader
        icon="◉"
        title="Redes Sociais"
        subtitle="Estratégias por plataforma, calendário editorial e ferramentas"
        recommendation={SOCIAL_MEDIA_DATA.recommendation}
      />
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-[1200px]">
        <GlowCard className="p-4">
          <p className="text-sm text-[#AAB8C2] leading-relaxed">{SOCIAL_MEDIA_DATA.summary}</p>
        </GlowCard>

        {/* Plataformas */}
        <div className="space-y-4">
          {SOCIAL_MEDIA_DATA.plataformas.map((p, i) => {
            const color = platformColors[p.nome] || "#00E5FF";
            return (
              <GlowCard key={i} className="p-4" delay={i * 0.06}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <h3 className="text-sm font-bold mb-1" style={{ color }}>{p.nome}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#5A7A8A] mb-2">Engajamento: {p.engajamento}</p>
                    <div className="p-2 rounded bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.08)]">
                      <p className="text-[9px] text-[#5A7A8A] uppercase">Frequência</p>
                      <p className="text-xs font-mono text-[#00E5FF]">{p.frequencia}</p>
                    </div>
                    <p className="text-[10px] text-[#5A7A8A] mt-2">Ferramentas: <span className="text-[#AAB8C2]">{p.ferramentas}</span></p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#5A7A8A] uppercase tracking-wider mb-1">Foco</p>
                    <p className="text-sm text-[#AAB8C2] mb-3">{p.foco}</p>
                    <div className="p-2.5 rounded bg-[rgba(255,179,0,0.04)] border border-[rgba(255,179,0,0.1)]">
                      <p className="text-[11px] text-[#FFB300]">{p.dica}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Calendário editorial */}
        <GlowCard className="p-4" glowColor="amber">
          <h3 className="text-sm font-bold text-[#FFB300] mb-3">Calendário Editorial Semanal</h3>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            {SOCIAL_MEDIA_DATA.calendarioEditorial.map((d, i) => {
              const color = dayColors[d.tipo] || "#00E5FF";
              return (
                <div key={i} className="p-3 rounded-md border border-[rgba(0,229,255,0.08)] bg-[rgba(0,229,255,0.02)]">
                  <p className="text-xs font-bold" style={{ color }}>{d.dia}</p>
                  <p className="text-[10px] text-[#AAB8C2] mt-1 leading-relaxed">{d.conteudo}</p>
                  <span className="inline-block mt-1.5 text-[8px] px-1.5 py-0.5 rounded" style={{ backgroundColor: `${color}15`, color }}>{d.tipo}</span>
                </div>
              );
            })}
          </div>
        </GlowCard>

        <GlowCard className="p-4">
          <h3 className="text-sm font-bold text-[#00E5FF] mb-2">Estratégia de Conteúdo para a Darktronic</h3>
          <div className="space-y-2 text-sm text-[#AAB8C2]">
            <p>1. <strong className="text-[#E1306C]">Instagram Reels</strong> — Reviews de 15-30s com o produto em mãos. Mostre funcionalidades, não só aparência. Use hashtags: #tech #gamer #darktronic</p>
            <p>2. <strong className="text-[#FF6D00]">TikTok</strong> — Conteúdo autêntico e nativo. "Qual mouse gamer comprar com R$ 100?" performa muito. Aproveite trends.</p>
            <p>3. <strong className="text-[#25D366]">WhatsApp Business</strong> — Catálogo completo com fotos e preços. Responda em menos de 1 hora. Listas de transmissão para promoções.</p>
            <p>4. <strong className="text-[#0088CC]">Telegram</strong> — Crie o canal "Darktronic Ofertas" para promoções exclusivas. Gera senso de urgência e comunidade.</p>
            <p>5. <strong className="text-[#FF0000]">YouTube</strong> — Reviews detalhados geram autoridade e SEO de longo prazo. Shorts reaproveitam Reels/TikToks.</p>
          </div>
        </GlowCard>
      </div>
    </Layout>
  );
}
