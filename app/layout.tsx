import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thierry & Grâce — Faire-part de mariage",
  description: "Thierry et Grâce vous invitent à célébrer leur union le samedi 12 décembre 2026 à Yaoundé. Confirmez votre présence en quelques secondes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Thierry & Grâce — Faire-part de mariage",
    description: "Thierry et Grâce vous invitent à célébrer leur union le samedi 12 décembre 2026 à Yaoundé. Confirmez votre présence en quelques secondes.",
    url: "https://VOTRE-DOMAINE.com/",
    images: [
      {
        url: "https://VOTRE-DOMAINE.com/apercu.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%232B0812'/%3E%3Ccircle cx='32' cy='32' r='28' fill='none' stroke='%23FFD66B' stroke-width='2'/%3E%3Ctext x='32' y='41' font-family='Georgia,serif' font-style='italic' font-weight='700' font-size='26' text-anchor='middle' fill='%23FFE2A8'%3ET%26amp;G%3C/text%3E%3C/svg%3E",
  },
  themeColor: "#0B0709",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
