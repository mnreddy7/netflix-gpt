import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies: null,
        topMovieTrailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopMovieTrailerVideo : (state, action ) => {
            state.topMovieTrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTopMovieTrailerVideo} = moviesSlice.actions
export default moviesSlice.reducer;