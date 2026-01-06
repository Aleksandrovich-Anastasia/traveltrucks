import "./globals.css";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
  variable: "--font-family", 
});

export const metadata = {
  title: "TravelTrucks",
  description: "Camper rental app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
