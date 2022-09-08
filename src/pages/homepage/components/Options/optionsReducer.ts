import { AnyAction } from "@reduxjs/toolkit";
import { OPTIONS_ACTIONS } from "./optionsActions";

type statusTypes = "idle" | "loading" | "success" | "error";

export type OptionsStateType = {
  data: {
    vpsPlans: VpsPlan[];
    selectOs: SelectO[];
    selectPanel: SelectPanel[];
    osPanel: OsPanel[];
    datacenters: Datacenter[];
    categories: Category[];
  };
  status: statusTypes;
  error: string | null;
};

const initialState: OptionsStateType = {
  status: "idle",
  error: null,
  data: {
    vpsPlans: [],
    selectOs: [],
    selectPanel: [],
    osPanel: [],
    datacenters: [],
    categories: [],
  },
};

export default function optionsReducer(
  state: OptionsStateType = initialState,
  action: AnyAction
): OptionsStateType {
  switch (action.type) {
    case `${OPTIONS_ACTIONS.FETCH}/pending`:
      return { ...state, status: "loading" };
    case OPTIONS_ACTIONS.CHANGE_OS:
      return {
        ...state,
        data: {
          ...state.data,
          vpsPlans: [
            ...state.data.vpsPlans.map((os) =>
              os.id === action.payload.id
                ? { ...os, selected: action.payload.value }
                : os
            ),
          ],
        },
      };
    case `${OPTIONS_ACTIONS.FETCH}/fulfilled`:
      return {
        ...state,
        data: {
          ...action.payload,
          vpsPlans: [
            ...action.payload.vpsPlans.map((os: any) => ({
              ...os,
              selected: "20",
            })),
          ],
        },
        status: "success",
      };
    case `${OPTIONS_ACTIONS.FETCH}/rejected`:
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
}

export interface VpsPlan {
  id: number;
  ts_create: string;
  ts_update: string;
  billing_id: string;
  category_id: string;
  name: string;
  price_per_month: number;
  parent_plan_id?: any;
  cpu_cores: string;
  ram: string;
  disk_type: string;
  volume_disk: string;
  units: string;
  is_promo: string;
  package_duration: string;
  constructor: string;
  year_price_per_month: number;
  category: string;
  datacenters: number[];
  price_per_month_promo: number;
  year_price_per_month_promo: number;
  selected?: string;
}

export interface SelectO {
  id: string;
  name: string;
  description: string;
  order: string;
  panel_type: string[];
}

export interface SelectPanel {
  id: string;
  name: string;
  description: string;
  order: string;
  creation_time: string;
  price: number;
}

export interface OsPanel {
  distributive: string;
  os: string;
  panel: string;
  availablePlanIds: number[];
  minRam: number;
  minStorage: number;
}

export interface Datacenter {
  id: string;
  name: string;
  location: string;
  site_name: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  prior: string;
}
