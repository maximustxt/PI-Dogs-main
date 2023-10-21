//? ACA VAMOS A RECIBIR EL ARRAY DE PERROS Y LE VAMOS A ENVIAR POR PROPS A LAS CARDDOGS. LAS PROPIEDADES DE CADA CACHORRO..
import styles from "./HomeDogs.module.css";
import CardDogs from "../CardDogs/CardDogs";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TodosLosDogs } from "../../redux/actions";
import Paginado from "../Paginado/PaginadoDogs";
import Creator from "../Creator/Creator";
import Loading from "../Loading/Loading";
import Nav from "../Navegation/NavDogs";
import { connect } from "react-redux";

const HomePage = (props) => {
  const [Pagina, setPagina] = useState(1);
  const DogPorPagina = 8;

  const { AllDogs } = props;

  useEffect(() => {
    //entramos en la app , cuando se monte hace el dispatch y lleva esta action al reducer , para que modifique el stado global con el array que tengo de perros...
    if (!AllDogs.length) {
      props.TodosLosDogs(); // invoco la funcion que me retorna el dispatch a la action
    }
    setPagina(1);
  }, [AllDogs]);

  const maximoDePagina = Math.ceil(AllDogs.length / DogPorPagina); // serian 21.5 paginas en total , pero con math.ceil() lo hago con 22 paginas..

  return (
    <>
      <Nav setPagina={setPagina} />
      {!AllDogs.length ? (
        <Loading />
      ) : (
        <div className={styles.div}>
          {AllDogs?.slice(
            // este metodo devuelve un nuevo array... por lo tanto lo voy a maperar normalmente..
            (Pagina - 1) * DogPorPagina, // seria , si empieza en 1 seria 1 - 1 = 0 * 8 = 0
            (Pagina - 1) * DogPorPagina + DogPorPagina // y aca seria 1 - 1 = 0 * 8 = 0 + 8 = 8 dogs que voy a mostrar por pagina..
          ).map((dogs) =>
            dogs.created === false ? (
              <CardDogs
                created={dogs.created}
                key={dogs.id}
                id={dogs.id}
                image={dogs.image}
                name={dogs.name}
                weight={dogs.weight}
                temperament={dogs.temperament}
              />
            ) : (
              <CardDogs
                created={dogs.created}
                key={dogs.id}
                id={dogs.id}
                image={dogs.image}
                name={dogs.name}
                weight={dogs.weight}
                Temperaments={dogs.Temperaments}
              />
            )
          )}
          <div className={styles.PaginadoPadre}>
            <div className={styles.Paginado}>
              <Paginado
                setPagina={setPagina} // envio al componente para que pueda seterar el estado cuando haga click en los botones..
                Pagina={Pagina}
                maximoDePagina={maximoDePagina}
              />
            </div>
          </div>
          <Creator />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    AllDogs: state.AllDogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    TodosLosDogs: () => dispatch(TodosLosDogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

//const AllDogs = useSelector((state) => state.AllDogs); // buscamos el estado global que contiene el array de perros...
// const dispatch = useDispatch();
// dispatch(TodosLosDogs()); // si la longitud es igual a 0 del array de perros entonces que haga el dispatch , de lo contrario que no lo haga
