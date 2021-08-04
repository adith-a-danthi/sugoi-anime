import "./styles.css";
import React, { useState } from "react";
import { animeDB } from "./data";

export default function App() {
  const [selectedGenre, setGenre] = useState("Movies");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📺 Sugoi Anime!</h1>
      <p>Checkout some great anime to watch</p>
      <div>
        {Object.keys(animeDB).map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="card-list">
        {animeDB[selectedGenre].map((anime) => (
          <div key={anime.title} className="card">
            <img
              src={anime.image}
              style={{ borderRadius: "5px" }}
              alt=""
              width="150px"
              height="210px"
            />
            <div style={{ fontSize: "larger", marginTop: "0.5em" }}>
              {" "}
              {anime.title}{" "}
            </div>
            <div style={{ fontSize: "smaller" }}> {anime.score} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
