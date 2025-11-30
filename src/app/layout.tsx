import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Rudira Consultancy",
  description: "Rudira Consultancy and Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <ThemeContextProvider>
            <SessionProvider>
              <div className="h-24 px-30 py-4">
                <NavBar />
              </div>
              {children}
              <div className="h-80 px-30 py-4 bg-zinc-50">
                <Footer />
              </div>
            </SessionProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
}
