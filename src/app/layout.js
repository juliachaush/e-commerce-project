import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BaseCode shop",
  description:
    "Base Code is a brand of exceptional things produced on the basis of traditional ethnic cultures. Each collection is a unique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
