import React from "react";
import { Link } from "react-router-dom";
import LogoBeer from "../../img/LogoBeer2.png";

const Navbar = () => {

let imgStyle = {
height: "50%",
width: "50%",
}
	return (
		<nav className="navbar navbar-light bg-my-dark">
			<div className="container">
				<Link to="/">
					<img src={LogoBeer} alt="" style={imgStyle} />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						{/* <button className="btn bg-my-orange font-my-dark">Sign In</button> */}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar