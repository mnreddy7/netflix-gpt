import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux"
import { addTopMovieTrailerVideo } from "../utils/moviesSlice";

const useTopMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      const trailers = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const trailer = trailers.length ? trailers[0] : json.results[0];
      dispatch(addTopMovieTrailerVideo(trailer));
      console.log("trailer =", trailer);
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
  
}

export default useTopMovieTrailer