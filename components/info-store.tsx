"use client";

import { FaShoppingCart as ShoppingCart } from "react-icons/fa";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Store } from "@/types";
import useCart from "@/hooks/use-cart";

import { Badge } from "@/components/ui/badge";

interface InfoProps {
  data: Store;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        {/* <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p> */}
      </div>
      <hr className="my-4" />
      <h1 className="font-semibold text-black">Description</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-lg text-gray-900">
          <div>{data?.description}</div>
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Location</h3>
          <div className="flex items-center gap-x-4">
            {data?.counties?.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
        <h3 className="font-semibold text-black">Categories:</h3>
        <div className="flex items-center gap-x-4">
          {data?.categories?.map((item) => (
            <div key={item?.id}>
              <Badge variant="outline">{item?.name}</Badge>
            </div>
          ))}
        </div>
        {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div> */}
        {/* <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div> */}
      </div>
    </div>
  );
};

export default Info;
