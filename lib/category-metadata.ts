// Import necessary types
import type { Metadata, ResolvingMetadata } from "next";
import getCategory from "@/actions/get-category";
import { ProductCart } from "@/types";

// Define the generateMetadata function
export async function generateMetadata(
  { params }: { params: { categoryId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getCategory({
    categoryId: params.categoryId,
    skip: 0,
    take: 4,
  });

  if (!product) {
    return {
      title: "Category Not Found",
      description: "This Category does not exist.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product[0].category.name}`,
    description: product[0].category.description,
    keywords: [`${product[0].category.name}`],
    openGraph: {
      type: "website",
      url: `https://sokofiti-store.vercel.app/category/${product[0].category.id}`,
      title: `${product[0].category.name} | Glamarace`,
      description: product[0].category.description,
      images: [
        {
          url:
            product[0].category.imageUrl ||
            "https://sokofiti-store.vercel.app/opengraph-image.png",
          width: 800,
          height: 600,
          alt: product[0].category.name,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@glamarace",
      title: `${product[0].category.name}`,
      description: product[0].category.description,
      images:
        product[0].category.imageUrl ||
        "https://sokofiti-store.vercel.app/twitter-image.png",
    },
  };
}
