"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import { LuSearch } from "react-icons/lu";
import { MobileSidebar } from "@/components/mobile-sidebar";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/components/ui/button";
import getProducts from "@/actions/get-products";

const formSchema = z.object({
  name: z.string().min(1),
});

const Navbar = () => {
  // const categories = await getCategories();
  const [loading, setLoading] = useState(false);

  // const searchProduct = async () => {
  //   const products = await getProducts({ isFeatured: true });
  // };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      //   // You can access form values like this:
      const { name } = values;

      //   // Send the data to your API endpoint

      window.location.href = `/search/${name}`;
      // const products = await getProducts({ isFeatured: true });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-b rounded-b-xl bg-[rgb(255,55,0)]">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-32 lg:flex lg:h-16 items-center justify-between ">
          <div className="lg:w-1/3 w-full h-1/2 flex justify-between mx-auto ">
            <MobileSidebar />
            <div className="lg:mt-0 mt-3 mx-auto ">
              <h3 className="font-bold text-3xl ">Glamarace</h3>
            </div>
            <div className="mr-4 mt-3 lg:mt-0">
              <NavbarActions />
            </div>
          </div>
          
          <div className="gap-2 lg:w-1/2 w-11/12 h-1/2 mx-auto flex justify-between items-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex justify-between space-x-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Search"
                          className="focus-visible:ring-0 focus-visible:ring-transparent w-[70vw] lg:w-[40vw] focus:border-none focus:resize-none focus:outline-none border-none bg-white"
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
                    // onClick={searchProduct}
                    className="resize-none rounded-md"
                  >
                    <LuSearch className="text-white" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
