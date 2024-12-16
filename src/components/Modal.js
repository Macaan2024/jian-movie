import React from 'react';

const Modal = ({ movie, closeModal }) => {
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : 'https://via.placeholder.com/500x750?text=No+Poster';
    const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'Unknown';

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{movie.title} ({releaseYear})</h2>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                </div>
                <div className="modal-body">
                    <img src={posterUrl} alt={movie.title} className="modal-poster" />
                    <div className="modal-details">
                        <p><strong>Release Year:</strong> {releaseYear}</p>
                        {movie.overview && <p><strong>Overview:</strong> {movie.overview}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
