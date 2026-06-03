import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penta | Rotomolded Plastic Products",
  description:
    "Penta manufactures, exports, and wholesales high-quality rotomolded plastic products.",
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
