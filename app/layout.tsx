import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abhinya Design | Premium IT & Software Services",
    template: "%s | Abhinya Design",
  },
  description:
    "Abhinya Design — a full-service IT company delivering web development, mobile apps, UI/UX design, cloud, and AI/ML services.",
  keywords: ["IT services", "software company", "web development", "UI/UX design", "Abhinya Design", "Hyderabad"],
  authors: [{ name: "Abhinya Design" }],
  creator: "Abhinya Design",
  metadataBase: new URL("https://abhinyadesign.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhinyadesign.com",
    siteName: "Abhinya Design",
    title: "Abhinya Design | Premium IT & Software Services",
    description: "Transforming ideas into digital excellence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinya Design",
    description: "Premium IT & Software Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[#0f2a36] text-[#f4f4f5] antialiased min-h-screen flex flex-col`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VPWSD1H257"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VPWSD1H257');
          `}
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
