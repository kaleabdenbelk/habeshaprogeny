import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habesha Progeny",
  description: "A community that support the creativity of young minds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Instrument Serif, Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
