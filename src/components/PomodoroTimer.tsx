import { useState, useEffect } from "react";

function PomodoroTimer({ taskTitle }: { taskTitle: string }) {
    const [timeLeft, setTimeLeft] = useState(1500)
    const [isRunning, setisRunning] = useState(false)

    useEffect(() => {
        if(!isRunning) return; 

        const interval = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    const handleStart = () => { setisRunning(true)}
    const handlePause = () => {setisRunning(false)}
    const handleReset = () => {
        setisRunning(false)
        setTimeLeft(1500)
    }

    return (
        <div className="pomodoro-timer">
            <h4>Pomodoro Timer for: {taskTitle}</h4>
            <h4>{formattedTime}</h4>
            <div className="pomodor-buttons">
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default PomodoroTimer;