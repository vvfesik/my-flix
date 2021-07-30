import React from 'react';
import styled from 'styled-components';

interface IMovieInfoProps {
  director: string;
  actors: string;
  language: string;
  country: string;
}

const InfoSection = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.darkest};
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.bg};
  > p {
    margin-right: 1rem;
    display: block;
    :first-of-type {
      margin-top: 0;
    }
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const MovieInfo: React.FC<IMovieInfoProps> = (props) => {
  const { director, actors, language, country } = props;
  return (
    <InfoSection>
      {!!director && (
        <p>
          <b>Director: </b>
          {director}
        </p>
      )}
      {!!actors && (
        <p>
          <b>Actors: </b>
          {actors}
        </p>
      )}
      {!!language && (
        <p>
          <b>Language: </b>
          {language}
        </p>
      )}
      {!!country && (
        <p>
          <b>Country: </b>
          {country}
        </p>
      )}
    </InfoSection>
  );
};

export default MovieInfo;
