import React, { useEffect, useState } from 'react'
import axiosInstance from "../axios"
import requests from "../requests"
import "../styles/Banner.css"
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import InfoIcon from '@material-ui/icons/Info';

const BASE_URL = "https://image.tmdb.org/t/p/original/"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMoviesData() {

            const request = await axiosInstance.get(requests.fetchTrending);
            let randomIndex = Math.floor(Math.random() * request.data.results.length-1);

            setMovie(request.data.results[randomIndex])

            return request;

        }

        fetchMoviesData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }


    return (
        <header className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >

            <div className="banner_contents">

                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                
                <div className="banner_button" style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <PlayCircleFilledWhiteIcon style={{marginRight:"5px"}} />
                    <span>Play</span>
                </div>
                
                <div className="banner_button" style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <InfoIcon style={{marginRight:"5px"}} />
                    <span>More Info</span>
                </div> 
                    {/* <a href="#" className="banner_button" ><span><PlayCircleFilledWhiteIcon /></span>Play</a> */}
                    {/* <a href="#" className="banner_button" ><span><InfoIcon /></span>More Info</a> */}
                    {/* <button className="banner_button">Play</button> */}
                    {/* <button className="banner_button">More Info</button> */}
                </div>

                <h1 className="banner_description">
                    {truncate(movie?.overview, 250)}
                </h1>

            </div>
            
            <div className="banner_fadeBottom"></div>
            
        </header>
    )
}

export default Banner
