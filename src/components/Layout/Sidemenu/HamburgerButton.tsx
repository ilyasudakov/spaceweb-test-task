import styles from "./HamburgerButton.module.scss";

export default function HamburgerButton({
  onClick,
  style = {
    container: {},
    line: {},
  },
}: {
  onClick: () => void;
  style?: {
    container?: { [i in string]: string };
    line?: { [i in string]: string };
  };
}) {
  return (
    <div
      onClick={onClick}
      className={styles.container}
      style={{
        ...style.container,
      }}
    >
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          className={styles.line}
          style={{ ...(style.line || {}) }}
          key={idx}
        />
      ))}
    </div>
  );
}
