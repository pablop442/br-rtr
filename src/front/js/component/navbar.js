import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import LogoBeer from "../../img/LogoBeer2.png";

const Navbar = () => {
  let imgStyle = {
    height: "50%",
    width: "50%",
  };
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container ">
        <Link to="/">
          <p className="logo-1 mb-0">Beer </p> <p className="logo-2 mb-0">Club</p>
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            {store.token ? (
              <div className="d-flex ml-auto">
                <Link to="/">
                  <button
                    className="btn btn-outline-light secondary-btn px-4"
                    onClick={() => actions.logout()}
                  >
                    Log out
                  </button>
                </Link>{" "}
                <h6 className="mt-2 ms-3 mb-0 font-my-white">
                  Welcome {store.name}
                </h6>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <Link to="/">
                  <h6 className="font-my-white">about us</h6>
                </Link>
                <Link to="/signin">
                  <h6 className="font-my-white ms-4 ">sign in</h6>
                </Link>
              </div>
            )}
            {/*  */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
