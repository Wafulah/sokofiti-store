import React from "react";
import Head from "next/head";
import { generateMetadata } from "@/lib/product-metadata";

import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import { ProductCart } from "@/types";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = (await getProduct({ id: params.productId })) as ProductCart;
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
    skip: 0,
    take: 4,
  });

  if (!product) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.description,

    offers: {
      "@type": "Offer",
      url: `https://sokofiti-store.vercel.app/products/${product.id}`,
      priceCurrency: "KES",
      price: product.price,
      availability: product.isArchived
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Glamarace",
      },
    },
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
            title="Related Items"
            items={suggestedProducts as ProductCart[]}
          />
        </div>
      </Container>
    </div>
  );
};

export { generateMetadata };
export default ProductPage;
