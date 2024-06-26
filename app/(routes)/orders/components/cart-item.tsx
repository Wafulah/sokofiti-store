import Image from "next/image";
import { toast } from "react-hot-toast";


import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images[0]?.url}
          alt={data?.name}
          className="object-cover object-center"
          sizes="(max-width: 640px) 30vw, (max-width: 1200px) 13vw, 13vw"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data?.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data?.color?.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data?.size?.name}
            </p>
          </div>
          <Currency value={data?.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
