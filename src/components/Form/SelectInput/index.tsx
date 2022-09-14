import Select from "react-select";

import styles from "./SelectInput.module.scss";

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
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <Select
        options={options}
        value={defaultValue}
        onChange={onChange}
        styles={{
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#E3E9EC" : "#fff",
          }),
        }}
      />
    </div>
  );
}
