import "./index.css";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

function App() {
    const [details, setDetails] = useState([]);
    const [selectShow, setSelectShow] = useState({});

    const fetchDetails = () => {
        axios
            .get("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchDetails();
    }, []);
    console.log(details);
    return (
        <div className="App">
            <AppContext.Provider
                value={{ details, setDetails, selectShow, setSelectShow }}
            >
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/details"
                            element={<Details />}
                        />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
