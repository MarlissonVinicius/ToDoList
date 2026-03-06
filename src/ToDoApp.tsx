import './style.css'
import { useState } from 'react'

type Task = {
  id: string
  title: string
  description: string
}

function ToDoApp() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [form, setForm] = useState<Task>({
    id: '',
    title: '',
    description: ''
  })

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(form.title != ''){
      if(form.description != ''){
        const newTask: Task = {
        ...form,
        id: crypto.randomUUID()
        }

        setTasks((prevTasks) => [...prevTasks, newTask])

        setForm({
          id: '',
          title: '',
          description: ''
        })
      }else{
      alert('Erro! \nCampo descrição está vazio')
      }
    }else{
      alert('Erro! \nCampo título está vazio')
    }
    
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
                title: e.target.value
              }))
            }}
            placeholder="Título"
          />

          <input
            type="text"
            value={form.description}
            onChange={(e) => {
              setForm((prevForm) => ({
                ...prevForm,
                description: e.target.value
              }))
            }}
            placeholder="Descrição"
          />

          <button type="submit">Cadastrar Tarefa</button>
        </form>
      </div>

      <div className="tasksContainer">
        {tasks.map((task) => (
          <div key={task.id} className="taskCard">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoApp