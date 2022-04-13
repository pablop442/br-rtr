import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";

import { Context } from "../store/appContext";

const AllReviews = () => {
  const { store, actions } = useContext(Context);
  const data = store.data;

  useEffect(() => {
    actions.getAllBeers();
  }, []);

  const numberOfDays = (reviewDate) => {
    const today = new Date().getDate();
    const userDate = new Date(reviewDate);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = today - userDate.getDate();
    const diffDays = Math.round(diffTime / oneDay);
    return diffDays;
  };

  // Agregar buscador de cervezas.
  return (
    <div className="container">
      <div className="row">
        {data.map((beer) => (
          <BeerCard
            beerName={beer.name}
            description={beer.description}
            rate={beer.rate}
            location={beer.location}
            date={numberOfDays(beer.date)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
