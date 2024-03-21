import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: Billboard = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_BILLBOARD]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getBillboard;
