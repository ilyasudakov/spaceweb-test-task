import Button from "../../../../components/Form/Button/Button";
import SelectInput from "../../../../components/Form/SelectInput";
import { OptionsStateType } from "../Options/optionsReducer";
import { ReactComponent as NVMeIcon } from "../../../../assets/tariff_nvme 1.svg";
import { ReactComponent as HDDIcon } from "../../../../assets/tariff_hdd 1.svg";
import { ReactComponent as TurboIcon } from "../../../../assets/tariff_turbo 1.svg";
import styles from "./Card.module.scss";
import { useState } from "react";

type VPS = OptionsStateType["data"]["vpsPlans"][number];
type OS = OptionsStateType["data"]["selectOs"];
type PANEL = OptionsStateType["data"]["selectPanel"];

const CATEGORIES: { [s in string]: { icon: React.ReactNode; bg: string } } = {
  nvme: { icon: <NVMeIcon />, bg: "#E0F6FC" },
  hdd: { icon: <HDDIcon />, bg: "#C4EBF8" },
  turbo: { icon: <TurboIcon />, bg: "#ECFDF7" },
};

export default function Card({
  plan: {
    name,
    price_per_month,
    cpu_cores,
    ram,
    disk_type,
    volume_disk,
    category,
  },
  os,
  panel,
}: {
  plan: VPS;
  os: OS;
  panel: PANEL;
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: CATEGORIES[category].bg }}
    >
      <div className={styles.type}>
        {CATEGORIES[category].icon}
        {name}
      </div>
      <div className={styles.price}>{`${price_per_month} ₽/мес.`}</div>
      <ul className={styles.hardware_list}>
        <Hardware label="CPU" text={`${cpu_cores}`} />
        <Hardware label="RAM" text={`${ram}`} />
        <Hardware label="DISK" text={`${volume_disk} ${disk_type}`} />
      </ul>
      <SelectInput
        label="Дистрибутив"
        options={os}
        defaultValue={os[0] ?? []}
        onChange={() => {}}
      />
      <SelectInput
        label="Программное обеспечение"
        options={panel}
        defaultValue={panel[0] ?? []}
        onChange={() => {}}
      />
      <DataCenter label1="Санкт-Петербург" label2="Москва" />
      <Button>Заказать</Button>
    </div>
  );
}

const Hardware = ({ label, text }: { label: string; text: string }) => {
  return (
    <li className={styles.hardware}>
      <span>{label}</span>
      <div>{text}</div>
    </li>
  );
};

const DataCenter = ({ label1, label2 }: { label1: string; label2: string }) => {
  const [selected, setSelected] = useState(label1);
  return (
    <div className={styles.datacenter}>
      <span>Дата-центр</span>
      <div className={styles.datacenter_switch}>
        <div
          onClick={() => setSelected(label1)}
          className={selected === label1 ? styles.datacenter_selected : ""}
        >
          {label1}
        </div>
        <div
          onClick={() => setSelected(label2)}
          className={selected === label2 ? styles.datacenter_selected : ""}
        >
          {label2}
        </div>
      </div>
    </div>
  );
};
