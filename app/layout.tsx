import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chennai React",
  description:
    "Welcome to the Chennai ReactJS Meetup Group! We are a community of enthusiasts who are passionate about all things React. This group provides a platform to meetup, connect, and deepen our knowledge on the latest trends and developments in ReactJS. Whether you're a beginner or an expert, join us to explore and discuss the intersection of technology, society, and the ReactJS framework. Let's collaborate, learn, and grow together as a community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
