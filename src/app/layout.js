import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Alex Job A — Aspiring Founder's Office Associate",
  description:
    "Portfolio of Alex Job A — an aspiring Founder's Office Associate with a technical foundation in product thinking, data-driven execution, and cross-functional problem solving.",
  keywords: ["Founder's Office", "Startup", "Product Strategy", "Alex Job A", "Operations", "Growth", "Business Strategy"],
  openGraph: {
    title: "Alex Job A — Aspiring Founder's Office Associate",
    description: "Technical thinker. Cross-functional executor. Builder at heart.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
