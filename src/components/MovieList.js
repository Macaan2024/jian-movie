import React from 'react';
import Modal from './Modal';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div
                    key={movie.imdbID}
                    className="movie-card"
                    onClick={() => onMovieClick(movie)} // Trigger modal with movie data
                >
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500'}
                        alt={movie.Title}
                        className="movie-poster"
                    />
                    <h3>{movie.Title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
