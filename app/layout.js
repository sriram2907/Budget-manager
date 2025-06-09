import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import {Toaster} from "sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finwise",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>


      <html lang="en">
        <body
          className={`${inter.className} animated-dotted-background`}
        >
          {/*Header*/}

          <Header />
          <main className="min-h-screen">
            <Toaster/>

            {children}
          </main>
          {/*footer*/}
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>made with 💗</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
