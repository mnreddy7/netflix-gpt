import React from 'react'
import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
      <MovieList title = "Now Playing" movies={movies?.nowPlayingMovies}/>
      </div>
     
      <MovieList title = "Popular" movies={movies?.popularMovies}/>
      <MovieList title = "TopRated" movies={movies?.topRatedMovies}/>
      <MovieList title = "UpComing" movies={movies?.upcomingMovies}/>

    </div>)
  )
}

export default SecondaryContainer