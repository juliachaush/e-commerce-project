import { Inter } from "next/font/google";

import "./globals.css";

import StoreProvider from "../store/StoreProvider";
import { MainHeader } from "../components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BaseCode shop",
  description:
    "Base Code is a brand of exceptional things produced on the basis of traditional ethnic cultures. Each collection is a unique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <StoreProvider>
          <div className="fixed top-0 left-0 w-full  z-10 ">
            <MainHeader
              path={{ products: "/products", contacts: "/contacts" }}
              linkName={{ products: "Catalog", contacts: "About us" }}
              logIn={{ path: "/login", name: "Log In" }}
            />
          </div>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
