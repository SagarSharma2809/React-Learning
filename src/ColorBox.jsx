import { useState } from "react";
import "./ColorBox.css"

export default function ColorBox({ colors }) {

    //we have 7 colors
    //generate a random number from 0-6, 6 faces of cube
    let randomNum = Math.floor(Math.random() * 6);

    const [num, setNum] = useState(randomNum);

    const changeColor = () => {
        randomNum = Math.floor(Math.random() * 6);
        setNum(randomNum);
    }

    const styles = {
        backgroundColor: colors[num],


    }

    return (
        <div className="ColorBox">
            <button onClick={changeColor} style={styles}></button>
        </div>
    )
}