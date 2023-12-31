import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between lg:justify-normal ">
          <Link href="/" className="ml-1 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-base lg:text-xl">Home</p>
          </Link>
          <Link href="/store" className="flex ml-2 mr-2 gap-x-2">
            <p className=" font-bold text-base lg:text-xl">Stores</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
