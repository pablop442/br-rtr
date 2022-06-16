import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Context } from "../store/appContext";
import {
  IoLibraryOutline,
  IoFlashlightOutline,
  IoBeerOutline,
} from "react-icons/io5";
import Navbar from "../component/navbar";

const MemberZone = () => {
  const { store, actions } = useContext(Context);

  const iconStyle = {
    fontSize: "2em",
    float: "left",
    color: "#fffff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const token = sessionStorage.getItem("jwt-token");

  return (
    <>
      <div className="container-fluid text-center p-5">
        <Navbar />
        <div className="row mt-4 d-flex justify-content-center">
          <h1 className="font-my-white mb-3">
            Welcome to Beer Club {store.name}
          </h1>
          <div className="row mt-3">
            <div className="col-sm-4 col-12 my-2 ">
              <div className="circle">
                <IoBeerOutline style={iconStyle} />
              </div>
              <h4 className="font-my-white">Make a Review</h4>
              <p className="font-my-white">
                What's the last beer you had? Add it to the Club's database
              </p>
              <Link to="/makereview">
                <button className="btn btn-outline-light primary-btn">
                  GO!
                </button>
              </Link>
              <div className="line mt-3 d-block d-sm-none"></div>
            </div>
            <div className="col-sm-4 col-12 my-2">
              <div className="circle">
                <IoFlashlightOutline style={iconStyle} />
              </div>
              <h4 className="font-my-white">Check All Reviews</h4>
              <p className="font-my-white">
                Discover all the beers that the Club's members are drinking
              </p>
              <Link to="/allreviews">
                <button className="btn btn-outline-light primary-btn">
                  GO!
                </button>
              </Link>
<div className="line mt-3 d-block d-sm-none"></div>
            </div>
            <div className="col-sm-4 col-12 my-2">
              <div className="circle">
                <IoLibraryOutline style={iconStyle} />
              </div>
              <h4 className="font-my-white">My Reviews</h4>
              <p className="font-my-white">
                Want to buy again that epic beer you had days ago? Check it out
              </p>
              <Link to="/myreviews">
                <button className="btn btn-outline-light primary-btn">
                  GO!
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberZone;
