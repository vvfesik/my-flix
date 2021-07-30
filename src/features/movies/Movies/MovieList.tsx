import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import { Movie } from '../interfaces';

interface IMovieListProps {
  list?: Movie[];
}

const ListContainer = styled.div`
  :first-child {
    margin-left: 0;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: start;
  }
`;

const MovieList: React.FC<IMovieListProps> = (props) => {
  const { list = [] } = props;

  return (
    <ListContainer>
      {list.map(({ imdbID, Title, Year, Poster }) => (
        <MovieItem
          key={imdbID}
          imdbID={imdbID}
          title={Title}
          year={Year}
          poster={Poster}
        />
      ))}
    </ListContainer>
  );
};

export default MovieList;
