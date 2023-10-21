import styles from "./Creator.module.css";
import imagen1 from "../image/whatsapp.png";
import imagen2 from "../image/linkedin.png";
import imagen3 from "../image/github.png";
const Creator = () => {
  return (
    <div className={styles.Creator}>
      <div className={styles.divp}>
        <p className={styles.p}>Creator: Martin Ignacio</p>
        <p className={styles.p}>Terms and Conditions</p>
        <p className={styles.p}>Policy and Privacy</p>
        <p className={styles.p}>Notifications</p>
        <a
          className={styles.Link}
          href="https://www.linkedin.com/in/ignacio-martin-339542263/"
          target="_blank"
        >
          <img className={styles.image} src={imagen2} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          className={styles.Link}
        >
          <img className={styles.whatsapp} src={imagen1} />
        </a>
        <a
          className={styles.Link}
          href="https://github.com/maximustxt"
          target="_blank"
        >
          <img className={styles.image} src={imagen3} />
        </a>
      </div>
    </div>
  );
};

export default Creator;
