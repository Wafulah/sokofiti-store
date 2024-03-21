"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { useUserStore } from "@/lib/store";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const userDetails = useUserStore((state) => state);
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onLogin = () => {
    window.location.href = `/login`;
  };

  return (
    <>
      {userDetails.userId ? (
        <Sheet>
          <SheetTrigger>
            <div className="lg:w-8 w-[40px] mt-3 lg:mt-0 lg:ml-0 ml-4 h-[40px] lg:h-full relative rounded-full border-white border-2">
              <Image
                src="/five.jpg"
                alt="profile"
                fill
                className="rounded-full"
              />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      ) : (
        <Button
          onClick={onLogin}
          className="flex justify-center items-center lg:w-8 w-[40px] mt-3 lg:mt-0 lg:ml-0 ml-4 h-[40px] lg:h-full relative rounded-full border-white border-2"
        >
          <p className="font-black text-white text-xl">L</p>
        </Button>
      )}
    </>
  );
};
