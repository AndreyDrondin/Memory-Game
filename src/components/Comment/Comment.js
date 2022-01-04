import styles from "./Comment.module.css";

export const Comment = ({ data }) => {
  return <div className={styles.comment}>{data}</div>;
};
