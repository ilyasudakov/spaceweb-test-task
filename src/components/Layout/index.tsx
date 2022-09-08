import Sidemenu from "./Sidemenu/Sidemenu";

import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowSize();
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <div className={styles.container}>
      <Sidemenu isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <div className={`${styles.main} ${isMinimized && styles.main_max}`}>
        <Header isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
