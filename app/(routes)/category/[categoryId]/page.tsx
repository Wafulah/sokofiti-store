import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import LoadMore from "@/components/categoryMore";

import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getGenders from "@/actions/get-genders";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { ProductCart } from "@/types";

export const metadata = {
  title: "Category",
};

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    genderId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const sizes = await getSizes();
  const colors = await getColors();
  const genders = await getGenders();
  const products = await getCategory({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    genderId: searchParams.genderId,
    skip: 0,
    take: 4,
  });

  return (
    <div className="bg-white">
      <Container>
        {/* <Billboard data={category.billboard} /> */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} genders={genders} category={`${params.categoryId}`} />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId"
                name={`${params.categoryId} Sizes`}
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name={`${params.categoryId} Colors`}
                data={colors}
              />
              <Filter
                valueKey="genderId"
                name={`${params.categoryId} Genders`}
                data={genders}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <h1 className="p-3 font-medium text-black ">
                {params.categoryId}
              </h1>
              <p className="text-sm pt-1 px-4 text-black opacity-75">
                {products[0].category.description}
              </p>
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item, index) => (
                  <ProductCard
                    key={item.id}
                    data={item as ProductCart}
                    index={index}
                  />
                ))}
              </div>
              <LoadMore
                categoryId={params.categoryId}
                colorId={searchParams.colorId}
                sizeId={searchParams.sizeId}
                genderId={searchParams.genderId}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
