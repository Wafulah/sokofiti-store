import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/register-buyer`;

const Register = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  password: string
): Promise<User[]> => {
  const requestBody = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  };

  try {
    const res = await fetch(`${URL}`, requestOptions);
    if (!res.ok) {
      throw new Error("Failed to register user");
    }
    const userData: User[] = await res.json();
    return userData;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

export default Register;
