import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoBeer from "../../img/LogoBeer2.png";

const BeerCard = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="card bg-beer-effect mb-5 rounded-3">
          <div className="card-header font-my-grey fst-italic">{props.userName} was drinking a cold one {props.date} days ago.</div>
          <div className="card-body font-my-dark">
            <div className="row">
              <div className="col-6">

                <h3 className="card-title"><h6 className="font-my-grey fst-italic">The beer:</h6> {props.beerName}</h3>
                <h5 className="card-text mb-2"><h6 className="font-my-grey fst-italic">The description:</h6> {props.description}</h5>
              </div>
              <div className="col">
                <img src="https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=150" className="rounded float-end" />
              </div>
            </div>

            {/* Insert input */}
            <h5 className="card-text"><h6 className="font-my-grey fst-italic">The veredict:</h6> {props.rate}</h5>
            <p className="card-text"><h6 className="font-my-grey fst-italic">The store:</h6>{props.location}</p>
            <p className="card-text">{props.word}</p>
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
};

export default BeerCard;
