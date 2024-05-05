"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import NextImage from "next/image";
import getOffers from "@/actions/get-offers";

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
    <div
      className=" h-52 
      lg:h-64 lg:w-[40vw] w-3/4 mx-auto flex justify-between  "
    >
      {links.map((link, index) => (
        <Link key={index} href={link.link}>
          <div
            className="  mx-2 h-52 
          lg:h-64 lg:w-[20vw] w-3/4 relative rounded-md aspect-square inset-0"
          >
            <NextImage
              src={link.image}
              fill
              alt={link.name}
              className="object-cover object-center"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Offer;
