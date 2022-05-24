import "./App.css";
import logoFcc from "./imagenes/freecodecamp-logo.png";
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={logoFcc} alt="" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea texto="Hola" />
      </div>
    </div>
  );
}

export default App;
