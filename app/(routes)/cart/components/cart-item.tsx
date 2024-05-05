// CartItem.tsx
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaTimes as X } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { ProductCart } from "@/types";

interface CartItemProps {
  data: ProductCart;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const [quantity, setQuantity] = useState<number>(parseInt(data.items));
  const [price, setPrice] = useState<number>(parseInt(data.price));
  const cart = useCart();
  let pricePerItem = parseInt(data.price) / parseInt(data.items);
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const increaseQuantity = () => {
    // Calculate price per item
    const pricePerItem = price / quantity;
    // Increase quantity
    setQuantity(quantity + 1);
    updatePrice(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      // Calculate price per item
      pricePerItem = price / quantity;
      // Decrease quantity
      setQuantity(quantity - 1);
      updatePrice(quantity - 1);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      // Calculate price per item
      pricePerItem = price / quantity;
      // Update quantity
      setQuantity(newQuantity);
      updatePrice(newQuantity);
    }
  };

  function updatePrice(quantity: number) {
    const newPrice = pricePerItem * quantity;
    setPrice(newPrice);

    cart.updateItem({
      ...data,
      items: quantity.toString(),
      price: newPrice.toString(),
    });
  }

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
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
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
          <Currency value={price} />
        </div>
        <div className="mt-1 flex flex-end text-sm">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="text-gray-500 border-b border-gray-200"
          >
            <FiMinus />
          </button>
          <input
            type="number"
            className="text-gray-500 border-b border-gray-200 w-16 text-center"
            value={quantity}
            min={1}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          />
          <button
            type="button"
            onClick={increaseQuantity}
            className="text-gray-500 border-b border-gray-200"
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
