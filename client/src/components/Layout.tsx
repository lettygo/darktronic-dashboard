import { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";

const BG_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489219567/nt7GjkWbgNDw6LSHQ2Ws8d/analytics-bg-pattern-ab3PBG9ZFe3F7sLGETdvaz.webp";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: `url(${BG_PATTERN})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40" />
      <Sidebar />
      <main className="lg:ml-60 relative z-10 min-h-screen">
        {children}
      </main>
    </div>
  );
}
