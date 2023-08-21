import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteTask } from "/workspaces/mboga09-Starwars-Blog/src/js/store/favorites.js";



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

							<>{ //recordar agregar siempre el elemento key para .map
								favoritesList.map((item, index) => {
									{
										return <li>
											<div className="row">
												<div className="col-10 dropdown-item task" key={index}>{item}</div>
												<div className="col-2">
													<button className="buttonStyle" type="button" onClick={e => { deleteTask(index) }}>
													<i className="fa fa-trash"></i>
													</button></div>
											</div>
										</li>
									}
								})
							}</>

						</ul>
					</div>
				</div>

			</div>

		</nav>
	);
};
