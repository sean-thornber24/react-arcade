import React from "react";
import { Route, Routes } from "react-router-dom";
import Snap from "./components/Snap";
import { Link } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import NoughtsCrosses from "./components/NoughtsCrosses";
import "./app.css"

const About = () => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>

const App = () => {
    return (
        <div className="App">

            <div id="nav-bar">
                <Link className="nav-element" to="">Home</Link>
                <Link className="nav-element" to="snap">Snap</Link>
                <Link className="nav-element" to="noughts-and-crosses">Noughts and Crosses</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/snap" element={<Snap />} />
                <Route path="/noughts-and-crosses" element={<NoughtsCrosses />} />
            </Routes>
        </div>
    )
}

export default App