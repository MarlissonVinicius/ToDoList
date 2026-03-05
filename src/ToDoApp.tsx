import './style.css'
import { use, useState } from 'react'

function ToDoApp() {

  const [tasks, setTasks] = useState([{
    id: '',
    title: '',
    description: ''
  }])
  const [form,setForm] = useState({
    id: '',
    title: '',
    description: ''
  })

  const handleForm = (e) => {
    e.preventDefault()
    form.id = crypto.randomUUID();
    setTasks((prevTasks) => [...prevTasks,form])
    setForm({
      id: '',
      title: '',
      description: ''
    })
  }

  return (
    <div className="appContainer">
      <div className="formContainer">
        <form onSubmit={handleForm}>
          <h1>Cadastrar Tarefas</h1>
          <input 
            type="text"
            value={form.title} 
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm,
                title:e.target.value
              }))
            }}
            placeholder='Título' />
          <input 
            type="text" 
            value={form.description}
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm, 
                description:e.target.value
              }))
            }}
            placeholder='Descrição' />
          <button type='submit'>Cadastrar Tarefa</button>
        </form>
      </div>
      <div className="tasksContainer">
        {tasks.map((task) => (
          <div key={task.id} className='taskCard'>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoApp
