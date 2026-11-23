import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Jos Joseph | Web developer",
  description:
    "Portfolio of Joel Jos Joseph: front-end and full-stack projects built with React, Next.js, TypeScript and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
