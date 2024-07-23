import Shoe from "./Shoe";
import { properties } from '../Data/ShoeData.js'

function ShoeList() {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                {properties.map((i) => <Shoe key={i.id} {...i} />)}
            </div>
        </>
    )
}

export default ShoeList;