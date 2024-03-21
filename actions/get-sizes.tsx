import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: Size[] = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_SIZES]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getSizes;
