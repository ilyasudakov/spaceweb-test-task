import { OptionsStateType } from "../Options/optionsReducer";
import styles from "./Card.module.scss";

export default function Card({
  plan: { name },
}: {
  plan: OptionsStateType["data"]["vpsPlans"][number];
}) {
  return <div className={styles.container}>{name}</div>;
}
