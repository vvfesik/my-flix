import React from 'react';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  margin: 0 auto;
  width: calc(100% - 2rem);
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;

const Container: React.FC = ({ children }) => {
  return <ResponsiveContainer>{children}</ResponsiveContainer>;
};

export default Container;
