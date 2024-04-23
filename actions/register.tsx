import qs from "query-string";
import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/register-buyer`;

interface Response {
  id?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
}

interface Query {
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const Register = async (query: Query): Promise<Response> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        phoneNumber: query.phoneNumber,
        firstName: query.firstName,
        lastName: query.lastName,
        email: query.email,
        password: query.password,
      },
    });
    const data = {
      phoneNumber: query.phoneNumber,
      firstName: query.firstName,
      lastName: query.lastName,
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
      throw new Error("Failed to register user");
    }
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

export default Register;
