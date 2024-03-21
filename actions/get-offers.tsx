import { Offer } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getOffers = async (): Promise<Offer[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: Offer[] = await res.json();
    return data;
  } catch (error) {
    console.error("[GET_OFFERS]", error);
    throw error; // Rethrow the error if needed
  }
};

export default getOffers;
