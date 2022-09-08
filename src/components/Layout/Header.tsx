import styles from "./Header.module.scss";

import { ReactComponent as Notice } from "../../assets/notice.svg";
import HamburgerButton from "./Sidemenu/HamburgerButton";

export default function Header() {
  return (
    <header className={styles.container}>
      <HamburgerButton
        style={{ line: { background: "#000" } }}
        onClick={() => {}}
      />
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
