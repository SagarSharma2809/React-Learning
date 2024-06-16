import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import axios from "axios";
import saveAs from 'file-saver'

const baseURL = "https://pixabay.com/api/?key=44393151-037e8c613ec9f246837576fbf&";

export default function ImageLoader() {
    const [query, setQuery] = useState("cat");
    const [image, setImage] = useState({ data: null, isLoading: true, error: null });
    const [prevImage, setPrevImage] = useState(null);

    const setUser = (profileName) => {
        setQuery(profileName);
    };

    const downloadImage = () => {
        saveAs(image.data.largeImageURL, 'image.jpg');
    }

    useEffect(() => {

        async function fetchImage() {
            try {
                setImage({ data: null, isLoading: true, error: null });
                const response = await axios.get(`${baseURL}q=${query}`);
                const newImage = response.data.hits[0];
                if (newImage) {
                    setPrevImage(image.data); // Store the previous image
                    setImage({ data: newImage, isLoading: false, error: null });
                } else {
                    setImage({ data: null, isLoading: false, error: "No image found, refresh" });
                }
            } catch (error) {
                setImage({ data: null, isLoading: false, error: "Error fetching data" });
            }
        }
        fetchImage();


    }, [query]); // useEffect called when query state changes

    useEffect(() => {
        if (prevImage) {
            const timer = setTimeout(() => {
                setPrevImage(null);
            }, 1000); // Match this time with the CSS transition time
            return () => clearTimeout(timer);
        }
    }, [image.data]);

    if (image.isLoading) return <i className="loader">Loading...</i>;
    if (image.error) return <p>{image.error}</p>;

    const backgroundImageStyle = {
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image.data.largeImageURL})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "opacity 2s ease-in-out",
        opacity: prevImage ? 0 : 1 // Initial opacity
    };

    const fadeStyle = {
        opacity: 1,
        transition: "opacity 1s ease-in-out",
    };

    return (
        <>
            <div style={backgroundImageStyle}>
                <h1 style={{ backgroundColor: "white", width: "60%" }}>Find your Wallpaper</h1>
                <InputForm changeUsername={setUser} />
                {prevImage && (
                    <div
                        style={{
                            ...backgroundImageStyle,
                            backgroundImage: `url(${prevImage.largeImageURL})`,
                            ...fadeStyle
                        }}
                    />
                )}
                <button onClick={downloadImage}>Download</button>
            </div>
        </>
    );
}
