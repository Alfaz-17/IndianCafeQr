import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2D4027",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "The Indian Cafe – Menu | Lake View, Bhavnagar",
  description:
    "Fast digital QR menu for The Indian Cafe, Lake View, Bhavnagar. Good Food • Great Vibes. 100% Pure Vegetarian.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical artwork for instant rendering */}
        <link rel="preload" as="image" href="/images/hero-night.webp" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/2-screen.webp" type="image/webp" />

        {/* Lightweight PWA / Offline Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration skipped:', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <main className="flex-1 mx-auto w-full max-w-md">{children}</main>
      </body>
    </html>
  );
}
