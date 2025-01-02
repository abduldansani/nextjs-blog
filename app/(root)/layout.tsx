import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import Footer from "../components/Footer";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amsoshi",
  description: "Amsoshi blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white text-textInLight2 dark:bg-darkBg dark:text-textInDark2  ${poppins.className}`}
      >
        <Providers>
          <div className="flex flex-col justify-between min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
