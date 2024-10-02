import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "./../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Growers",
  description:
    "Coriander, spring onion, spinach, and silverbeet grower specialist.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headingText = await reader.singletons.headings.read();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {headingText && <Footer footerText={headingText.footer} />}
      </body>
    </html>
  );
}
