import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import BeerCard from "../component/beerCard";
import { numberOfDays } from "./allReviews";
import BeerBackground from "../../img/BeerBackground.jpeg";
import Navbar from "../component/navbar";

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
      <div className="container-fluid text-center p-5">
 <Navbar />
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-12">
            {" "}
            
              {beersArr?.map((beer, i) => (
                <BeerCard
                  key={i}
                  userName={beer.reviewer_id} 
                  beerName={beer.name}
                  description={beer.description}
                  rate={beer.rate}
                  location={beer.location}
                  date={numberOfDays(beer.date)}
                />
              ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
