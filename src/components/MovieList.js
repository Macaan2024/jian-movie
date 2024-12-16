import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="movie-card"
                    onClick={() => onMovieClick(movie)} // Call the correct function
                >
                    <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="movie-title">{movie.title}</div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
