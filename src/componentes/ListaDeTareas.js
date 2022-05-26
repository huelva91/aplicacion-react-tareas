import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    //Recibe una tarea

    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); //Elimina espacios en blanco
      const tareasActualizadas = [tarea, ...tareas]; //Agrega la nueva tarea al principio de la lista
      setTareas(tareasActualizadas); //Actualiza el estado
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id); //Filtra las tareas que no sean iguales a la tarea que se quiere eliminar
    setTareas(tareasActualizadas); //Actualiza el estado
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        //Si la tarea es igual a la que se quiere completar
        tarea.completada = !tarea.completada; //Cambia el estado de la tarea
      }
      return tarea; //Devuelve la tarea
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map(
          (
            tarea //Recorre la lista de tareas
          ) => (
            <Tarea
              key={tarea.id} //Para que no se repita el id
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} //Pasa la funcion eliminar al componente Tarea
            />
          )
        )}
      </div>
    </>
  );
}
export default ListaDeTareas;
