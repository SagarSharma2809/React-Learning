const Shoe = ({ name, rating, price, url }) => {
    const styles = {
        margin: "1em",
        backgroundColor: "#06cdef",
        width: "20%",
        padding: "1em",
        borderRadius: "0.5em"

    }
    return (
        <div style={styles}>
            <img src={url} alt={name} style={{ width: "150px", height: "120px", borderRadius: "0.5em" }} />
            <h3 style={{ color: "white" }}>{name}</h3>
            <h3 style={{ color: "blue" }}>{rating}/5</h3>
            <p style={{ color: "darkblue" }}>Rs.{price}</p>

        </div>
    )
}

export default Shoe;