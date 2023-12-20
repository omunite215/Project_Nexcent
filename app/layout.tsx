import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./styles/sass/main.scss";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Nexcent",
  description: "Lessons and Insights from 8 years",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
