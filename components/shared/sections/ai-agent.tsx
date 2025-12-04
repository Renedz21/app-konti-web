import { Button } from "@/components/ui/button";
import {
  BotIcon,
  Zap,
  type LucideIcon,
  ArrowUp,
  Sparkles,
  TrendingUp,
  Lightbulb,
  MessageCircle,
} from "lucide-react";

type Capabilities = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capabilities[] = [
  {
    icon: Sparkles,
    title: "Resumen inteligente",
    description:
      "Resumen de tus gastos deducibles y no deducibles, con un análisis inteligente.",
  },
  {
    icon: TrendingUp,
    title: "Límite anual",
    description: "Consulta el estado de tu límite anual de deducciones.",
  },
  {
    icon: MessageCircle,
    title: "Comprobantes pendientes",
    description:
      "Consulta los comprobantes pendientes de subir para tu declaración.",
  },
  {
    icon: Lightbulb,
    title: "Consejos fiscales",
    description:
      "Consejos fiscales para optimizar tus deducciones y evitar errores en tu declaración.",
  },
];

export default function AiAgentSection() {
  return (
    <section id="konti-ai" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/10 text-purple-900 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Konti AI
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Tu agente tributario
              <br />
              <span className="text-muted-foreground">personal</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Konti 2.0 incluye un asistente de inteligencia artificial que te
              guía durante todo el año, asegurando que no pierdas ninguna
              deducción y que tu declaración sea impecable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat Mockup */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-6 shadow-xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-900/10">
                  <BotIcon className="w-6 h-6 text-violet-900" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Konti AI</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-violet-900/10">
                    <BotIcon className="w-6 h-6 text-violet-900" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-sm text-foreground">
                      ¡Hola! He analizado tu boleta de Clínica San Pablo. Es un
                      gasto en{" "}
                      <span className="font-semibold text-primary">
                        salud deducible
                      </span>{" "}
                      por S/. 450.00.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[85%]">
                    <p className="text-sm">¿Cuánto llevo acumulado este mes?</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-violet-900/10">
                    <BotIcon className="w-6 h-6 text-violet-900" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                    <p className="text-sm text-foreground mb-3">
                      Este mes llevas{" "}
                      <span className="font-semibold">S/. 1,250</span> en gastos
                      deducibles:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Salud</span>
                        <span className="font-medium">S/. 850</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Educación</span>
                        <span className="font-medium">S/. 400</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    disabled
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-primary flex items-center justify-center text-white"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
