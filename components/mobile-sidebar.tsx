"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { Sidebar } from "@/components/sidebar";
import useUserStore from "@/lib/store";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [userId, setUserId] = useState<boolean>(false);

  const userDetails = useUserStore((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted && userDetails[0]?.id) {
      // Check if userDetails[0]?.id exists
      setUserId(true); // Set userId to true if userDetails[0]?.id exists
    } else {
      setUserId(false); // Set userId to false otherwise
    }
  }, [isMounted, userDetails]);

  if (!isMounted) {
    return null;
  }

  const onLogin = () => {
    window.location.href = `/login`;
  };

  return (
    <>
      {userId ? (
        <Sheet>
          <SheetTrigger>
            <div className="bg-black lg:w-8 w-[40px] mt-3 lg:mt-0 lg:ml-0 ml-4 h-[40px] lg:h-full relative rounded-full border-white border-2">
              <Image
                src="/glamarace-dress.svg"
                alt="Glamarace profile"
                fill
                className="rounded-full bg-black"
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
          className="lg:mt-0 bg-transparent w-fit h-fit"
        >
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback className="lg:mt-0">
              <FaUser className="text-{rgb(255,55,0)}" />
            </AvatarFallback>
          </Avatar>
        </Button>
      )}
    </>
  );
};
