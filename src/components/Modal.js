import React from 'react';


const Modal = ({ movie, closeModal }) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{movie.Title} ({movie.Year})</h2>
                <img src={movie.Poster} alt={movie.Title} className="modal-poster" />
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Type:</strong> {movie.Type}</p>
            </div>
        </div>
    );
};

export default Modal;
