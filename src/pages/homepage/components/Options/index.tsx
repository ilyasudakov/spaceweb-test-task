import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchOptions } from "./optionsActions";
import { useEffect } from "react";
import Card from "../Card";
import styles from "./Options.module.scss";

function Options({ data, status, fetchOptions, selected }: Props) {
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
    panels: Props["data"]["selectPanel"],
    selected: string = "0"
  ) => {
    const availablePanels = filteredOS.find(({ id }) => id === selected)
      ?.panel_type || ["empty"];
    return panels.filter(({ name }) => availablePanels.includes(name));
  };

  if (status === "loading")
    return <div className={styles.loading}>Загрузка...</div>;
  if (status === "error") return <div>Произошла ошибка</div>;
  return (
    <div className={styles.container}>
      {filteredData.map((plan) => (
        <Card
          key={plan.id}
          plan={plan}
          os={filteredOS}
          panel={filterPanels(filteredPanels, plan.selected)}
        />
      ))}
    </div>
  );
}

const connector = connect(
  (state: RootState) => ({
    ...state.options,
    selected: state.categories.selected,
  }),
  (dispatch: AppDispatch) => ({
    fetchOptions: () => dispatch(fetchOptions()),
  })
);
type Props = ConnectedProps<typeof connector>;
export default connector(Options);
