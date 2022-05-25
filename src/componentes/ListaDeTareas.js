import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css"
import Tarea from "./Tarea";

function ListaDeTareas() {

const [tareas, setTareas] = useState([]);

const agregarTarea = tarea => {//Recibe una tarea

    if (tarea.texto.trim()){
        tarea.texto = tarea.texto.trim(); //Elimina espacios en blanco
        const tareasActualizadas = [tarea, ...tareas]; //Agrega la nueva tarea al principio de la lista
        setTareas(tareasActualizadas); //Actualiza el estado
    }
}


    return (
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea 
                key={tarea.id} //Para que no se repita el id
                id={tarea.id} 
                texto={tarea.texto} 
                completada={tarea.completada}
                />
                )
            }
        </div>
        </>


    );

}
export default ListaDeTareas;