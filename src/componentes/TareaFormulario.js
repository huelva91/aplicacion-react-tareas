import React, { useState } from "react";
import "../estilos/TareaFomulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value); //Extrae el valor del campo de texto
    
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); //Evita que se recargue la pagina

    const tareaNueva = {
      id: uuidv4(), //Genera un id unico
      texto: input, //Extrae el valor del campo de texto
      completada: false, //Por defecto es false
    };

    props.onSubmit(tareaNueva); //Envia la tarea al padre
    document.getElementById("tarea-input").value = "";
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        id="tarea-input"
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
