import AppleIcon from "@/components/icons/apple-icon";
import GooglePlayIcon from "@/components/icons/google-play-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-white" id="hero">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Konti 2.0 disponible
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-[1.1] text-balance">
              Gestiona tus boletas con el poder de la
              <span className="bg-linear-to-r from-primary via-blue-600 to-violet-900/80 bg-clip-text text-transparent">
                {" "}
                Inteligencia artificial
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-6 py-6 rounded-xl gap-3 transition-all duration-300 hover:scale-[1.02]"
                disabled
              >
                <AppleIcon className="w-6 h-6" />
                Proximamente
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-6 rounded-xl gap-3 border-border hover:bg-muted transition-all duration-300"
                asChild
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
                  target="_blank"
                >
                  <GooglePlayIcon className="w-6 h-6" />
                  Descargar en Google Play
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
