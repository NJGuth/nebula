import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { AiironSprite } from "@/components/agent/icons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIIR.AI",
  description: "Ai testing environment",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>🌴<text y='.9em' font-size='90'></text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${inter.variable} antialiased`}>
          <div className="flex overflow-hidden flex-col items-center bg-linear-to-tr from-blue-700 to-blue-400  justify-center h-screen p-2 sm:p-8 lg:p-12 relative">
            <SignedIn>
              {children}
              <div className=" absolute bottom-3 bg-white/20 px-2 rounded-md">
                <SignOutButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex bg-white rounded-md w-full  flex-col items-center justify-center h-screen">
                <AiironSprite className="size-14 mb-4" />
                <p className="text-2xl font-bold mb-8">Aiiron Demo</p>
                <div className="flex flex-col border h-12  rounded-md hover:border-green-500 hover:bg-green-100 hover:text-green-700 items-center text-xl justify-center px-12">
                  <SignInButton />
                </div>
              </div>
            </SignedOut>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
