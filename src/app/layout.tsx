import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "JSON Sharing App",
  description: "A simple app to share and edit JSON data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4">{children}</div>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
