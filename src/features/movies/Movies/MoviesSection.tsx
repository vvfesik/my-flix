import React from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';
import { useFetchMoviesQuery } from '../apiSlice';

interface IMoviesSectionProps {
  title: string;
}

const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  cursor: default;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
`;

const MoviesSection: React.FC<IMoviesSectionProps> = (props) => {
  const { title } = props;
  const { data, isLoading } = useFetchMoviesQuery(title);

  return (
    <section className='movies'>
      <SectionTitle>My {title} collection</SectionTitle>
      {isLoading && <p>Loading...</p>}
      {data && <MovieList list={data?.Search} />}
    </section>
  );
};

export default MoviesSection;
