import React from 'react';

import MovieItens from './MovieItens';

export default function MovieList() {
  return (
    <section className="movieList">

      <MovieItens />

      {/* <!-- ele pode ter aquele "event listener lá" que vê se tá na tela ou não e isso triggar o carregamento de mais conteúdo, aí se não tiver conteúdo muda o texto --> */}
      <div className="movieList__end">carregando...</div>
    </section>
  );
}