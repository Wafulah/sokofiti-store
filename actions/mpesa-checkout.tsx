import qs from "query-string";
import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/mpesa_pay`;

interface Response {
  url: string;
  }

interface Query {
  county: string;
  subCounty: string;
  phoneNo: string;
  productIds: { [productId: string]: string };
  buyerId: string;
}

const MpesaOrder = async (query: Query): Promise<Response> => {
  try {
    const url = qs.stringifyUrl({
      url: URL
      
    });
    const data = {
        county: query.county,
        subCounty: query.subCounty,
        phoneNo: query.phoneNo,
        productIds: query.productIds,
        buyerId: query.buyerId,
    };
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(url, requestOptions);
    if (!res.ok) {
      throw new Error("Failed to Create Order!");
    }
    const orderData = await res.json();
    return orderData;
  } catch (error) {
    console.error("Error Creating Error", error);
    throw error;
  }
};

export default MpesaOrder;
