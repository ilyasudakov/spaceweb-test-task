import { AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { CATEGORY_SELECTED } from "./categoryAction";

export const categories = ["все", "nvme", "hdd", "turbo"] as const;

type CategoryType = {
  selected: typeof categories[number];
  categories: { value: typeof categories[number]; label: string }[];
};
const initialState: CategoryType = {
  selected: "все",
  categories: [
    { value: "все", label: "Все" },
    { value: "nvme", label: "NVMe (KVM)" },
    { value: "hdd", label: "Большого объема (HDD)" },
    { value: "turbo", label: "HighCPU (TURBO)" },
  ],
};

export default function categoryReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return { ...state };
  }
}

export const selectCategories = (state: RootState) => state.categories;
