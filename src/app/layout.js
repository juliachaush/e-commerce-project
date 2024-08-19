import { Inter } from "next/font/google";

import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BaseCode shop",
  description:
    "Base Code is a brand of exceptional things produced on the basis of traditional ethnic cultures. Each collection is a unique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={`${inter.className} bg-gray-100`}>{children}</body>
      </Suspense>
    </html>
  );
}
