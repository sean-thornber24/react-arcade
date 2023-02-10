import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const { id, name } = useParams()
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    return (
        <div>
            This is blog with ID: {id}
            This is blog named: {name}

            <button onClick={goHome}>Go home</button>
        </div>
    )
}

export default Blog