import React from 'react';
import Card from './Card';

function CardList({ cards, handleCardClick }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          content={item.content}
          onAction={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
