import type { Metadata } from "next";
import { getPublicUrl } from "./lib/public-url";

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const publicUrl = getPublicUrl();

const seoConfig = defineMetadata({
  metadataBase: new URL(publicUrl),
  title: {
    template: "%s - Konti",
    default: "Konti - Gestiona tus Boletas de Forma Segura",
  },
  alternates: {
    canonical: publicUrl,
    languages: {
      "es-PE": `${publicUrl}`,
    },
  },
  description:
    "Konti te ayuda a guardar y gestionar tus boletas digitales. Captura con cámara o ingresa manualmente. Descarga ahora en Google Play.",
  openGraph: {
    images: `${publicUrl}/og`,
    url: publicUrl,
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/konti_logo.ico",
    apple: "/konti_logo.ico",
    maskIcon: "/konti_logo.ico",
    shortcut: "/konti_logo.ico",
  },
});

export default seoConfig;
