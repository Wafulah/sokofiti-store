import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/categories`;
interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  genderId?: string;
  isFeatured?: boolean;
  skip?: number;
  take?: number;
}
const getCategory = async (query: Query = {}): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: `${URL}/${query.categoryId}`,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        genderId: query.genderId,
        skipItems: query.skip,
        takeItems: query.take,
        category: query.categoryId,
        isFeatured: query.isFeatured,
      },
    });

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("[GET_CATEGORY]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getCategory;
