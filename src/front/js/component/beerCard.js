import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoBeer from "../../img/LogoBeer2.png";

const BeerCard = (props) => {
  return (
    <>
      <div className="col-sm-4 col-12 my-3">
        <div
          className="card bg-beer-effect mb-5 rounded-3 h-100"
          onLoad={props.onLoad}
        >
          <div className="card-header font-my-white fst-italic border-0 text-end">
            {props.userName} tried this beer {props.date} days ago.
          </div>
          <div className="card-body font-my-white text-start">
            <div className="row">
              <div className="col-12">
                <h3 className="card-title">
                  <h6 className="font-my-yellow fst-italic">Beer name:</h6>{" "}
                  {props.beerName}
                </h3>
                <h5 className="card-text  text-start">
                  <h6 className="font-my-yellow fst-italic">Notes:</h6>{" "}
                  {props.description}
                </h5>
                <h5 className="card-text text-start mb-3">
                  <h6 className="font-my-yellow fst-italic ">Veredict:</h6>{" "}
                  {props.rate}
                </h5>
              </div>
            </div>

    

            <div className="row">
              <div className="col-12">
                <img
                  src={props.location}
                  alt="beer"
                  className="beer-img rounded float-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BeerCard.propTypes = {
  userName: PropTypes.string,
  beerName: PropTypes.string,
  description: PropTypes.string,
  rate: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  word: PropTypes.string,
  onLoad: PropTypes.func,
};

export default BeerCard;
