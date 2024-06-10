"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    
  }, [error]);
  return (
    <html>
      <body className="h-screen w-full flex flex-col justify-center items-center">
        <h2 className="text-[rgb(255,0,0)] font-black font-serif">Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
