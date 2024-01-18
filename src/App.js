import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
//247f9422

const API_URL = "http://www.omdbapi.com/?apikey=247f9422";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MLO's MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={"Superman"}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default App;
