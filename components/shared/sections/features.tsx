import OcrImage from "@/public/ocr.webp";
import OrganizationImage from "@/public/organization.webp";
export default function FeaturesSection() {
  const features = [
    {
      title: "Escanea con tu cámara",
      description:
        "Captura boletas y facturas al instante. Nuestro OCR extrae todos los datos en segundos.",
      visual: (
        <div className="relative bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-64 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-primary/50 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm text-primary/70 font-medium">
                  Escanear boleta
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            OCR Activo
          </div>
        </div>
      ),
    },
    {
      title: "Reportes automáticos",
      description:
        "Visualiza tu progreso mensual y anual. Exporta reportes listos para tu contador.",
      visual: (
        <div className="relative bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 h-64 overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">
                Resumen 2024
              </span>
              <span className="text-xs text-muted-foreground">Nov</span>
            </div>
            {[
              { label: "Salud", value: 65, color: "bg-primary" },
              { label: "Educación", value: 45, color: "bg-secondary" },
              { label: "Vivienda", value: 30, color: "bg-accent" },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Total deducible
                </span>
                <span className="text-lg font-bold text-foreground">
                  S/. 8,450
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Edición rápida",
      description:
        "Corrige datos en un toque. La IA aprende de tus ediciones para mejorar la precisión.",
      visual: (
        <div className="relative bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 h-64 overflow-hidden">
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xs font-medium">
                PV
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">Plaza Vea</p>
                <p className="text-xs text-muted-foreground">Supermercado</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                <span className="text-xs text-muted-foreground">Monto</span>
                <span className="text-sm font-medium">S/. 125.50</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-primary/10 rounded-lg border border-primary/20">
                <span className="text-xs text-primary">Categoría</span>
                <span className="text-sm font-medium text-primary">
                  Alimentación ✓
                </span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                <span className="text-xs text-muted-foreground">Fecha</span>
                <span className="text-sm font-medium">15/11/2024</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Historial completo",
      description:
        "Todos tus comprobantes ordenados y accesibles. Búsqueda instantánea por cualquier campo.",
      visual: (
        <div className="relative bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 h-64 overflow-hidden">
          <div className="space-y-2">
            {[
              {
                name: "Clínica San Pablo",
                date: "Hoy",
                amount: "450.00",
                tag: "Salud",
              },
              {
                name: "Universidad PUCP",
                date: "Ayer",
                amount: "1,200.00",
                tag: "Educación",
              },
              {
                name: "Plaza Vea",
                date: "15 Nov",
                amount: "125.50",
                tag: "Otros",
              },
              {
                name: "Farmacia Universal",
                date: "14 Nov",
                amount: "89.90",
                tag: "Salud",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-medium">
                    {item.name.substring(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">S/. {item.amount}</p>
                  <span className="text-xs text-primary">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
            Todo lo que necesitas para
            <br />
            <span className="text-muted-foreground">gestionar tus boletas</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Análisis OCR inteligente (IA)
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Extrae datos de boletas y facturas automáticamente con
                  precisión del 99%.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden border-gray-700">
                  <img
                    alt=""
                    src={OcrImage.src}
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Detección de deducciones
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Identifica gastos deducibles en salud, educación y más según
                  normativa SUNAT.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Konti Chat AI
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Chat con Konti AI para obtener respuestas a tus preguntas y
                  resolver tus dudas.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Organización mensual
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Clasifica automáticamente tus comprobantes por mes y
                  categoría.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl shadow-2xl outline outline-white/10">
                  <img
                    src={OrganizationImage.src}
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
