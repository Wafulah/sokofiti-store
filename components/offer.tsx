"use client";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/auth/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Offer = () => {
  const links = [
    {
      id: 1,
      link: "/category/weddings",
      image: "/one.jpg",
      name: "Weddings",
    },
    {
      id: 2,
      link: "/category/suits",
      image: "/two.jpg",
      name: "Suits",
    },
    {
      id: 3,
      link: "/category/traditional",
      image: "/three.jpg",
      name: "Traditional",
    },
    {
      id: 4,
      link: "/category/latest",
      image: "/four.jpg",
      name: "Latest",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-xs h-full"
    >
      <CarouselContent className="w-full h-full mx-auto">
        {links.map((link, index) => (
          <CarouselItem key={index}>
            <Link href={link.link} className="p-1 w-full h-full mx-auto">
              <Card className="mx-auto w-4/5 lg:w-2/4 lg:h-64 h-52">
                <CardContent className="flex aspect-square items-center justify-center p-6 w-full h-full relative">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    className="aspect-square object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Offer;
