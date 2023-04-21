import styles from "./Creator.module.css";
import imagen1 from "../image/whatsapp.png";
import imagen2 from "../image/linkedin.png";
const Creator = () => {
  return (
    <div className={styles.Creator}>
      <div className={styles.divp}>
        <p className={styles.p}>Creator: Martin Ignacio</p>
        <p className={styles.p}>Terminos y Condiciones</p>
        <p className={styles.p}>Politica y Privacidad</p>
        <p className={styles.p}>Notificaciones</p>
        <div className={styles.a}></div>
        <a
          className={styles.Link}
          href="https://www.linkedin.com/in/ignacio-martin-339542263/"
        >
          <img className={styles.image} src={imagen2} />
        </a>
        <a href="https://web.whatsapp.com/" className={styles.Link}>
          <img className={styles.whatsapp} src={imagen1} />
        </a>
      </div>
    </div>
  );
};

export default Creator;
