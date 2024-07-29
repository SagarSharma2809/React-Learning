import { useContext } from "react"
import { ThemeContext } from "../Context"

export default function ToggleButton({ changeTheme }) {

    const theme = useContext(ThemeContext)

    const handleChange = () => {
        changeTheme(!theme);
    }

    const buttonStyles = {
        color: theme ? "black" : "white",
        backgroundColor: theme ? "white" : "black",
        border: theme ? "1px solid black" : "2px solid white"
    }

    return (
        <>
            <button onClick={handleChange} style={buttonStyles}>{theme ? "🌞" : "🌙"}</button>
        </>
    )
}