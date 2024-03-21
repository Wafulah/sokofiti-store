import { Order } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/orders`;


const getOrders = async (id: string): Promise<Order[]> => {
  try{
    const res = await fetch(`${URL}/${id}`);
  
    return res.json();
    }catch (error){
      console.error("[GET_ORDERS]", error);
      throw error; // Rethrow the error if needed
    }
  
};

export default getOrders;
