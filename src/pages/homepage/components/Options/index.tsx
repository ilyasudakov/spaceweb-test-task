import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchOptions } from "./optionsActions";
import { useEffect } from "react";

function Options({ data, status, fetchOptions }: Props) {
  console.log(status, data);
  useEffect(() => {
    if (status === "idle" && data.length > 0) {
      fetchOptions();
    }
  }, [data]);

  return null;
}

const connector = connect(
  (state: RootState) => ({ ...state.options }),
  (dispatch: AppDispatch) => ({
    fetchOptions: () => dispatch(fetchOptions()),
  })
);
type Props = ConnectedProps<typeof connector>;
export default connector(Options);
