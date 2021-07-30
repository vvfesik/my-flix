import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieDetails, MovieSearchResults } from './interfaces';

const apiKey = import.meta.env.VITE_OMDB_APIKEY;
const withApiKey = (path: string) => `?apikey=${apiKey}${path}`;

export const apiSlice = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://omdbapi.com`,
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<MovieSearchResults, string>({
      query: (searchText) => withApiKey(`&s=${searchText}&type=movie`),
      transformResponse: ({ Search, totalResults }: MovieSearchResults) => {
        const ids: string[] = [];
        const cleanedResults: MovieSearchResults['Search'] = [];
        Search.map((movie) => {
          if (!ids.includes(movie.imdbID) && movie.Poster.startsWith('http')) {
            ids.push(movie.imdbID);
            cleanedResults.push(movie);
          }
        });
        return {
          totalResults,
          Search: cleanedResults,
        };
      },
      keepUnusedDataFor: 3600,
    }),
    fetchMovieDetails: builder.query<MovieDetails, string>({
      query: (id) => withApiKey(`&i=${id}&type=movie&plot=full`),
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchMovieDetailsQuery } = apiSlice;
