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
        style={{
          display: "block",
          fontSize: "0.6rem",
          color: "#7A8185",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </label>
      <Select
        options={options}
        value={defaultValue}
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
            borderColor: state.isFocused ? "#939DA2" : "var(--gray3)",
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
              backgroundColor: "var(--blue1)",
              color: "#fff",
            },
          }),
        }}
      />
    </div>
  );
}
