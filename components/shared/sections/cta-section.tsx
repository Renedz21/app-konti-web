import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-10 leading-tight">
          Empieza a simplificar tu contabilidad hoy.
        </h2>
        <Button
          size="lg"
          className="bg-foreground hover:bg-foreground/90 text-background px-12 py-7 text-base font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Probar Konti
        </Button>
      </div>
    </section>
  );
}
