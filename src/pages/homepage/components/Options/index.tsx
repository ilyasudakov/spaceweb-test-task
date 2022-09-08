import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchOptions } from "./optionsActions";
import { useEffect } from "react";
import Card from "../Card";
import styles from "./Options.module.scss";

function Options({ data, status, fetchOptions }: Props) {
  const { vpsPlans } = data;
  useEffect(() => {
    console.log(status, vpsPlans);
    if (status === "idle") {
      fetchOptions();
    }
  }, [data]);

  if (status === "loading") return <div>Загрузка...</div>;
  return (
    <div className={styles.container}>
      {vpsPlans.map((plan) => (
        <Card key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

const connector = connect(
  (state: RootState) => ({ ...state.options }),
  (dispatch: AppDispatch) => ({
    fetchOptions: () => dispatch(fetchOptions()),
  })
);
type Props = ConnectedProps<typeof connector>;
export default connector(Options);
