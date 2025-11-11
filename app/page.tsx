import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Search,
  ArrowRight,
  Download,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="Konti logo" className="w-12 h-12" />
            <span className="font-bold text-lg text-foreground">Konti</span>
          </div>
          <Button asChild>
            <Link
              href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              Descargar
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-background to-background/50 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-pretty">
                  Gestiona tus boletas con
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f74c5] to-[#6b54a4]">
                    {" "}
                    IA avanzada
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Escanea, organiza y clasifica tus comprobantes en segundos.
                  Con extracción automática de datos y análisis fiscal
                  integrado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild variant="default" size="lg">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
                    target="_blank"
                  >
                    <Download className="w-5 h-5" />
                    Descargar en Google Play
                  </Link>
                </Button>
              </div>

              <div className="flex gap-4 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0f74c5]" />
                  Plan Gratis disponible
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#6b54a4]" />
                  Sin tarjeta requerida
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <img
              src="/phone.svg"
              alt="Konti app"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Características poderosas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para administrar tus comprobantes de forma
              inteligente y eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 - AI Extraction */}
            <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#0f74c5] to-[#0a5a9f] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Extracción IA</h3>
              <p className="text-sm text-muted-foreground">
                OCR avanzado extrae datos automáticamente: RUC, montos, fechas y
                más en segundos.
              </p>
            </Card>

            {/* Feature 2 - Cloud Sync */}
            <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#6b54a4] to-[#4a3878] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Sincronización Segura
              </h3>
              <p className="text-sm text-muted-foreground">
                Tus boletas se guardan en la nube. Accede desde cualquier
                dispositivo, siempre sincronizado.
              </p>
            </Card>

            {/* Feature 3 - Search & Filter */}
            <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#0f74c5] to-[#6b54a4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Búsqueda Avanzada
              </h3>
              <p className="text-sm text-muted-foreground">
                Filtra por fecha, monto, RUC, nombre comercial o tipo de
                comprobante al instante.
              </p>
            </Card>

            {/* Feature 4 - Accounting Classification */}
            <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#6b54a4] to-[#4a3878] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                Clasificación Contable
              </h3>
              <p className="text-sm text-muted-foreground">
                Categoriza automáticamente como contables o no contables con
                justificación integral.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flujo simple en 3 pasos
            </h2>
            <p className="text-muted-foreground text-lg">
              Gestiona tus boletas en minutos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0f74c5] to-[#0a5a9f] rounded-full flex items-center justify-center mb-4 text-white font-bold text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Escanea tu boleta
                </h3>
                <p className="text-muted-foreground mb-4">
                  Toma una foto de tu comprobante. La IA extrae todos los datos
                  automáticamente.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-gradient-to-r from-[#0f74c5] to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6b54a4] to-[#4a3878] rounded-full flex items-center justify-center mb-4 text-white font-bold text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Revisa y clasifica
                </h3>
                <p className="text-muted-foreground mb-4">
                  Edita los datos si es necesario y confirma la clasificación
                  contable automática.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-gradient-to-r from-[#6b54a4] to-transparent" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0f74c5] to-[#6b54a4] rounded-full flex items-center justify-center mb-4 text-white font-bold text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Accede en cualquier momento
                </h3>
                <p className="text-muted-foreground">
                  Tus boletas están organizadas y sincronizadas. Búsqueda y
                  filtros instantáneos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comienza hoy mismo
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya optimizan su gestión de boletas y
            comprobantes con Konti.
          </p>
          <Button asChild variant="default" size="lg">
            <Link
              href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
              target="_blank"
            >
              Descargar Gratis en Google Play
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Konti. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
