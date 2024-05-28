import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Glamarace-Kenya's Premier Online Fashion Destination",
    default: "Glamarace - Kenya's Premier Online Fashion Destination",
  },
  description:
    "Discover extravagant, stylish, and top-quality fashion for everyone at Glamarace, Kenya's leading online fashion store. We offer a wide variety of clothing, shoes, accessories, and more from top brands and local designers. Shop wedding dresses, suits, watches, purses, Nike, Adidas, and more. Find your perfect look and elevate your style with Glamarace. Free shipping within Kenya!",
  keywords: [
    "online fashion store Kenya",
    "wedding dresses Kenya",
    "suits Kenya",
    "watches Kenya",
    "purses Kenya",
    "Nike Kenya",
    "Adidas Kenya",
    "clothing Kenya",
    "shoes Kenya",
    "accessories Kenya",
    "fashion trends Kenya",
    "vintage clothing Kenya",
    "designer clothing Kenya",
    "Kitenge Kenya",
    "Dresses Kenya",
    "Skirts Kenya",
    "Air Force 1 Kenya",
    "Denim Kenya",
    "Rolex Kenya",
    "Puma Kenya",
    "Levi's Kenya",
    "Gucci Kenya",
    "Prada Kenya",
    "Louis Vuitton Kenya",
    "Zara Kenya",
    "H&M Kenya",
    "affordable fashion Kenya",
    "high-quality fashion Kenya",
    "stylish clothing Kenya",
    "glamorous fashion Kenya",
    "fashion designers",
  ],
  metadataBase: new URL("https://sokofiti-store.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://sokofiti-store.vercel.app",
    title: "Glamarace - Kenya's Premier Online Fashion Destination",
    description:
      "Discover extravagant, stylish, and top-quality fashion for everyone at Glamarace, Kenya's leading online fashion store. We offer a wide variety of clothing, shoes, accessories, and more from top brands and local designers.",
    images: [
      {
        url: "https://sokofiti-store.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glamarace Online Fashion Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@glamarace",
    title: "Glamarace - Kenya's Premier Online Fashion Destination",
    description:
      "Discover extravagant, stylish, and top-quality fashion for everyone at Glamarace, Kenya's leading online fashion store. We offer a wide variety of clothing, shoes, accessories, and more from top brands and local designers.",
    images: "https://sokofiti-store.vercel.app/twitter-image.jpg",
  },
  themeColor: "FF3300",
  robots: "index, follow",
};

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ skip: 0, take: 4 });

  const categories = await getCategories();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard 
          data={billboard}
        /> */}
        <CategoryList title="Explore Categories" data={categories} />
        <div className="mx-auto w-[90vw] lg:h-64 h-52 ">
          <Offer />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            items={products as ProductCart[]}
          />
          <LoadMore />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
