// Import necessary types
import type { Metadata, ResolvingMetadata } from 'next'
import getProduct from "@/actions/get-product";
import { ProductCart } from "@/types";

// Define the generateMetadata function
export async function generateMetadata(
  { params }: { params: { productId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct({ id: params.productId }) as ProductCart;

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'This product does not exist.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.name} | Glamarace`,
    description: product.description,
    keywords:[`${product.name}`],
    openGraph: {
      type: 'website',
      url: `https://sokofiti-store.vercel.app/products/${product.id}`,
      title: `${product.name} | Glamarace`,
      description: product.description,
      images: [
        {
          url: product.images[0]?.url || 'https://sokofiti-store.vercel.app/opengraph-image.png',
          width: 800,
          height: 600,
          alt: product.name,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@glamarace",
      title: `${product.name} | Glamarace`,
      description: product.description,
      images: product.images[0]?.url || 'https://sokofiti-store.vercel.app/twitter-image.png',
    },
  };
}
