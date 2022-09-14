import Card from "../Card";
import styles from "./Options.module.scss";
import useOptionsData from "./useOptionsData";

function Options() {
  const { status, data, os, panels, filterPanels } = useOptionsData();

  if (status === "loading")
    return <div className={styles.loading}>Загрузка...</div>;
  if (status === "error") return <div>Произошла ошибка</div>;
  return (
    <div className={styles.container}>
      {data.map((plan) => (
        <Card
          key={plan.id}
          plan={plan}
          os={os}
          panel={filterPanels(panels, plan.selected)}
        />
      ))}
    </div>
  );
}

export default Options;
