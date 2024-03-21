import { Order } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/buyer-order`;

const getOrder = async (id: string): Promise<Order> => {
  try{
  const res = await fetch(`${URL}/${id}`);

  return res.json();
  }catch (error){
    console.error("[GET_ORDER]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getOrder;
