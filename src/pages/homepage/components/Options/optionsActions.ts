import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../../store";
import { OptionsStateType } from "./optionsReducer";

export const OPTIONS_ACTIONS = {
  ADD: "options/add",
  FETCH: "options/fetch",
  CHANGE_OS: "options/changed_os",
  CHANGE_PANEL: "options/changed_panel",
};

export const fetchOptions = createAsyncThunk<
  OptionsStateType["data"],
  undefined,
  { state: RootState }
>(OPTIONS_ACTIONS.FETCH, async () => {
  const { data } = await axios.post(
    `https://corsanywhere.herokuapp.com/https://api.sweb.ru/notAuthorized/`,
    {
      jsonrpc: "2.0",
      method: "vpsOsConfig",
      params: {},
    }
  );
  return {
    ...data.result,
  };
});

export const changeOS = (id: number, value: string) => ({
  type: OPTIONS_ACTIONS.CHANGE_OS,
  payload: {
    id,
    value,
  },
});

export const changePanel = (id: number, value: string) => ({
  type: OPTIONS_ACTIONS.CHANGE_PANEL,
  payload: {
    id,
    value,
  },
});
