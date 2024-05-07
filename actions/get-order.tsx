import { OrderItems } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/buyer_orders`;
interface Query {
  id?: string;
}

const getOrder = async (query: Query = {}): Promise<OrderItems> => {
  try {
    const url = qs.stringifyUrl({
      url: `${URL}/buyer_orders/${query.id}`,
      query: {
        id: query.id,
      },
    });

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch order: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("[GET_ORDER]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getOrder;
