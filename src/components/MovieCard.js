import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500x750?text=No+Poster';

    return (
        <div className="movie-card" onClick={onClick}>
            <img src={posterUrl} alt={movie.Title} />
            <div className="movie-title">{movie.Title}</div>
        </div>
    );
};

export default MovieCard;
