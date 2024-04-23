import { User } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/new-password-buyer`;

interface Query {
  email?: string;
  password?: string;
}
interface Response {
  id?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
}

const newPassword = async (query: Query = {}): Promise<Response> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        email: query.email,
        password: query.password,
      },
    });
    const data = {
      email: query.email,
      password: query.password,
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
      throw new Error("Failed to change Password");
    }
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error("Error changing password", error);
    throw error;
  }
};

export default newPassword;
