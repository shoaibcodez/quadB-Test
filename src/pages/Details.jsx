import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
const Details = () => {
    const navigate = useNavigate();
    const { selectShow } = useContext(AppContext);
    var image = selectShow.image;
    const [showForm, setShowForm] = useState(false);

    console.log(selectShow);

    return (
        <div className="details">
            <button
                className="more-btn"
                onClick={() => navigate("/")}
            >
                Back
            </button>
            <div className="deatails-container">
                <div className="img-container">
                    {!image ? (
                        <img
                            src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                            alt=""
                        />
                    ) : (
                        <img
                            src={image.original}
                            alt=""
                        />
                    )}
                    <h2>{selectShow.name}</h2>
                </div>
                <div>
                    <div
                        className="summary"
                        dangerouslySetInnerHTML={{ __html: selectShow.summary }}
                    ></div>
                    {showForm === false && (
                        <button
                            className="more-btn"
                            onClick={() => setShowForm(true)}
                        >
                            Book Tickets
                        </button>
                    )}
                    {showForm && <Form />}
                </div>
            </div>
        </div>
    );
};

export default Details;
