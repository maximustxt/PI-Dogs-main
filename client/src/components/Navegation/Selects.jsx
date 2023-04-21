import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  FiltradoPorPeso,
  FiltradoAbecedario,
  temperamentsDog,
  FiltradoPorTemperamento,
  FiltradoPorDogs,
} from "../../redux/actions";
import styles from "./Selects.module.css";

const Selects = () => {
  const dispatch = useDispatch();
  // filtrado por peso:

  useEffect(() => {
    dispatch(temperamentsDog());
  }, []);

  const Temperaments = useSelector((state) => state.Temperaments); // esto seria el array...

  const HandleChangeOrdenPeso = (event) => {
    if (event.target.value === "Select Weight") {
      return;
    } else {
      dispatch(FiltradoPorPeso(event.target.value)); //mayor peso
    }
  };
  //filtrado Alfavetico:
  const HandleChangeOrdenAlfavetico = (event) => {
    if (event.target.value === "Alphabetical Order") {
      return;
    } else {
      dispatch(FiltradoAbecedario(event.target.value));
    }
  };

  const HandleChangeOrdenarTemperaments = (event) => {
    if (event.target.value === "Selected a Temperament") {
      return;
    } else {
      dispatch(FiltradoPorTemperamento(event.target.value));
    }
  };

  const HandleChangeOrdenarLosDogs = (event) => {
    dispatch(FiltradoPorDogs(event.target.value));
  };

  return (
    <div className={styles.div}>
      <div className={styles.div1}>
        <select className={styles.select} onChange={HandleChangeOrdenPeso}>
          <option selected>Select Weight</option>
          <option value="Greater weight">Greater weight</option>
          <option value="lower weight">lower weight</option>
        </select>
        <select
          className={styles.select}
          onChange={HandleChangeOrdenAlfavetico}
        >
          <option selected>Alphabetical Order</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        <select
          className={styles.select}
          onChange={HandleChangeOrdenarTemperaments}
        >
          <option selected>Selected a Temperament</option>
          {Temperaments?.map((temp) => {
            return <option value={temp.name}>{temp.name}</option>;
          })}
        </select>
        <select className={styles.select} onChange={HandleChangeOrdenarLosDogs}>
          <option value="AllDogs">AllDogs</option>
          <option value="DogsApi">DogsApi</option>
          <option value="DogsCreate">DogsCreate</option>
        </select>
      </div>
    </div>
  );
};

export default Selects;
