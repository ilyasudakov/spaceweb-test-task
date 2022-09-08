import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../pages/homepage/components/SelectCategory/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
});

export default rootReducer;
