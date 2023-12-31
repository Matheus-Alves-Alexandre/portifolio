import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// index.js ou app.js
if (typeof window !== "undefined") {
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    // Desativar avisos de hidratação no console em ambiente de desenvolvimento
    console.warn = () => {};
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
