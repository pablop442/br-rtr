import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BeerCard = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="card border-my-gold bg-transparent mb-3">
          <div className="card-header bg-transparent border-my-gold font-my-beige">
            Review by {props.userName}
          </div>
          <div className="card-body font-my-beige">
            <h5 className="card-title">{props.beerName}</h5>
            <p className="card-text">{props.description}</p>
            {/* Insert input */}
            <p className="card-text">{props.rate}</p>
            <p className="card-text">{props.location}</p>
            <p className="card-text">{props.word}</p>
          </div>
          <div className="card-footer bg-transparent border-my-gold font-my-beige">
            {props.date} days ago
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
