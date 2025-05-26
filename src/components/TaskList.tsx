import '../styles/TaskList.css'

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    handleToggle: (id: number) => void;
}

function TaskList({tasks, setTasks, handleToggle}: TaskListProps){
    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return(
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'done' : ''}>
                    <div className="task-content">
                        <input
                            type="checkbox"
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                        />
                        <label htmlFor={`task-${task.id}`}>
                            {task.text}
                        </label>
                    </div>
                    <button 
                        onClick={() => handleDelete(task.id)}
                        aria-label={`Delete task: ${task.text}`}
                    >
                        ❌
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList