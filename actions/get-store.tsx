import { Store } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/stores`;

const getStore = async (id: string): Promise<Store> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getStore;
