import Button from "../../../../components/Form/Button/Button";
import SelectInput from "../../../../components/Form/SelectInput";
import { OptionsStateType } from "../Options/optionsReducer";
import { ReactComponent as NVMeIcon } from "../../../../assets/tariff_nvme 1.svg";
import { ReactComponent as HDDIcon } from "../../../../assets/tariff_hdd 1.svg";
import { ReactComponent as TurboIcon } from "../../../../assets/tariff_turbo 1.svg";
import styles from "./Card.module.scss";

type VPS = OptionsStateType["data"]["vpsPlans"][number];
type OS = OptionsStateType["data"]["selectOs"];
type PANEL = OptionsStateType["data"]["selectPanel"];

const CATEGORY_ICONS: { [s in string]: { icon: React.ReactNode; bg: string } } =
  {
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
      style={{ backgroundColor: CATEGORY_ICONS[category].bg }}
    >
      <div className={styles.type}>
        {CATEGORY_ICONS[category].icon}
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
