import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Idea Vault",
  description: "Park ideas before they evaporate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
