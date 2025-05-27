import '../styles/TaskList.css'
import PomodoroTimer from './PomodoroTimer'

interface Task {
    id: number;
    text: string;
    completed: boolean;
    usePomodoro: boolean;
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

    const handlePomodoroToggle = (id: number) => {
        setTasks(tasks.map(task => 
          task.id === id ? { ...task, usePomodoro: !task.usePomodoro } : task
        ));
      };
      

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

                        {/* Pomodoro Timer */}
                        <label>
                            <input
                                type="checkbox"
                                checked={task.usePomodoro}
                                onChange={() => handlePomodoroToggle(task.id)}
                                />
                            Use Pomodoro
                        </label>
                    </div>
                    <button 
                        onClick={() => handleDelete(task.id)}
                        aria-label={`Delete task: ${task.text}`}
                    >
                        ❌
                    </button>
                      {/* Conditionally render the Pomodoro timer */}
                      {task.usePomodoro && <PomodoroTimer taskTitle={task.text} />}
                </li>
            ))}
        </ul>
    )
}

export default TaskList