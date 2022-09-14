import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOptions } from "./optionsReducer";
import { fetchOptions } from "./optionsActions";
import { selectCategories } from "../SelectCategory/categoryReducer";

export default function useOptionsData() {
  const { data, status } = useSelector(selectOptions);
  const { selected } = useSelector(selectCategories);
  const { vpsPlans, selectOs, selectPanel } = data;

  useEffect(() => {
    console.log(status, data);
    if (status === "idle") {
      fetchOptions();
    }
  }, [data]);

  const filteredOS = selectOs.map((os) => ({
    ...os,
    value: os.id,
    label: os.description,
  }));
  const filteredPanels = selectPanel.map((panel) => ({
    ...panel,
    value: panel.id,
    label: panel.description,
  }));
  const filteredData = vpsPlans.filter(({ category }) => {
    if (selected === "все") return true;
    return category === selected;
  });
  const filterPanels = (
    panels: typeof data.selectPanel,
    selected: string = "0"
  ) => {
    const availablePanels = filteredOS.find(({ id }) => id === selected)
      ?.panel_type || ["empty"];
    return panels.filter(({ name }) => availablePanels.includes(name));
  };

  return {
    status,
    data: filteredData,
    panels: filteredPanels,
    os: filteredOS,
    filterPanels,
  };
}
