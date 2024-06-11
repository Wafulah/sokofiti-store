import Head from "next/head";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import LoadMore from "@/components/categoryMore";

import { generateMetadata } from "@/lib/category-metadata";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getGenders from "@/actions/get-genders";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { ProductCart } from "@/types";

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
  const metadata = await generateMetadata({ params });

  return (
    <div className="bg-white">
      <Head>
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={`${metadata.description}`} />
        {/* You can add other metadata elements here based on your needs */}
        <meta
          property="og:type"
          content={`${metadata?.openGraph?.type || "website"}`}
        />
        <meta
          property="og:url"
          content={`${metadata?.openGraph?.url || "https://example.com"}`}
        />
        <meta
          property="og:site_name"
          content={`${metadata?.openGraph?.siteName || "@glamarace"}`}
        />
        <meta
          property="og:title"
          content={`${
            metadata?.openGraph?.title ||
            "Glamarace - Kenya's Premier Online Fashion Destination"
          }`}
        />
        <meta
          property="og:description"
          content={`${
            metadata?.openGraph?.description ||
            "Discover extravagant, stylish, and top-quality fashion for everyone at Glamarace, Kenya's leading online fashion store. We offer a wide variety of clothing, shoes, accessories, and more from top brands and local designers. Shop wedding dresses, suits, watches, purses, Nike, Adidas, and more. Find your perfect look and elevate your style with Glamarace. Free shipping within Kenya!"
          }`}
        />
        <meta
          property="og:image"
          content={`${
            metadata?.openGraph?.images ||
            "https://sokofiti-store.vercel.app/opengraph-image.png"
          }`}
        />
        {/* <meta
          name="twitter:card"
          content={`${metadata?.twitter?.card || "summary_large_image"}`}
        /> */}
        <meta
          name="twitter:site"
          content={`${metadata?.twitter?.site || "@glamarace"}`}
        />
        <meta
          name="twitter:title"
          content={`${
            metadata?.twitter?.title ||
            "Glamarace - Kenya's Premier Online Fashion Destination"
          }`}
        />
        <meta
          name="twitter:description"
          content={`${
            metadata?.twitter?.description ||
            "Discover extravagant, stylish, and top-quality fashion for everyone at Glamarace, Kenya's leading online fashion store. We offer a wide variety of clothing, shoes, accessories, and more from top brands and local designers. Shop wedding dresses, suits, watches, purses, Nike, Adidas, and more. Find your perfect look and elevate your style with Glamarace. Free shipping within Kenya!"
          }`}
        />
        <meta
          name="twitter:image"
          content={`${
            metadata?.twitter?.images ||
            "https://sokofiti-store.vercel.app/twitter-image.png"
          }`}
        />
      </Head>
      <Container>
        {/* <Billboard data={category.billboard} /> */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              sizes={sizes}
              colors={colors}
              genders={genders}
              category={`${params.categoryId}`}
            />
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
              <h1 className="px-5 pt-3 pb-1 font-black text-black texl-2xl">
                {params.categoryId}
              </h1>
              <p className="text-sm pt-1 pb-4 px-5 text-black opacity-75">
                {products[0]?.category?.description}
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

export { generateMetadata };
export default CategoryPage;
