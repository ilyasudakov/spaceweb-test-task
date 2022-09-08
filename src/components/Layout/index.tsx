import { useEffect, useState } from "react";

import Sidemenu from "./Sidemenu/Sidemenu";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

import useWindowSize from "../../hooks/useWindowSize";
import Footer from "./Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowSize();
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    width <= 768 && setIsMinimized(true);
  }, []);

  return (
    <div className={styles.container}>
      <Sidemenu isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <div className={`${styles.main} ${isMinimized && styles.main_max}`}>
        <Header isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
