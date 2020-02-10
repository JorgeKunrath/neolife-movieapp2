import React from 'react';
import CategoryList from './components/CategoryList';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="wrapper flex">
      <CategoryList />
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
