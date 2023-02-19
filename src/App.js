import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
import Movies from "../src/components/movies";
import Categories from "./components/Categories";

const App = () => {
  const [movies, setMovies] = useState(data);

  const filterMovies = (category) => {
    if (category === "All") {
      setMovies(data);
    } else {
      const newCourses = data.filter((course) => course.category === category);
      setMovies(newCourses);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h1>Marvel</h1>
          <div className='underline'></div>
          <h2>Movies Menu</h2>
        </div>
        <Categories movies={movies} filterMovies={filterMovies} />
        <Movies movies={movies} />
      </section>
    </main>
  );
};

export default App;
