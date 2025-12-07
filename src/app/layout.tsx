import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Providers } from "./providers";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"], // choose what you need
  variable: "--font-outfit", // optional CSS variable
});

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
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <ThemeContextProvider>
            <SessionProvider>
              <div className="h-24 px-30 py-4 fixed bg-white w-full z-10">
                <NavBar />
              </div>
              <div className="pt-24">{children}</div>
              <div className="px-30 py-3 mt-5 bg-zinc-50">
                <Footer />
              </div>
            </SessionProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
}
