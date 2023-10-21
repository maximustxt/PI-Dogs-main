//? ACA VAMOS A CREAR NUESTRA NAVEGACION , DONDE TENDREMOS LOS LINK QUE NOS REDIRIJAN A UNA RUTA EN ESPECIFICO...
import styles from "./NavDog.module.css";
import { Link } from "react-router-dom";
import Selects from "./Selects";
import imagen from "../image/cerrar-sesion.png";

const Nav = ({ setPagina }) => {
  return (
    <div className={styles.div}>
      {/*Directamente el logaut me redirije a barra nada "/*/}
      <div className={styles.div1}>
        <Link className={styles.link} to={"/HomePage"}>
          Home
        </Link>
        <Link className={styles.link} to={"/FormPage"}>
          CreateDog 🐩
        </Link>
        <Link className={styles.link} to={"/"}>
          <img className={styles.imagen} src={imagen} />
        </Link>
      </div>
      <Selects setPagina={setPagina} />
    </div>
  );
};
// aca debo traer a onsearch poeque debe ir dentro de la navegacion...

export default Nav;
