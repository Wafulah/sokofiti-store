// CartItem.tsx
import Image from "next/image";

import IconButton from "@/components/ui/icon-button";
import getOrder from "@/actions/get-order";
import Currency from "@/components/ui/currency";

import { OrderItems, OrderItem } from "@/types";

interface CartItemProps {
  id: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = async ({ id, quantity }) => {
  const dataItems: OrderItems = await getOrder({ id: id });
  const data = dataItems.product;
  const price = parseInt(data.price) * quantity;
  console.log(dataItems, data);
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images[0]?.url}
          alt={data?.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0"></div>
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
        <div className="mt-1 flex flex-end text-sm">
          <p className="text-bold text-lg text-[rgb(255,55,0)]">
            {quantity} <span className="text-black opacity-75">Items</span>
          </p>
        </div>
        <div className="mt-1 flex flex-end text-sm">
          <p className="text-bold text-lg text-[rgb(255,55,0)]">
            Total Price<span className="text-black opacity-75">{price}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
