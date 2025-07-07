import React, { useState } from 'react';
import CardList from './components/CardList';

function App() {
  const [cards] = useState([
    { id: 1, title: 'Card One', content: 'This is the first card.' },
    { id: 2, title: 'Card Two', content: 'This is the second card.' },
  ]);

  function onCardClick(id) {
    alert(`Card ${id} clicked!`);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Props‑Driven Cards</h1>
      <CardList cards={cards} handleCardClick={onCardClick} />
    </div>
  );
}

export default App;
