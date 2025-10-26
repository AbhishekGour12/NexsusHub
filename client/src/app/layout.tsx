import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optional: you can actually use these fonts (you imported them but not applied yet)
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusHub",
  description:
    "Smart management made simple. One SaaS platform for schools, hotels, and gyms.",
  icons: {
    icon: "/virtualSpaceLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className}`}>
        {children}
      </body>
    </html>
  );
}
