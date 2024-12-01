import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal'; // Assuming Modal is a component you have
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar'; // Importing SearchBar component
import './App.css';

// Fetch movies from the OMDB API
const getMovieRequest = async (page, setMovies, setLoading, query) => {
    setLoading(true); // Show loading while fetching
    let url = `http://www.omdbapi.com/?s=movie&page=${page}&apikey=263d22d8`;

    // If there's a query, use it to search for movies
    if (query) {
        url = `http://www.omdbapi.com/?s=${query}&type=movie&page=${page}&apikey=263d22d8`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Response === "True") {
            setMovies((prevMovies) => [...prevMovies, ...data.Search]); // Add new movies to existing ones
        } else {
            console.error("Error fetching movies:", data.Error);
            setMovies([]); // Clear movies if no results found
        }
    } catch (error) {
        console.error("Fetch error:", error);
        setMovies([]); // Clear movies in case of error
    } finally {
        setLoading(false);
    }
};

const App = () => {
    const [movies, setMovies] = useState([]); // State for movie data
    const [page, setPage] = useState(1); // Tracks the current page
    const [loading, setLoading] = useState(false); // Tracks the loading state
    const [selectedMovie, setSelectedMovie] = useState(null); // State for the movie clicked
    const [query, setQuery] = useState(''); // Search query state

    // Fetch movies when the page or query changes
    useEffect(() => {
        getMovieRequest(page, setMovies, setLoading, query);
    }, [page, query]);

    // Load more movies when the button is clicked
    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1); // Increment page number
    };

    // When a movie is clicked, open the modal with movie details
    const onMovieClick = (movie) => {
        setSelectedMovie(movie); // Set selected movie to display in the modal
    };

    // Close the modal
    const closeModal = () => {
        setSelectedMovie(null); // Clear selected movie and close modal
    };

    return (
        <div className="app">
            <Header />
            
            {/* Add SearchBar component */}
            <SearchBar setMovies={setMovies} setLoading={setLoading} setPage={setPage} setQuery={setQuery} />

            <MovieList movies={movies} onMovieClick={onMovieClick} /> {/* Movie List Display */}
            
            {/* Show Modal if a movie is selected */}
            {selectedMovie && <Modal movie={selectedMovie} closeModal={closeModal} />}
            
            <div className="load-more-container">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <button onClick={loadMoreMovies} className="load-more-button">
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;
