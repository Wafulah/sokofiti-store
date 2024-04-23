import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/products_search`;

interface Query {
  name?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  skip?: number;
  take?: number;
}

const getProducts = async (query: Query = {}): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        isFeatured: query.isFeatured,
        name: query.name,
        skipItems: query.skip,
        takeItems: query.take,
      },
    });

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("[SEARCH_PRODUCTS]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getProducts;
