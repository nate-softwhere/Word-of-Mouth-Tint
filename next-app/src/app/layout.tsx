import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit",
  description:
    "A simple, modern landing page starter for a Next.js app with a clear hero, feature section, and call to action.",
  openGraph: {
    title: "LaunchKit",
    description:
      "A simple, modern landing page starter for a Next.js app with a clear hero, feature section, and call to action.",
  },
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
