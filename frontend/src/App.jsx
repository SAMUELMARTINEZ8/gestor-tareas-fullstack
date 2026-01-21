import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  // Estados para el formulario
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // 1. Cargar tareas al iniciar
  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = () => {
    axios.get('http://127.0.0.1:8000/api/v1/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error))
  }

  // 2. Función para enviar el formulario (POST)
  const handleSubmit = (e) => {
    e.preventDefault() // Evita que se recargue la página
    
    const newTask = { title, description }

    axios.post('http://127.0.0.1:8000/api/v1/tasks/', newTask)
      .then(response => {
        // Si Django dice "OK", recargamos la lista y limpiamos el form
        console.log("Tarea creada:", response.data)
        fetchTasks() 
        setTitle('')
        setDescription('')
      })
      .catch(error => console.error("Error creando tarea:", error))
  }

  // 3. Función para borrar (Extra)
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/v1/tasks/${id}/`)
      .then(() => fetchTasks())
  }

  return (
    <div className="container">
      <h1>🚀 Mis Tareas (Django + React)</h1>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="task-form">
        <input 
          type="text" 
          placeholder="Título de la tarea..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Descripción (Opcional)..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      {/* LISTA DE TAREAS */}
      <div className="card-container">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <div className="card-content">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <span className={task.done ? "done" : "pending"}>
                {task.done ? "✅ Terminada" : "⏳ Pendiente"}
                </span>
            </div>
            <button onClick={() => handleDelete(task.id)} className="delete-btn">🗑️</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App