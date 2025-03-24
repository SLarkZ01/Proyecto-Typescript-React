

// Se define el tipo Tarea con TypeScript para tipar las props que recibirá el componente
// Este tipo especifica que el componente recibirá:
// - tarea: un string que contiene el texto de la tarea
// - borrarTarea: una función que no recibe parámetros y no devuelve nada (void)
type Tarea = {
    tarea: string  // El texto de la tarea a mostrar
    borrarTarea: () => void  // Función para eliminar esta tarea específica
}

// Se define y exporta el componente Tarea que recibe las props tipadas
// Se usa desestructuración para obtener tarea y borrarTarea de las props
export const Tarea = ({ tarea, borrarTarea }: Tarea) => {
    return (
        // Se crea un contenedor div con la clase task para aplicar estilos CSS
        <div className="task">
            {/* Se muestra el texto de la tarea dentro de un span */}
            <span>{tarea}</span>
            {/* Botón que al hacer clic ejecuta la función borrarTarea pasada como prop */}
            <button onClick={borrarTarea}>Borrar</button>
        </div>
    )
}