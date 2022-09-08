import SelectInput from "../../../../components/Form/SelectInput";

import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { selectCategory } from "./categoryAction";

function SelectCategory({ categories, selectCategory }: Props) {
  return (
    <SelectInput
      label="Категория"
      options={categories}
      defaultValue={categories[0]}
      onChange={({ value }) => selectCategory(value)}
    />
  );
}

const connector = connect(
  (state: RootState) => ({ categories: state.categories.categories }),
  {
    selectCategory,
  }
);
type Props = ConnectedProps<typeof connector>;
export default connector(SelectCategory);
