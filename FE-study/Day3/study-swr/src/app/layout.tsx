import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul className="list-tab">
          <li>
            <a href="/">Root</a>
          </li>
          <li>
            <a href="/user">Users List</a>
          </li>
          <li>
            <a href="/user/create">Create User</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}