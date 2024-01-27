import React from 'react'
import { useSelector } from "react-redux"
import VideTitle from "./VideTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;
  const topMovie = movies[0];
  const { original_title, overview, id} = topMovie;
  return (
    <div>
      <VideTitle title={original_title} overview={overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer