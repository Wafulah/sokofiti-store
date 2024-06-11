// Import necessary types
import type { Metadata, ResolvingMetadata } from "next";
import getCategory from "@/actions/get-category";


// Define the generateMetadata function
export async function generateMetadata(
  { params }: { params: { categoryId: string } },
  
): Promise<Metadata> {
  const products = await getCategory({
    categoryId: params.categoryId,
    skip: 0,
    take: 4,
      });

  if (!products || products.length === 0 || !products[0].category) {
    return {
      title: "Category Empty",
      description: "This Category does not exist.",
    };
  }
  const category = products[0].category;
  

  return {
    title: `${category.name}`,
    description: category.description,
    keywords: [`${category.name}`],
    openGraph: {
      type: "website",
      url: `https://sokofiti-store.vercel.app/category/${params.categoryId}`,
      title: `${category.name} | Glamarace`,
      description: category.description,
      images: [
        {
          url:
            category.imageUrl ||
            "https://sokofiti-store.vercel.app/opengraph-image.png",
          width: 800,
          height: 600,
          alt: category.name,
        },
        
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@glamarace",
      title: `${category.name}`,
      description: category.description,
      images:
        category.imageUrl ||
        "https://sokofiti-store.vercel.app/twitter-image.png",
    },
  };
}
