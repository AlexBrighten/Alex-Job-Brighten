import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Alex Job A — Aspiring Product Manager",
  description:
    "Portfolio of Alex Job A, an aspiring Product Manager passionate about building user-centric products that solve real problems. Explore projects, skills, and experiences.",
  keywords: ["Product Manager", "PM", "Portfolio", "Alex Job A", "UX", "Product Strategy"],
  openGraph: {
    title: "Alex Job A — Aspiring Product Manager",
    description: "Building user-centric products that solve real problems.",
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
