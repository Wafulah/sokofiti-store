import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data: Product = await res.json();
    return data;
  } catch (error) {console.error("[GET_PRODUCT]", error);
  throw error; // Rethrow the error if needed}
}
};

export default getProduct;
