import { useState, useRef, useEffect } from "react"

export default function Stopwatch() {

    const [currentTime, setCurrentTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalID = useRef(null);



    const start = () => {

        if (!isRunning) {
            intervalID.current = setInterval(() => {
                setCurrentTime((prevTime) => {
                    return prevTime + 10;
                })
            }, 10)
        }

        setIsRunning(true);
    }




    const stop = () => {
        if (isRunning) {
            clearInterval(intervalID.current);
            setIsRunning(false);
        }

    }

    const reset = () => {
        clearInterval(intervalID.current);
        setCurrentTime(0);
        setIsRunning(false);
    }

    useEffect(() => {
        return () => clearInterval(intervalID.current);
    }, []);


    return (
        <>
            <h2>{(currentTime / 1000).toFixed(2)}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}