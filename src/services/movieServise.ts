import axios, { type AxiosResponse } from "axios"
import type  { Movie } from "../types/movie"


interface MovieResponse {
    results: Movie[];
}
  
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response: AxiosResponse<MovieResponse> = await api.get<MovieResponse>('/search/movie', {
        params: {
            query,
            include_adult: false,
            language: 'en-US',
            page: 1,
        },
    }
    );

    return response.data.results;
};