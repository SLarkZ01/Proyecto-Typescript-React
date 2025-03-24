// Se importa el hook useState de React para manejar el estado de los componentes
// useState permite crear variables de estado reactivas que al cambiar provocan un re-renderizado
import { useState } from "react";
// Se importa el componente ListaTareas que se encargará de mostrar todas las tareas
import { ListaTareas } from './ListaTareas';

// Se define y exporta el componente principal TodoApp
// Este componente es el contenedor principal de la aplicación de lista de tareas
// y se renderiza en el archivo main.tsx
export const TodoApp = () => {

    // Se crea una variable de estado 'nuevaTarea' para almacenar el texto que el usuario escribe
    // setNuevaTarea es la función que permite actualizar este estado
    // Se inicializa con un string vacío y se especifica que será de tipo string con TypeScript
    const [nuevaTarea, setNuevaTarea] = useState<string>('')

    // Se crea una variable de estado 'tareas' para almacenar el array de todas las tareas
    // setTareas es la función que permite actualizar este estado
    // Se inicializa con un array vacío y se especifica que será un array de strings con TypeScript
    const [tareas, setTareas] = useState<string[]>([])

    // Se define la función handleAddTask que se ejecutará cuando el usuario quiera agregar una tarea
    const handleAddTask = () => {
        // Se verifica que la tarea no esté vacía (eliminando espacios en blanco)
        if (nuevaTarea.trim() === '') return
        
        // Se actualiza el estado de tareas añadiendo la nueva tarea al final del array
        // Se usa el patrón funcional para asegurar que se trabaja con el estado más reciente
        setTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        
        // Se limpia el input reseteando el estado de nuevaTarea a un string vacío
        setNuevaTarea('')
    }

    // Se define la función handleBorrarTarea que se ejecutará cuando el usuario quiera eliminar una tarea
    // Recibe como parámetro el índice de la tarea a eliminar
    const handleBorrarTarea = (index: number) => {
        // Se actualiza el estado de tareas filtrando todas las tareas excepto la que tiene el índice recibido
        // El guion bajo (_) indica que no se usará el valor de la tarea, solo su índice
        setTareas(tareas => tareas.filter((_, i) => i !== index))
    }
    
    // Se renderiza la interfaz de usuario del componente
    return (
        // Contenedor principal de la aplicación
        <div>
            {/* Título de la aplicación */}
            <h1>Lista de tareas</h1>
            {/* Contenedor para el formulario de agregar tareas */}
            <div>
                {/* Input para escribir la nueva tarea */}
                <input type="text"
                    // El valor del input está vinculado al estado 'nuevaTarea'
                    // Esto crea un componente controlado donde React controla lo que se muestra
                    value={nuevaTarea}
                    // Cuando el usuario escribe, se actualiza el estado 'nuevaTarea' con el valor actual del input
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    // Texto de ayuda que se muestra cuando el input está vacío
                    placeholder="Nueva Tarea"></input>
                {/* Botón para agregar la tarea */}
                {/* Al hacer clic se ejecuta la función handleAddTask */}
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            {/* Componente ListaTareas que muestra todas las tareas */}
            {/* Se le pasan como props: */}
            {/* - ListaTareas: el array de tareas */}
            {/* - borrarTarea: la función para eliminar una tarea */}
            <ListaTareas ListaTareas={tareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}