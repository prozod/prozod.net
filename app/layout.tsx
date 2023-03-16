import CommandMenu from "@/components/Commands";
import { Providers } from "@/components/Provider";
import { JetBrains_Mono, Manrope } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${manrope.variable} ${jetbrains.variable} font-manrope`}
      >
        <Providers>
          <CommandMenu />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
