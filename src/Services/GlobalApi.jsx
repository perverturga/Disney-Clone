import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3"

const api_key = "91c58c488f69624623cec0437e09c0a6"

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=91c58c488f69624623cec0437e09c0a6"

const getTrendingVideos = axios.get(movieBaseURL + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)


export default {
    getTrendingVideos,
    getMovieByGenreId
} ;