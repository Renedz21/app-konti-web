import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Link
            href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
            target="_blank"
          >
            Probar Konti
          </Link>
        </Button>
      </div>
    </section>
  );
}
