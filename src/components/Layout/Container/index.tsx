import styles from "./Container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>АККАУНТ</h2>
        <h1>ЗАКАЗАТЬ VPS</h1>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>{children}</div>
    </section>
  );
}
