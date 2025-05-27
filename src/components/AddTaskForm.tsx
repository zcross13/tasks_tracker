import {useState} from 'react'
import type { Task } from '../types'
import '../styles/AddTaskForm.css'

interface AddTaskFormProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function AddTaskForm({tasks, setTasks}: AddTaskFormProps){
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            text: taskText, 
            completed: false,
            usePomodoro: false,
        }
        console.log('Created new task:', newTask)

        const updatedTasks = [...tasks, newTask]
        console.log('Updated tasks array:', updatedTasks)
        setTasks(updatedTasks)
        setTaskText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a new task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTaskForm