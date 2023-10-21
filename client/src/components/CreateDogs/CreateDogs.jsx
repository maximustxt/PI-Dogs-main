//? ACA VA A ESTAR EL FORMULARIO DONDE NOSOTROS VAMOS A PODER CREAR NUESTRO PERRO...
import { Validation, ErrorHeingth, Errorweight } from "./validation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import FormDog from "../FormDog/Form";
import { temperamentsDog, TodosLosDogs } from "../../redux/actions";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const CreateDogs = () => {
  const Temperaments = useSelector((state) => state.Temperaments); // esto seria el array...
  const AllDogs = useSelector((state) => state.AllDogs);
  const dispatch = useDispatch();
  const [heightMin, setHeightMin] = useState();
  const [heightMax, setHeightMax] = useState();
  const [weightMin, setWeightMin] = useState();
  const [weightMax, setWeightMax] = useState();

  console.log(AllDogs);

  useEffect(() => {
    dispatch(temperamentsDog());
    dispatch(TodosLosDogs());
  }, []);

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
    life_span: "",
    image: "",
  });

  const onChageHeigthMin = (event) => {
    const MIN = event.target.value;
    setHeightMin(MIN);
    Form.height.min = MIN.toString();
  };

  const onChageHeigthMax = (event) => {
    const MAX = event.target.value;
    setHeightMax(MAX);
    Form.height.max = MAX.toString();
  };

  const onChageWeightMin = (event) => {
    const MIN = event.target.value;
    setWeightMin(MIN);
    Form.weight.min = MIN.toString();
  };

  const onChageWeightMax = (event) => {
    const MAX = event.target.value;
    setWeightMax(MAX);
    Form.weight.max = MAX.toString();
  };
  const FuncionDelete = (TPM) => {
    // recibo por parametro el temperamento que voy a eliminar en caso de hacer click

    setForm({
      ...Form,
      temperament: Form.temperament.filter((temp) => temp[1] !== TPM),
    }); // seteo el estado y modifico el array Form.temperament con un filter y sacandole el temperamento..
  };

  const onChange = (event) => {
    if (event.target.name === "temperament") {
      // Es el name del select.. si coincide con el que hace el evento entonces seteamos dentro de nuestro array de temperaments todo lo que habia en el mismo , sumado con el value que yo coloco cuando hago click en alguna option..
      const obj = Temperaments.find((temp) => temp.name === event.target.value);

      console.log(obj);

      setForm({
        ...Form,
        temperament: [...Form.temperament, [obj.id, obj.name]],
      }); // seteo un elemento nuevo...

      //claro nunca voy a tener nada por eso el bucle for no funciona!!!
      for (let i = 0; i < Form.temperament.length; i++) {
        //recorro el array..
        if (Form.temperament[i].includes(obj.name)) {
          // si ya incluia un valor repetido entonces tira un alert y filtro el array de temperamentos  , para que obj no se incluya de nuevo en el array mismo.
          swal({
            title: "Alert",
            text: "Este temperamento ya esta incluido con Temperamnets.",
            icon: "warning",
            buttons: "Aceptar",
          });

          setForm({
            ...Form,
            temperament: [...Form.temperament].filter(
              (temp) => temp !== [obj.id, obj.name]
            ), // saco el elemento que ya esta incluido..
          });
          break; // y corto el bucle for.
        }
      }
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
      Form.height.heightMin === 0 ||
      Form.height.heightMax === 0 ||
      Form.weight.weightMin === 0 ||
      Form.weight.weightMax === 0 ||
      Form.name.length === 0 ||
      Form.life_span.length === 0 ||
      Form.image.length === 0 ||
      !Form.temperament.length // si no tiene longitud el array , porque si pongo que es igual a cero me va a tirar el alert cuando elimine el primer elemento...
    ) {
      event.preventDefault(); // esto es para evitar que la pagina se recargue..
      swal({
        title: "Alert",
        text: "Debes completar todos los campos obligatoriamente",
        icon: "warning",
        buttons: "Aceptar",
      });
    } else if (
      Error.image.length !== 0 ||
      Error.life_span.length !== 0 ||
      Error.name.length !== 0 ||
      ErrorHeingth(heightMin, heightMax) !== undefined ||
      Errorweight(weightMin, weightMax) !== undefined
    ) {
      event.preventDefault(); // esto es para evitar que la pagina se recargue..
      swal({
        title: "Alert",
        text: "Tienes errores en los campos",
        icon: "error",
        buttons: "Aceptar",
      });
    } else {
      const DogRepetido = AllDogs.filter(
        (dog) =>
          dog === Form || dog.name === Form.name || dog.image == Form.image
      ); // recorro el array de perros para saber si ya se encunetra un perro repetido..
      //|| dog.image === Form.image

      if (!DogRepetido.length) {
        await axios.post("http://localhost:3001/dogs", Form); // From seria el body...
        swal({
          text: "Perro creado exitosamente",
          icon: "saccess",
          buttons: "Aceptar",
        });
      } else {
        event.preventDefault(); // esto es para evitar que la pagina se recargue..
        swal({
          title: "Atencion",
          text: "Ya existe una Raza de perro con estas caracteristicas",
          icon: "warning",
          buttons: "Aceptar",
        });
      }
    }
  };

  return (
    <FormDog
      SubmitHandle={SubmitHandle}
      onChange={onChange}
      FuncionDelete={FuncionDelete}
      onChageWeightMax={onChageWeightMax}
      onChageWeightMin={onChageWeightMin}
      onChageHeigthMax={onChageHeigthMax}
      onChageHeigthMin={onChageHeigthMin}
      Form={Form}
      Temperaments={Temperaments}
      heightMin={heightMin}
      heightMax={heightMax}
      weightMin={weightMin}
      weightMax={weightMax}
      Error={Error}
    />
  );
};

export default CreateDogs;

//* el value={stado.propiedad} es para poder conectar el valor del input con el estado local... seria el reflejo de lo que escribimos en el estado con el input...
//* y la funcion onChange lo quehace es un reflejo del input al estado(osea lo que escribamos en el input se reflejara en el estado)...
