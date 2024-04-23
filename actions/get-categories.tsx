import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_ALL_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Category[] = await res.json();
  return data;
} catch (error) {
  console.error("[GET_CATEGORIES]", error);
  throw error; // Rethrow the error if needed
}
};

export default getCategories;

