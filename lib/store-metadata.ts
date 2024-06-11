// Import necessary types
import type { Metadata, ResolvingMetadata } from 'next'
import getStore from "@/actions/get-store";


// Define the generateMetadata function
export async function generateMetadata(
  { params }: { params: { storeId: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const store = await getStore(params.storeId);

  if (!store) {
    return {
      title: 'Store Not Found',
      description: 'This store does not exist.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${store.name}`,
    description: store.description,
    keywords:[`${store.name}`],
    openGraph: {
      type: 'website',
      url: `https://sokofiti-store.vercel.app/store/${store.id}`,
      title: `${store.name} | Glamarace`,
      description: store.description,
      images: [
        {
          url: store.images[0]?.url || 'https://sokofiti-store.vercel.app/opengraph-image.png',
          width: 800,
          height: 600,
          alt: store.name,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@glamarace",
      title: `${store.name} | Glamarace`,
      description: store.description,
      images: store.images[0]?.url || 'https://sokofiti-store.vercel.app/twitter-image.png',
    },
  };
}
