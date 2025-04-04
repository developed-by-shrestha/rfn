import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research For Nepal - Building a Prosperous Nepal",
  description:
    "Research For Nepal (RfN) is a pioneering non-profit research institute established in 2023, fostering knowledge-driven national development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
