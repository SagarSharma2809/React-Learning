export default function ScoreKeeper({ num, target }) {

    const players = new Array(num).fill(0);
    console.log(players);
    return (
        <>
            {players.map((player, index) => {
                return (
                    <div>
                        <span>Player {index + 1}: {player}</span>
                        <button>+</button>
                    </div>
                )
            })}
        </>
    )
}