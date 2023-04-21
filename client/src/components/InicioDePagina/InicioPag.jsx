import { Link } from "react-router-dom";
import styles from "./InicioPag.module.css";

const InicioPag = () => {
  return (
    <div className={styles.divPadre}>
      <div className={styles.divMadre}>
        <div className={styles.div}>
          <h1>Dogs Website</h1>
          <p className={styles.p}>
            This is an app that has the purpose of showing the breeds and
            characteristics of each dog, it is a dynamic and functional app,
            perfect to have a good time!
          </p>
          <Link to="/HomePage" className={styles.neon}>
            {/*cuando toque el link me dirije a la ruta /HomePage*/}
            Get Into
          </Link>
        </div>
      </div>
    </div>
  );
}; // por porps me va a llegar la funcion para que cuando haga click en el boton me redirija al home..

export default InicioPag;
