import {useState} from 'react'
import '../styles/AddTaskForm.css'

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface AddTaskFormProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function AddTaskForm({tasks, setTasks}: AddTaskFormProps){
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submitting new task with text:', taskText)
        console.log('Current tasks before adding:', tasks)

        const newTask = {
            id: Date.now(),
            text: taskText, 
            completed: false
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