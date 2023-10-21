import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  FiltradoPorPeso,
  FiltradoAbecedario,
  temperamentsDog,
  FiltradoPorTemperamento,
  FiltradoPorDogs,
} from "../../redux/actions";
import { TodosLosDogs } from "../../redux/actions";
import styles from "./Selects.module.css";
import OnsearchDog from "../OnsearchDogs/OnsearchDogs";

const Selects = () => {
  const dispatch = useDispatch();
  // filtrado por peso:

  useEffect(() => {
    dispatch(temperamentsDog());
  }, []);

  const Temperaments = useSelector((state) => state.Temperaments); // esto seria el array...

  const FuncionReset = () => {
    dispatch(TodosLosDogs());
  };

  const HandleChangeOrdenPeso = (event) => {
    if (event.target.value === "Select Weight") {
      return false;
    } else {
      dispatch(FiltradoPorPeso(event.target.value)); //mayor peso
    }
  };
  //filtrado Alfavetico:
  const HandleChangeOrdenAlfavetico = (event) => {
    if (event.target.value === "Alphabetical Order") {
      return false;
    } else {
      dispatch(FiltradoAbecedario(event.target.value));
    }
  };

  const HandleChangeOrdenarTemperaments = (event) => {
    if (event.target.value === "Selected a Temperament") {
      return false;
    } else {
      dispatch(FiltradoPorTemperamento(event.target.value));
    }
  };

  const HandleChangeOrdenarLosDogs = (event) => {
    dispatch(FiltradoPorDogs(event.target.value));
  };

  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <div className={styles.div4}>
          <button className={styles.boton} onClick={() => FuncionReset()}>
            Show All
          </button>
        </div>
        <div className={styles.div1}>
          <div className={styles.div3}>
            <label htmlFor="select1" className={styles.label}>
              Order by :
            </label>
            <div className={styles.div6}>
              <select
                name="select1"
                className={styles.select}
                onChange={HandleChangeOrdenPeso}
              >
                <option selected>Weight</option>
                <option value="Greater weight">Greater weight</option>
                <option value="lower weight">lower weight</option>
              </select>
              <select
                className={styles.select}
                onChange={HandleChangeOrdenAlfavetico}
              >
                <option selected>Alphabetical Order</option>
                <option value="A a Z">A a Z</option>
                <option value="Z a A">Z a A</option>
              </select>
            </div>

            <label htmlFor="select2" className={styles.label}>
              Filter by :
            </label>
            <div className={styles.div6}>
              <select
                className={styles.select}
                onChange={HandleChangeOrdenarTemperaments}
                name="select2"
              >
                <option selected>Temperament</option>
                {Temperaments?.map((temp) => {
                  return <option value={temp.name}>{temp.name}</option>;
                })}
              </select>
              <select
                className={styles.select}
                onChange={HandleChangeOrdenarLosDogs}
              >
                <option value="Data Origin">Data Origin</option>
                <option value="DogsApi">DogsApi</option>
                <option value="DogsCreate">DogsCreate</option>
              </select>
            </div>
          </div>
        </div>
        <OnsearchDog />
      </div>
    </div>
  );
};

export default Selects;
