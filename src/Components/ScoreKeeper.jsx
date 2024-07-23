import { useState } from "react";

export default function ScoreKeeper({ num = 3, target = 5 }) {

    const [scores, setScores] = useState(new Array(num).fill(0)); //passing array as a state


    function changeScore(index) {

        // setScores((prevScore) => {
        //     const copy = [...prevScores];
        //     copy[index] += 1;
        //     return copy;
        // })

        //2. more reacty way
        setScores((prevScores) => {
            //map returns a new array 
            return prevScores.map((score, i) => {
                if (i == index) return score + 1
                return score;

            })
        })
    }

    const resetScores = () => {
        setScores((prevScores) => {
            return prevScores.map((score) => {
                return score = 0;
            })
        })
    }

    return (
        <>
            <h1>Score Keeper</h1>
            <h3>Target: {target}</h3>
            {scores.map((score, index) => {
                return (
                    <div key={index}>
                        <span>Player {index + 1}: {score}</span>
                        <button onClick={() => changeScore(index)}>+</button>
                        {score == target && <span style={{ fontWeight: "bold" }}>WINNER</span>}
                    </div>
                )
            })}
            <button onClick={resetScores}>Reset</button>
        </>
    )
}