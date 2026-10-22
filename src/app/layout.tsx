import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  // Update after deploying if your address is different
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://febybaby.vercel.app"),
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.tagline} Based in ${profile.location}.`,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: [profile.photo],
    type: "profile",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
