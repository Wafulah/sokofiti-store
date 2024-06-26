"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHouse,
  FaStore,
  FaTruckFast,
  FaTty,
  FaMessage,
} from "react-icons/fa6";

const BottomNav = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <FaHouse /> },
    { href: "/store", label: "Store", icon: <FaStore /> },
    { href: "/orders", label: "Orders", icon: <FaTruckFast /> },
    { href: "/sms", label: "sms", icon: <FaMessage /> },
  ];

  return (
    <nav className="bg-[rgba(237,228,226,0.77)] rounded-t-xl fixed z-40 h-20 lg:h-24 w-full bottom-0">
      <ul className="flex justify-around items-center h-full w-full">
        {links.map(({ href, label, icon }, index) => (
          <li key={index}>
            <Link href={href}>
              <p
                className={`flex flex-col items-center opacity-75 ${
                  pathname === href
                    ? "text-[rgb(255,0,0)] font-black text-lg lg:text-2xl "
                    : "text-black font-bold text-base lg:text-xl"
                }`}
              >
                {icon}
                <span>{label}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
