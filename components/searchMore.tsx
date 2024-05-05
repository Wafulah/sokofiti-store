"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Product, ProductCart } from "@/types";

import { useInView } from "react-intersection-observer";
import ProductList from "@/components/product-list";
import ProductCard from "@/components/ui/product-card";
import getProducts from "@/actions/get-search";

let skip = 4;
let take = 4;

interface LoadMoreProps {
  name: string;
  colorId: string;
  sizeId: string;
}
const LoadMore: React.FC<LoadMoreProps> = ({ name, colorId, sizeId }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    if (inView) {
      getProducts({
        skip: skip,
        take: take,
        name: name,
        colorId: colorId,
        sizeId: sizeId,
      }).then((res) => {
        setData([...data, ...res]);
        skip += take;
      });
    }
  }, [inView, name, colorId, sizeId, data]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <ProductCard key={item.id} data={item as ProductCart} index={index} />
        ))}
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
};

export default LoadMore;
