import { Button } from "@/components/ui/button";
import KontiLogo from "@/public/konti_logo.png";
import Link from "next/link";

type NavigationProps = {
  isTermsPage?: boolean;
};

export default function Navigation({ isTermsPage = false }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={KontiLogo.src}
            alt="Konti"
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <span className="font-semibold text-foreground">Konti</span>
        </div>
        {!isTermsPage && (
          <>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#konti-ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Konti AI
              </a>
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Funcionalidades
              </a>
            </nav>

            <div className="flex items-center gap-2">
              {/* <ThemeToggle /> */}
              <Button
                size="sm"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-5"
                asChild
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.edzon2121.KontiApp"
                  target="_blank"
                >
                  Descargar
                </Link>
              </Button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
