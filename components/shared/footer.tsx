import { Copyright } from "lucide-react";
import KontiLogo from "../../public/konti_logo.png";
import GitHubIcon from "../icons/github-icon";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={KontiLogo.src} alt="Konti" className="w-6 h-6" />
              <span className="font-semibold text-foreground">Konti</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              La aplicación más inteligente para gestionar tus boletas y
              deducciones tributarias en Perú.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Funciones
                </a>
              </li>
              <li>
                <a
                  href="#ai"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Konti AI
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:soporte@konti.pe"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  soporte.konti@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Copyright className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-medium">
              {new Date().getFullYear()} Konti. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Renedz21"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
