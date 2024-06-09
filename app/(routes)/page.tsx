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
      "best online fashion store in Kenya",
      "luxury wedding dresses in Kenya",
      "tailored suits for men in Kenya",
      "high-end watches available in Kenya",
      "designer purses and handbags in Kenya",
      "Nike sportswear and sneakers in Kenya",
      "Adidas clothing and accessories in Kenya",
      "trendy clothing for all ages in Kenya",
      "stylish shoes and footwear in Kenya",
      "fashion accessories for men and women in Kenya",
      "latest fashion trends in Kenya",
      "vintage clothing and accessories in Kenya",
      "designer clothing and luxury brands in Kenya",
      "traditional Kitenge outfits in Kenya",
      "elegant dresses for special occasions in Kenya",
      "fashionable skirts for women in Kenya",
      "Nike Air Force 1 sneakers in Kenya",
      "premium denim jeans and jackets in Kenya",
      "luxury Rolex watches in Kenya",
      "Puma sportswear and casual wear in Kenya",
      "Levi's jeans and apparel in Kenya",
      "Gucci luxury fashion items in Kenya",
      "Prada high-end fashion accessories in Kenya",
      "Louis Vuitton designer bags and clothing in Kenya",
      "Zara trendy fashion collections in Kenya",
      "H&M affordable clothing in Kenya",
      "affordable fashion for men and women in Kenya",
      "high-quality fashion for discerning buyers in Kenya",
      "stylish clothing and accessories in Kenya",
      "glamorous fashion and style in Kenya",
      "top fashion designers in Kenya"
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
