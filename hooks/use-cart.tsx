import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { ProductCart } from "@/types";
import { FaExclamationTriangle as AlertTriangle } from "react-icons/fa";

//useCart
interface CartStore {
  items: ProductCart[];
  addItem: (data: ProductCart) => void;
  updateItem: (data: ProductCart) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductCart) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in cart!");
        }
        // Set quantity to 1 if not provided
        if (parseInt(data.quantity) > 0) {
          data.items = "1";
        } else {
          return toast.error("Item can't be added!");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      updateItem: (data: ProductCart) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );

        if (existingItemIndex !== -1) {
          // Item exists in the cart, update its details
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            items: data.items, // Update quantity (or any other fields)
            price: data.price, // Update price (if needed)
          };
         
          set({ items: updatedItems });
          toast.success("Item details updated in cart.");
        } else {
          // Item doesn't exist in the cart, show error message
          toast.error("Item not found in cart.");
        }
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
