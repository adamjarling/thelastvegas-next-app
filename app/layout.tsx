import "./globals.css";

import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Open_Sans, Oswald } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const headline = Oswald({
  subsets: ["latin"],
  variable: "--font-headline",
});

const bodytext = Open_Sans({
  subsets: ["latin"],
  variable: "--font-bodytext",
});

export const metadata: Metadata = {
  description: SITE.description,
  metadataBase: new URL(config.SITE.url),
  openGraph: OPEN_GRAPH,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headline.variable} ${bodytext.variable} scroll-smooth`}
    >
      <link rel="icon" href="/website-icon.png" type="image/png" />

      <body className="bg-gray-950 text-gray-50" style={{ fontFamily: "var(--font-bodytext)" }}>
        <div className="relative">
          <Nav links={nav} />
          {children}
          <Footer />
        </div>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
        </Script>
      </body>
    </html>
  );
}
