import styles from "./Error404.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../image/advertencia.png";
const Error404 = () => {
  return (
    <div className={styles.div1}>
      <div className={styles.div}>
        <h1 className={styles.h1}>ERROR 404</h1>
        <img className={styles.Error} src={image} />
        <p>Mistake!!. you entered an uncreated path...</p>
        <p>Come back Home!!!</p>
        <Link className={styles.Link} to="/HomePage">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
