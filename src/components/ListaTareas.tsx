// Se importa el componente Tarea que se utilizará para renderizar cada tarea individual
import { Tarea } from './Tarea'

// Se define el tipo ListaTareas con TypeScript para tipar las props que recibirá el componente
// Este tipo especifica que el componente recibirá:
// - ListaTareas: un array de strings que contiene todas las tareas
// - borrarTarea: una función que recibe un índice y no devuelve nada (void)
type ListaTareas = {
    ListaTareas: string[]  // Array de strings con las tareas
    borrarTarea: (index: number) => void  // Función para borrar una tarea por su índice
}

// Se define y exporta el componente ListaTareas que recibe las props tipadas
// Se usa desestructuración para obtener ListaTareas y borrarTarea de las props
export const ListaTareas = ({ ListaTareas, borrarTarea }: ListaTareas) => {
    return (
        // Se crea un contenedor div con la clase taskList para aplicar estilos CSS
        <div className="taskList">
            {/* Se mapea el array de tareas para crear un componente Tarea por cada elemento */}
            {ListaTareas.map((tarea, index) => (
                // Se crea un componente Tarea por cada elemento del array
                // key: se usa el índice como clave única para React (idealmente debería ser un ID único)
                // tarea: se pasa el texto de la tarea
                // borrarTarea: se pasa una función que llama a borrarTarea con el índice de esta tarea
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
            )
            )}
        </div>
    )
}