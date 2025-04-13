import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSnack 앱",
  description: "Next.js로 만든 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
