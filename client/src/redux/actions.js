import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DETAIL_DOGS,
  ONSEARCH_DOG,
  TEMPERAMENTS_DOG,
  ORDENAMIENTO_ABECEDARIO,
  ORDENAMIENTO_PESO,
  FILTRADO_DOGS,
  FILTRADO_TEMPERAMENTO,
  CLEANDETAIL_DOG,
} from "./index";

export const TodosLosDogs = () => {
  // debo ejecutar esta funcion que me retorna la peticion y el resto de cosas..
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/dogs");
      dispatch({ type: GET_ALL_DOGS, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
}; // el response.data seria el array completo que nos trae la peticion..

export const DetailDogs = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({ type: GET_DETAIL_DOGS, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const onsearchDog = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/dogs/onsearch?name=${name}`
      );
      dispatch({ type: ONSEARCH_DOG, payload: response.data }); // response.data seria el nuevo array que obtenemos de la busqueda...
    } catch (error) {
      alert("El nombre ingresado es invalido");
    }
  };
};

export const temperamentsDog = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/temperaments`);
      dispatch({ type: TEMPERAMENTS_DOG, payload: response.data }); // response.data seria el nuevo array que obtenemos de la busqueda...
    } catch (error) {
      alert(error.message);
    }
  }; // en response.data nos trae el temperamentos que es un array de temperamentos...
};

export const FiltradoPorPeso = (event) => {
  // en este caso seria el peso del animal = 10-15
  try {
    return {
      type: ORDENAMIENTO_PESO,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const FiltradoAbecedario = (event) => {
  // event en este caso seria A-Z o Z-A
  try {
    return {
      type: ORDENAMIENTO_ABECEDARIO,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const FiltradoPorTemperamento = (event) => {
  // en este caso seria por temperamento..
  try {
    return {
      type: FILTRADO_TEMPERAMENTO,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const FiltradoPorDogs = (event) => {
  // en este caso seria por temperamento..
  try {
    return {
      type: FILTRADO_DOGS,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const cleanDetail = () => {
  return {
    type: CLEANDETAIL_DOG, // cuando se desmonte el componente hago dispatch a esta actions
  };
};
