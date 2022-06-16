import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../component/navbar";

const SignIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  const handleSignIn = (e) => {
    actions.signIn(email, password);
    setEmail("");
    setPassword("");
  };

  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.5), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "100%",
    borderRadius: "10px",
  };

  if (token && token != "" && token != undefined) {
    history.push("/members");
  }

  return (
    <>
      <div className="container-fluid text-center p-5">
        <Navbar />
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-4 ">
            <h1 className="font-my-white mb-3">Members Zone</h1>
            <input
              type="email"
              id="inputUser"
              className="form-control bg-my-dark mt-4 "
              aria-describedby="emailInput"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="inputPassword5"
              className="form-control  bg-my-dark mt-4 "
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-3">
              {" "}
              <Link to="/">
                <button className="btn btn-outline-light m-2 secondary-btn px-4">
                  Back
                </button>
              </Link>{" "}
              <button
                className="btn btn-outline-light m-2 primary-btn px-4"
                onClick={handleSignIn}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
