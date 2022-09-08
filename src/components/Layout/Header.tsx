import styles from "./Header.module.scss";

import { ReactComponent as Notice } from "../../assets/notice.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <ul>
        <li>3467 ₽</li>
        <li>
          <Notice />
          <span>username</span>
        </li>
        <li>Выйти</li>
      </ul>
    </header>
  );
}
