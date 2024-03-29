import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Henry Navntoft | Personal Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>

        <SpeedInsights />
      </body>
    </html>
  );
}
