"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";

import Modal from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStoreModal } from "@/hooks/use-store-modal";
import Button from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1),
  phoneNo: z.string().refine((phoneNo) => /^\d{12}$/.test(phoneNo), {
    message: "Phone number must start with 254",
  }),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const router = useRouter();
  const items = useCart((state) => state.items);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNo: "254712345678", // Initialize it as an integer with exactly 9 digits
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      // You can access form values like this:
      const { name, phoneNo } = values;

      // Send the data to your API endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/mpesa_pay`,
        {
          name,
          phoneNo,
          productIds: items.map((item) => item.id),
        }
      );

      // Handle the response or redirection here
      window.location = response.data.url;
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    isModalOpen && (
      <Modal open={isModalOpen} onClose={closeModal}>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>County</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="County"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Add the phoneNo field similar to the name field */}
                  <FormField
                    control={form.control}
                    name="phoneNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button disabled={loading} onClick={closeModal}>
                      Cancel
                    </Button>
                    <Button disabled={loading} type="submit">
                      Continue
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};
