import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/products`;
interface Query {
  id?: string;}

const getProduct = async (query: Query = {}): Promise<Product> => {
  try {
    const url = qs.stringifyUrl({
      url: `${URL}/${query.id}`,
      query: {
        id: query.id,
       
      },
    });
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (error) {console.error("[GET_PRODUCT]", error);
  throw error; // Rethrow the error if needed}
}
};

export default getProduct;
