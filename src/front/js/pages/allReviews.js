import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";

import { Context } from "../store/appContext";

export const numberOfDays = (reviewDate) => {
  const today = new Date().getDate();
  const userDate = new Date(reviewDate);
  const diffDate = today - userDate.getDate();
  if (reviewDate) {
    const roundDate = Math.round(diffDate);
    return roundDate;
  } else {
    return "";
  }
};

const AllReviews = () => {
  const { store, actions } = useContext(Context);
  const data = store.data;

  useEffect(() => {
    actions.getAllBeers();
  }, []);

  //  useEffect(() => {
  //     actions.getUserData(data.reviewer_id);
  //   }, []);

  // Agregar buscador de cervezas.
  return (
    <div className="container">
      <div className="row">
        {data?.map((beer) => (
          <BeerCard
            key={beer.id}
            userName={beer.id}
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
