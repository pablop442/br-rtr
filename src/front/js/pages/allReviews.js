import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerCard from "../component/beerCard";
import Navbar from "../component/navbar";
import { Context } from "../store/appContext";

export const numberOfDays = (reviewDate) => {
  const today = new Date().getTime();
  const userDate = new Date(reviewDate).getTime();
  const diffInTime = today - userDate;
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  if (reviewDate) {
    const roundDate = Math.round(diffInDays);
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
    // relateUserBeer();
  }, []);

  const getUserData = (id) => {
    actions.getUserData(id);
  };

  //   console.log(data);

  //   const relateUserBeer = () => {
  //     const userID = data?.map((item) => {
  //       item.reviewer_id;
  //     });
  //     console.log(userID);
  //     actions.getUserData(userID);
  //   };

  // useEffect(()=>{
  // relateUserBeer();
  // }, [])

  // Agregar buscador de cervezas.
  return (
    <div className="container-fluid text-center p-5">
<Navbar />
      <div className="row mt-3">
        {data?.map((beer) => (
          <BeerCard
            key={beer.id}
            beerName={beer.name}
            description={beer.description}
            rate={beer.rate}
            location={beer.location}
            date={numberOfDays(beer.date)}
            userName={store.userName}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
