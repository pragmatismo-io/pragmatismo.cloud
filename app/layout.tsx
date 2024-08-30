"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TheMenu } from "./menu";
import { TheFooter } from "./footer";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    // GTranslate script
    const gTranslateScript = document.createElement('script');
    gTranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    gTranslateScript.async = true;
    document.body.appendChild(gTranslateScript);

    // GTag script
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2NHNQYZLC0');
    `;
    document.body.appendChild(gtagScript);
    window['gtranslateSettings'] = {
      "default_language":"en",
      "detect_browser_language":true,
      "languages":["en","fr","de","it","es","pt","zh-CN","ja"],
      "wrapper_selector":".gtranslate_wrapper",
      "switcher_horizontal_position":"right",
      "alt_flags":{"pt":"brazil"}
    };


    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(gTranslateScript);
      document.body.removeChild(gtagScript);
    };
  }, []);

  return (
    <html suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Pragmatismo" />
        <meta property="og:description" content="General Bots® Online and custom AI models. Systems integration." />
        <meta property="og:image" content="https://raw.githubusercontent.com/tommyjepsen/twblocks/main/hero4.png?raw=true" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModeToggle />
          <TheMenu />
          {children}
          <TheFooter/>
        </ThemeProvider>
      </body>
    </html>
  );
}
