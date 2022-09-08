import { combineReducers } from "@reduxjs/toolkit";
import optionsReducer from "../pages/homepage/components/Options/optionsReducer";
import categoryReducer from "../pages/homepage/components/SelectCategory/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  options: optionsReducer,
});

export default rootReducer;
