import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";

import { Context } from "../store/appContext";

const AllReviews = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        <BeerCard
          userName="Pablo442"
          beerName="Turia"
          description="Exellent beer"
          rate="5/5"
          location="Location"
          date="2"
        />
        <BeerCard
          userName="Pablo442"
          beerName="Turia"
          description="Exellent beer"
          rate="5/5"
          location="Location"
          date="2"
        />
        <BeerCard
          userName="Pablo442"
          beerName="Turia"
          description="Exellent beer"
          rate="5/5"
          location="Location"
          date="2"
        />
      </div>
    </div>
  );
};

export default AllReviews;
