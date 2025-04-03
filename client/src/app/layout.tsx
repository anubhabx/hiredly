import type { Metadata } from "next";
import "./globals.css";
import FontProvider from "@/components/providers/FontProvider";

export const metadata: Metadata = {
  title: "Hiredly",
  description: "Ace Your Next Interview with AI Voice Assistant",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <FontProvider>{children}</FontProvider>
      </body>
    </html>
  );
}
