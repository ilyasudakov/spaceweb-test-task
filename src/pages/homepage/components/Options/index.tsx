import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchOptions } from "./optionsActions";
import { useEffect } from "react";
import Card from "../Card";

function Options({ data, status, fetchOptions }: Props) {
  const { vpsPlans } = data;
  useEffect(() => {
    console.log(status, data);
    if (status === "idle") {
      fetchOptions();
    }
  }, [data]);

  if (status === "loading") return <div>Загрузка...</div>;
  return (
    <>
      {vpsPlans.map((plan) => (
        <Card key={plan.id} plan={plan} />
      ))}
    </>
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
