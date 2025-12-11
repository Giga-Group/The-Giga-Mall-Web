import type { Metadata } from "next";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giga Mall - Your Premier Shopping Destination",
  description: "Discover the Giga Mall Experience - Shop, Dine, Stay, and Entertain at Giga City, DHA Islamabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
