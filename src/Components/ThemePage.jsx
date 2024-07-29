import { ThemeContext } from '../Context';
import { useState } from 'react';


import ToggleButton from "./ToggleButton"



export default function ThemePage() {


    const [theme, setTheme] = useState(true);

    const changeTheme = (mode) => {
        setTheme(mode)
    }

    const styles = {
        backgroundColor: theme ? "white" : "black",
        color: theme ? "black" : "white",
        height: "100vh",
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const imageLink = theme ? "https://i.pinimg.com/736x/77/5e/40/775e400cccf234d1c8cf3c2b8b61c45a.jpg" : "https://qph.cf2.quoracdn.net/main-qimg-22bb7ece67cff9b187042f62338fe9a1-lq"


    return (
        <div style={styles}>
            <ThemeContext.Provider value={theme}>

                <div style={{ position: 'absolute', top: '0', right: '0' }}>
                    <ToggleButton changeTheme={changeTheme} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <img src={imageLink} alt="" style={{ width: '400px', height: '400px' }} />

                    <div> {theme ? "Dattebayo!" : "..."} </div>
                </div>

            </ThemeContext.Provider>

        </div>
    )
}