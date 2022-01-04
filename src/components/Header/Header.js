import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <h1 className={styles.h1}>
        <span className={styles.letter}>И</span>гра в пары
      </h1>
    </div>
  );
};
