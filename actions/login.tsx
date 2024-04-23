import qs from "query-string";
import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_ALL_URL}/buyer-login`;

interface Response {
  id?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
}

interface Query {
  email: string;
  password: string;
}

const Login = async (query: Query): Promise<Response> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        email: query.email,
        password: query.password,
      },
    });

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to Login User ");
    }
    const userData: Response = await res.json();
    
    return userData;
  } catch (error) {
    console.error("Error Login user", error);
    throw error;
  }

  // const res = await fetch(`${URL}/${email,password}`);
  // const res = [
  //   {
  //     id: "userid1",
  //     lastName: "Victor",
  //     firstName: "Wafulah",
  //     email: "wafulahvictor@gmail.com",
  //     phoneNumber: "0710760872",
  //   },
  // ];
  // return res;
  // return res.json();
};

export default Login;
