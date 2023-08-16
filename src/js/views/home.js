import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
			<body>
				{/* 
				<h1>La persona se llama {store.persona.nombre}</h1>
				<button onClick={() => {actions.setPersona()}}>Cambiar persona</button>
				*/}
				<div className="container" style={{ background: "black" }}>
					<h3 className="text-light border-bottom pt-4 pb-2">Characters</h3>
					<div className="card mt-4 bg-dark text-white card-style" style={{ width: "18rem" }}>
						<img className="card-img-top" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src="https://cdna.artstation.com/p/assets/images/images/000/583/688/large/tony-foti-star-wars-tcg-endor-luke-by-anthonyfoti-d7v5ojb.jpg?1436604497" alt="Card image cap"></img>
						<div className="card-body">
							<h5 className="card-title">Luke Skywalker</h5>
							<p className="card-text py-2">Gender: male <br /> Hair Color: blond <br /> Eye Color: blue</p>
							<div href="#" className="btn btn-outline-secondary">Learn more!</div>
							<div href="#" className="btn btn-outline-danger" style={{ float: "right", border: "none" }}><i className="fa fa-heart" /></div>
						</div>
					</div>
				</div>
			</body>
		</>
	)
};

