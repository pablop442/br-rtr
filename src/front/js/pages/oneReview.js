import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import * as mdb from "mdb-ui-kit";

const OneReview = (props) => {
  const { store, actions } = useContext(Context);

  let textAreaStyle = {
    height: "100px",
  };
  return (
    <>
      <div className="container">
        <div className="row font-my-beige d-flex justify-content-center">
          <div className="col-6">
            <div className="form-floating mb-3 ">
              <input
                type="text"
                className="form-control bg-my-dark border-my-gold"
                id="name"
                placeholder="Beer Name"
              />
              <label for="floatingInput">Beer Name</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control bg-my-dark border-my-gold"
                id="floatingPassword"
                placeholder="Password"
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    It's OK
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    data-mdb-toggle="rating"
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
              ></textarea>
              <label htmlFor="floatingTextarea">Describe your beer</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneReview;
