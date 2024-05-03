import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import CategoryList from "@/components/ui/CategoryList";
import Container from "@/components/ui/container";
import Offer from "@/components/offer";
import { ProductCart } from "@/types";

import LoadMore from "@/components/loadMore";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ skip: 4, take: 4 });

  const categories = await getCategories();
 
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard 
          data={billboard}
        /> */}
        <CategoryList title="Explore Categories" data={categories} />
        <Offer />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products as ProductCart[]} />
          <LoadMore />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
