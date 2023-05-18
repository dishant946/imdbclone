import React from "react";
import Header from "./Components/Header/Header";
import './App.css';
 import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import MovieList from "./Components/MovieList/MovieList";
import Movie from './pages/MovieDetail/Movie.js'
function App(){
return(
  <BrowserRouter>
    <Header/>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="movie/:id" element={<Movie/>}></Route>
    <Route exact path="movies/:type" element={<MovieList/>}></Route>
    <Route exact path="/*" element={<h1>Error</h1>}></Route>
  </Routes>
  </BrowserRouter>

)
}
export default App;


