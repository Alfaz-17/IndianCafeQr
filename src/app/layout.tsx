import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2F3E27",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "The Indian Cafe – Menu | Bhavnagar",
  description:
    "Browse the digital menu of The Indian Cafe, Lake View, Bhavnagar. 100% Pure Vegetarian.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <main className="flex-1 mx-auto w-full max-w-md">{children}</main>
      </body>
    </html>
  );
}
