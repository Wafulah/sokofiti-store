import React from "react";
import Head from "next/head";

import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info-store";
import getStore from "@/actions/get-store";
import getStores from "@/actions/get-stores";
import Container from "@/components/ui/container";
import { ProductCart } from "@/types";

export const revalidate = 0;

interface StorePageProps {
  params: {
    storeId: string;
  };
}

const StorePage: React.FC<StorePageProps> = async ({ params }) => {
  const product = await getStore(params.storeId);
  // const suggestedStores = await getStores({
  //   categoryId: product?.category?.id
  // });

  const suggestedStores = await getStores();

  if (!product) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Fashion Store",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.description,
    url: `https://sokofiti-store.vercel.app/store/${params.storeId}`,
  };

  return (
    <div className="bg-white">
      <Head>
        <title>{`${product.name} | Glamarace`}</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList
            title="Store Items"
            items={product.products as ProductCart[]}
          />
        </div>
      </Container>
    </div>
  );
};

export default StorePage;
