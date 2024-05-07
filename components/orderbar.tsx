import { FaStopwatch, FaCircleCheck } from "react-icons/fa6";

import CartItem from "@/components/cart-item";
import { Order, ProductCart, OrderItem } from "@/types";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface OrderBar {
  order: Order;
}

function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString();
}

const OrderBar: React.FC<OrderBar> = ({ order }) => {
  
  const totalItems = order.orderItems.length;
  console.log("webtoken->", order);
  return (
    <div className="h-[90vh] lg:h-[85vh] bg-[#04060b] w-screen">
      <div className="h-full w-11/12 lg:flex flex-none lg:justify-between">
        <div className="lg:w-2/5 lg:h-full h-1/2 w-11/12 mx-auto ">
          <div className="h-1/6 mb-2 w-11/12 mx-auto mt-2 flex flex-col items-center text-center justify-center space-y-2">
            <h2 className="text-xl text-white font-black"> Order Status </h2>
            <h2 className="text-lg font-thin text-white opacity-75">
              INVOICE : {order.id}
            </h2>
          </div>

          <div className="h-3/6 w-11/12 flex mx-auto">
            <div className="h-full w-11/12 flex flex-col space-y-1 mx-auto">
              <div className="w-full flex h-2/5 ">
                <div className="w-1/6 h-full space-y-2">
                  <div className="border-2 flex justify-center items-center text-center w-[20px] h-[20px] rounded-full border-[rgb(249,33,166)] space-y-2 ">
                    <FaCircleCheck className="text-[rgb(255,55,0)] bg-none rounded-full " />
                  </div>
                  <div className="w-[20px] h-4/6 flex justify-center items-center ">
                    <Separator
                      orientation="vertical"
                      className="bg-[rgb(255,55,0)] "
                    />
                  </div>
                </div>
                <div className="w-4/6 h-full ">
                  <p className="text-white font-thin text-lg">Order Received</p>
                  <p className="text-sm text-white flex space-x-6 pt-2">
                    <FaStopwatch className="text-[rgb(255,55,0)] text-base opacity-50" />{" "}
                    <span className="text-white opacity-50">
                      {formatDate(order.createdAt)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full flex h-2/5 ">
                <div className="w-1/6 h-full space-y-2">
                  <div className="border-2 flex justify-center items-center text-center w-[20px] h-[20px] rounded-full border-[rgb(249,33,166)] space-y-2 ">
                    <FaCircleCheck className="text-[rgb(255,55,0)] bg-none rounded-full " />
                  </div>
                  <div className="w-[20px] h-4/6 flex justify-center items-center ">
                    <Separator
                      orientation="vertical"
                      className="bg-[rgb(255,55,0)] "
                    />
                  </div>
                </div>
                <div className="w-4/6 h-full ">
                  <p className="text-white font-thin text-lg">On the way</p>
                  <p className="text-sm text-white flex space-x-6 pt-2">
                    <FaStopwatch className="text-[rgb(255,55,0)] text-base opacity-50" />{" "}
                    <span className="text-white opacity-50">
                      {formatDate(order.createdAt)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full flex h-1/5 ">
                <div className="w-1/6 h-full space-y-2">
                  <div className="border-2 flex justify-center items-center text-center w-[20px] h-[20px] rounded-full border-[rgb(249,33,166)] space-y-2 ">
                    <FaCircleCheck className="text-[rgb(255,55,0)] bg-none rounded-full " />
                  </div>
                </div>
                <div className="w-4/6 h-full ">
                  <p className="text-white font-thin text-lg">Delivered</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto h-1/4 lg:h-2/6 flex justify-center items-center">
            <Button className="rounded-lg bg-[rgb(255,55,0)] w-11/12 h-4/6  lg:h-2/6 mx-auto">
              Confirm Delivery
            </Button>
          </div>
        </div>
        <div className="lg:w-3/5 lg:h-full h-1/2 w-11/12 mb-10 mx-auto">
          <div className="w-11/12 lg:w-3/4 mx-auto lg:h-1/6 h-1/5  mt-2  space-x-3 space-y-1 grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-5">
            <Badge variant="outline" className="h-fit bg-[rgb(255,55,0)] mt-1 ">
              <p className="text-white ">Ksh. {totalPrice} </p>
            </Badge>
            <Badge variant="outline" className="h-fit bg-[rgb(255,55,0)] ">
              <p className="text-white ">{totalItems} Items</p>
            </Badge>
            <Badge variant="outline" className="h-fit bg-[rgb(255,55,0)] ">
              <p className="text-white text-xs">{order.store.name}</p>
            </Badge>
            <Badge variant="outline" className="h-fit bg-[rgb(255,55,0)] ">
              <p className="text-white ">{order.address}</p>
            </Badge>
          </div>

          <div className="h-3/4 w-11/12 mx-auto bg-white rounded-lg flex justify-center ">
            <ScrollArea className="lg:col-span-7 w-11/12 h-full whitespace-nowrap mx-auto">
              <ul>
                {order.orderItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id as string}
                    quantity={item.quantity as number}
                    
                  />
                ))}
              </ul>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBar;
