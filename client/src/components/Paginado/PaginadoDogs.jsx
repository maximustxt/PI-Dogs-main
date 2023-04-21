import styles from "./PaginadoDogs.module.css";

const Paginado = ({ Pagina, setPagina, maximoDePagina }) => {
  // botones onClick:
  const funcionSiguiente = () => {
    setPagina(Pagina + 1);
  };

  const funcionAnterior = () => {
    setPagina(Pagina - 1);
  };

  return (
    <div className={styles.div}>
      <button
        disabled={Pagina === 1 || Pagina < 1} // esto lo que hace es que no nos deja clickear mas cuando esta condiccion se cumple..
        className={styles.BotonAnterior}
        onClick={funcionAnterior}
      >
        Previous Page
      </button>
      <button
        disabled={Pagina === maximoDePagina} // esto lo que hace es que no nos deja clickear mas cuando esta condiccion se cumple..
        className={styles.Boton}
        onClick={funcionSiguiente}
      >
        Next Page
      </button>
    </div>
  );
};

export default Paginado;
