import styles from "./Header.module.scss";

import { ReactComponent as Notice } from "../../../assets/notice.svg";
import HamburgerButton from "../Sidemenu/HamburgerButton";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Header({
  isMinimized,
  setIsMinimized,
}: {
  isMinimized: boolean;
  setIsMinimized: (isMinimized: boolean) => void;
}) {
  const { width } = useWindowSize();
  return (
    <header className={styles.container}>
      {width && width <= 768 && isMinimized && (
        <HamburgerButton
          style={{ line: { background: "#000" } }}
          onClick={() => setIsMinimized(!isMinimized)}
        />
      )}
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
