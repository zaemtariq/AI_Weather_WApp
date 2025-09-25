import React from "react";
import { create } from "zustand";

export const useStore = create((set) => ({
  currentMenuDisplay: "Weather",
  changeCurrentMenuDisplay: (state) => set({ currentMenuDisplay: state }),
}));
