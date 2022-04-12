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
    <nav className="navbar navbar-light bg-my-dark">
      <div className="container">
        <Link to="/">
          <img src={LogoBeer} alt="" style={imgStyle} />
        </Link>

        {store.token ? (
          <div className="d-flex ml-auto">
            <Link to="/">
              <button
                className="btn bg-my-orange font-my-dark"
                onClick={() => actions.logout()}
              >
                Log out
              </button>
            </Link>{" "}
            <h6 className="mt-2 ms-3 mb-0 font-my-beige">
              Welcome {store.name}
            </h6>
          </div>
        ) : (
          <h6 className="font-my-beige">Members only!</h6>
        )}
        {/*  */}
      </div>
    </nav>
  );
};

export default Navbar;
