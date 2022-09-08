import SelectInput from "../../../../components/Form/SelectInput";

import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { selectCategory } from "./categoryAction";

function SelectCategory({ categories, selectCategory, selected }: Props) {
  return (
    <SelectInput
      label="Категория"
      options={categories}
      defaultValue={{
        value: selected,
        label: categories.find(({ value }) => value === selected)?.label,
      }}
      onChange={({ value }) => selectCategory(value)}
    />
  );
}

const connector = connect(
  (state: RootState) => ({
    categories: state.categories.categories,
    selected: state.categories.selected,
  }),
  {
    selectCategory,
  }
);
type Props = ConnectedProps<typeof connector>;
export default connector(SelectCategory);
