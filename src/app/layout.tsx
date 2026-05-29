import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Link — Look Beyond. Find Potential.",
  description: "Skill-development and job-placement portal for ZABS Place + Cakeable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
