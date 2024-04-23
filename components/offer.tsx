"use client"
import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import getOffers from "@/actions/get-offers";

const Offer = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const res = [];

  return (
    <div className="h-52 lg:w-2/5 w-3/4 mx-auto flex justify-center overflow-hidden lg:overflow-auto">
      <div
        style={{ perspective: "600px" }}
        className="relative h-full lg:w-full w-11/12 mx-auto overflow-hidden lg:overflow-auto"
      >
        <div
          ref={sliderRef}
          style={{
            transformStyle: "preserve-3d",
            overflow: "visible",
            transform: "translateZ(-288px)",
          }}
          className="absolute keen-slider h-full w-full rounded-md"
        >
          
        </div>
      </div>
    </div>
  );
};

export default Offer;
