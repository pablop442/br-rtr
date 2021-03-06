import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import BeerCard from "../component/beerCard";
import { numberOfDays } from "./allReviews";
import BeerBackground from "../../img/BeerBackground.jpeg";
import Navbar from "../component/navbar";
import { ImCool2, ImSmile2, ImNeutral2, ImSad2 } from "react-icons/im";

const OneReview = (props) => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState("");
  const [realFileText, setRealFileText] = useState("");

  let textAreaStyle = {
    height: "100px",
  };

  const iconStyle = {
    fontSize: "2em",
    color: "#dbe120",
    margin: "0 5px 5px 0",
  };

  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.9), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max",
    borderRadius: "10px",
    boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  const uploadImage = (selectedImage) => {
    actions.uploadImage(selectedImage);
  };
  const result = store.data;

  const submitReview = (e) => {
    e.preventDefault();
    actions.submitReview(name, result, date, description, rate);
    setName("");
    setDate("");
    setDescription("");
    setRate("");
    history.push("/myreviews");
  };

  return (
    <>
      <div className="container-fluid text-center p-5">
        <Navbar />
        <div className="row font-my-white d-flex justify-content-center mt-3">
          <div className="col-sm-6 col-12 text-center">
            <h1 className="font-my-white mb-3">Review your beer!</h1>
            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control bg-my-dark border-my-gold"
                id="name"
                placeholder="Beer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput">Beer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control bg-my-dark border-my-gold"
                id="floatingDate"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="floatingPassword">Date</label>
            </div>
            <div className="form-control bg-my-dark border-my-gold">
              <button
                className="btn btn-outline-light m-2 primary-btn px-4"
                onClick={(e) => document.getElementById("realFile").click()}
              >
                Choose Image
              </button>
              <span id="custom-text" className="font-my-white ms-3">
                {realFileText ? realFileText : "No image chosen"}
              </span>
              <input
                type="file"
                name="file"
                className="bg-my-dark border-my-gold"
                id="realFile"
                placeholder="Upload an image of your beer"
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                  setRealFileText(e.target.files[0].name);
                }}
              />

              <button
                onClick={(e) => uploadImage(selectedImage)}
                className="btn btn-outline-light m-2 primary-btn px-4"
              >
                Upload Now
              </button>
            </div>
            <img src={result} />{" "}
            <div className="row d-flex justify-content-center my-3 text-start">
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    data-mdb-toggle="rating"
                    checked={
                      rate === `Definitely I'll buy a whole case next time. `
                    }
                    value="Definitely I'll buy a whole case next time."
                    onChange={(e) => setRate(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <ImCool2
                      style={{
                        fontSize: "2em",
                        color: "#2C9B03",
                        margin: "0 5px 5px 0",
                      }}
                    />{" "}
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
                    <ImSmile2
                      style={{
                        fontSize: "2em",
                        color: "#FCD200",
                        margin: "0 5px 5px 0",
                      }}
                    />{" "}
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
                    <ImNeutral2
                      style={{
                        fontSize: "2em",
                        color: "#FC5000",
                        margin: "0 5px 5px 0",
                      }}
                    />{" "}
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
                    <ImSad2
                      style={{
                        fontSize: "2em",
                        color: "#FC0000",
                        margin: "0 5px 5px 0",
                      }}
                    />{" "}
                    Nah. Too many beers to waste my time.
                  </label>
                </div>
              </div>
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
            <button
              className="btn btn-outline-light m-2 primary-btn px-4 mt-4 "
              onClick={submitReview}
            >
              Submit
            </button>
          </div>
          {/* <div className="col-4" style={bgImg}>
            {" "}
            <div className="mt-4 d-flex justify-content-center">
              <BeerCard
                userName={store.name}
                beerName={name}
                description={description}
                rate={rate}
                location={location}
                date={numberOfDays(date)}
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OneReview;
