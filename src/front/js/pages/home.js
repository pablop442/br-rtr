import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);
  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.9), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
    borderRadius: "10px",
    boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  return (
    <>
      {" "}
      <div className="container text-center mt-5 p-5" style={bgImg}>
        <div className="row mt-4">
          <div className="col-4 ">
            <h1 className="font-my-gold ">Join The Club</h1>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  aria-describedby="nameInput"
                  placeholder="Name "
                />
              </div>
              <div className="col-6">
                {" "}
                <input
                  type="text"
                  id="inputLastname"
                  className="form-control"
                  aria-describedby="lastnameInput"
                  placeholder="Lastname"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <input
                  type="email"
                  id="inputUser"
                  className="form-control mt-4"
                  aria-describedby="emailInput"
                  placeholder="User"
                />
              </div>
              <div className="col-6">
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control mt-4"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                />
              </div>
            </div>
            <Link to="/members">
              <button className="btn bg-my-orange font-my-dark mt-4">
                Join
              </button>
            </Link>
          </div>
          <div className="col-4 "></div>
          <div className="col-4 ">
            <h1 className="font-my-gold">Members Zone</h1>
            <input
              type="email"
              id="inputUser"
              className="form-control"
              aria-describedby="emailInput"
              placeholder="User"
            />

            <input
              type="password"
              id="inputPassword5"
              className="form-control mt-4"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
            />
            <Link to="/allreviews">
              <button className="btn bg-my-orange font-my-dark mt-4">
                Enter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
