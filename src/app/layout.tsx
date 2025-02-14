import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { PlayersTableProvider } from "@/contexts/PlayersTableContext";
import { GamesProvider } from "@/contexts/GamesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "evMiniG",
  description: "sistema de controle de dados da MiniG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ToastContainer />
        <GamesProvider>
          <PlayersTableProvider>{children}</PlayersTableProvider>
        </GamesProvider>
      </body>
    </html>
  );
}
