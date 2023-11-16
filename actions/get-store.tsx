import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/stores`;

const getStore = async (id: string): Promise<Store> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Store = await res.json();
  console.log(data);
  return data;
};

export default getStore;
