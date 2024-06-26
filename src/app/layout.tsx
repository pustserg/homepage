import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergey Pustovalov",
  description: "Personal website of Sergey Pustovalov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
      </head>
      <body className="{inter.className}">
        <main className="min-h-screen flex flex-col items-center justify-between pt-24">
          {children}
          <footer className="flex items-center justify-center w-full p-8 text-xs text-center">
            2021 - {new Date().getFullYear()} © pustserg
          </footer>
        </main>
      </body>
    </html>
  );
}
