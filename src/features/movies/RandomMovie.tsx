import * as React from 'react';

interface IRandomMovieProps {
}

const RandomMovie: React.FC<IRandomMovieProps> = (props) => {
  return (
    <div className="random-movie">
      <p>random movie</p>
    </div>
  );
};

export default RandomMovie;
