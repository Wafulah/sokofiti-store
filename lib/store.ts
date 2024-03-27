import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  userId?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  setUserData: (data: {
    userId?: string;
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
      userId: undefined,
      email: undefined,
      phoneNumber: undefined,
      firstName: undefined,
      lastName: undefined,
      setUserData: (data) => set((state) => ({ ...state, ...data })),
      clearUserData: () =>
        set({
          userId: undefined,
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
