"use client";

import {useEffect,useState } from "react";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
      }, []);
    
      if (!isMounted) {
        return null;
      }
      useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
  return (
    <html className="w-[100vw]" lang="en">
      <body className={font.className}>
        <Navbar />

        <h2 className="text-bold bg-black">Something went wrong!</h2>
        <button onClick={() => reset()} className="bg-[rgb(255,55,0)]">
          Try again
        </button>

        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
