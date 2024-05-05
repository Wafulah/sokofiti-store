"use client";
import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import NextImage from "next/image";
import getOffers from "@/actions/get-offers";

const Offer = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

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
      ref={sliderRef}
      className=" keen-slider h-52 
      lg:h-64 lg:w-[40vw] w-3/4 flex justify-center rounded-md"
    >
      {links.map((link, index) => (
        <Link key={index} href={link.link}>
          <div
            className="keen-slider__slide   h-52 
          lg:h-64 w-full relative rounded-md aspect-square inset-0"
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
