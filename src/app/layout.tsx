import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King Maker",
  description:
    "Enjoy the safe and secure online casino experience, where you can play online slots, Poker, Baccarat, Roulette, Blackjack, and many more online casino games!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Header />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
