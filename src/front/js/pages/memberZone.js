import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Context } from "../store/appContext";

const MemberZone = () => {
  const { store, actions } = useContext(Context);
  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.9), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
    borderRadius: "10px",
    boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  return (
    <>
      <div className="container text-center mt-5 p-5" style={bgImg}>
        <div className="row mt-4 d-flex justify-content-center">
          <h1 className="font-my-gold">
            Welcome to 'Wheat and Hop' our own exclusive beer club
          </h1>
          <div className="col-2 ">
            <Link to="/allreviews">
              {" "}
              <button className="btn bg-my-orange font-my-dark mt-4">
                Check All Reviews
              </button>
            </Link>
          </div>

          <div className="col-2 ">
            <Link to="/makereview">
              <button className="btn bg-my-orange font-my-dark mt-4">
                Make a Review
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberZone;
