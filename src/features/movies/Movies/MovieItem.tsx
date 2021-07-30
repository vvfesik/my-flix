import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface IMovieItemProps {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}

interface PosterProps {
  image: string;
}

const MovieContainer = styled.div`
  margin: 1rem;
  width: 16.5rem;
  height: 22.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.darkest};
  @media (max-width: 768px) {
    width: 12.5rem;
    height: 17rem;
  }
  @media (max-width: 425px) {
    width: 16.5rem;
    height: 22.5rem;
  }
`;

const InfoBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.bg};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0.5rem 0.5rem 1rem;
`;

const Year = styled.p`
  color: ${({ theme }) => theme.colors.neutral};
  margin: 0;
`;

const Poster = styled.div<PosterProps>`
  background-size: cover;
  background-position: center;
  background-image: url('${({ image }) => image}');
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  transform-origin: top;
  transition: all 0.3s ease;
  ${MovieContainer}:hover & {
    transform: translateY(-30%);
  }
`;

const MovieItem: React.FC<IMovieItemProps> = (props) => {
  const { title, year, poster, imdbID } = props;
  const history = useHistory();

  const handleClick = () => history.push(`/movie/${imdbID}`);

  return (
    <MovieContainer onClick={handleClick}>
      <InfoBlock>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </InfoBlock>
      <Poster image={poster} />
    </MovieContainer>
  );
};

export default MovieItem;
