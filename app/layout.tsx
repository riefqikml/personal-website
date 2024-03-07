import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "./component/navbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riefqi's Website",
  description: "Riefqi's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="acid">
      <body className={firaCode.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
