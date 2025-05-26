import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import './styles/App.css'

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Initialize state from localStorage
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const handleToggle = (idToToggle: number) => {
    const updatedTasks = tasks.map((task) => 
      task.id === idToToggle ? {...task, completed: !task.completed} : task
    )
    setTasks(updatedTasks)
  }

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  

  return (
    <div className="app">
      <h1 className='app-title'>Task Tracker ✅</h1>
      <AddTaskForm setTasks={setTasks} tasks={tasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} handleToggle={handleToggle}/>
    </div>
  )
}

export default App
