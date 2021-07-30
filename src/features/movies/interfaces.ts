export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface MovieDetails extends Movie {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  imdbRating: string;
}

export interface MovieSearchResults {
  Search: Movie[];
  totalResults: string;
}
