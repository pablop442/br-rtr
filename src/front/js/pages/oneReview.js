import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import BeerCard from "../component/beerCard";

const OneReview = (props) => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const history = useHistory();

  let textAreaStyle = {
    height: "100px",
  };

  const submitReview = (e) => {
    e.preventDefault();
    actions.submitReview(name, location, date, description, rate);
    setName("");
    setDate("");
    setDescription("");
    setRate("");
    setLocation("");
    history.push("/members");
  };
  return (
    <>
      <div className="container">
        <div className="row font-my-beige d-flex justify-content-center">
          <div className="col-6 text-center">
            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control bg-my-dark border-my-gold"
                id="name"
                placeholder="Beer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="floatingInput">Beer Name</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control bg-my-dark border-my-gold"
                id="floatingDate"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label for="floatingPassword">Date</label>
            </div>
            <div className="row d-flex justify-content-center my-3">
              <div className="col-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    data-mdb-toggle="rating"
                    checked={
                      rate === "Definitely I'll buy a whole case next time."
                    }
                    value="Definitely I'll buy a whole case next time."
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Definitely I'll buy a whole case next time.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    data-mdb-toggle="rating"
                    checked={rate === "I could buy a couple more again."}
                    value="I could buy a couple more again."
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    I could buy a couple more again.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked={rate === "It's OK."}
                    value="It's OK."
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    It's OK.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    data-mdb-toggle="rating"
                    checked={rate === "Nah. Too many beers to waste my time."}
                    value="Nah. Too many beers to waste my time."
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    Nah. Too many beers to waste my time.
                  </label>
                </div>
              </div>{" "}
            </div>

            <div className="form-floating">
              <textarea
                className="form-control bg-my-dark border-my-gold"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={textAreaStyle}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea">Describe your beer</label>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <BeerCard
                userName={store.name}
                beerName={name}
                description={description}
                rate={rate}
                location={location}
                date={date}
              />
            </div>

            <button
              className="btn bg-my-orange font-my-dark mt-4"
              onClick={submitReview}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneReview;
