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
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent>
        {routes.map((route) => (
          <SelectItem key={route.href} value= {route.label}>
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MainNav;
