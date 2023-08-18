import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container"> {/*se pone container para generar margen a los lados*/}
				<Link to="/">
					<span className="navbar-brand mb-0"><img className="mb-2" style={{ height: "90px" }} src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png" ></img></span>
				</Link>

				<div className="ml-auto">
					<div className="dropdown">
						<a className=" border-2 btn btn-outline-light mb-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "14px" }}>
							Favorites
						</a>

						<ul className="dropdown-menu dropdown-menu-end pr-1" aria-labelledby="dropdownMenuLink" style={{ width: "180px" }}>
							<li><a className="dropdown-item" >
								<div className="row">
									<div className="col-10 pt-1">Luke Skywalker</div>
									<div className="btn col-2" style={{ float: "right", border: "none" }}><i className="fa fa-trash" style={{ color: "rgb(0,151,205)" }} /></div>
								</div>
							</a></li>
						</ul>
					</div>
				</div>

			</div>
		</nav>
	);
};
