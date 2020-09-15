import React, { useState, useEffect } from 'react';
import './App.css';

const FilmDetail = ({ match }) => {

  const [film, setFilm] = useState({})

  const fetchItem = async () => {
      const fetchFilm = await fetch(`https://www.omdbapi.com/?apikey=23947ab0&i=${match.params.id}`)
      const film = await fetchFilm.json();
      setFilm(film)
      console.log(film)
  }


  useEffect(() => {
      fetchItem()
  }, [])

  return (
    <div >
        <h1>{film.Title}</h1>
    </div>
  );
}

export default FilmDetail;