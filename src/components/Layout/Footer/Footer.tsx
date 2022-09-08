import styles from "./Footer.module.scss";

import { ReactComponent as Apple } from "../../../assets/Footer/apple.svg";
import { ReactComponent as Google } from "../../../assets/Footer/google.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <div>
          © 2001–2022 ООО <a href="https://sweb.ru/">«СпейсВэб»</a>
        </div>
        <div>Все права защищены.</div>
        <div>
          Лицензия <a href="https://sweb.ru/">№163230</a>
        </div>
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
        <div>
          <a href="tel:78123341222">+7 (812) 334-12-22</a>
          {` `}(в Санкт-Петербурге)
        </div>
        <div>
          <a href="tel:74956631612">+7 (495) 663-16-12</a>
          {` `}(в Москве)
        </div>
        <div>
          <a href="tel:78001001615">+7 (800) 100-16-15</a>
          {` `}(бесплатно по России)
        </div>
      </div>
    </footer>
  );
}
