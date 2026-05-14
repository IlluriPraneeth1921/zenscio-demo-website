import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zenscio",
  description:
    "Premium homepage design and launch-ready web systems for service businesses that need stronger first impressions, clearer proof, and better conversion flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-sand)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
