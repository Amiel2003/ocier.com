import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Poppins, Archivo_Black, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/provider/LenisProvider";

const ronzino = localFont({
  src: [
    {
      path: "../../public/fonts/Ronzino-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Ronzino-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Ronzino-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ronzino",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: "Amiel Jay's Portfolio",
  description: "Amiel Jay's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${archivoBlack.variable} ${montserrat.variable} ${ronzino.variable} ${jetbrains.variable}  antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
