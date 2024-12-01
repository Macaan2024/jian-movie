import React, { useState } from 'react';

// SearchBar component
const SearchBar = ({ setMovies, setLoading, setPage }) => {
    const [query, setQuery] = useState(''); // State to hold the search query

    const handleSearch = async () => {
        if (!query) return; // Do not search if the query is empty
        setLoading(true); // Show loading while fetching
        setPage(1); // Reset to the first page of results
        const url = `http://www.omdbapi.com/?s=${query}&page=1&apikey=263d22d8`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search); // Set the movies to search results
            } else {
                console.error("Error fetching movies:", data.Error);
                setMovies([]); // Clear movies if no results found
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setMovies([]); // Clear movies in case of error
        } finally {
            setLoading(false); // Hide loading
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query state on input change
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
