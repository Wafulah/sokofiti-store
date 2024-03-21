import { Store } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/stores`;

interface Query {
  Id?: string;
  name?: string;
}

const getStores = async (): Promise<Store[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: Store[] = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_StORES]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getStores;
