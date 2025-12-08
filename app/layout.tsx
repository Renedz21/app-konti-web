import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import seoConfig from "@/seo.config";
import ToastProvider from "@/components/providers/toast-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const { ...metadata } = seoConfig;
export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased scroll-smooth")}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
