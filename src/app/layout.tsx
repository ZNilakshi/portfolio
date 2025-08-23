import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZNilakshie",
  description: "Portfolio of Nilakshie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="BoEzETHPlT7FqZ4AMNtSKQ5cDmhiWqQLlAmnIgy8_Y0"
        />
      </head>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  );
}
