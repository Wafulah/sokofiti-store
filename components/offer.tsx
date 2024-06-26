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
      link: "/category/traditional",
      image: "/traditional.png",
      name: "Traditional Akanras and Vitenges",
    },
    {
      id: 2,
      link: "/category/suits",
      image: "/suits.png",
      name: "Men's Suits",
    },
    {
      id: 3,
      link: "/category/weddings",
      image: "/wedding.png",
      name: "Weddings Dresses",
    },
    {
      id: 4,
      link: "/category/latest",
      image: "/latest.png",
      name: "Latest Fashion",
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
      arrows={false}
      className="w-[90vw] h-full mx-auto"
    >
      <CarouselContent className="w-full h-full mx-auto lg:gap-3">
        {links.map((link, index) => (
          <CarouselItem
            key={index}
            className="mx-auto pl-1 w-full lg:w-2/4 lg:h-72 h-52 lg:basis-1/3"
          >
            <Link href={link.link} className="w-full h-full">
              <Card className="w-full h-full">
                <CardContent className="flex aspect-square items-center justify-center p-6 w-full h-full relative">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    className="aspect-square object-cover rounded-xl"
                    priority={index === 1 ? true : false}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 27vw"
                    placeholder="blur"
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
