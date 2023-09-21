import type { Metadata } from "next";

import { K2D } from "next/font/google";

import "./globals.css";

const k2d = K2D({ subsets: ["thai"], weight: ["300", "500", "600"] });

export const metadata: Metadata = {
  title: "ประวัติแสตมป์ | กิตติพันธ์ นิลประกอบกุล",
  description:
    "แสตมป์ เกิดและโตที่ชลบุรี จบตรี วิศวะคอม จุฬาฯ ปัจจุบัน เป็น full stack web developer",
  keywords: "แสตมป์, stamp, programmer, developer, fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={k2d.className}>{children}</body>
    </html>
  );
}
