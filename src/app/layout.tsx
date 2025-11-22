import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spotifyMix = localFont({
  src: "./SpotifyMixUITitleVariable.woff2",
  variable: "--font-spotify-mix",
});

const cascadiaCode = Cascadia_Code({
  variable: "--font-casc-code",
  adjustFontFallback: false,
  subsets: ["latin"],
});

const serenityOSEmoji = localFont({
  src: "./SerenityOS-Emoji.ttf",
  variable: "--font-serenity-os",
});

export const metadata: Metadata = {
  title: "Eli Ozcan",
  description: "web-dev or something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cascadiaCode.variable} ${spotifyMix.variable} ${serenityOSEmoji.variable} scroll-smooth font-sans dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
