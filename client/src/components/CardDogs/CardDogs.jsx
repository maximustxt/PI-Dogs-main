//? ACA VAMOS A RECIBIR POR PROPS CADA PORPIEDAD DE CADA PERRO Y VAMOS A RENDERIZAR CADA PERRO EN UNA CARD..
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./CardDogs.module.css";
import imagen from "../image/eliminar.png";
import { FuncionEliminarDog } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const CardDogs = (props) => {
  /*Cuando toque en cada tarjeta me va aredirijir a la ruta detail , donde se renderizara el componente detail...*/
  const dispatch = useDispatch();

  // const funcionDispatch = (id) => {
  //   dispatch(FuncionEliminarDog(id));
  // };

  return props.created === false ? (
    <Link className={styles.link} to={`/detail/${props.id}`}>
      <div className={styles.div}>
        <h1> {props.name}</h1>
        <h3>weight : {props.weight + " " + "Kg"}</h3>
        <h3 className={styles.temperament}>{props.temperament}</h3>
        <img className={styles.img} src={props.image} alt={props.name} />
      </div>
    </Link>
  ) : (
    <Link className={styles.link} to={`/detail/${props.id}`}>
      <div className={styles.div}>
        {/* <button
          className={styles.buton}
          onClick={() => funcionDispatch(props.id)}
        >
          <img className={styles.imagen} src={imagen} />
        </button> */}
        <h1> {props.name}</h1>
        <h3>weight : {props.weight + " " + "Kg"}</h3>
        <h3>{props.Temperaments?.map((t) => t.name).join(", ")}</h3>
        <img className={styles.img} src={props.image} alt={props.name} />
      </div>
    </Link>
  );
};

export default CardDogs;
