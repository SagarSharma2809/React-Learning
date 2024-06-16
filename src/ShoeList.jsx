import Shoe from "./Shoe";

function ShoeList({ properties }) {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                {properties.map((i) => <Shoe key={i.id} {...i} />)}
            </div>
        </>
    )
}

export default ShoeList;