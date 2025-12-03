import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Providers } from "./providers";
import { Noto_Sans } from "next/font/google";
 
const notoSans = Noto_Sans({
  subsets: ["latin"],          // required, e.g., latin, latin-ext
  weight: ["400", "700"],      // optional: normal 400, bold 700
  style: ["normal", "italic"], // optional
  variable: "--font-noto-sans", // optional CSS variable
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
    <html lang="en" className={notoSans.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <ThemeContextProvider>
            <SessionProvider>
              <div className="h-24 px-30 py-4">
                <NavBar />
              </div>
              {children}
              <div className="px-30 py-3 bg-zinc-50">
                <Footer />
              </div>
            </SessionProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
}
