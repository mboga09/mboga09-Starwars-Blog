import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container"> {/*se pone container para generar margen a los lados*/}
				<Link to="/">
					<span className="navbar-brand mb-0"><img style={{ height: "90px" }} src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png" ></img></span>
				</Link>
				<Link to="/demo">
					<div className="ml-auto">
						<div className="dropdown">
							<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</a>

							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};
