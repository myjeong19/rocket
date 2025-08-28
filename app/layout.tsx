import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '로켓 AI',
  description: '로켓 AI',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased max-w-md w-full h-full mx-auto bg-white">{children}</body>
    </html>
  );
}
