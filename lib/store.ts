import { create } from "zustand";
import { toast } from "react-hot-toast";

import { UserProfile } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  items: UserProfile[];
  setUserData: (data: UserProfile) => void;
  clearUserData: () => void;
}

const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      items: [],
      setUserData: (data: UserProfile) => {
        set({ items: [] });
        
        const currentItems = get().items;
        if (currentItems.length !== 0) {
          return toast.error("Kindly Log out first!");
        }
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("User Already Logged in!");
        }
        

        set({ items: [...get().items, data] });
        toast.success("Login Succesful.");
      },
      clearUserData: () => set({ items: [] }),
    }),

    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage) , // Fix type error by casting to 'any'
    }
  )
);

export default useUserStore;
