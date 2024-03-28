import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  id?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  setUserData: (data: {
    id?: string;
    email?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
  }) => void;
  clearUserData: () => void;
}

const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      id: undefined,
      email: undefined,
      phoneNumber: undefined,
      firstName: undefined,
      lastName: undefined,
      setUserData: (data) => set((state) => ({ ...state, ...data })),
      clearUserData: () =>
        set({
          id: undefined,
          email: undefined,
          phoneNumber: undefined,
          firstName: undefined,
          lastName: undefined,
        }),
    }),
    {
      name: "user-storage",
      getStorage: () => createJSONStorage(() => localStorage) as any, // Fix type error by casting to 'any'
    }
  )
);

export default useUserStore;
