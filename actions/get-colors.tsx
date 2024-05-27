import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_COLORS]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getColors;
