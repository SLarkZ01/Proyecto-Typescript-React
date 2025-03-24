import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TodoApp } from './components/TodoApp';

// se crea un root para renderizar la aplicacion de la tabla de tareas
createRoot(document.getElementById('root')!).render(
  // se renderiza la aplicacion en el root que se encuentra en el index.html con id 'root'
  <StrictMode>
    {/* se carga la aplicacion TodoApp que se encuentra en el archivo TodoApp.tsx */}
    <TodoApp></TodoApp>
  </StrictMode>
)
