import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import Head from "next/head";
import { Providers } from "./providers";
import { Container } from "@/components/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nich Secord",
  description:
    "I am software engineer specializing in building great web apps.",
};

export type RootLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/secord.svg" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen">
            <SiteHeader />
            <main>
              <Container>{children}</Container>
            </main>
          </div>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
