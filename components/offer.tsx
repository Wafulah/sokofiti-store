import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";

import Link from "next/link";
import Image from "next/image";
import getOffers from "@/actions/get-offers";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  let timeout: NodeJS.Timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000);
  }
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px rotateY(${-deg}deg))`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();

    rotate();
  });
  slider.on("detailsChanged", rotate);
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};
// const [sliderRef] = useKeenSlider(
//   {
//     loop: true,
//   },
//   [
//     (slider) => {
//       let timeout: NodeJS.Timeout;
//       let mouseOver = false;
//       function clearNextTimeout() {
//         clearTimeout(timeout);
//       }
//       function nextTimeout() {
//         clearTimeout(timeout);
//         if (mouseOver) return;
//         timeout = setTimeout(() => {
//           slider.next();
//         }, 3000);
//       }
//       slider.on("created", () => {
//         slider.container.addEventListener("mouseover", () => {
//           mouseOver = true;
//           clearNextTimeout();
//         });
//         slider.container.addEventListener("mouseout", () => {
//           mouseOver = false;
//           nextTimeout();
//         });
//         nextTimeout();
//       });
//       slider.on("dragStarted", clearNextTimeout);
//       slider.on("animationEnded", nextTimeout);
//       slider.on("updated", nextTimeout);
//     },
//   ]
// );

const Offer = async () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );
  const res = await getOffers();
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
          {res.map((offer) => (
            <Link
              href={offer.name}
              key={offer.id}
              className="absolute carousel__cell h-full w-full rounded-md"
            >
              <Image
                src={offer.imageUrl}
                alt={offer.name}
                fill
                className="rounded-[5px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
