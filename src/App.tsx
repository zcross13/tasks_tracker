import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import type { Task } from './types'

import './styles/App.css'

// Main application component
function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Initialize state from localStorage
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      // Ensure all tasks have the usePomodoro property
      const parsedTasks = JSON.parse(savedTasks)
      return parsedTasks.map((task: any) => ({
        ...task,
        usePomodoro: task.usePomodoro ?? false
      }))
    }
    return []
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
