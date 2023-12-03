"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    // <nav
    //   className="mx-6 flex items-center space-x-4 lg:space-x-6"
    // >
    //   {routes.map((route) => (
    //     <Link
    //       key={route.href}
    //       href={route.href}
    //       className={cn(
    //         'text-sm font-medium transition-colors hover:text-black',
    //         route.active ? 'text-black' : 'text-neutral-500'
    //       )}
    //     >
    //       {route.label}
    //   </Link>
    //   ))}
    // </nav>

    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            <SelectItem value="light">{route.label}</SelectItem>
          </Link>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MainNav;
