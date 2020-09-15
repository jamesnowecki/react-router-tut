import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom"

const Shop = () => {

  const [data, updateData] = useState([])

  const fetchItems = async () => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=23947ab0&s=alien`); 
    const films = await data.json();
    updateData(films.Search)
    console.log(films.Search)
  }


  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <div >
      {data.map(film => (
          <h1 key={film.imdbID}>
            <Link to={`/shop/${film.imdbID}`}>
              {film.Title}
            </Link>
          </h1>
      ))}
    </div>
  );
}

export default Shop;
