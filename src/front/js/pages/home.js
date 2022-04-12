import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [newUserMail, setNewUserMail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  const handleSignIn = (e) => {
    actions.signIn(email, password);
    setEmail("");
    setPassword("");
  };
  const createUser = (e) => {
    actions.createNewUser(name, last_name, newUserMail, newUserPassword);
    setName("");
    setNewUserMail("");
    setLast_Name("");
    setNewUserPassword("");
    alert("Welcome to the club! Please sign in.");
  };
  let bgImg = {
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.9), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
    borderRadius: "10px",
    boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  if (token && token != "" && token != undefined) {
    history.push("/members");
  }

  return (
    <>
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
                  className="form-control"
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
                  className="form-control mt-4"
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
                  className="form-control mt-4"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn bg-my-orange font-my-dark mt-4"
              onClick={createUser}
            >
              Join
            </button>
          </div>
          <div className="col-4 "></div>
          <div className="col-4 ">
            <h1 className="font-my-gold">Members Zone</h1>
            <input
              type="email"
              id="inputUser"
              className="form-control"
              aria-describedby="emailInput"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="inputPassword5"
              className="form-control mt-4"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn bg-my-orange font-my-dark mt-4"
              onClick={handleSignIn}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
