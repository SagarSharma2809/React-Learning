import ColorBox from "./ColorBox"
import "./BigBox.css"

export default function BigBox() {

    const colors = ["#FF5733", "#3498DB", "#1ABC9C", "#9B59B6", "#E74C3C", "#27AE60", "#F1C40F"]
    //7 colors
    return (
        <div className="BigBox">
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
            </div>
            <div className="boxRow">
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
                <ColorBox colors={colors} />
            </div>

        </div>
    )
}