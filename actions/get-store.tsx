import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/stores`;

const getStore = async (id: string): Promise<Store> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data: Store = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_STORE]", error);
    throw error; // Rethrow the error if needed}
  }
};

export default getStore;
