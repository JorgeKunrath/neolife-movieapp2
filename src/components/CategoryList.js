import React from 'react';

import CategoryItens from './CategoryItens';

export default function CategoryList() {
  return (
    <section className="category">
      <ul>
        <CategoryItens />
      </ul>
    </section>
  );
}