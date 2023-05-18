import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import './Home.css';
import MovieList from "../../Components/MovieList/MovieList";
export default function Home() {
    const [popularMovie, setPopularMovie] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=318001dc2dee85aafc4e9f0d9dfc51ba')
            .then((res) => res.json()).then((data) => setPopularMovie(data.results));
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovie.map((movie) => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage_overlay">
                                    <div className="posterImage_title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage_runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage_rating">{movie ? movie.vote_average : ""}
                                        <i class="fa fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )




}










