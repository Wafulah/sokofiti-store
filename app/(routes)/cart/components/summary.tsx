"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import Modal from "@/components/ui/modal";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { StoreModal } from "@/components/modals/store-modal";
import useUserStore from "@/lib/store";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const userDetails = useUserStore((state) => state.items);

  const onCheckout = () => {
    userDetails[0].id
      ? setIsModalOpen(true)
      : (window.location.href = `/login`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onStripe = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
        productQuantity: items.map((item) => item.items),
        buyerId: userDetails[0].id,
      }
    );

    window.location = response.data.url;
  };
  const userIds: string = userDetails[0].id as string;
  const onMpesa = async () => {
    setIsModalOpen(false);
    setDetails(true);
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      {isModalOpen && (
        <div className="p-4">
          <Modal open={isModalOpen} onClose={closeModal}>
            <div className="pt-6 space-x-2 flex  w-1/2 mx-auto">
              <Button className="rounded-lg" onClick={onStripe}>
                Credit Card
              </Button>
              <Button className="bg-green-500 rounded-lg" onClick={onMpesa}>
                Mpesa
              </Button>
            </div>
          </Modal>
        </div>
      )}
      {details && <StoreModal items={items} userIds={userIds} />}
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
