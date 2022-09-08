import Button from "../../../../components/Form/Button/Button";
import SelectInput from "../../../../components/Form/SelectInput";
import styles from "./Card.module.scss";
import React, { useState } from "react";

import { ReactComponent as NVMeIcon } from "../../../../assets/tariff_nvme 1.svg";
import { ReactComponent as HDDIcon } from "../../../../assets/tariff_hdd 1.svg";
import { ReactComponent as TurboIcon } from "../../../../assets/tariff_turbo 1.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/icon_plus.svg";

import { connect, ConnectedProps } from "react-redux";
import { OptionsStateType } from "../Options/optionsReducer";
import { changeOS, changePanel } from "../Options/optionsActions";

type VPS = OptionsStateType["data"]["vpsPlans"][number];
type OS = OptionsStateType["data"]["selectOs"];
type PANEL = OptionsStateType["data"]["selectPanel"];

const defaultBonus = (
  <div>
    <div>2 IP-адреса (lPv4 + lPv6)</div>
    <div>3 резервных копии</div>
  </div>
);
const hddBonus = (
  <div>
    <div>2 IP-адреса (lPv4 + lPv6)</div>
  </div>
);
const CATEGORIES: {
  [s in string]: { icon: React.ReactNode; bg: string; bonus: React.ReactNode };
} = {
  nvme: { icon: <NVMeIcon />, bg: "#E0F6FC", bonus: defaultBonus },
  hdd: { icon: <HDDIcon />, bg: "#C4EBF8", bonus: hddBonus },
  turbo: { icon: <TurboIcon />, bg: "#ECFDF7", bonus: defaultBonus },
};

function Card({
  plan: {
    name,
    price_per_month,
    cpu_cores,
    ram,
    disk_type,
    volume_disk,
    category,
    id,
    selected,
    selectedPanel,
  },
  os,
  panel,
  changeOS,
  changePanel,
}: Props) {
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
        defaultValue={os.find(({ id }) => id === selected)}
        onChange={({ value }) => changeOS(id, value)}
      />
      <SelectInput
        label="Программное обеспечение"
        options={panel}
        defaultValue={panel.find(({ id }) => id === selectedPanel)}
        onChange={({ value }) => changePanel(id, value)}
      />
      <DataCenter label1="Санкт-Петербург" label2="Москва" />
      <Bonus bonus={CATEGORIES[category].bonus} />
      <Button>Заказать</Button>
    </div>
  );
}
const connector = connect(
  (
    _,
    ownProps: {
      plan: VPS;
      os: OS;
      panel: PANEL;
    }
  ) => ({
    plan: ownProps.plan,
    os: ownProps.os,
    panel: ownProps.panel,
  }),
  { changeOS, changePanel }
);
type Props = ConnectedProps<typeof connector>;
export default connector(Card);

const Hardware = ({ label, text }: { label: string; text: string }) => {
  return (
    <li className={styles.hardware}>
      <span>{label}</span>
      <div>{text}</div>
    </li>
  );
};

const Bonus = ({ bonus }: { bonus: React.ReactNode }) => {
  return (
    <div className={styles.bonus}>
      <PlusIcon />
      {bonus}
    </div>
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
