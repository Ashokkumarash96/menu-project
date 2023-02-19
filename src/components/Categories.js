import React from "react";

const Categories = ({ movies, filterMovies }) => {
  let categories = movies.map((movie) => movie.category);
  categories = ["All", ...new Set(categories)];

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            onClick={() => filterMovies(category)}
            key={index}
          >
            {category} |
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
