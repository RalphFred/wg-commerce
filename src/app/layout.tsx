import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Walls and Gates",
  description: "Walls and Gates E-commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
