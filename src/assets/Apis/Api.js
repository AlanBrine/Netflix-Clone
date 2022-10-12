
import { useState } from "react";
import axios from "axios"
const apiKey = '5b5c37461ed945b3fd4159ce828bb7c6'

export const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${apiKey}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${apiKey}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${apiKey}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${apiKey}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${apiKey}&with_genres=99`,
    isLarge: false,
  },
];


export function GetMovies(path) {
  const [movie, setMovie] = useState([])
 
  axios.get(`https://api.themoviedb.org/3${path}`).then(a => setMovie(a.data.results))

  return movie;
}
