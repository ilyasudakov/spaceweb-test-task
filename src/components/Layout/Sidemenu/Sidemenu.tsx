import styles from "./Sidemenu.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo_sweb.svg";
import { useState } from "react";
import NAV, { NavType } from "./nav";
import HamburgerButton from "./HamburgerButton";

export default function Sidemenu({
  isMinimized,
  setIsMinimized,
}: {
  isMinimized: boolean;
  setIsMinimized: (isMinimized: boolean) => void;
}) {
  return (
    <div
      className={`${styles.container} ${isMinimized ? styles.minimized : ""}`}
    >
      <div className={styles.top}>
        <Logo />
        {<HamburgerButton onClick={() => setIsMinimized(!isMinimized)} />}
      </div>
      <ul className={styles.list}>
        {NAV.map((data) => (
          <NavItem key={data.text} {...data} />
        ))}
      </ul>
    </div>
  );
}

const NavItem = ({ icon, isPromoted, text, nav }: NavType) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <li className={`${styles.list_item} ${isPromoted && styles.nav_promoted}`}>
      <span
        className={styles.nav_top}
        onClick={() => setShowSubMenu(!showSubMenu)}
      >
        {icon}
        <div>{text}</div>
      </span>
      {showSubMenu && nav && (
        <ul className={`${styles.submenu}`}>
          {nav.map(({ text, icon }) => (
            <li key={text} className={`${styles.list_item}`}>
              <span className={styles.nav_top}>
                {icon}
                <div>{text}</div>
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
