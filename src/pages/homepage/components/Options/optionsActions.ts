import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../../store";

export const OPTIONS_ACTIONS = {
  ADD: "options/add",
  FETCH: "options/fetch",
};

export const fetchOptions = createAsyncThunk<
  any,
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
  return data.result;
});
