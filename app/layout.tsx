import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramzi Operator",
  description: "Building simple apps that can earn online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
