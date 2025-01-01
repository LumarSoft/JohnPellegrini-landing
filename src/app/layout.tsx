import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Pellegrini Management Group - Expertos en Seguros",
  description:
    "Desde John Pellegrini Management Group Srl nos dedicamos a brindar asesoramiento y acompañamiento en todo el proceso de coberturas de los riesgos que necesitas proteger.",
  keywords: [
    "seguros",
    "John Pellegrini Management Group",
    "protección",
    "seguros para empresas",
    "seguros para individuos",
    "soluciones en seguros",
    "tranquilidad",
  ],
  authors: [
    {
      name: "John Pellegrini Management Group",
      url: "https://jpmanagementgroup.com.ar",
    },
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#004080",
  openGraph: {
    title: "John Pellegrini Management Group - Expertos en Seguros",
    description:
      "Confíe en John Pellegrini Management Group para una cobertura de seguros que se adapte a sus necesidades. Estamos aquí para proteger su futuro.",
    url: "https://jpmanagementgroup.com",
    type: "website",
    images: [
      {
        url: "https://jpmanagementgroup.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Pellegrini Management Group - Expertos en Seguros",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased ${inter.className}`)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
