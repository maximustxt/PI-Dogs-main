//? ACA VAMOS A OBTENER EL DETALLE DE CADA PERRO... VAMOS A TRAENOS TODA LA INFORMACION MAS IMPORTANTE(DETAIL)
import styles from "./DetailDogs.module.css";
import { useSelector, useDispatch } from "react-redux";
import { DetailDogs, cleanDetail } from "../../redux/actions"; // cuand hago sin llaves la importacion es para exportaciones default , cuando se usa llaves es cuando se importan muchad funciones...
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from "../image/collie-de-frontera.png";

const DetailPerros = () => {
  const dispatch = useDispatch();
  const { idRaza } = useParams();
  const DogDetail = useSelector((state) => state.DogDetail);
  useEffect(() => {
    dispatch(DetailDogs(idRaza)); // el id que recibe es el que sacamos de useParams y es el que le pasamos desde card cuando tocamos en el link: /detail/${id}...

    return () => {
      dispatch(cleanDetail()); // cuando el componente se desmonta hago un dispatch a la actions funcion cleandetail.. que lo que hace es vacior el objeto del detail...
      // para evitar que cuando ingrese a un detalle de un perro no me aparezca un perro y despues me cambie sino que me aparece directamente el cargando y no el perro anterior..
    };
  }, [idRaza]);

  return (
    <>
      {DogDetail.id ? (
        DogDetail.created !== false ? (
          <>
            <div className={styles.divSuperPadre}>
              <div className={styles.divLink1}>
                <img className={styles.imagen} src={image} />
                <p className={styles.p}>Detail of the Dog</p>
                <div className={styles.divLink}>
                  <Link className={styles.Link} to="/HomePage">
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.divSuperPadre}>
              <div className={styles.div}>
                <div className={styles.divCaracteres}>
                  <h3>Name : {DogDetail.name}</h3>
                  <h3>Height : {DogDetail.height + " " + "Cm"}</h3>
                  <h3>weight : {DogDetail.weight + " " + "Kg"}</h3>
                  <div className={styles.divTemperament}>
                    <h3>
                      Temperaments :
                      {DogDetail.Temperaments?.map((t) => t.name).join(", ")}
                    </h3>
                  </div>
                  <h3>Life_span : {DogDetail.life_span + " " + "years"}</h3>
                </div>
                <img
                  className={styles.img}
                  src={DogDetail.image}
                  alt={DogDetail.name}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.divSuperPadre}>
              <div className={styles.divLink1}>
                <img className={styles.imagen} src={image} />
                <p className={styles.p}>Detail of the Dog</p>
                <div className={styles.divLink}>
                  <Link className={styles.Link} to="/HomePage">
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.divSuperPadre}>
              <div className={styles.div}>
                <div className={styles.divCaracteres}>
                  <h3>Name : {DogDetail.name}</h3>
                  <h3>Height : {DogDetail.height + " " + "Cm"}</h3>
                  <h3>weight : {DogDetail.weight + " " + "Kg"}</h3>
                  <div className={styles.divTemperament}>
                    <h3>Temperaments : {DogDetail.temperament}</h3>
                  </div>
                  <h3>Life_span : {DogDetail.life_span}</h3>
                </div>
                <img
                  className={styles.img}
                  src={DogDetail.image}
                  alt={DogDetail.name}
                />
              </div>
            </div>
          </>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailPerros;

{
  /* {DogDetail.name ? ( // si llega algo que renderize sino que espere con loading.. */
}
