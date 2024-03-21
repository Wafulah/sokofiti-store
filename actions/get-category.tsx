import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: Category = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_CATEGORY]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getCategory;
