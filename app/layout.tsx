"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Lyonel Pierce | Full Stack Web Developer - Web Designer - Graphic Designer",
  description: "Full Stack Web Developer - Web Designer - Graphic Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en">
      <body
        className={`dark:bg-[#1f1f1f] dark:text-white h-screen px-5 ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
