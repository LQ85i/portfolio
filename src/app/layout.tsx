import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "Portfolio of LQ85i",
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //redirect to new url
  if (window.location.href==="https://lq85i.github.io/portfolio/") {
    window.location.href = "https://portfolio-lq85i.vercel.app/"; 
}

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
