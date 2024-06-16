import ColorBox from "./ColorBox"
import "./BigBox.css"

export default function BigBox({ sides }) {

    const colors = ["cyan", "blue", "green", "yellow", "red", "orange"]
    //7 colors

    const boxes = [];
    for (let i = 0; i < sides * sides; i++) {
        boxes.push(<ColorBox colors={colors} />)
    }
    return (
        <div className="BigBox">
            {boxes}

        </div>
    )
}


{/* <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div>
            <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div>
            <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div>
            <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div>
            <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div> */}