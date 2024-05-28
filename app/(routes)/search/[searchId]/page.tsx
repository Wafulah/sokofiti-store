import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import LoadMore from "@/components/searchMore";

import getProducts from "@/actions/get-search";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getGenders from "@/actions/get-genders";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { ProductCart } from "@/types";

export const revalidate = 0;

//search
interface SearchPageProps {
  params: {
    searchId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    genderId: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    name: params.searchId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    genderId: searchParams.genderId,
    skip: 0,
    take: 4,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const genders = await getGenders();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} genders={genders} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="genderId" name="Genders" data={genders} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
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
                name={params.searchId}
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

export default SearchPage;
