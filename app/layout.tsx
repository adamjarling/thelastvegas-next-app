import "./globals.css";

import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

export const metadata: Metadata = {
  description: SITE.description,
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
    <html lang="en" className={libreFranklin.className}>
      {/* Favicon */}
      <link rel="icon" href="/website-icon.png" type="image/png" />

      <body className="bg-gray-950 text-gray-50">
        <div className="relative ">
          <Nav links={nav} />
          <div className="">{children}</div>
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