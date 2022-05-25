import "./App.css";
import logoFcc from "./imagenes/freecodecamp-logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={logoFcc} alt="" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
