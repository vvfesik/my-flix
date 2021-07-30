import React from 'react';
import styled from 'styled-components';

interface IMovieDetailsProps {
  title: string;
  year: string;
  genres: string;
  plot: string;
}

const Section = styled.section`
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.darkest};
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.bg};
  h1 {
    font-size: 2.5rem;
    font-weight: 200;
    margin: 0;
  }
`;

const Year = styled.p`
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem 0 0;
  border-radius: 0.5rem;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.text};
`;

const Plot = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
`;

const MovieDetails: React.FC<IMovieDetailsProps> = (props) => {
  const { title, year, genres, plot } = props;
  return (
    <Section>
      <h1>{title}</h1>
      <Year>{year}</Year>
      {!!genres && (
        <Tags>
          {genres.split(', ').map((genre) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </Tags>
      )}
      <Plot>{plot}</Plot>
    </Section>
  );
};

export default MovieDetails;
