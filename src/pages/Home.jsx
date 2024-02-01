import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import ShowCard from "../components/ShowCard";

const Home = () => {
    const { details } = useContext(AppContext);
    return (
        <div className="container">
            <h1 className="title">ShowZone</h1>
            <div className="showList">
                {details.map((show, key) => (
                    <ShowCard
                        show={show}
                        key={show.show.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
