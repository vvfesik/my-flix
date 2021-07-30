import React from 'react';
import styled from 'styled-components';

interface IMoviePosterProps {
  url: string;
  title: string;
}

const Poster = styled.img`
  max-width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.darkest};
`;

const MoviePoster: React.FC<IMoviePosterProps> = (props) => {
  const { url, title } = props;
  return (
    <Poster src={url} alt={title} />
  );
};

export default MoviePoster;
