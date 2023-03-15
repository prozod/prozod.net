import { Manrope } from "@next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${manrope.variable} font-manrope dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
