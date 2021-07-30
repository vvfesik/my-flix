import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useFetchMovieDetailsQuery } from '../apiSlice';
import Container from '../../../app/components/atoms/Container';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import MovieDetails from './MovieDetails';
import MovieInfo from './MovieInfo';

const Navigation = styled.p`
  line-height: 2;
  text-align: right;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
  a {
    color: ${({ theme }) => theme.colors.neutral};
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  margin: 1rem 0;
  > div {
    margin: 1rem;
    :first-of-type {
      margin-left: 0;
      margin-right: 0;
      flex-grow: 0;
    }
    :last-of-type {
      margin-right: 0;
      flex-grow: 1;
    }
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    > div:last-of-type {
      margin-left: 0;
    }
  }
`;

const Movie = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const { data, isLoading } = useFetchMovieDetailsQuery(imdbID);

  return (
    <Container>
      <div className='movie-details'>
        <Navigation>
          <Link to='/'>Back to Home page</Link>
        </Navigation>
        {isLoading && <p>Loading...</p>}
        {data && (
          <FlexBox>
            <div>
              <MoviePoster url={data.Poster} title={data.Title} />
              <MovieRating imdbRating={data.imdbRating} imdbID={data.imdbID} />
            </div>
            <div>
              <MovieDetails
                title={data.Title}
                year={data.Year}
                genres={data.Genre}
                plot={data.Plot}
              />
              <MovieInfo
                director={data.Director}
                actors={data.Actors}
                language={data.Language}
                country={data.Country}
              />
            </div>
          </FlexBox>
        )}
      </div>
    </Container>
  );
};

export default Movie;
