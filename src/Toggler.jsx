import { useState } from "react"
import "./Toggler.css";

export default function Toggler() {
    const [mood, setMood] = useState(true)

    const changeMood = () => {
        setMood(!mood);
    }

    const background = {
        background: mood ? `url("https://images.unsplash.com/photo-1533324268742-60b233802eef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` : `url("https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
    }

    const togglerMovement = {
        position: "relative",
        left: mood ? "40px" : "-40px",
        transition: "all 0.8s ease-in-out"
    }
    return (
        <div className="Toggler" style={background}>

            <p onClick={changeMood} style={togglerMovement}> {mood ? "🌞" : "🌙"} </p>
        </div>

    )
}