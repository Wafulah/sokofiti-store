import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHouse,
  FaStore,
  FaTruckFast,
  FaTty,
  FaMessage,
} from "react-icons/fa6";

const BottomNav = () => {
  const router = useRouter();

  const links = [
    { href: "/", label: "Home", icon: <FaHouse /> },
    { href: "/store", label: "Store", icon: <FaStore /> },
    { href: "/orders", label: "Orders", icon: <FaTruckFast /> },
    { href: "/sms", label: "sms", icon: <FaMessage /> },
  ];

  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-around">
        {links.map(({ href, label, icon }, index) => (
          <li key={index}>
            <Link href={href}>
              <p
                className={`flex flex-col items-center opacity-75 font-bold text-base lg:text-xl ${
                  router.pathname === href
                    ? " text-[rgb(255,0,0)]"
                    : "text-black"
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
