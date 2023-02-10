import ReactDOM from 'react-dom/client';
import "./index.css"
import Snap from "./components/Snap"
import { BrowserRouter } from "react-router-dom"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <  App />
    </BrowserRouter>);

export default App;