import { AnyAction } from "@reduxjs/toolkit";
import { OPTIONS_ACTIONS } from "./optionsActions";

type statusTypes = "idle" | "loading" | "success" | "error";

type OptionsStateType = {
  data: any;
  status: statusTypes;
  error: string | null;
};

const initialState: OptionsStateType = {
  status: "idle",
  error: null,
  data: [],
};

export default function optionsReducer(
  state: OptionsStateType = initialState,
  action: AnyAction
): OptionsStateType {
  switch (action.type) {
    case `${OPTIONS_ACTIONS.FETCH}/pending`:
      return { ...state, status: "loading" };
    case `${OPTIONS_ACTIONS.FETCH}/fulfilled`:
      return {
        ...state,
        data: [...action.payload],
        status: "success",
      };
    case `${OPTIONS_ACTIONS.FETCH}/rejected`:
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
}
