import { AnyAction } from "@reduxjs/toolkit";
import { CATEGORY_SELECTED } from "./categoryAction";

export const categories = ["Все", "NVM", "HDD", "TURBO"] as const;

type CategoryType = {
  selected: typeof categories[number];
  categories: { value: typeof categories[number]; label: string }[];
};
const initialState: CategoryType = {
  selected: "Все",
  categories: [
    { value: "Все", label: "Все" },
    { value: "NVM", label: "NVMe (KVM)" },
    { value: "HDD", label: "Большого объема (HDD)" },
    { value: "TURBO", label: "HighCPU (TURBO)" },
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
