//? ACA VA A ESTAR EL FORMULARIO DONDE NOSOTROS VAMOS A PODER CREAR NUESTRO PERRO...
import { Validation, ErrorHeingth, Errorweight } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./CreateDogs.module.css";
import { temperamentsDog } from "../../redux/actions";
import axios from "axios";
import Creator from "../Creator/Creator";

const CreateDogs = () => {
  const Temperaments = useSelector((state) => state.Temperaments); // esto seria el array...
  const dispatch = useDispatch();
  const [heightMin, setHeightMin] = useState("");
  const [heightMax, setHeightMax] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");

  const [Form, setForm] = useState({
    name: "",
    height: {},
    weight: {},
    life_span: 0,
    image: "",
    temperament: [],
  });
  const [Error, setError] = useState({
    name: "",
    life_span: 0,
    image: "",
  });

  const onChageHeigthMin = (event) => {
    const MIN = event.target.value;
    setHeightMin(MIN);
    Form.height.min = MIN;
  };

  const onChageHeigthMax = (event) => {
    const MAX = event.target.value;
    setHeightMax(MAX);
    Form.height.max = MAX;
  };

  const onChageWeightMin = (event) => {
    const MIN = event.target.value;
    setWeightMin(MIN);
    Form.weight.min = MIN;
  };

  const onChageWeightMax = (event) => {
    const MAX = event.target.value;
    setWeightMax(MAX);
    Form.weight.max = MAX;
  };
  const FuncionDelete = (TPM) => {
    // recibo por parametro el temperamento que voy a eliminar en caso de hacer click
    setForm({
      ...Form,
      temperament: Form.temperament.filter((temp) => temp !== TPM),
    }); // seteo el estado y modifico el array Form.temperament con un filter y sacandole el temperamento..
  };

  {
    /*------------------------------temperamenst---------------------------*/
  }
  useEffect(() => {
    dispatch(temperamentsDog());
  }, []);

  const onChange = (event) => {
    if (event.target.name === "temperament") {
      // Es el name del select.. si coincide con el que hace el evento entonces seteamos dentro de nuestro array de temperaments todo lo que habia en el mismo , sumado con el value que yo coloco cuando hago click en alguna option..
      setForm({
        ...Form,
        temperament: [...Form.temperament, event.target.value],
      });
    } else {
      const Propiedad = event.target.name;
      const value = event.target.value;

      setError(Validation({ ...Form, [Propiedad]: value }, Error));

      setForm({ ...Form, [Propiedad]: value });
    }
  };
  //* osea todo lo que tenia nuestro estado ===> propiedades del objeto con sus valores...
  //* sumado con la propiedad y el valor que voy a cambiar desde el input...

  const SubmitHandle = async (event) => {
    if (
      Form.height.length === 0 ||
      Form.weight.length === 0 ||
      Form.name.length === 0 ||
      Form.life_span.length === 0 ||
      Form.image.length === 0 ||
      Form.temperament.length === 0
    ) {
      alert("Debes completar todos los campos obligatoriamente");
    } else if (
      Error.image.length !== 0 ||
      Error.life_span.length !== 0 ||
      Error.name.length !== 0 ||
      ErrorHeingth(heightMin, heightMax) !== undefined ||
      Errorweight(weightMin, weightMax) !== undefined
    ) {
      alert("Tienes errores en los campos");
    } else {
      await axios.post("http://localhost:3001/dogs", Form); // From seria el body...
      alert("Perro creado exitosamente");
      event.preventDefault(); // esto es para evitar que la pagina se recargue..
    }
  };

  return (
    <div className={styles.divPadre}>
      <div className={styles.div}>
        <form onSubmit={SubmitHandle}>
          {/*-------------------------------NOMBRE---------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="name">Name: </label>
            <input
              className={styles.input}
              value={Form.name}
              name="name"
              type="text"
              onChange={onChange}
              placeholder="Escribe el name del perro."
            />
            <span className={styles.span}>{Error.name}</span>
          </div>
          {/*-------------------------------ALTURA---------------------------*/}
          <div className={styles.divInput}>
            <label>
              Height:
              <label htmlFor="heightMin">
                <input
                  className={styles.input2}
                  value={heightMin}
                  name="heightMin"
                  type="text"
                  onChange={onChageHeigthMin}
                  placeholder="Escribe la altura minima."
                />
                Min
              </label>
              <label htmlFor="heightMax">
                <input
                  className={styles.input2}
                  name="heightMax"
                  value={heightMax}
                  type="text"
                  onChange={onChageHeigthMax}
                  placeholder="Escribe la altura maxima."
                />
                Max
              </label>
            </label>
            <span className={styles.span}>
              {ErrorHeingth(heightMin, heightMax)}
            </span>
          </div>
          {/*-----------------------------PESO-----------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="weight">
              Weight:
              <label htmlFor="weightMin">
                <input
                  className={styles.input2}
                  name="weightMin"
                  value={weightMin}
                  type="text"
                  onChange={onChageWeightMin}
                  placeholder="Escribe el peso minimo."
                />
                Min
              </label>
              <label htmlFor="weightMax">
                <input
                  className={styles.input2}
                  name="weightMax"
                  value={weightMax}
                  type="text"
                  placeholder="Escribe el peso maximo."
                  onChange={onChageWeightMax}
                />
                Max
              </label>
            </label>
            <span className={styles.span}>
              {Errorweight(weightMin, weightMax)}
            </span>
          </div>
          {/*----------------------------LIFE------------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="life_span">Life_span:</label>
            <input
              className={styles.input}
              name="life_span"
              value={Form.life_span}
              type="number"
              placeholder="Escribe los años de vida."
              onChange={onChange}
            />
            <span className={styles.span}>{Error.life_span}</span>
          </div>
          {/*--------------------------IMAGEN--------------------------------*/}
          <div className={styles.divInput}>
            <label htmlFor="image">Image:</label>
            <input
              className={styles.input}
              name="image"
              value={Form.image}
              type="text"
              onChange={onChange}
              placeholder="Escribe la URL de la imagen."
            />
            <span className={styles.span}>{Error.image}</span>
          </div>
          {/*--------------------------Temperaments------------------------------*/}
          <select
            className={styles.selects}
            name="temperament"
            onChange={onChange}
          >
            <option value="" selected>
              Select a Temperament
            </option>
            {Temperaments?.map((temp) => {
              return <option value={temp.name}>{temp.name}</option>;
            })}
          </select>
          <hr />
          <div className={styles.Selecccion}>
            {Form.temperament?.map((temp) => (
              <div className={styles.div4}>
                <button
                  className={styles.button}
                  onClick={() => FuncionDelete(temp)}
                >
                  X
                </button>
                <p>{temp}</p>
              </div>
            ))}
          </div>
          <button className={styles.Boton} type="submit">
            Submit
          </button>
        </form>
      </div>
      <Creator />
    </div>
  );
};

export default CreateDogs;

//* el value={stado.propiedad} es para poder conectar el valor del input con el estado local... seria el reflejo de lo que escribimos en el estado con el input...
//* y la funcion onChange lo quehace es un reflejo del input al estado(osea lo que escribamos en el input se reflejara en el estado)...
