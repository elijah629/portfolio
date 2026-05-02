import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import "./globals.css";

const spotifyMix = localFont({
  src: "./SpotifyMixUITitleVariable.woff2",
  variable: "--font-spotify-mix",
});

const serenityOSEmoji = localFont({
  src: "./SerenityOS-Emoji.ttf",
  variable: "--font-serenity-os",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Eli Ozcan portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spotifyMix.variable} ${serenityOSEmoji.variable} scroll-smooth font-sans dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
