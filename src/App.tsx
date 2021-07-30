import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useAppSelector } from './app/hooks';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './app/components/Header/Header';
import Movies from './features/movies/Movies/Movies';
import Movie from './features/movies/Movie/Movie';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 424px) {
      font-size: 14px;
    }
    @media (max-width: 374px) {
      font-size: 12px;
    }
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const App = () => {
  const theme = useAppSelector(({ theme }) => theme.config);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route exact path='/movie/:imdbID' component={Movie} />
        <Redirect to='/' />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
