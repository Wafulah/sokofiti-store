"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Product, ProductCart } from "@/types";

import { useInView } from "react-intersection-observer";
import ProductList from "@/components/product-list";
import getProducts from "@/actions/get-products";

let skip = 4;
let take = 4;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    if (inView) {
      getProducts({ skip: skip, take: take }).then((res) => {
        setData((prevData) => [...prevData, ...res]);
        skip += take;
      });
    }
  }, [inView]);

  return (
    <>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="" items={data as ProductCart[]} />
      </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
