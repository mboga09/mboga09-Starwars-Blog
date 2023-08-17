import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"
import { useParams } from "react-router-dom"
import "../../styles/home.css";

const Detail = () => {
    const params = useParams()
    const [search, setSearch] = useState({})

    const { store } = useContext(Context)

    const details = () => {

        if (params.nature == "characters") {
            const searchFind = store.characters.find((item) => item._id == params.id)
            setSearch(searchFind)
        } else {
            const searchFind = store.planets.find((item) => item._id == params.id)
            setSearch(searchFind)
        }

    }

    useEffect(() => {
        details()
    }, [])

    return (
        <>
            <div className="container mt-5 p-5 rounded" style={{ background: "rgba(33,37,41,0.5)" }}>
                <div className="row">
                    <div className="col-6">
                        <img className="mx-auto d-block" style={{ height: "500px" }} src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="Card image cap"></img>
                    </div>
                    <div className="col-6">
                        <h1 className="text-white d-flex justify-content-end pb-4">{search?.properties?.name}</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row border-top border-secondary justify-content-center mt-2" style={{ color: "rgb(219,176,82)" }}>
                    <div className="col-2 pt-2 ">Name <br /> {search?.properties?.name} </div>
                    <div className="col-2 pt-2">Birth Year <br /> {search?.properties?.birth_year}</div>
                    <div className="col-2 pt-2">Gender <br /> {search?.properties?.gender}</div>
                    <div className="col-2 pt-2">Height <br /> {search?.properties?.height}</div>
                    <div className="col-2 pt-2">Skin Color <br /> {search?.properties?.skin_color}</div>
                    <div className="col-2 pt-2">Eye Color <br /> {search?.properties?.eye_color}</div>
                </div>
            </div>
        </>
    )
}

export default Detail;