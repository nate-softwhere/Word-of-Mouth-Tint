import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Word of Mouth Window Tinting",
  description:
    "Professional automotive window tinting in Minot, ND. Clean and professional work. Premium materials, 96% customer satisfaction. (701) 500-5802.",
  icons: {
    icon: "/soft-where-logo.png",
  },
  openGraph: {
    title: "Word of Mouth Window Tinting",
    description:
      "Professional automotive window tinting in Minot, ND. Clean and professional work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
