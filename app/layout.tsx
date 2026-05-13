import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veterinaria Del Fabro",
  description: "Sitio oficial de Veterinaria Del Fabro",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
