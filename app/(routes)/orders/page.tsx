"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Order } from "@/types";
import getOrders from "@/actions/get-orders";
import Container from "@/components/ui/container";
import { FaStopwatch } from "react-icons/fa6";
import Button from "@/components/ui/button";
import OrderBar from "@/components/orderbar";

const OrderPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const userId = { userId: "userId" };
    setIsMounted(true);
    const OrderFunc = async () => {
      const ord = await getOrders(userId);
      setOrders(ord);
    };
    OrderFunc();
  }, []);

  if (!isMounted) {
    return null;
  }

  function formatDate(isoDate: string) {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  }
  return (
    <Container>
      {orders ? (
        <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {orders.map((order) => (
            <div
              key={order.id}
              className="red-pink-gradient rounded-[20px]  py-2  min-h-[280px] flex justify-evenly text-center items-center flex-col"
            >
              <p className="text-white font-black text-2xl">
                Order:
                <span className="text-[rgb(255,55,0)]">{order.id}</span>
              </p>
              <p className="text-white italic text-sm flex">
                <FaStopwatch className="text-[rgb(255,55,0)] text-base" />{" "}
                {formatDate(order.createdAt)}
              </p>
              {order.isPaid ? (
                <p className="text-green-500 text-bold">Delivered</p>
              ) : (
                <p className="text-bold text-red-500">Not Delivered</p>
              )}
              <Sheet>
                <SheetTrigger className="p-0 w-full">
                  <Button
                    type="button"
                    // onClick={searchProduct}
                    className="resize-none rounded-md w-11/12 bg-[rgb(255,55,0)]"
                  >
                    View Order
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="p-0 ">
                  <OrderBar order={order} />
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-neutral-500">You don`&apost have any orders yet.</p>
      )}
    </Container>
  );
};

export default OrderPage;
