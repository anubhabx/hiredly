import type { Metadata } from "next";
import "./globals.css";
import FontProvider from "@/components/providers/FontProvider";
import StateProvider from "@/components/providers/StateProvider";
import { Suspense } from "react";

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
        <StateProvider>
          <Suspense fallback={null}>
            <FontProvider>{children}</FontProvider>
          </Suspense>
        </StateProvider>
      </body>
    </html>
  );
}
