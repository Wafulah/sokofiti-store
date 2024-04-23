"use client";

import { useState, useEffect } from "react";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useUserStore from "@/lib/store";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  phone_number: z.string().min(1),
});

export const Sidebar = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const userDetails = useUserStore((state) => state.items);
  const userData = useUserStore();

  const removeAll = useUserStore((state) => state.clearUserData); // Get the clearUserData function from the store

  const handleLogout = () => {
    // Call the removeAll function to clear user data
    removeAll();
    // Optionally, navigate to the logout page or perform any other logout-related actions
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: userDetails[0].firstName,
      last_name: userDetails[0].lastName,
      email: userDetails[0].email,
      phone_number: userDetails[0].phoneNumber,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      //   // You can access form values like this:
      const { first_name, last_name, email, phone_number } = values;

      //   // Send the data to your API endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ALL_URL}/update-buyer`,
        {
          first_name,
          last_name,
          email,
          phone_number,
        }
      );
      userData.setUserData(response.data);

      toast.success("Details Succesfully updated");

      // window.location.href = `/search/${name}`;
      // const products = await getProducts({ isFeatured: true });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#04060b] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/four.jpg" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Glamarace
          </h1>
        </Link>
        <div className="space-y-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-2"
            >
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="First Name"
                        className="focus-visible:ring-0 focus-visible:ring-transparent w-11/12  focus:border-none focus:resize-none focus:outline-none border-none bg-zinc-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Last Name"
                        className="focus-visible:ring-0 focus-visible:ring-transparent w-11/12  focus:border-none focus:resize-none focus:outline-none border-none bg-zinc-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Email"
                        className="focus-visible:ring-0 focus-visible:ring-transparent w-11/12  focus:border-none focus:resize-none focus:outline-none border-none bg-zinc-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Phone Number"
                        className="focus-visible:ring-0 focus-visible:ring-transparent w-11/12 focus:border-none focus:resize-none focus:outline-none border-none bg-zinc-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex ">
                <Button
                  disabled={loading}
                  type="submit"
                  className="bg-[rgb(255,55,0)] resize-none rounded-md"
                >
                  Change
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <Link href="/new-password">
          <div className="items-center mt-4 w-11/12 h-10 bg-zinc-400/10 rounded-lg flex justify-between cursor-pointer">
            <p className="pl-4 font-medium text-white text-base">
              Change Password
            </p>
          </div>
        </Link>

        <div
          className="items-center mt-2 w-11/12 h-10 bg-zinc-400/10 rounded-lg flex justify-between cursor-pointer"
          onClick={handleLogout}
        >
          <p className="pl-4 font-medium text-red-500 text-base">Logout</p>
        </div>
      </div>
    </div>
  );
};
