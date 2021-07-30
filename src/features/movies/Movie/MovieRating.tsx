import React from 'react';
import styled from 'styled-components';

interface IMovieRatingProps {
  imdbRating: string;
  imdbID: string;
}

const Rating = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.5rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 1rem 0;
  a {
    color: ${({ theme }) => theme.colors.light};
  }
`;

const MovieRating: React.FC<IMovieRatingProps> = (props) => {
  const { imdbRating, imdbID } = props;
  return (
    <Rating>
      <a
        href={`https://www.imdb.com/title/${imdbID}/ratings/`}
        target='_blank'
        rel='noopener noreferrer'
      >
        imdbRating: {imdbRating}
      </a>
    </Rating>
  );
};

export default MovieRating;
