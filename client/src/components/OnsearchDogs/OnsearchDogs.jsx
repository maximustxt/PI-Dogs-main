//? ACA SE VA A ENCONTRAR EL BUSCADOR , CUANDO BUSQUEMOS POR NOMBRE A CADA PERRO...
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onsearchDog, TodosLosDogs } from "../../redux/actions";
import styles from "./OnsearchDogs.module.css";
import swal from "sweetalert";

const OnsearchDog = () => {
  const [name, setName] = useState(""); // creamos un estado local el cual va a ser el nombre que vamos a escribir en el <input type="text" className="" />

  const dispatch = useDispatch();
  const onsearchClick = (name) => {
    if (!name.length) {
      swal({
        title: "Atencion",
        text: "Debes ingresar un nombre",
        icon: "warning",
        buttons: "Aceptar",
      });
    } else {
      dispatch(onsearchDog(name)); // cuando hagamos click en el boton va hacer el dispatch y va a cambiar el estado global..
    }
  };

  const HandleChange = (event) => {
    setName(event.target.value); // le agregamos al estado name el valor que escribimos en el input...
  };

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="search"
        name="name"
        placeholder="Write a dog breed"
        onChange={HandleChange}
      />
      <button onClick={() => onsearchClick(name)} className={styles.busqueda}>
        Search
      </button>

      {/*al hacer click se ejecutara la funcion que hace la peticion a la ruta correspondiente */}
    </div>
  );
};

export default OnsearchDog;
