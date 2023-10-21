import {
  GET_ALL_DOGS,
  GET_DETAIL_DOGS,
  ONSEARCH_DOG,
  CREATE_DOGS,
  TEMPERAMENTS_DOG,
  CLEANDETAIL_DOG,
  ORDENAMIENTO_PESO,
  ORDENAMIENTO_ABECEDARIO,
  FILTRADO_TEMPERAMENTO,
  FILTRADO_DOGS,
  DELETEDOG,
} from "./index";

const initialState = {
  AllDogs: [],
  AllDogsCopia: [],
  Temperaments: [],
  DogDetail: {},
}; // todo esto es el estado

const rootReducer = (state = initialState, actions) => {
  // actions biene siendo el objeto ===> {type: y payload}
  switch (actions.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        AllDogs: actions.payload,
        AllDogsCopia: actions.payload,
      };

    case GET_DETAIL_DOGS:
      console.log(actions.payload);
      return {
        ...state,
        DogDetail: actions.payload, // el detail seria el objeto de cada perro y eso seria el actions.peyload..
      };

    case ONSEARCH_DOG:
      console.log(actions.payload);
      return {
        ...state,
        AllDogs: [...actions.payload], // esto seria el array
      };

    case TEMPERAMENTS_DOG:
      return {
        ...state,
        Temperaments: actions.payload,
      };

    case CLEANDETAIL_DOG:
      return {
        ...state,
        DogDetail: {}, // aca vacio el objeto de detail cuando se desmonta el perro...
      };

    case ORDENAMIENTO_PESO:
      return {
        // los ordenamientos ordenan una copia del estado de dogs.... osea si yo filtro y modifico alldogs , voy a poder ordenar despues ese filtrado..
        ...state,
        AllDogs:
          actions.payload === "lower weight"
            ? [...state.AllDogs].sort((a, b) => {
                if (
                  Number(a.weight.split("-").at(-1)) >
                  Number(b.weight.split("-").at(-1))
                )
                  return 1;
                else if (
                  Number(a.weight.split(" ").at(-1)) <
                  Number(b.weight.split(" ").at(-1))
                ) {
                  return -1;
                } else return 0;
              })
            : [...state.AllDogs].sort((a, b) => {
                if (
                  Number(a.weight.split(" ").at(-1)) >
                  Number(b.weight.split(" ").at(-1))
                )
                  return -1;
                else if (
                  Number(a.weight.split(" ").at(-1)) <
                  Number(b.weight.split(" ").at(-1))
                ) {
                  return 1;
                } else return 0;
              }),
      };
    case ORDENAMIENTO_ABECEDARIO:
      return {
        ...state,
        AllDogs: [...state.AllDogs].sort((a, b) => {
          if (a.name < b.name) {
            // ordena alfaveticamente... si a es menor alfaveticamente que b entonces lo ordena de forma acendente..
            return actions.payload === "Z a A" ? 1 : -1;
          }
          if (a.name > b.name) {
            // ordena alfaveticamente... si a es mayor alfaveticamente que b entonces lo ordena de forma Decendente..
            return actions.payload === "Z a A" ? -1 : 1;
          }
        }),
      };

    case FILTRADO_TEMPERAMENTO:
      return {
        // solo los filtrados usan el array de copia , para no pisar los ordenamientos y el resto..
        ...state,
        AllDogs: [...state.AllDogsCopia].filter(
          (dog) =>
            dog.temperament !== undefined && // aca filtro a los dog que unicamente cuenten con temperamentos , si no tienen temperamentos entonces no los filtro...
            dog.temperament.includes(actions.payload) === true
        ),
      };

    case FILTRADO_DOGS:
      return {
        ...state,
        AllDogs:
          actions.payload === "Data Origin"
            ? [...state.AllDogsCopia].map((dog) => dog)
            : actions.payload === "DogsApi"
            ? [...state.AllDogsCopia].filter(
                (dog) => typeof dog.id === "number"
              )
            : [...state.AllDogsCopia].filter(
                (dog) => typeof dog.id !== "number"
              ),
      };
    case DELETEDOG:
      return {
        ...state,
        AllDogs: state.AllDogs.filter((dog) => dog !== actions.payload),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
