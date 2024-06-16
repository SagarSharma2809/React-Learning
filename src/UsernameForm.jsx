import { useState } from "react";

function UsernameForm() {

    const [username, setUsername] = useState("");

    function updateUsername(evt) {
        let newUserName = evt.target.value;
        setUsername(newUserName);

    }

    return (
        <div>
            <label htmlFor="username">Enter your username</label>
            <input
                type="text"
                placeholder="username..."
                value={username}
                onChange={updateUsername}
                id="username"
            />

            <button>Submit</button>

        </div>
    )
}

export default UsernameForm;