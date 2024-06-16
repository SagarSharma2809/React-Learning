import { useState } from "react";

export default function InputForm({ changeUsername }) {

    const [profileName, setProfileName] = useState("");


    const handleChange = (event) => {
        setProfileName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        changeUsername(profileName);
        setProfileName("")
    }



    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={profileName} onChange={handleChange} />
                <input type="submit" value="search" style={{ cursor: "pointer" }} />
            </form>


        </>
    )
}