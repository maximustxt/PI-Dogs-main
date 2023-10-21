import { Route } from "react-router-dom";
import {
  DetailPerros,
  HomePage,
  CreateDogs,
  InicioPag,
  Error404,
} from "./components/index";
import "./App.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <InicioPag />} />
        {/*exact se muetre en varra el boton y que exactamante este en barra...*/}
        <Route exact path="/HomePage" render={() => <HomePage />} />
        {/*aca iria el rendere que va a mostrar todas las cards de perros*/}
        <Route exact path="/detail/:idRaza" render={() => <DetailPerros />} />
        {/*aca vamos a crear un rendere de detail*/}
        <Route exact path="/FormPage" render={() => <CreateDogs />} />
        {/*aca vamos a crear un rendere de detail*/}
        <Route path="*" component={Error404} />
      </Switch>
      {/*en esta ruta va ser el inicio de la pagina , donde se encontrara el boton para ingresar...*/}
    </div>
  );
}

/*RECORDAR QUE USAMOS REACT-ROUTER-DOM LA VERSION 5 Y NO LA VERSION 6*/

export default App;
