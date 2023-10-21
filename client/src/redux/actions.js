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
  DELETEDOG,
} from "./index";
import axios from "axios";
import swal from "sweetalert";

export const TodosLosDogs = () => {
  // debo ejecutar esta funcion que me retorna la peticion y el resto de cosas..
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/dogs");
      dispatch({ type: GET_ALL_DOGS, payload: response.data });
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
}; // el response.data seria el array completo que nos trae la peticion..

export const DetailDogs = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({ type: GET_DETAIL_DOGS, payload: response.data });
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "error",
        buttons: "Aceptar",
      });
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
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
};

export const temperamentsDog = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/temperaments`);
      dispatch({ type: TEMPERAMENTS_DOG, payload: response.data }); // response.data seria el nuevo array que obtenemos de la busqueda...
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  }; // en response.data nos trae el temperamentos que es un array de temperamentos...
};

export const FiltradoPorPeso = (event) => {
  // en este caso seria el peso del animal = 10-15

  return {
    type: ORDENAMIENTO_PESO,
    payload: event,
  };
};

export const FiltradoAbecedario = (event) => {
  // event en este caso seria A-Z o Z-A

  return {
    type: ORDENAMIENTO_ABECEDARIO,
    payload: event,
  };
};

export const FiltradoPorTemperamento = (event) => {
  // en este caso seria por temperamento..

  return {
    type: FILTRADO_TEMPERAMENTO,
    payload: event,
  };
};

export const FiltradoPorDogs = (event) => {
  // en este caso seria por temperamento..

  return {
    type: FILTRADO_DOGS,
    payload: event,
  };
};

export const cleanDetail = () => {
  return {
    type: CLEANDETAIL_DOG, // cuando se desmonte el componente hago dispatch a esta actions
  };
};

export const FuncionEliminarDog = async (id) => {
  console.log(id);
  return async function (dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3001/dogs/${id}`);
      console.log(response);
      dispatch({ type: DELETEDOG, payload: response.data });
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
};
