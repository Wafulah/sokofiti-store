import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/new-password-buyer`;

const newPassword = async (
  password: string,
  userId?: string
): Promise<User[]> => {
  const requestBody = {
    password: password,
    userId: userId,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  };

  try {
    const res = await fetch(`${URL}`, requestOptions);
    if (!res.ok) {
      throw new Error("Failed to Change User Password");
    }
    const userData: User[] = await res.json();
    return userData;
  } catch (error) {
    console.error("Error changing user password", error);
    throw error;
  };

  // const res = await fetch(`${URL}/${password}`);
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

export default newPassword;
