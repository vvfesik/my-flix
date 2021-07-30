import React from 'react';
import MoviesSection from './MoviesSection';
import Container from '../../../app/components/atoms/Container';
import { SECTIONS } from '../../../app/constants';

const Movies = () => {
  return (
    <Container>
      <div>
        {SECTIONS.map((section: typeof SECTIONS[number]) => (
          <MoviesSection key={section} title={section} />
        ))}
      </div>
    </Container>
  );
};

export default Movies;
