"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TheMenu } from "./menu";
import { TheFooter } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          property="og:title"
          content="Pragmatismo"
        />
        <meta
          property="og:description"
          content="General Bots® Online and custom AI models. Systems integration."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tommyjepsen/twblocks/main/hero4.png?raw=true"
        />
      </head>
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ModeToggle />
          <TheMenu /> 
          {children}
          <TheFooter/>
        </ThemeProvider>
      </body>
    </html>
  );
}
