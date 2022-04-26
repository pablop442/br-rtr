import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import BeerCard from "../component/beerCard";
import { numberOfDays } from "./allReviews";
import BeerBackground from "../../img/BeerBackground.jpeg";

const MyReviews = () => {
  const { store, actions } = useContext(Context);
  const beersArr = store.beersArr;

  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.9), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max",
    borderRadius: "10px",
    boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  useEffect(() => {
    actions.getUserBeer();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row font-my-beige d-flex justify-content-center">
          <div className="col-4" style={bgImg}>
            {" "}
            <div className="mt-4 d-flex justify-content-center">
              {beersArr?.map((beer, i) => (
                <BeerCard
                  key={i}
                  userName={beer.reviewer_id}
                  beerName={beer.beerName}
                  description={beer.description}
                  rate={beer.rate}
                  location={beer.location}
                  date={numberOfDays(beer.date)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
