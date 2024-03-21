import Link from "next/link";
import {
  FaHouse,
  FaStore,
  FaTruckFast,
  FaTty,
  FaMessage,
} from "react-icons/fa6";

const BottomNav = () => {
  return (
    <div className="bg-[rgb(237,228,226)] rounded-t-xl fixed z-40 h-24 w-full bottom-0">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col items-center justify-center gap-x-2">
          <FaHouse className="font-bold text-2xl"/>
          <p className="opacity-75 font-bold text-base lg:text-xl">Home</p>
        </Link>
        <Link href="/orders" className="flex flex-col items-center justify-center gap-x-2">
          <FaTruckFast className="font-bold text-2xl" />
          <p className="opacity-75 font-bold text-base lg:text-xl">Orders</p>
        </Link>
        <Link href="/store" className="flex flex-col items-center justify-center gap-x-2">
          <FaStore className="font-bold text-2xl" />
          <p className="opacity-75 font-bold text-base lg:text-xl">Stores</p>
        </Link>
        <Link href="/store" className="flex flex-col items-center justify-center gap-x-2">
          <FaMessage className="font-bold text-2xl" />
          <p className="opacity-75 font-bold text-base lg:text-xl">SmS</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
