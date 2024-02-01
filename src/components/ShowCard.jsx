import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const ShowCard = ({ show }) => {
    var image = show.show.image;
    var rating = show.show.rating.average;
    var prem = show.show.premiered;
    const genre = show.show.genres;
    const { setSelectShow } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="showCard">
            <div className="left-container">
                <div className="showImg">
                    {!image ? (
                        <img
                            src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                            alt=""
                        />
                    ) : (
                        <img
                            src={image.medium}
                            alt=""
                        />
                    )}
                </div>
                <button
                    className="more-btn"
                    onClick={() => {
                        navigate("/details");
                        setSelectShow(show.show);
                    }}
                >
                    View details
                </button>
            </div>

            <div className="info-container">
                <div
                    className="showName"
                    style={{
                        padding: "5px 5px",
                        borderRadius: "10px",
                        border: "2px dotted white",
                    }}
                >
                    {show.show.name}
                </div>

                <div className="showInfo">
                    {genre.map((item, key) => (
                        <span>{item}</span>
                    ))}
                </div>
                <span
                    style={{
                        padding: "5px 5px",
                        backgroundColor: "#aad9bb",
                        borderRadius: "10px",
                    }}
                >
                    {show.show.language}
                </span>
                {rating && (
                    <span
                        style={{
                            padding: "5px 5px",
                            backgroundColor: "#aad9bb",
                            borderRadius: "10px",
                        }}
                    >
                        Rating: {rating}
                    </span>
                )}
                {prem && (
                    <span
                        style={{
                            padding: "5px 5px",
                            backgroundColor: "#aad9bb",
                            borderRadius: "10px",
                        }}
                    >
                        Premiered: {prem.substring(0, 4)}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ShowCard;
