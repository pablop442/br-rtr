import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import BeerBackground from "../../img/BeerBackground.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../component/navbar";

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
    background: `linear-gradient(0deg, rgba(40, 27, 19, 0.5), rgba(11, 11, 18, 0.9)), url(${BeerBackground})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "100%",
  
    // boxShadow: "0 0 8px 8px #0b0b12 inset",
  };

  if (token && token != "" && token != undefined) {
    history.push("/members");
  }

  return (
    <>
      <div className="container-fluid text-center p-5" style={bgImg}>
       <Navbar />
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-12 col-sm-10 position-absolute top-50 start-50 translate-middle">
<h1 className="font-my-white homepage-text">“A fine beer may be judged with only one sip, but it’s better to be thoroughly sure.” –<i>Czech Proverb</i> </h1>
            <Link to="/register">
              <button type="button" class="btn btn-outline-light m-3 btn-lg fs-4 primary-btn px-5">
                Register
              </button>
            </Link>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
