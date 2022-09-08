import Select from "react-select";

export default function SelectInput({
  options,
  defaultValue,
  label,
  onChange,
}: {
  options: any;
  defaultValue: any;
  label: React.ReactNode;
  onChange: (value: any) => void;
}) {
  return (
    <div>
      <label
        style={{ fontSize: "0.6rem", color: "#7A8185", marginBottom: "0.6rem" }}
      >
        {label}
      </label>
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        styles={{
          container: (provided, state) => ({
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
            color: "#000",
            backgroundColor: state.isSelected ? "#E3E9EC" : "#fff",
            "&:hover": {
              backgroundColor: "#3DBDF6",
              color: "#fff",
            },
          }),
        }}
      />
    </div>
  );
}