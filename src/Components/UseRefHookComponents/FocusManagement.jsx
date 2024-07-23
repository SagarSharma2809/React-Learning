import { useRef, useState } from "react"

export default function FocusManagement() {

    const [count, setCount] = useState(0);

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    const inputRef = useRef();




    const handleClick = () => {

        const inputRefs = [inputRef1, inputRef2, inputRef3];
        inputRefs[count].current.focus();

        setCount((prevCount) => (prevCount + 1) % 3);
    }

    const refocus = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <>
            <input type="text" placeholder="first..." ref={inputRef1} />
            <input type="text" placeholder="second..." ref={inputRef2} />
            <input type="text" placeholder="third..." ref={inputRef3} />
            <button onClick={handleClick}>Next</button>

            <br />
            <input type="text" placeholder="Enter your name..." ref={inputRef} />
            <button onClick={refocus}>Click me</button>
        </>
    )
}

