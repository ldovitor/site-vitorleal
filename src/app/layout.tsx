import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dr. Vitor Leal | Reabilitação Oral e Estética Dental em Itajaí",
  description:
    "Cirurgião-dentista CRO-SC 20602. Reabilitação oral, laminados cerâmicos e implantes dentários em Itajaí e Balneário Camboriú, com o Protocolo Leal de Reabilitação Planejada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-areia text-verde">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
