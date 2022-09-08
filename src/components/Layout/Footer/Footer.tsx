import styles from "./Footer.module.scss";

import { ReactComponent as Apple } from "../../../assets/Footer/apple.svg";
import { ReactComponent as Google } from "../../../assets/Footer/google.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <div>© 2001–2022 ООО «СпейсВэб»</div>
        <div>Все права защищены.</div>
        <div>Лицензия №163230</div>
      </div>
      <div className={styles.apps}>
        <span className={styles.label}>Скачать приложение</span>
        <ul className={styles.app_list}>
          <li className={styles.app_button}>
            <Google />
          </li>
          <li className={styles.app_button}>
            <Apple />
          </li>
        </ul>
      </div>
      <div className={styles.phones}>
        <div>+7 (812) 334-12-22 (в Санкт-Петербурге)</div>
        <div>+7 (495) 663-16-12 (в Москве)</div>
        <div>+7 (800) 100-16-15 (бесплатно по России)</div>
      </div>
    </footer>
  );
}
