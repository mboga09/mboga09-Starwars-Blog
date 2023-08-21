import React, { useState } from "react";

export const Navbar = () => {
  let [favoritesList, updatedFavList] = useState([]);

  const addFavorite = (event) => {
    favoritesList.push(event)
    let newFavorite = favoritesList.slice()
    updatedFavList(newFavorite);
    console.log(favoritesList)
  };

  const deleteTask = (index) => {
    let arregloTemporal = favoritesList.slice() //copiar el estado lista
    arregloTemporal = arregloTemporal.filter((item, index2) => { return index2 != index }) //devuelve todos los elementos con indice diferente al del elemento al que se le dio click
    updatedFavList(arregloTemporal)
  };
};


export { addFavorite, deleteTask };