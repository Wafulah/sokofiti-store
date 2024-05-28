import { Gender } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/genders`;

const getGenders = async (): Promise<Gender[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_GENDERS]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getGenders;
