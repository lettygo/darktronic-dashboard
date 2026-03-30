import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense } from "react";

// Pages
import Home from "./pages/Home";
const Produtos = lazy(() => import("./pages/Produtos"));
const Marketplaces = lazy(() => import("./pages/Marketplaces"));
const Fornecedores = lazy(() => import("./pages/Fornecedores"));
const Custos = lazy(() => import("./pages/Custos"));
const Precificacao = lazy(() => import("./pages/Precificacao"));
const Frete = lazy(() => import("./pages/Frete"));
const Embalagens = lazy(() => import("./pages/Embalagens"));
const Estoque = lazy(() => import("./pages/Estoque"));
const Marketing = lazy(() => import("./pages/Marketing"));
const RedesSociais = lazy(() => import("./pages/RedesSociais"));
const Vendedor = lazy(() => import("./pages/Vendedor"));
const Kpis = lazy(() => import("./pages/Kpis"));
const Plataformas = lazy(() => import("./pages/Plataformas"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#00E5FF] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-[#5A7A8A] tracking-wider uppercase">Carregando módulo...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/marketplaces" component={Marketplaces} />
        <Route path="/fornecedores" component={Fornecedores} />
        <Route path="/custos" component={Custos} />
        <Route path="/precificacao" component={Precificacao} />
        <Route path="/frete" component={Frete} />
        <Route path="/embalagens" component={Embalagens} />
        <Route path="/estoque" component={Estoque} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/redes-sociais" component={RedesSociais} />
        <Route path="/vendedor" component={Vendedor} />
        <Route path="/kpis" component={Kpis} />
        <Route path="/plataformas" component={Plataformas} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
