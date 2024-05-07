import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='3f834ff2f2f44e8fd5db768d154d56e5'

const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key);

export default {
    getTrendingVideos
}