import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.divPadrazo}>
      <div className={styles.divPadre}>
        <div className={styles.loader}>
          <div className={styles.square}></div>
          <div className={styles.circle}></div>
        </div>
        <h3 className={styles.load}>Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
