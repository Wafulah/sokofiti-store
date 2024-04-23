import { Order } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/buyer_orders`;
interface Query {
  id?: string;
}
const getOrders = async (query: Query = {}): Promise<Order[]> => {
  try {
    const queryString = qs.stringify({ buyerId: query.id });
    const res = await fetch(`${URL}?${queryString}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch orders: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("[GET_ORDERS]", error);
    throw error; 
  }
};

export default getOrders;
