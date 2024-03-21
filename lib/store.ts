import { create } from "zustand";

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

export const useUserStore = create<UserState>((set) => ({
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
}));
