import Select from "react-select";

export default function SelectInput({
  options,
  defaultValue,
}: {
  options: any;
  defaultValue: any;
}) {
  return (
    <Select
      styles={{
        container: (provided) => ({
          ...provided,
          maxWidth: "300px",
          fontSize: "0.8rem",
        }),
        control: (provided, state) => ({
          ...provided,
          borderWidth: "2px",
          borderColor: state.isFocused ? "#939DA2" : "#AFBABF",
          "&:hover": {
            borderColor: "#939DA2",
          },
        }),
        indicatorSeparator: () => ({ display: "none" }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#E3E9EC" : "#fff",
          "&:hover": {
            backgroundColor: "#3DBDF6",
            color: "#fff",
          },
        }),
      }}
      options={options}
      defaultValue={defaultValue}
    />
  );
}
