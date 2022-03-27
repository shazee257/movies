import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
//API da43de3f
const API_URL = 'https://www.omdbapi.com/?apikey=da43de3f';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) =>
                        <MovieCard movie={movie} key={movie.imdbID} />
                    )}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>
                <p>Developed by Muhammad Shahzad <a style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }} href='mailto:shazee257@gmail.com'>@shazee257@gmail.com</a></p>
            </div>

        </div>
    )
}

export default App;