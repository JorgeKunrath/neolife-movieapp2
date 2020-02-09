import React from 'react';
import CategoryList from './components/CategoryList';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="wrapper flex">
      <CategoryList />
      <MovieList />
    </div>
  );
}

export default App;
