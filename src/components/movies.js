import React from "react";

const Movies = ({ movies }) => {
  return (
    <div className='section-center'>
      {movies.map((movie) => {
        const { id, title, tktprice, category, year, img, desc } = movie;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>
                  Name: {title} {year}
                </h4>
                <h4 className='catergory'>Catergory: {category}</h4>
                <h4 className='price'>Price: ₹{tktprice}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Movies;
