import React, { useState } from 'react';

// SearchBar component
const SearchBar = ({ setMovies, setLoading, setPage, setQuery }) => {
    const [query, setQueryLocal] = useState(''); // Local state for input

    const handleSearch = async () => {
        if (!query.trim()) return; // Prevent search if query is empty or only spaces
        setLoading(true); // Show loading while fetching
        setPage(1); // Reset to the first page of results
        setQuery(query); // Update the query in the parent component

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=YOUR_API_KEY`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results) {
                setMovies(data.results); // Replace the current movie list with the search results
            } else {
                console.error("Error fetching movies:", data.status_message);
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
                onChange={(e) => setQueryLocal(e.target.value)} // Update local query state
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
