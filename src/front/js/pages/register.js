import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../component/navbar";
import Blob from "../component/blob";

const Register = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [newUserMail, setNewUserMail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  const createUser = (e) => {
    actions.createNewUser(name, last_name, newUserMail, newUserPassword);
    setName("");
    setNewUserMail("");
    setLast_Name("");
    setNewUserPassword("");
    alert("Welcome to the club! Please sign in.");
  };
  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.5), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "100%",
    borderRadius: "10px",
    // boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  if (token && token != "" && token != undefined) {
    history.push("/members");
  }

  return (
    <>
      <div className="container-fluid text-center p-5 position-relative">
        <Navbar />

        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-md-6 col-12 ">
            <h1 className="font-my-white mb-3">Join The Club</h1>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  id="inputName"
                  className="form-control bg-my-dark"
                  aria-describedby="nameInput"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-6">
                {" "}
                <input
                  type="text"
                  id="inputLastname"
                  className="form-control bg-my-dark"
                  aria-describedby="lastnameInput"
                  placeholder="Lastname"
                  value={last_name}
                  onChange={(e) => setLast_Name(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="email"
                  id="inputUser"
                  className="form-control bg-my-dark mt-4"
                  aria-describedby="emailInput"
                  placeholder="Email"
                  value={newUserMail}
                  onChange={(e) => setNewUserMail(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control bg-my-dark mt-4 "
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <Link to="/">
                <button className="btn btn-outline-light m-2 secondary-btn px-4">Back</button>
              </Link>{" "}
              <button
                className="btn btn-outline-light m-2 primary-btn px-4"
                onClick={createUser}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
