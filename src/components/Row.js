import React, { useEffect, useState } from 'react'
import axiosInstance from "../axios"
import "../styles/Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const BASE_URL = "https://image.tmdb.org/t/p/original/"

function Row(props) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:0
        }
    }

    const handleClick = (movie) => {
        console.log(movie.name)
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.name || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
      }

    useEffect(() => {
        
        async function fetchMoviesData() {
            const request = await axiosInstance.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchMoviesData();
    },[props.fetchUrl])

    return (
        <div className="row">
            <h2 className="row_title">{props.title}</h2>
            
            <div className="row_posters">
                {movies.map((movie) => {
                    return <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${props.isLarge && "row_posterLarge"}`}
                        src={`${BASE_URL}${props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>

            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>

        </div>
    )
}

export default Row
