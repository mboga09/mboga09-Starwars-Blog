import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from 'react-router-dom'

export const Home = () => {
	const { store, actions } = useContext(Context)

	const [listaPersonas, setListaPersonas] = useState([])
	//para traernos la info de los personajes
	useEffect(() => {
		const cargaData = async () => {
			let { responseObj, status } = await actions.fetchGenerico("/people/")
			if (status) {
				console.log("El valor de responseObj", responseObj)
			}
		}
		cargaData()
	}, [])

	return (
		<>
			<body>
				{/* 
				<h1>La persona se llama {store.persona.nombre}</h1>
				<button onClick={() => {actions.setPersona()}}>Cambiar persona</button>
				*/}
				<div className="container pb-4" style={{ background: "black" }}>
					<h3 className="text-light border-bottom pt-4 pb-2">Characters</h3>

					<div className="my-carousel">
						{store.characters.map((item) => {
							return (
								<div className="card mt-4 bg-dark text-white card-style" style={{ width: "18rem" }}>
									<img className="card-img-top" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="Card image cap"></img>
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p className="card-text py-2">Gender: {item.properties.gender} <br /> Hair Color: {item.properties.hair_color} <br /> Eye Color: {item.properties.eye_color}</p>
										<Link to={`/characters/${item._id}`} className="btn btn-outline-secondary">Learn more!</Link>
										<div href="#" className="btn btn-outline-danger" style={{ float: "right", border: "none" }}><i className="fa fa-heart" /></div>
									</div>
								</div>
							)
						})}

					</div>
				</div>

				<div className="container pb-4" style={{ background: "black" }}>
					<h3 className="text-light border-bottom pt-4 pb-2">Planets</h3>

					<div className="my-carousel">
						{store.planets.map((item) => {
							return (
								<div className="card mt-4 bg-dark text-white card-style" style={{ width: "18rem" }}>
									<img className="card-img-top" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="Card image cap"></img>
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p className="card-text py-2">Population: {item.properties.population} <br /> Terrain: {item.properties.terrain}</p>
										<Link to={`/planets/${item._id}`} href="#" className="btn btn-outline-secondary">Learn more!</Link>
										<div href="#" className="btn btn-outline-danger" style={{ float: "right", border: "none" }}><i className="fa fa-heart" /></div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</body>
		</>
	)
};

