"use client";

import { ThemeProvider as NextThemes } from "next-themes";
import { MotionConfig } from "framer-motion";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemes attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* Respects the visitor's "reduce motion" setting: no sliding, only fades */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemes>
  );
}
