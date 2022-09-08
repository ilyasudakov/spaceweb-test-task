import { categories } from "./categoryReducer";

export const CATEGORY_SELECTED = "categories/selected";

export const selectCategory = (id: typeof categories[number]) => ({
  type: CATEGORY_SELECTED,
  payload: id,
});
