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
      <footer className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          <p>© 2025 CSnack - CS 면접 준비를 위한 최고의 선택</p>
        </div>
      </footer>
    </html>
  );
}
